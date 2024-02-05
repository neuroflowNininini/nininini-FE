import styled from 'styled-components';
import theme from '../../shared/theme';

export default function TotalPrice({ price, quantity }) {
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const total = formatNumberWithCommas(12900 * quantity);
  return (
    <>
      <TotalWrap>
        <TitleWrap>총상품금액(수량)</TitleWrap>
        <CostWrap>
          <Cost>{total}</Cost>
          <Cost1>({quantity}개)</Cost1>
        </CostWrap>
      </TotalWrap>
    </>
  );
}
const TotalWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  margin: 20px 0px;
  align-items: center;
`;
const TitleWrap = styled.div`
  display: flex;
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  font-weight: 500;
`;
const CostWrap = styled.div`
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  display: flex;
  align-items: center;
`;

const Cost = styled.div`
  display: flex;
  margin-left: 20px;
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.largemedium};
  font-weight: 700;
`;
const Cost1 = styled.div`
  display: flex;
  margin-left: 5px;
  font-size: 16px;
`;
