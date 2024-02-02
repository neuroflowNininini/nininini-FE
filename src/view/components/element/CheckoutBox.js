import styled from 'styled-components';
import theme from '../../../shared/theme';

export default function CheckoutBox({ cost, discount }) {
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <ContWrap>
      <Hang>
        <Tag>상품 금액</Tag>
        <Cost>{formatNumberWithCommas(cost)}원</Cost>
      </Hang>
      <Hang>
        <Tag>할인 금액</Tag>
        <Cost1>-{formatNumberWithCommas(discount)}원</Cost1>
      </Hang>
      <Hang>
        <Tag>배송비</Tag>
        <Cost>무료배송</Cost>
      </Hang>
      <Hang>
        <Tag>최종 결제금액</Tag>
        <Cost2>{formatNumberWithCommas(cost - discount)}원</Cost2>
      </Hang>
    </ContWrap>
  );
}
const ContWrap = styled.div`
  margin-top: 20px;
`;
const Hang = styled.div`
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.smallmedium};
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  display: flex;
  justify-content: space-between;
  padding: 4px 0px;
`;
const Tag = styled.div`
  display: flex;
  font-weight: 500;
`;
const Cost = styled.div`
  display: flex;
  padding: 5px 0px;
  font-weight: 500;
`;
const Cost1 = styled.div`
  display: flex;
  color: skyblue;
  padding: 5px 0px;
  font-weight: 500;
`;
const Cost2 = styled.div`
  display: flex;
  color: red;
  padding: 5px 0px;
  font-weight: 500;
`;
