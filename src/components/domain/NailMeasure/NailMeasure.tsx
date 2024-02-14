import { FaCamera } from 'react-icons/fa';
import styled from 'styled-components';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import left from '~/shared/pics/default_left.png';
import right from '~/shared/pics/default_right.png';
import theme from '~/styles/theme';

export default function NailMeasure() {
  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    direction: 'left' | 'right',
  ) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        console.log(file);
      }
    }
  };
  return (
    <Container>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={0}
        rewind={true}
        slidesPerView={1}
      >
        <SwiperSlide>
          <SlideContainer>
            <Img
              id="pic"
              src={left}
            />
            <Button>
              <FaCamera color={theme.colors.gray['500']} />
              <span>왼손 측정하기</span>
              <CameraInput
                type="file"
                id="camera"
                name="camera"
                capture="camera"
                accept="image/*"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileChange(e, 'left')}
              />
            </Button>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer>
            <Img
              id="pic1"
              src={right}
            />
            <Button>
              <FaCamera color={theme.colors.gray['500']} />
              <span>오른손 측정하기</span>
              <CameraInput
                type="file"
                id="camera"
                name="camera"
                capture="camera"
                accept="image/*"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileChange(e, 'right')}
              />
            </Button>
          </SlideContainer>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-bottom: 3rem;
`;
const Img = styled.img`
  border: solid 1px;
  width: 40rem;
`;

const Container = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.gray['300']};
  border-radius: 2rem;
  width: 100%;
  padding: 2rem 0;
`;

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.gray['400']};
  padding: 1rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: white;
  margin: auto;
  &:hover {
    opacity: 80%;
  }
  span {
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.gray['500']};
  }
`;

const CameraInput = styled.input`
  position: absolute;
  left: 40vw;
  border: solid 1px;
  width: 20vw;
  padding: 10px 0px;
  z-index: 999;
  opacity: 0;
`;
