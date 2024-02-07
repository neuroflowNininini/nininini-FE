import styled from 'styled-components';
import ProductListCate from '../../product/ProductListCate';
import { pediDummy } from '../../../shared/dummy';
import theme from '../../../shared/theme';

export default function PediPage() {
  return (
    <>
      <TitleWrap id="hometop">PEDI</TitleWrap>
      <ProductListCate dummy={pediDummy} />
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
