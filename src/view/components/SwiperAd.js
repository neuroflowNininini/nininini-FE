import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper';
import styled from 'styled-components';
import ad1 from '../../shared/pics/AD/ad1.png';
import ad2 from '../../shared/pics/AD/ad2.png';
import ad3 from '../../shared/pics/AD/ad3.png';
import { useNavigate } from 'react-router-dom';
import theme from '../../shared/theme';

export default function SwiperAd() {
  const navigate = useNavigate();
  const handleToADPage = (idx) => {
    var imgSrc = ad1;
    if (idx === 2) {
      imgSrc = ad2;
    }
    if (idx === 3) {
      imgSrc = ad3;
    }
    navigate('/adpage', { state: { imgSrc: imgSrc } });
  };
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
          <Heading onClick={() => handleToADPage(1)}>신규가입 1만원 할인쿠폰 증정</Heading>
        </SwiperSlide>
        <SwiperSlide>
          <Heading2 onClick={() => handleToADPage(2)}>구매후기 쇼핑지원금 적립</Heading2>
        </SwiperSlide>
        <SwiperSlide>
          <Heading3 onClick={() => handleToADPage(3)}>나만의 nail 저장하러가기</Heading3>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
const Heading = styled.div`
  font-size: 17px;
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  display: flex;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #b2d7fc;
  height: 40px;
`;
const Heading2 = styled.div`
  font-size: 17px;
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffc0cb;
  // color:white;
  height: 40px;
`;
const Heading3 = styled.div`
  font-size: 17px;
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  display: flex;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  background-color: #0f4b43;
  height: 40px;
`;
