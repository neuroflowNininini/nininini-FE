import { FaMinus, FaPlus } from 'react-icons/fa6';
import styled from 'styled-components';

interface NumberCounterProps {
  count: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export default function NumberCounter({ count, onDecrease, onIncrease }: NumberCounterProps) {
  return (
    <Container>
      <ControlButton
        as={'button'}
        onClick={onDecrease}
      >
        <FaMinus />
      </ControlButton>
      <NumberBox>{count}</NumberBox>
      <ControlButton
        as={'button'}
        onClick={onIncrease}
      >
        <FaPlus />
      </ControlButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 3rem;
  width: 20rem;
`;
const ItemBox = styled.div`
  border: 0.5px solid ${({ theme }) => theme.colors.gray['200']};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ControlButton = styled(ItemBox)`
  width: 20%;
`;
const NumberBox = styled(ItemBox)`
  width: 30%;
  font-size: ${({ theme }) => theme.fontSize.small};
`;
