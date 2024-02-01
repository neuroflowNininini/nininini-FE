
import styled from "styled-components";
import StarRate from "../components/StarRate";
import { AiOutlineClose, AiTwotoneAlert } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { Pagination, Navigation } from "swiper";
import theme from "../../shared/theme";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function ReviewDetail({ review, closeModal }) {

  return (
    <InnerMenu>
      <BlockWrap>
        <TopWrap >
          <Title>리뷰 자세히 보기</Title>
          <IconWrap>
            <AiOutlineClose onClick={closeModal} size="24" color="909090" />
          </IconWrap>
        </TopWrap>
      </BlockWrap>
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        rewind={true}
        // navigation={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <ImageBox src={review.pics[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageBox src={review.pics[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageBox src={review.pics[2]} />
        </SwiperSlide>
      </Swiper>
      <ContentWrap>
        <NickStar>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <NameWrap>{review.nickname}</NameWrap>
            <RateWrap>
              <StarRate AVR_RATE={review.rate} width={15} height={15} />
            </RateWrap>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <DateWrap>{review.date}</DateWrap>
            <IconWrap>
              <AiTwotoneAlert size="13" color="#909090" />
              신고하기
            </IconWrap>
          </div>
        </NickStar>
        <ContWrap>{review.content}</ContWrap>
      </ContentWrap>
    </InnerMenu>
  )
}

const InnerMenu = styled.div`
position:fixed;
z-index:999;
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
left : 0;
top: 0;
height:100%;
width : 100%;
overflow-y: auto;
padding : 5px 0px 10px 0px;
background:white;
`;

const TopWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display: flex;
justify-content:center;
align-items:center;
margin-bottom : 15px;
`;
const IconWrap = styled.div`
display: flex;
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
margin-left: auto;
color: #808080;
gap: 3px;
`;
const Title = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.medium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
color : gray;
font-weight: 500;
  flex: 1; /* 남은 공간을 차지하도록 설정 */
  text-align: center; /* 텍스트 가운데 정렬 (선택 사항) */
`;
const DateWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display: flex;
color : gray;
`;
const ImageBox = styled.img`
width: 400px;
height: 360px;
object-fit:cover;
`
const ContentWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.smallmedium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  display: block;
  padding: 10px 20px;
`;
const NickStar = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display: flex;
justify-content : space-between;
margin : 5px 0px 20px 0px;
`;
const NameWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
font-weight:600;
`;

const ContWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display: flex;
font-weight:400;
text-align:left;
`;
const BlockWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
  margin : 15px 0px 0px 0px;
  padding : 0px 10px 0px 10px;
  display: block;
`;
const RateWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display:flex;
padding-bottom:2px;
width: 20px;
`;