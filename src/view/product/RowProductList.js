import ProdCard from './ProdCard';
import { Pagination, Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { deviceSizes } from '~/styles/breakpoints';

export default function RowProductList({ dummy }) {
  return (
    <>
      <Swiper
        className={'swiper-container-products'}
        modules={[Pagination, Navigation, FreeMode]}
        spaceBetween={0}
        slidesPerView={1.8}
        freeMode={true}
        navigation={true}
        breakpoints={{
          [deviceSizes.sm]: {
            slidesPerView: 3,
            freeMode: false,
          },
        }}
      >
        <SwiperSlide>
          <ProdCard cardData={dummy[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProdCard cardData={dummy[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProdCard cardData={dummy[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProdCard cardData={dummy[3]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
