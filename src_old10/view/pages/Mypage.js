import styled from 'styled-components';
import SwiperAd from '../components/SwiperAd';
import theme from '../../shared/theme';
import { IoIosArrowForward } from "react-icons/io"
export default function Mypage() {

  const handleProfile = () => {
    // 어쩌구 저쩌구 
  }

  return (
    <>
      <SwiperAd />
      <Space />
      <TitleWrap id="hometop">마이페이지</TitleWrap>
      <Top>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Desc>나의 주문처리 현황</Desc><Mini>전체보기</Mini>
        </div>
        <BoxWrap>
          <Box><Num>2</Num>결제완료</Box>
          <Box><Num>0</Num>배송준비중</Box>
          <Box><Num>2</Num>배송중</Box>
          <Box><Num>3</Num>배송완료</Box>
        </BoxWrap>
      </Top>
      <Container>
        <HangWrap>
          <Hang onClick={handleProfile}>프로필 관리 <IoIosArrowForward size="26" /></Hang>
          <Bar />
          <Hang>배송지 관리 <IoIosArrowForward size="26" /></Hang>
          <Bar />
          <Hang>내 상품리뷰 <IoIosArrowForward size="26" /></Hang>
          <Bar />
          <Hang>문의하기 <IoIosArrowForward size="26" /></Hang>
          <Bar />
          <Hang>친구초대 <IoIosArrowForward size="26" /></Hang>
          <Bar />
          <Hang>설정 <IoIosArrowForward size="26" /></Hang>
          <Bar />
        </HangWrap>
      </Container>
    </>

  )
}
const Mini = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
padding-right: 15px;
`;
const Desc = styled.div`
display:flex;
padding-left: 15px;
`;

const Num = styled.div`
font-size : 30px;
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
font-weight:500;
`;
const Container = styled.div`
padding: 10px;
`;
const Top = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.medium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
font-weight:500;
padding: 30px 0px 10px 0px;
background-color: lightgray;
height: 18vh;
`;
const TitleWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.large};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display:flex;
height : 40px;
justify-content:center;
align-items: center;
font-weight: 600;
padding : 20px 0px;
`;
const Bar = styled.div`
background-color: #e2e2e2;
display:flex;
width: calc(100vw - 20px);
height:1px;
`;

const Space = styled.div`
  height: 42px;
`;
const BoxWrap = styled.div`
display: flex;
justify-content:center;
gap:5px;
padding: 20px 0px;
`;
const Box = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.smallmedium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
border: solid 1px;
width: 22vw;
height: 10vh;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:center;
background-color: white;
`;
const HangWrap = styled.div`
display:flex;
flex-direction:column;
gap:10px;
margin-top:30px;
`;
const Hang = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.medium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
padding: 5px 10px;
display: flex;
justify-content: space-between;

`