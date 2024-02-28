import { styled } from 'styled-components';
import { Heading } from '~/components/common/Heading';
import { ThemeButton } from '~/components/common/ThemeButton';
import { ProductCard } from '~/components/domain/ProductCard';
import { Categories } from '~/constants/categories';
import { bestDummy } from '~/shared/dummy.js';
import { media } from '~/styles/breakpoints';
import { Category } from '~/types/category';

interface CategoryPageProps {
  category: Category;
}
export default function CategoryPage({ category }: CategoryPageProps) {
  return (
    <Container>
      <Heading position={'center'}>{Categories[category]['label']}</Heading>
      <ProductListWrap>
        {bestDummy &&
          bestDummy.map((prod, index) => {
            return (
              <ProductCard
                cardData={prod}
                key={index + prod.id}
              />
            );
          })}
      </ProductListWrap>
      <ThemeButton style={{ position: 'fixed', bottom: 0, left: 0 }}>dk</ThemeButton>
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
