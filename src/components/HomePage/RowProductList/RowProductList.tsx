import { Pagination, Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '~/components/domain/ProductCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { deviceSizes } from '~/styles/breakpoints';

/* eslint-disable  @typescript-eslint/no-explicit-any */
/*FIXME - API 명세 확정 후 임시 any 타입 변경하기 */
export default function RowProductList({ dummy }: { dummy: any[] }) {
  return (
    <>
      <Swiper
        className={'swiper-container-products'}
        modules={[Pagination, Navigation, FreeMode]}
        spaceBetween={20}
        slidesPerView={1.8}
        freeMode={true}
        navigation={true}
        breakpoints={{
          [deviceSizes.sm]: {
            slidesPerView: 4,
            freeMode: false,
          },
        }}
      >
        {/* <SwiperSlide>
          <ProductCard productData={dummy[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productData={dummy[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productData={dummy[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productData={dummy[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productData={dummy[4]} />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
