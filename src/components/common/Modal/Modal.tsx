import { IoClose } from 'react-icons/io5';
import { styled } from 'styled-components';
import { useDeviceDetect } from '~/hooks/useDeviceDetect';
import theme from '~/styles/theme';
import { FullScreenModal } from '../FullScreenModal';
import { Text } from '../Text';

interface ModalProps {
  onClose: () => void;
  width?: string;
  height?: string;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({ onClose, width, height, title, children }: ModalProps) {
  const { isMobile } = useDeviceDetect();
  if (isMobile) {
    return (
      <FullScreenModal
        onClose={onClose}
        title={title}
      >
        {children}
      </FullScreenModal>
    );
  }
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer
        width={width}
        height={height}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Header>
          <Text
            isBold
            style={{ marginLeft: 'auto' }}
          >
            {title}
          </Text>
          <CloseButton onClick={onClose}>
            <IoClose
              size={'3rem'}
              color={theme.colors.gray['300']}
            />
          </CloseButton>
        </Header>
        <ContentContainer>{children}</ContentContainer>
      </ModalContainer>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(61, 61, 61, 0.5);
  z-index: 9999;
`;

const ModalContainer = styled.div<Pick<ModalProps, 'width' | 'height'>>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  overflow-y: auto;
  width: ${({ width }) => width ?? '50vw'};
  height: ${({ height }) => height ?? '30vh'};
  background-color: #ffffff;
  border-radius: 2rem;
  z-index: 10000;
  padding: 1.5rem;
`;

const ContentContainer = styled.div`
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const CloseButton = styled.button`
  margin-left: auto;
`;
