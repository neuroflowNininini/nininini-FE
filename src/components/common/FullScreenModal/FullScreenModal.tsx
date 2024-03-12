import { IoClose } from 'react-icons/io5';
import { styled } from 'styled-components';
import { Text } from '../Text';

interface FullScreenModalProps {
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function FullScreenModal({ onClose, title, children }: FullScreenModalProps) {
  return (
    <ModalContainer
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Header>
        <Text isBold>{title}</Text>
        <CloseButton onClick={onClose}>
          <IoClose size={'3rem'} />
        </CloseButton>
      </Header>
      {children}
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white['100']};
  z-index: 10000;
  overflow: hidden;
`;

const CloseButton = styled.button``;

const Header = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray['900']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  padding-right: 3rem;
`;
