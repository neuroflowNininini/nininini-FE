import styled from "styled-components";
import StarRate from "../components/StarRate";
import { useState } from "react";
import ReviewDetail from "./ReviewDetail";
export default function XReviwCard({ review }) {
  // 사진 크게 보이는 카드. 현재 미사용중
  const [activeModal, setActiveModal] = useState(false)
  const openModal = () => {
    setActiveModal(true);
  };
  const closeModal = () => {
    setActiveModal(false);
  };
  const maxContLen = 15;
  // 리뷰 내용을 말 줄임
  const shortenedContent = review.content.length > maxContLen
    ? review.content.substring(0, maxContLen) + '...'
    : review.content;

  return (
    <>
      {
        activeModal && <ReviewDetail review={review} closeModal={closeModal} />
      }
      <CardWrap onClick={openModal} >
        <ImageBox src={review.pics[0]} />
        <Title>{shortenedContent}</Title>
      </CardWrap>
    </>
  )
}

const CardWrap = styled.div`
  display: block;
  border: solid 1px lightgray;
  padding: 5px;
`;

const Title = styled.div`
display:flex;
padding-left:10px;
font-size: 14px;
`;
const ImageBox = styled.img`
width: 190px;
height: 200px;
object-fit:cover;
`;

