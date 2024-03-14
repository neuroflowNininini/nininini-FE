import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { Heading } from '~/components/common/Heading';
import { Pagination } from '~/components/common/Pagination';
import { ProductCard } from '~/components/domain/ProductCard';
import { useProducts } from '~/hooks/api/useProducts';
import { media } from '~/styles/breakpoints';

export default function CategoryPage() {
  const { id: categoryId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useProducts({ size: 24, pageNum: currentPage, categoryId });
  return (
    <Container>
      <Heading position={'center'}>{data.category}</Heading>
      <ProductListWrap>
        {data.products &&
          data.products.map((item) => {
            return (
              <ProductCard
                productData={item}
                key={item.prodId}
              />
            );
          })}
      </ProductListWrap>
      <Pagination
        maxPage={data.maxPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 5rem;
`;

const ProductListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(1rem, auto));
  column-gap: 2rem;
  ${media.md`
    grid-template-columns: repeat(3, minmax(1rem, auto));
  `}
  ${media.lg`
    grid-template-columns: repeat(4, minmax(1rem, auto));
    column-gap: 3rem;
  `}
  row-gap: 3rem;
  overflow-y: auto;
  margin-top: 5rem;
`;
