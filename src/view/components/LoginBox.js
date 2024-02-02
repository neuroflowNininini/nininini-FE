import styled from 'styled-components';
import theme from '../../shared/theme';
import { useNavigate } from 'react-router-dom';

export default function LoginBox({ closeModal }) {
  const navigate = useNavigate();
  function handleLogIn() {
    closeModal();
    navigate('/login');
  }
  const handleSignUp = () => {
    // 회원 여부 체크 추가해야함. + 모달
    closeModal();
    navigate('/signup');
  };
  return (
    <TopWrap>
      <Desc>로그인하고 나만의 네일을 만나보세요!</Desc>
      <ButtonWrap>
        <Button onClick={handleLogIn}>로그인</Button>
        <Button onClick={handleSignUp}>회원가입</Button>
      </ButtonWrap>
    </TopWrap>
  );
}

const TopWrap = styled.div`
  width: 100%;
  margin-left: 8px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  padding: 20px 1px;
`;
const ButtonWrap = styled.div`
  width: 100%;
  display: grid;
  gap: 4px;
  grid-template-columns: 1fr 1fr;
`;
const Button = styled.div`
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.smallmedium};
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  display: flex;
  justify-content: center;
  font-weight: 600;
  align-items: center;
  height: 40px;
  background-color: black;
  color: white;
  border-radius: 5px;
`;
