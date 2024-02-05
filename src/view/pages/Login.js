import { GoLogIn } from '../../shared/State';
import styled from 'styled-components';
import { users } from '../../shared/user';
import { useState } from 'react';
import theme from '../../shared/theme';
import kakaoIcon from '../../shared/login_icons/kakao.png';
import appleIcon from '../../shared/login_icons/icon_apple.png';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleIdChange = (e) => {
    const text = e.target.value;
    setId(text);
  };
  const handlePwChange = (e) => {
    const text = e.target.value;
    setPw(text);
  };
  const handleLogin = () => {
    // 회원 여부 체크 추가해야함. + 모달
    GoLogIn();
    navigate('/');
  };
  const handleSignUp = () => {
    // 회원 여부 체크 추가해야함. + 모달
    navigate('/signup');
  };

  return (
    <>
      <Space />
      <TopWrap id="hometop">
        <Desc>로그인</Desc>
        <CenterWrap>
          <Hang>
            <Input
              value={id} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
              placeholder="  아이디를 입력해주세요"
              onChange={handleIdChange} // 입력 필드 값이 변경될 때 핸들러 호출
            />
          </Hang>
        </CenterWrap>
        <CenterWrap>
          <Hang>
            <Input
              value={pw} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
              type="password"
              placeholder="  비밀번호를 입력해주세요"
              onChange={handlePwChange} // 입력 필드 값이 변경될 때 핸들러 호출
            />
          </Hang>
        </CenterWrap>
        <CenterWrap>
          <LoginButton onClick={handleLogin}>로그인</LoginButton>
        </CenterWrap>
        <CenterWrap>
          <KakaoButton>
            <Icon src={kakaoIcon} />
            <div style={{ flex: '1' }}>카카오로 3초만에 시작하기</div>
          </KakaoButton>
        </CenterWrap>
        <CenterWrap>
          <AppleButton>
            <Icon src={appleIcon} />
            <div style={{ flex: '1' }}>Apple로 로그인</div>
          </AppleButton>
        </CenterWrap>
        <CenterWrap>
          <SignUpButton onClick={handleSignUp}>회원가입 후 나만의 네일 즐기기</SignUpButton>
        </CenterWrap>
        <BottomWrap>
          <BottomText>아이디 찾기</BottomText>
          <BottomText>비밀번호 찾기</BottomText>
        </BottomWrap>
      </TopWrap>
    </>
  );
}
const BottomText = styled.div`
  justify-content: center;
  padding: 10px;
`;
const BottomWrap = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;
const CenterWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px;
`;
const Icon = styled.img`
  width: 23px;
  height: 23px;
`;
const TopWrap = styled.div`
  position: relative;
  bottom: 49px;
  padding-top: 60px;
  padding-bottom: 80px;
`;
const Space = styled.div`
  height: 58px;
`;
const Desc = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`;
const Hang = styled.div`
  padding: 5px 0px;
  align-items: center;
`;

const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #e2e2e2;
  border-radius: 4px;
  background-color: black;
  color: white;
  height: 50px;
  width: 85vw;
  font-weight: 700;
  padding-left: 10px;
`;

const SignUpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #757575;
  background-color: pink;
  border-radius: 4px;
  height: 50px;
  width: 85vw;
  font-weight: 700;
  padding-left: 10px;
`;

const KakaoButton = styled.div`
  display: flex;
  font-weight: 700;
  align-items: center;
  border-radius: 4px;
  border: solid 1px #fae300;
  background-color: #fae300;
  width: 85vw;
  height: 50px;
  padding-left: 10px;
`;
const AppleButton = styled.div`
  border: solid 1px #e2e2e2;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: 85vw;
  font-weight: 700;
  height: 50px;
`;

const Input = styled.input`
  height: 43px;
  width: 85vw;
  padding: 0px 10px;
  border: solid 1px rgb(218, 218, 218);
`;
