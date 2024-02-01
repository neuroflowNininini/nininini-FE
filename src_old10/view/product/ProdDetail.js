import React, { useState, useEffect } from 'react';
import { AiOutlineRight } from "react-icons/ai"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from "swiper";
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { totalDummy } from '../../shared/dummy';
import styled from 'styled-components';
import QuantityCounter from '../components/QuantityCounter';
import TotalPrice from '../components/TotalPrice';
import Review from '../review/Review';
import { BsShare } from "react-icons/bs"
import theme from '../../shared/theme';
import SwiperAd from '../components/SwiperAd';

export default function ProdDetail() {
  useEffect(() => {
    // 페이지가 로드될 때 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 로드될 때만 실행되도록 함


  const { id } = useParams();
  // id에 해당하는 제품 찾기
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('info');
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };


  const navigate = useNavigate();

  const product = totalDummy.find((item) => item.id === id);
  if (!product) {
    // 제품을 찾지 못한 경우 처리
    return <div>제품을 찾을 수 없음</div>;
  }
  const handleBuy = () => {
    const searchParams = new URLSearchParams();
    searchParams.append(`id`, product.id);
    searchParams.append(`qty`, quantity);
    const prodBuyLink = `/checkout?${searchParams.toString()}`;
    // 특정 링크로 이동
    navigate(prodBuyLink);
  };
  return (
    <TopWrap>
      <SwiperAd />
      <Space />
      <Swiper
        id='hometop'
        pagination={true}
        modules={[Pagination, Navigation, Autoplay]}
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
      <TopWrap1>
        <TitleWrap>{product.name} <BsShare size="20" /></TitleWrap>
        <CostWrap>{product.cost}원</CostWrap>
        <DeliveryWrap>
          <TextWrap>배송</TextWrap>
          <Conts>
            <ContWrap>기본 2,500원 (50,000원 이상 구매 시 무료)</ContWrap>
            <ContWrap>제주 및 특수 도서 산간 지역 3,000원 추가</ContWrap>
          </Conts>
        </DeliveryWrap>
        <DeliveryWrap>
          <TextWrap>수량</TextWrap>
          <Conts>
            <QuantityCounter initialQuantity={quantity} onQuantityChange={handleQuantityChange} />
          </Conts>
        </DeliveryWrap>
        <TotalPrice price={product.cost} quantity={quantity} />
      </TopWrap1>
      <GrayWrap>
        <TabDiv onClick={() => setActiveTab('info')} active={activeTab === "info" ? "2.5px" : "0px"}>상품 정보</TabDiv>
        <TabDiv onClick={() => setActiveTab('review')} active={activeTab === "review" ? "2.5px" : "0px"}>상품 리뷰</TabDiv>
      </GrayWrap>
      {
        activeTab === "info" ?
          <div style={{ paddingTop: "20px", paddingBottom: "100px" }}>
            상품 이미지가 들어갈거예요~
            <img src={product.pics[3]} style={{ width: "100%" }} />
            <img src={product.pics[1]} style={{ width: "100%" }} />
            <img src={product.pics[0]} style={{ width: "100%" }} />
            <LeftDiv>상품 추가정보 <AiOutlineRight /></LeftDiv>
            <LeftDiv>상품 정보제공 고시<AiOutlineRight /></LeftDiv>
          </div> :
          <div style={{ paddingTop: "30px", paddingBottom: "100px" }}>
            <Review />
          </div>
      }
      <ButtonWrap>
        <Button>장바구니</Button>
        <Button2 onClick={handleBuy}>바로구매</Button2>
      </ButtonWrap>
    </TopWrap>)
}

const TabDiv = styled.div`
border-bottom : solid ${(props) => props.active};
padding: 16px 10px;
`;
const GrayWrap = styled.div`
margin-top : 30px;
display: grid;
grid-template-columns: 1fr 1fr;
width : 100%
height: 40px;
`;
const LeftDiv = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 20px 10px 20px;
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
`;
const TopWrap = styled.div`
overflow : hidden;
  overflow: auto;
`;
const ImageBox = styled.img`
width : 100%;
height: 50vh;
object-fit: cover;
`
const Space = styled.div`
height:58px;
`;
const TopWrap1 = styled.div`
margin: 0px 20px;
`;
const TitleWrap = styled.div`
display:flex;
justify-content: space-between;
padding-top: 20px;
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.medium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
font-weight : 700;
`;
const CostWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.medium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display:flex;
padding-top: 20px;
font-weight : 700;
`;
const DeliveryWrap = styled.div`
display: flex;
align-items: center;
margin: 20px 0px;
`;
const TextWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display: flex;
font-weight:600;
width : 20%;
`;
const Conts = styled.div`
display:block;
width : 80%;
`;
const ContWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display:flex;
`;
const ButtonWrap = styled.div`
display: flex;
justify-content : center;
padding-top : 20px;
gap : 5px;
`;
const Button = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
position: fixed;
left: 0;
bottom: 49px;
display:flex;
justify-content : center;
align-items : center;
width: 50%;
height:50px;
border-top: solid 1px black;
background-color: white;
`;
const Button2 = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
position: fixed;
right: 0;
bottom: 50px;
display:flex;
justify-content : center;
align-items : center;
width: 50%;
height:50px;
background-color: black;
color : white;
`;
