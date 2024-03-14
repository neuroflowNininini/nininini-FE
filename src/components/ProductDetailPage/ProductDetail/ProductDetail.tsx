import styled from 'styled-components';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MobileFixedHolder } from '~/components/common/MobileFixedHolder';
import { NumberCounter } from '~/components/common/NumberCounter';
import { TagButtons } from '~/components/common/TagButtons';
import { Text } from '~/components/common/Text';
import { ThemeButton } from '~/components/common/ThemeButton';
import { AI_SIZE_OPTIONS } from '~/constants/ai_size_options';
import { useNumberCounter } from '~/hooks/useNumberCounter';
import { useRadioButton } from '~/hooks/useRadioButton';
import { media } from '~/styles/breakpoints';
import { Product } from '~/types/apis/product';
import { formatNumberWithCommas } from '~/utils/formatNumber';

export default function ProductDetail({ productData }: { productData: Product }) {
  const { count, onDecrease, onIncrease } = useNumberCounter();
  const { selectedId, onChangeRadioButton } = useRadioButton(AI_SIZE_OPTIONS[0].tag_id);
  return (
    <Container>
      <ThumbnailSection>
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
        >
          {productData.thumbnails.length > 0 &&
            productData.thumbnails.map((image, index) => (
              <SwiperSlide key={index}>
                <ImageBox src={image} />
              </SwiperSlide>
            ))}
        </Swiper>
      </ThumbnailSection>
      <DetailSection>
        <ProductHeading>
          <Text
            fontSize={'large'}
            isBold
          >
            {productData.prodName}
          </Text>
          <Text>{`${formatNumberWithCommas(productData.price)}원`}</Text>
        </ProductHeading>
        <ProductDescriptionGrid>
          <Text isBold>배송</Text>
          <Text style={{ whiteSpace: 'pre-wrap' }}>
            {'기본 3,000원 (30,000원 이상 구매 시 무료)'}
          </Text>
          <Text isBold>수량</Text>
          <NumberCounter
            count={count}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
          {productData.aiSizeAvail && (
            <>
              <Text isBold>사이즈</Text>
              <TagButtonsContainer>
                <TagButtons
                  tagsData={AI_SIZE_OPTIONS}
                  selectedIds={[selectedId]}
                  onChange={onChangeRadioButton}
                />
              </TagButtonsContainer>
            </>
          )}
        </ProductDescriptionGrid>
        <ProductPriceRow>
          <Text>총 상품 금액 (수량)</Text>
          <ProductPrice>
            <Text
              isBold
              color={'themeColor'}
            >{`${formatNumberWithCommas(productData.price * count)}`}</Text>
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

const PRODUCT_DETAIL_BREAKPOINT = media.md;

const Container = styled.div`
  ${PRODUCT_DETAIL_BREAKPOINT`
    display: grid;
    grid-template-columns: 40% 60%;
    margin: 0;
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
