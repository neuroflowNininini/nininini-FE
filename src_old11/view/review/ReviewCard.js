import styled from "styled-components";
import StarRate from "./StarRate";
import { useState } from "react";
import ReviewDetail from "./ReviewDetail";
import theme from "../../shared/theme";

export default function ReviwCard({ review }) {

  const [activeModal, setActiveModal] = useState(false)
  const openModal = () => {
    setActiveModal(true);
  };
  const closeModal = () => {
    setActiveModal(false);
  };
  const maxContLen = 50;
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
        <ContentWrap>
          <NickStar>
            <NameRate>
              <NameWrap>{review.nickname}</NameWrap>
              <RateWrap>
                <StarRate AVR_RATE={review.rate} width={15} height={15} />
              </RateWrap>
            </NameRate>
            <DateWrap>{review.date}</DateWrap>
          </NickStar>
          <ImageCont>
            <ImageBox src={review.pics[0]} />
            <Title>{shortenedContent}</Title>
          </ImageCont>
        </ContentWrap>
      </CardWrap>
    </>
  )
}
const ImageCont = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
`;
const ContentWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  display: block;
  padding: 5px;
`;
const NameRate = styled.div`
display: grid; 
align-items: center; 
grid-template-columns: 1fr 1fr;
gap : 20px;
`;
const NameWrap = styled.div`
font-weight:600;
`;
const RateWrap = styled.div`
display:flex;
padding-bottom:2px;
width: 20px;

`;
const DateWrap = styled.div`
display: flex;
color : gray;
`;
const CardWrap = styled.div`
  display: flex;
  border-bottom: solid 1px #e2e2e2;
  padding: 5px 5px 15px 5px;
  margin-top: 10px;
`;
const NickStar = styled.div`
display: flex;
gap: 20px;
justify-content : space-between;
margin-bottom : 10px;
`;
const Title = styled.div`
display:flex;
text-align:left;
margin-left:8px;
font-size: 14px;
`;
const ImageBox = styled.img`
width: 30vw;
height: 12vh;
object-fit:cover;
`;

