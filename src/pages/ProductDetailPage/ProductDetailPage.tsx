import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { totalDummy } from '~/shared/dummy.js';

export default function ProductDetailPage() {
  const { id } = useParams();
  /*FIXME - id로 개별 api 요청해서 정보 받아오기 */
  const product = totalDummy.find((item) => item.id === id)!;

  return (
    <>
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
          <ImageBox src={product.pics[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageBox src={product.pics[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageBox src={product.pics[2]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

const ImageBox = styled.img`
  width: 100%;
  margin: 0 auto;
  object-fit: cover;
`;
