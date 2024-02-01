import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from "swiper";
import styled from "styled-components"
import ProductListCate from '../product/ProductListCate';
import { totalDummy } from "../../shared/dummy";
import theme from '../../shared/theme';
import SwiperAd from '../components/SwiperAd';
import { useLocation } from 'react-router-dom';

export default function SearchResult() {
  const location = useLocation();
  const { state } = location;
  const keyword = state.keyword;
  const filteredProds = totalDummy.filter(item => item.name.includes(keyword));

  return (<>
    <SwiperAd />
    <Space />
    <TitleWrap id="hometop">검색결과</TitleWrap>
    <ProductListCate dummy={filteredProds} />
  </>)
}
const TitleWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.large};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display:flex;
height : 50px;
justify-content:center;
align-items: center;
font-weight: 500;
`;

const Space = styled.div`
  height: 42px;
`;
