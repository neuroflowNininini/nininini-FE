import { FaCamera } from 'react-icons/fa';
import styled from 'styled-components';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import left from '~/shared/pics/default_left.png';
import right from '~/shared/pics/default_right.png';
import theme from '~/styles/theme';
import { HandType } from '~/types/apis/handType';

interface NailMeasureProps {
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>, handType: HandType) => void;
}
export default function NailMeasure({ onImageChange }: NailMeasureProps) {
  return (
    <Container>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={20}
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
              <label htmlFor={'camera-left'}>
                <FaCamera color={theme.colors.gray['500']} />
                <span>왼손 측정하기</span>
                <CameraInput
                  type="file"
                  id="camera-left"
                  name="camera"
                  capture="camera"
                  accept="image/*"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onImageChange(e, 'left')}
                />
              </label>
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
              <label htmlFor={'camera-right'}>
                <FaCamera color={theme.colors.gray['500']} />
                <span>오른손 측정하기</span>
                <CameraInput
                  type="file"
                  id="camera-right"
                  name="camera"
                  capture="camera"
                  accept="image/*"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onImageChange(e, 'right')}
                />
              </label>
            </Button>
          </SlideContainer>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

const Container = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.gray['300']};
  border-radius: 2rem;
  width: 100%;
  padding: 2rem;
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-bottom: 3rem;
`;

const Img = styled.img`
  border: solid 1px;
  width: 100%;
`;

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.gray['400']};
  padding: 1rem 3rem;
  border-radius: 1rem;
  label {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.gray['500']};
  }
`;

const CameraInput = styled.input`
  display: none;
`;
