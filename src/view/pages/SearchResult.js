import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';
import ProductListCate from '../product/ProductListCate';
import { totalDummy } from '../../shared/dummy';
import theme from '../../shared/theme';
import { useLocation } from 'react-router-dom';

export default function SearchResult() {
  const location = useLocation();
  const { state } = location;
  const keyword = state.keyword;
  const filteredProds = totalDummy.filter((item) => item.name.includes(keyword));

  return (
    <>
      <TitleWrap id="hometop">검색결과</TitleWrap>
      <ProductListCate dummy={filteredProds} />
    </>
  );
}
const TitleWrap = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
