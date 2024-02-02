import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProdCardCate from './ProdCardCate';

// 카테고리 별 상품 정렬 (가로 2씩. 더보기로.. 추가 )

export default function ProductListCate({ dummy }) {
  return (
    <>
      <ProductListWrap>
        {dummy &&
          dummy.map((prod, i) => {
            return (
              <ProdCardCate
                cardData={prod}
                key={i}
              />
            );
          })}
      </ProductListWrap>
    </>
  );
}

const ProductListWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Three columns with equal width */
  overflow-y: auto;
  margin-bottom: 60px;
`;
