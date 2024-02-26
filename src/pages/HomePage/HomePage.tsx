import styled from 'styled-components';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { HomeMenu } from '~/components/HomePage/HomeMenu';
import { RowProductList } from '~/components/HomePage/RowProductList';
import { useDeviceDetect } from '~/hooks/useDeviceDetect';
import { bestDummy, newDummy } from '~/shared/dummy.js';
import c2 from '~/shared/pics/home_swiper/home2.png';
import f3 from '~/shared/pics/home_swiper/home3.png';
import e4 from '~/shared/pics/nail/E/E4.jpg';
import { deviceSizes, media } from '~/styles/breakpoints';

export default function HomePage() {
  const { isMobile } = useDeviceDetect();
  return (
    <>
      <Swiper
        className="swiper-container-hero"
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
          <ImageBox src={isMobile ? e4 : 'https://picsum.photos/500/300'} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageBox src={isMobile ? f3 : 'https://picsum.photos/500/300'} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageBox src={isMobile ? c2 : 'https://picsum.photos/500/300'} />
        </SwiperSlide>
      </Swiper>
      <Layout>
        <HomeMenu />
        <RowContainer>
          <div>
            <TitleWrap>이 달의 신상품</TitleWrap>
            <RowProductList dummy={newDummy} />
          </div>
          <div>
            <TitleWrap>주간 베스트</TitleWrap>
            <RowProductList dummy={bestDummy} />
          </div>
        </RowContainer>
      </Layout>
    </>
  );
}

const Layout = styled.div`
  max-width: ${deviceSizes.xl}px;
  margin: 0 auto;
  padding-bottom: 10rem;
`;

const ImageBox = styled.img`
  width: 100vw;
  object-fit: cover;
  object-position: center center;
`;

const RowContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const TitleWrap = styled.div`
  padding: 2rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.largemedium};
  ${media.lg`
    padding: 2rem 4rem;
    font-size: ${({ theme }) => theme.fontSize.large};
  `}
  font-weight: 700;
`;
