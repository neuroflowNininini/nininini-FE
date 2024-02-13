const express = require('express');
const session = require('express-session')

const jwt = require('jsonwebtoken');

// const bodyParser = require('body-parser');
// const FileStore = require('session-file-store')(session)

const pool = require("./pool");

const sqlActions = require("./sqlActions");
const moment = require('moment');
const { access } = require('fs');

const app = express()
const port = 8080;

let atPeriod = '10m'; // '7d';
let rtPeriod = '1h'; // '14d';

require('dotenv').config();

const JWT_KEY = process.env.JWT_KEY;
// console.log("Secret Key :", JWT_KEY);

const makeAToken = (user_id) => {
  const token = jwt.sign({ user_id: user_id }, JWT_KEY, { expiresIn: atPeriod })
  return token;
}
const makeRToken = () => {
  //    Refresh Token은 payload 없이 발급
  const refreshToken = jwt.sign({}, JWT_KEY, {
    algorithm: "HS256",
    expiresIn: rtPeriod
  });
  // 현재 시간
  const now = moment();
  // 1분 후의 시간
  const expirationTime = now.add(1, 'hours'); //now.add(7, 'days');
  // MySQL에 저장할 형식으로 변환
  const mysqlExpirationDate = expirationTime.format('YYYY-MM-DD HH:mm:ss');
  return { mysqlExpirationDate, refreshToken };
}

// MySQL 연결 상태 확인
pool.getConnection()
  .then(connection => {
    console.log('MySQL 데이터베이스와 연결되었습니다.');
    connection.release(); // 연결 해제
  })
  .catch(error => {
    console.error('MySQL 연결 오류:', error);
  });

// Body 파싱을 위한 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 유저 기본정보 (로그인여부, 장바구니 개수)
app.get('/api/member/user', async (req, res) => {
  try {
    const results = await sqlActions.verifyToken(req, res);
    // console.log("results:", results)
    if (results) { // access token 이 만료안됐다면
      //  access token 갱신
      // const cartCnt = await pool.execute("SELECT ")
      return res.status(200).json({
        user_id: results.user_id,
        cart_count: 0,
      })
    }
  } catch (e) {
    return res.status(500).json({ e, message: "내부 서버 에러입니다." })
  }
});

// 아이디 중복확인
app.post('/api/member/idCheck', async (req, res) => {
  try {
    const { user_id } = req.body;
    // console.log("user_id: ", user_id);
    const results = await pool.execute("SELECT * FROM member where user_id = ?", [user_id]);

    if (results.length > 0) {
      res.status(409).json({
        exception: {
          errorCode: "ID_ALREADY_EXIST",
          errorMessage: "이미 존재하는 아이디입니다."
        }
      });
    } else {
      res.status(200).json({
        message: "사용 가능한 아이디입니다."
      }
      )
    }
  } catch (e) {
    console.error("아이디 중복확인 실패: ", e);
    res.status(500).json({
      exception: {
        errorCode: "",
        errorMessage: '아이디 중복확인에 실패했습니다.'
      }
    });
  }
})
// 핸드폰 인증 => 받고나서 중복 체크해야됨.

// 회원가입
app.post('/api/member/signup', async (req, res) => {
  try {
    const { user_id, user_pw, name, phone_number, email, birth_sex, tags, ai_measure } = req.body;
    await pool.query('INSERT INTO member (user_id, user_pw, name, phone_number, email, birth_sex, ai_measure, admin) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [user_id, user_pw, name, phone_number, email, birth_sex, ai_measure, "N"]); // admin = "N"
    const values = tags.map(tag => [user_id, tag]);
    await pool.query('INSERT INTO tags (user_id, tag) VALUES ?', [values]);
    // console.log("전체 태그 INSERT 완료");
    // console.log('회원가입 성공');
    const accessToken = makeAToken(user_id);
    const { refreshToken, mysqlExpirationDate } = makeRToken();
    // console.log(accessToken, refreshToken, mysqlExpirationDate)
    // refresh token 업데이트.
    await pool.query("INSERT INTO rtoken (refresh_token, expiration_date) VALUES (?,?)",
      [refreshToken, mysqlExpirationDate]);
    res.status(201).json({
      message: "회원가입 성공. Tokens create",
      accessToken: accessToken,
      refreshToken: refreshToken
    })
  } catch (error) {
    console.error('회원가입 실패:', error);
    res.status(500).send('회원가입에 실패했습니다.');
  }
});

// 로그인 라우트
app.post('/api/member/login', async (req, res) => {
  const { user_id, user_pw } = req.body;
  try {
    const results = await pool.execute(`SELECT * FROM member where user_id = "${user_id}";`);
    console.log(results[0])
    // 해당 유저 정보가 없으면 인증 실패
    if (results[0].length === 0) {
      return res.status(401).json({
        status: "error",
        exception: {
          errorCode: "WRONG_ID",
          errorMessage: '해당 아이디를 가진 회원이 없습니다.'
        }
      });
    }
    if (results[0][0].user_pw !== user_pw) {
      return res.status(401).json({
        status: "error",
        exception: {
          errorCode: "WRONG_PW",
          errorMessage: "비밀번호가 틀렸습니다."
        }
      });
    }
    else {
      //  로그인 성공 : 유저 정보가 일치하면 JWT 생성
      const accessToken = makeAToken(user_id)
      const { refreshToken, mysqlExpirationDate } = makeRToken();
      await pool.query("INSERT INTO rtoken (refresh_token, expiration_date) VALUES (?,?)",
        [refreshToken, mysqlExpirationDate]);
      // 토큰을 클라이언트에게 전송
      return res.status(201).json({ message: "로그인 성공", accessToken, refreshToken });
    }
  } catch (error) {
    console.error('로그인 에러:', error);
    return res.status(500).json(
      { message: '내부 서버 오류' });
  }
});

// 로그아웃

app.post('/api/member/logout', async (req, res) => {
  const { refresh } = req.body;
  if (refresh == null) return res.sendStatus(401).json({
    message: "refresh value 가 없습니다."
  });
  try {
    const results = await pool.execute(`delete from rtoken where refresh_token = "${refresh}"`);
    res.status(200).json({
      message: "로그아웃 성공"
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json(
      { message: '내부 서버 오류' }
    )
  }
}
);
// ai 측정
// app.post("/api/ai_measure", (req, res) => {
//   const flaskUrl = "http://180.210.83.227:8888/nail";
// });

// Access Token 갱신 라우트
app.post('/api/member/reissue', async (req, res) => {

  const { user_id, refresh } = req.body;
  if (refresh == null) return res.sendStatus(401).json({
    message: "refresh value 가 없습니다."
  });

  const authResult = await sqlActions.refreshVerify(refresh);
  if (authResult) {
    const accessToken = makeAToken(user_id)
    return res.status(200).json({ accessToken: accessToken });
  } else {
    return res.status(403).json({
      message: "로그인 바랍니다."
    })
  }
});

// 서버 시작
const server = app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중`);
});

// 서버 종료 시 MySQL 연결 종료
server.on('close', () => {
  console.log('서버가 종료되었습니다.');
  // MySQL 연결 종료
  pool.end((err) => {
    if (err) {
      console.error('MySQL 연결 종료 중 오류 발생: ' + err.stack);
      return;
    }
    console.log('MySQL 연결이 종료되었습니다.');
  });
});