import styled from 'styled-components';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { bestDummy, newDummy } from '~/shared/dummy.js';
import c2 from '~/shared/pics/home_swiper/home2.png';
import f3 from '~/shared/pics/home_swiper/home3.png';
import e4 from '~/shared/pics/nail/E/E4.jpg';
import { deviceSizes } from '~/styles/breakpoints';
import HomeMenu from '~/view/components/HomeMenu.js';
import RowProductList from '~/view/product/RowProductList.js';

export default function HomePage() {
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
          <ImageBox src={e4} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageBox src={f3} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageBox src={c2} />
        </SwiperSlide>
      </Swiper>
      <Container>
        <HomeMenu />
        <Box>
          <TitleWrap>이 달의 신상품</TitleWrap>
          <RowProductList dummy={newDummy} />
          <TitleWrap>주간 베스트</TitleWrap>
          <RowProductList dummy={bestDummy} />
        </Box>
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: ${deviceSizes.md}px;
  margin: 0 auto;
`;

const ImageBox = styled.img`
  width: 100vw;
  height: 64vh;
  object-fit: cover;
  object-position: bottom;
`;
const Box = styled.div`
  height: 500px;
`;
const TitleWrap = styled.div`
  text-align: start;
  margin: 20px 0px 0px 10px;
  font-weight: bolder;
  padding-top: 20px;
`;
