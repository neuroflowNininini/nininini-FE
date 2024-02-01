import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from "swiper";
import styled from 'styled-components';
export default function SwiperAd() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Autoplay]}
        rewind={true}
        // navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Heading>광고1</Heading>
        </SwiperSlide>
        <SwiperSlide>
          <Heading2>광고2</Heading2>
        </SwiperSlide>
        <SwiperSlide>
          <Heading3>광고3</Heading3>
        </SwiperSlide>
      </Swiper>
    </>

  )
}
const Heading = styled.div`
display:flex;
justify-content:center;
align-items:center;
  width: 100%;
  background-color: pink;
  height: 40px;
`;
const Heading2 = styled.div`
display:flex;
justify-content:center;
align-items:center;
  width: 100%;
  background-color: skyblue;
  height: 40px;
`;
const Heading3 = styled.div`
display:flex;
justify-content:center;
align-items:center;
  width: 100%;
  background-color: gray;
  height: 40px;
`;
