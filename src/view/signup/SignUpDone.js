import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import theme from '../../shared/theme';
import done from '../../shared/pics/welcome.png';
export default function SignUpDone() {
  const navigate = useNavigate();

  const handleDone = () => {
    navigate('/');
  };
  return (
    <Container>
      <TopWrap id="hometop">
        <DescWrap>
          <Desc>회원가입이 완료되었습니다.</Desc>
          <Desc>다양한 네일 제품을 구경해보세요!</Desc>
        </DescWrap>
        <Image src={done} />
      </TopWrap>
      <Button2 onClick={handleDone}>서비스 시작하기</Button2>
    </Container>
  );
}
const Image = styled.img`
  width: 80vw;
  height: 30vh;
  object-fit: cover;
  object-position: bottom;
`;
const TopWrap = styled.div`
  position: relative;
  bottom: 49px;
  padding: 60px 20px 0px 20px;
`;

const Container = styled.div`
  padding-bottom: 80px;
`;
const Desc = styled.div`
  text-align: left;
`;
const DescWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: left;
`;
const Button2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 40px);
  height: 50px;
  background-color: black;
  color: white;
  font-weight: 700;
  margin: auto;
`;
