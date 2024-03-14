import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Tab } from '~/components/common/Tab';
import { DetailsSection } from '~/components/ProductDetailPage/DetailsSection';
import { HowToSection } from '~/components/ProductDetailPage/HowToSection';
import { ProductDetail } from '~/components/ProductDetailPage/ProductDetail';
import { ReviewsSection } from '~/components/ProductDetailPage/ReviewsSection';
import useProductDetail from '~/hooks/api/useProductDetail';
import { useTabTransition } from '~/hooks/useTabTransition';

export default function ProductDetailPage() {
  const { id: productId } = useParams<{ id: string }>();
  const { data } = useProductDetail({ productId: productId! });
  const TABS = [
    {
      tab: 'details',
      label: '상세 정보',
    },
    {
      tab: 'howTo',
      label: 'HOW TO',
    },
    {
      tab: 'reviews',
      label: `리뷰 (${50})`,
    },
  ] as const;
  const { currentTab, selectTab, isTransitionPending } = useTabTransition(TABS);

  const productDetail = useMemo(() => <ProductDetail productData={data} />, [data]);
  return (
    <Container>
      {productDetail}
      <Tab
        tabs={TABS}
        selectTab={selectTab}
        currentTab={currentTab}
        isPending={isTransitionPending}
      />
      {currentTab === 'details' && <DetailsSection />}
      {currentTab === 'howTo' && <HowToSection />}
      {currentTab === 'reviews' && <ReviewsSection productId={productId!} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;
