import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Divider from '~/components/common/Divider';
import { Heading } from '~/components/common/Heading';
import { Input } from '~/components/common/Input';
import appleIcon from '~/shared/login_icons/icon_apple.png';
import kakaoIcon from '~/shared/login_icons/kakao.png';
import naverIcon from '~/shared/login_icons/naver.svg';
import { GoLogIn } from '~/shared/State.js';
import theme from '~/styles/theme';

export default function LoginPage() {
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
    <Container>
      <Heading>로그인</Heading>
      <Input
        variant={'rounded'}
        padding="1.5rem"
        placeholder="아이디를 입력해주세요"
      />
      <Input
        variant={'rounded'}
        padding="1.5rem"
        placeholder="비밀번호를 입력해주세요"
      />
      <LoginButton
        onClick={handleLogin}
        isLightFont
      >
        로그인
      </LoginButton>
      <TextButtonsWrap>
        <TextButton>아이디 찾기</TextButton>
        <Divider
          direction={'vertical'}
          length="1.3rem"
        />
        <TextButton>비밀번호 찾기</TextButton>
      </TextButtonsWrap>
      <Divider color={theme.colors.gray[200]} />
      <KakaoButton>
        <Icon src={kakaoIcon} />
        <span>카카오로 3초만에 시작하기</span>
      </KakaoButton>
      <AppleButton>
        <Icon src={appleIcon} />
        <span>Apple로 로그인</span>
      </AppleButton>
      <NaverButton>
        <Icon src={naverIcon} />
        <span>네이버 로그인</span>
      </NaverButton>
      <SignUpButton onClick={handleSignUp}>회원가입 후 나만의 네일 즐기기</SignUpButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

const TextButtonsWrap = styled.div`
  display: flex;
  align-items: center;
`;

const TextButton = styled.button`
  justify-content: center;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.gray['500']};
`;

const Icon = styled.img`
  width: 2.3rem;
  height: 2.3rem;
`;

const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.colors.gray['900']};
  color: ${({ theme }) => theme.colors.white['100']};
  border-radius: 4px;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.smallmedium};
  span {
    margin-left: 2rem;
  }
`;

const KakaoButton = styled(LoginButton)`
  background-color: #fae300;
  color: ${({ theme }) => theme.colors.gray['700']};
`;

const AppleButton = styled(LoginButton)`
  border: 1px solid #e2e2e2;
  background-color: ${({ theme }) => theme.colors.white['100']};
  color: ${({ theme }) => theme.colors.gray['700']};
`;

const NaverButton = styled(LoginButton)`
  background-color: #03c75a;
`;

const SignUpButton = styled(LoginButton)`
  background-color: ${({ theme }) => theme.colors.theme};
`;
