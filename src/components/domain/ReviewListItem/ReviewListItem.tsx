import { styled } from 'styled-components';
import { FullScreenModal } from '~/components/common/FullScreenModal';
import { Modal } from '~/components/common/Modal';
import StarRate from '~/components/common/StarRate/StarRate';
import { Text } from '~/components/common/Text';
import { useDeviceDetect } from '~/hooks/useDeviceDetect';
import { useModal } from '~/hooks/useModal';

/*FIXME - 데이터 타입 인터페이스 확정 후 수정하기 */
interface ReviewListItemProps {
  rate: number;
  nickname: string;
  date: string;
  images: string[];
  content: string;
}

export default function ReviewListItem({
  rate,
  nickname,
  date,
  images,
  content,
}: ReviewListItemProps) {
  const { isOpen, openModal, closeModal } = useModal();
  const { isMobile } = useDeviceDetect();
  return (
    <>
      <Container>
        <Heading>
          <HeadingMain>
            <StarRate rate={rate} />
            <Text isBold>{rate.toFixed(1)}</Text>
            <Text style={{ marginLeft: '1rem' }}>{nickname}</Text>
          </HeadingMain>
          <Text
            fontSize="small"
            color={'gray.400'}
          >
            {date}
          </Text>
        </Heading>
        <ImagesContainer>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              onClick={openModal}
            />
          ))}
        </ImagesContainer>
        <Text>{content}</Text>
      </Container>
      {isOpen && !isMobile && <Modal onClose={closeModal}>hi</Modal>}
      {isOpen && isMobile && (
        <FullScreenModal
          onClose={closeModal}
          title="리뷰 자세히 보기"
        >
          hi
        </FullScreenModal>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeadingMain = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ImagesContainer = styled.div`
  overflow-x: auto;
  display: flex;
  gap: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 10rem;
  height: 10rem;
`;
