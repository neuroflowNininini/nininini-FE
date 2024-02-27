import { styled } from 'styled-components';
import { Heading } from '~/components/common/Heading';
import { ProductCard } from '~/components/domain/ProductCard';
import { Categories } from '~/constants/categories';
import { bestDummy } from '~/shared/dummy.js';
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
  grid-template-columns: 1fr 1fr; /* Three columns with equal width */
  overflow-y: auto;
  margin-top: 5rem;
`;
