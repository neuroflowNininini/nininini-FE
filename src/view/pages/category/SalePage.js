import styled from 'styled-components';
import ProductListCate from '../../product/ProductListCate';
import { newDummy } from '../../../shared/dummy';
import theme from '../../../shared/theme';

export default function SalePage() {
  return (
    <>
      <Space />
      <TitleWrap id="hometop">SALE</TitleWrap>
      <ProductListCate dummy={newDummy} />
    </>
  );
}
const TitleWrap = styled.div`
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
