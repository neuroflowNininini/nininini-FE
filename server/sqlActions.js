
require('dotenv').config();

const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY
const pool = require("./pool");


// token 유효성 검사
const verify = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_KEY);
    return {
      ok: true,
      user_id: decoded.user_id
    };
  } catch (e) {
    return {
      ok: false,
      message: e.message
    };
  }
}

// refresh token 유효성 검사
const refreshVerify = async (token) => {
  try {
    // db에서 rt 가져오기
    const results = await pool.execute("SELECT refresh_token from rtoken where refresh_token = ?",
      [token]);
    console.log("refreshToken", results[0])
    if (results[0].length === 0) {
      return false;
    }
    if (token === results[0][0].refresh_token) {
      const authResult = verify(token);
      if (authResult) {
        return true;
      }
    }
    return false;
  } catch (e) {
    console.log("refreshverify error", e);
    return false;
  }
}

// access token 검사용
const verifyToken = async (req, res, next) => {
  if (req.headers["authorization"]) {
    const token = req.headers["authorization"].split(" ")[1];
    const authResult = verify(token);
    if (!authResult.ok) {
      res.status(401).json({
        status: "error",
        exception: {
          errorCode: "INVALID_ACCESS_TOKEN",
          errorMessage: "만료된 토큰입니다."
        }
      })
      return false;
    }
    console.log("authResult", authResult);
    return {
      ok: true,
      user_id: authResult.user_id
    };
  }
}
// 재발급요청... 1) a,r 둘다 만료 2) a
const verifyRefresh = async (req, res, next) => {
  if (req.headers["authorization"] && req.headers["refresh"]) {
    const token = req.headers["authorization"].split(" ")[1];
    const refreshToken = req.headers["refresh"];

    // access token 검증 -> expired 여야함.
    const authResult = jwt.verify(token, JWT_KEY, (e, user_id) => {

    })
  }
}

module.exports = { verifyToken, refreshVerify }