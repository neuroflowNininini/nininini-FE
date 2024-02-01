import styled from "styled-components";
import theme from "../../shared/theme";
export default function OrderSize() {
  return (
    <>
      <BlockWrap>
        <Block1>내 사이즈</Block1>
        <Block2>기본 사이즈</Block2>
      </BlockWrap>
      <ContWrap>
        <Cont>
          - 손톱크기(left) : 폭 3.2cm / 높이 3.8cm
        </Cont>
        <Cont>
          - 손톱크기(right) : 폭 3.0cm / 높이 3.7cm
        </Cont>
        <Cont>
          - 타입 : 라운드
        </Cont>
      </ContWrap>
    </>


  )
}

const BlockWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display:flex;
`;
const Block1 = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display: flex;
justify-content:center;
align-items:center;
background-color: black;
width : 35%;
padding: 10px 0px;
height: 30px;
color:white;
`;

const Block2 = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display: flex;
justify-content:center;
align-items:center;
border: solid 1px;
width : 35%;
padding: 10px 0px;
`;
const ContWrap = styled.div`
margin-top : 6px;
padding: 6px 0px 10px 0px;
`;

const Cont = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.smallmedium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
margin-top : 8px;
display: flex;
`;