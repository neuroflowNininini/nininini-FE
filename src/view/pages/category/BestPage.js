import styled from 'styled-components';
import ProductListCate from '../../product/ProductListCate';
import { bestDummy } from '../../../shared/dummy';
import theme from '../../../shared/theme';
export default function BestPage() {
  return (
    <>
      <Space />
      <TitleWrap id="hometop">BEST</TitleWrap>
      <ProductListCate dummy={bestDummy} />
    </>
  );
}
const TitleWrap = styled.div`
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.large};
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 20px 0px;
`;

const Space = styled.div`
  height: 42px;
`;
