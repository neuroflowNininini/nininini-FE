import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Tab } from '~/components/common/Tab';
import { DetailsSection } from '~/components/ProductDetailPage/DetailsSection';
import { HowToSection } from '~/components/ProductDetailPage/HowToSection';
import { ProductDetail } from '~/components/ProductDetailPage/ProductDetail';
import { ReviewsSection } from '~/components/ProductDetailPage/ReviewsSection';
import { useTabTransition } from '~/hooks/useTabTransition';
import { totalDummy } from '~/shared/dummy.js';

export default function ProductDetailPage() {
  const { id } = useParams();
  /*FIXME - id로 개별 api 요청해서 정보 받아오기 */
  const product = totalDummy.find((item) => item.id == id)!;
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

  const productDetail = useMemo(() => <ProductDetail productData={product} />, [product]);
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
      {currentTab === 'reviews' && <ReviewsSection />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;
