import styled from 'styled-components';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MobileFixedHolder } from '~/components/common/MobileFixedHolder';
import { NumberCounter } from '~/components/common/NumberCounter';
import { TagButtons } from '~/components/common/TagButtons';
import { Text } from '~/components/common/Text';
import { ThemeButton } from '~/components/common/ThemeButton';
import { useNumberCounter } from '~/hooks/useNumberCounter';
import { useRadioButton } from '~/hooks/useRadioButton';
import { media } from '~/styles/breakpoints';

/*FIXME - 제품 type 지정해주기 */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function ProductDetail({ productData }: { productData: any }) {
  const { count, onDecrease, onIncrease } = useNumberCounter();
  const DUMMY_SIZE = [
    { tag_id: 0, tag: '일반 size' },
    { tag_id: 1, tag: '맞춤 size' },
  ];
  const { selectedId, onChangeRadioButton } = useRadioButton(DUMMY_SIZE[0].tag_id);
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
          <Text>{`${productData.price}원`}</Text>
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
          <Text isBold>사이즈</Text>
          <TagButtonsContainer>
            <TagButtons
              tagsData={DUMMY_SIZE}
              selectedIds={[selectedId]}
              onChange={onChangeRadioButton}
            />
          </TagButtonsContainer>
        </ProductDescriptionGrid>
        <ProductPriceRow>
          <Text>총 상품 금액 (수량)</Text>
          <ProductPrice>
            <Text
              isBold
              color={'themeColor'}
            >{`${productData.price * count}`}</Text>
            <Text color={'themeColor'}>{`(${count}개)`}</Text>
          </ProductPrice>
        </ProductPriceRow>
        <MobileFixedHolder>
          <ThemeButton
            variant={'reversed'}
            style={{ width: '45%' }}
          >
            장바구니
          </ThemeButton>
          <ThemeButton>바로 구매</ThemeButton>
        </MobileFixedHolder>
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
  margin: 0 2rem;
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
  row-gap: 2.5rem;
  align-items: center;

  .position-start {
    align-self: start;
  }
`;

const TagButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const ProductPriceRow = styled.div`
  margin-top: 2rem;
  align-self: flex-end;
  display: flex;
  gap: 3rem;
  flex-grow: 1;
`;

const ProductPrice = styled.div`
  display: flex;
  gap: 0.5rem;
`;
