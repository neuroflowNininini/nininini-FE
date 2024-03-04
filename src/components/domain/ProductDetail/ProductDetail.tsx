import styled from 'styled-components';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NumberCounter } from '~/components/common/NumberCounter';
import { Text } from '~/components/common/Text';
import { useNumberCounter } from '~/hooks/useNumberCounter';
import { media } from '~/styles/breakpoints';

/*FIXME - 제품 type 지정해주기 */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function ProductDetail({ productData }: { productData: any }) {
  const { count, onDecrease, onIncrease } = useNumberCounter();
  return (
    <Container>
      <ThumbnailSection>
        <Swiper
          id="hometop"
          pagination={true}
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          rewind={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <ImageBox src={productData.pics[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageBox src={productData.pics[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageBox src={productData.pics[2]} />
          </SwiperSlide>
        </Swiper>
      </ThumbnailSection>
      <DetailSection>
        <ProductHeading>
          <Text
            fontSize={'large'}
            isBold
          >
            {productData.name}
          </Text>
          <Text>{productData.cost}</Text>
        </ProductHeading>
        <ProductDescriptionGrid>
          <Text
            className="position-start"
            isBold
          >
            배송
          </Text>
          <Text style={{ whiteSpace: 'pre-wrap' }}>
            {'기본 2,500원 (50,000원 이상 구매 시 무료)\n제주 및 특수 도서 산간 지역 3,000원 추가'}
          </Text>
          <Text isBold>수량</Text>
          <NumberCounter
            count={count}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
        </ProductDescriptionGrid>
      </DetailSection>
    </Container>
  );
}

const PRODUCT_DETAIL_BREAKPOINT = media.sm;

const Container = styled.div`
  ${PRODUCT_DETAIL_BREAKPOINT`
    display: grid;
    grid-template-columns: 40% 60%;
    margin: 0;
  `}
  ${PRODUCT_DETAIL_BREAKPOINT`
    margin-top: -3rem;
  `}
`;
const ThumbnailSection = styled.section`
  margin: 0 -1.5rem;
  margin-top: -5rem;
  margin-bottom: 2rem;
  ${PRODUCT_DETAIL_BREAKPOINT`
    margin: 0;
  `}
`;
const ImageBox = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1; /*NOTE - 이미지 자체가 1:1로 제작되면 지우기 (의도치 않은 잘림 현상 방지 위해) */
`;

const DetailSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-left: 2rem;
  ${PRODUCT_DETAIL_BREAKPOINT`
    margin-left: 4rem;
  `}
`;

const ProductHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProductDescriptionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  row-gap: 2rem;
  align-items: center;

  .position-start {
    align-self: start;
  }
`;
