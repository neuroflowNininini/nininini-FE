import styled from 'styled-components';
import ProductListCate from '../../product/ProductListCate';
import { nailDummy } from '../../../shared/dummy';
import theme from '../../../shared/theme';
export default function NailPage() {
  return (
    <>
      <Space />
      <TitleWrap id="hometop">NAIL</TitleWrap>
      <ProductListCate dummy={nailDummy} />
    </>
  );
}
const TitleWrap = styled.div`
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.largemedium};
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
