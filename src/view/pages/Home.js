import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import e4 from '../../shared/pics/nail/E/E4.jpg';
import f3 from '../../shared/pics/home_swiper/home3.png';
import c2 from '../../shared/pics/home_swiper/home2.png';
import { Pagination, Autoplay } from 'swiper';
import styled from 'styled-components';
import { bestDummy, newDummy } from '../../shared/dummy';
import RowProductList from '../product/RowProductList';
import HomeMenu from '../components/HomeMenu';
import theme from '../../shared/theme';

export default function Home() {
  return (
    <Container>
      {/* <SwiperAd /> */}
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
          <ImageBox src={e4} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageBox src={f3} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageBox src={c2} />
        </SwiperSlide>
      </Swiper>
      <HomeMenu />
      <Box>
        <TitleWrap>이 달의 신상품</TitleWrap>
        <RowProductList dummy={newDummy} />
        <TitleWrap>주간 베스트</TitleWrap>
        <RowProductList dummy={bestDummy} />
      </Box>
    </Container>
  );
}

const Heading = styled.div`
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  width: 100%;
  text-align: center;
  background-color: pink;
  height: 30px;
`;

const Container = styled.div`
  display: block;
  align-items: center;
  // overflow: auto;
  max-height: 90vh;
  padding-top: 0px; /* 상단 여백 추가 */
  margin-bottom: 10px;
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
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.large};
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
`;
