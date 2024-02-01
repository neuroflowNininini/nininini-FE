import styled from "styled-components";
import { useState } from "react";
import theme from "../../../shared/theme";
export default function BuyType() {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <BlockWrap>
        <Block2>신용/체크카드</Block2>
        <Block2>실시간 계좌이체</Block2>
        <Block1>무통장입금</Block1>
        <Block2>카카오페이</Block2>
        <Block2>네이버페이</Block2>
      </BlockWrap>
      <ContWrap>
        <Cont>
          <label>
            <input
              type="radio"
              checked={selectedOption === 'option1'}
              onChange={handleOptionChange}
            />
            미신청
          </label>
          <label>
            <input
              type="radio"
              disabled
            />
            현금영수증
          </label>
          <label>
            <input
              type="radio"
              disabled
            />
            세금계산서
          </label>
        </Cont>
      </ContWrap>
    </>


  )
}
const BlockWrap = styled.div`
display:grid;
grid-template-columns: repeat(3, 1fr); /* 한 행에 3개의 열을 생성합니다. */
`;
const Block1 = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
border: solid 1px;
padding: 10px 0px;
background-color:black;
color:white;
display: flex;
justify-content:center;
align-items:center;
`;
const Block2 = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
border: solid 1px;
padding: 10px 0px;
height: 28px;
display: flex;
justify-content:center;
align-items:center;
`;
const ContWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
margin-top : 6px;
padding: 6px 0px 10px 0px;
`;
const Cont = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
margin-top : 4px;
display: flex;
gap: 10px;
`;