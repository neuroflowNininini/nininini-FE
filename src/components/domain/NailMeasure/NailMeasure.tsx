import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import left from '~/shared/pics/default_left.png';
import right from '~/shared/pics/default_right.png';
import ImageUploader from '~/view/signup/ImageUploader.js';
import ImageUploader1 from '~/view/signup/ImageUploader1.js';

export default function NailMeasure() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const signupInfo = state.signupInfo;
  const likedesigns = state.likedesigns;
  const aiMeasure = {};

  const handleContinue = () => {
    //회원 가입 user pool에 반영하기2
    navigate('/signupdone', {
      state: {
        signupInfo: signupInfo,
        likedesigns: likedesigns,
        aiMeasure: aiMeasure,
      },
    });
  };
  const handleSkip = () => {
    // 회원 가입 signupInfo 로 user pool 반영하기 추가해야.
    navigate('/');
  };
  return (
    <Container>
      <TopWrap id="hometop">
        <DescWrap>
          <Desc>지금 AI를 통해 손톱을 측정하세요.</Desc>
          <Desc>내 손톱 맞춤 상품을 만나볼 수 있어요!</Desc>
        </DescWrap>
        <AiBox>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            spaceBetween={0}
            rewind={true}
            slidesPerView={1}
          >
            <SwiperSlide>
              <ImageUploader />
              <ImgBox
                id="pic"
                src={left}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImageUploader1 />
              <ImgBox
                id="pic1"
                src={right}
              />
            </SwiperSlide>
          </Swiper>
        </AiBox>
      </TopWrap>
      <Button2 onClick={handleContinue}>회원가입완료</Button2>
      <Skip onClick={handleSkip}>다음에 등록하기</Skip>
    </Container>
  );
}

const ImgBox = styled.img`
  border: solid 1px;
  width: 65vw;
  height: 40vh;
  object-fit: cover;
  // background-color:#eeeeee;
`;
const Image = styled.img`
  object-fit: cover;
`;
const AiBox = styled.div`
  border: solid 1px #959595;
  border-radius: 20px;
  width: calc(100vw - 40px);
  margin: auto;
  padding: 20px 0px;
`;

const TopWrap = styled.div`
  position: relative;
  bottom: 49px;
  padding: 60px 20px 0px 20px;
`;
const Skip = styled.div`
  padding: 10px 0px;
`;

const Container = styled.div`
  padding-bottom: 80px;
`;
const Desc = styled.div`
  text-align: left;
`;
const DescWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: left;
`;
const Button2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 40px);
  height: 50px;
  background-color: black;
  color: white;
  font-weight: 700;
  margin: auto;
`;
