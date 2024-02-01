import styled from 'styled-components';
import SwiperAd from '../components/SwiperAd';
import theme from '../../shared/theme';

export default function Notice() {

  return (
    <Container>
      <SwiperAd />
      <Space />
      <TopWrap id="hometop" >
        <Title>알림</Title>
        <ContWrap>
          <Bar />
          <Cont>
            주문번호 20233154390 입금이 확인되었습니다.
          </Cont>
          <Mini>2023-11-20</Mini>
          <Bar />
          <Cont>
            주문번호 20233154320 환불이 확정되었습니다.
          </Cont>
          <Mini>2023-11-20</Mini>
          <Bar />
          <Cont>
            주문번호 20233154323 배송이 시작되었습니다.
          </Cont>
          <Mini>2023-11-20</Mini>
          <Bar />
        </ContWrap>
      </TopWrap>
    </Container>
  )
}
const Mini = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
padding-bottom:10px;
display: flex;
padding-left: 10px;
`;
const Title = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.large};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
font-weight: 500;
padding-bottom:10px;
`;
const ContWrap = styled.div`
`;
const Bar = styled.div`
display:flex;
background-color : #909090;
height: 1px;
`;
const Cont = styled.div`
padding: 10px;
height : 30px;
`;

const Space = styled.div`
height:58px;
`;
const TopWrap = styled.div`
position:relative;
bottom:49px;
padding : 60px 20px 0px 20px;
`;
const Container = styled.div`
padding-bottom : 80px;
`;