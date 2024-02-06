import styled from 'styled-components';
import ProductListCate from '../../product/ProductListCate';
import { etcDummy } from '../../../shared/dummy';
import theme from '../../../shared/theme';
export default function EtcPage() {
  return (
    <>
      <TitleWrap id="hometop">ETC</TitleWrap>
      <ProductListCate dummy={etcDummy} />
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
