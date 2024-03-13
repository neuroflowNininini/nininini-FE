import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { Heading } from '~/components/common/Heading';
import { ProductCard } from '~/components/domain/ProductCard';
import { useProducts } from '~/hooks/api/useProducts';
import { media } from '~/styles/breakpoints';

export default function CategoryPage() {
  const { id: categoryId } = useParams();
  const [products] = useProducts({ size: 24, pageNum: 1, categoryId });
  return (
    <Container>
      <Heading position={'center'}>{products?.category}</Heading>
      <ProductListWrap>
        {products?.products &&
          products?.products.map((item) => {
            return (
              <ProductCard
                productData={item}
                key={item.prodId}
              />
            );
          })}
      </ProductListWrap>
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
