import { styled } from 'styled-components';
import { Heading } from '~/components/common/Heading';
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
    <>
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
    </>
  );
}

const ProductListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(1rem, auto));
  padding: 0 1.5rem;
  column-gap: 2rem;
  ${media.md`
    grid-template-columns: repeat(3, minmax(1rem, auto));
    padding: 0 3rem;
  `}
  ${media.lg`
    grid-template-columns: repeat(4, minmax(1rem, auto));
    padding: 0 2rem;
    column-gap: 3rem;
  `}
  row-gap: 3rem;
  overflow-y: auto;
  margin-top: 5rem;
`;
