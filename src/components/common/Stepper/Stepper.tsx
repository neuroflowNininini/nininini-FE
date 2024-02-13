import styled from 'styled-components';

interface StepperProps {
  total: number;
  step: number;
  size?: string;
  gap?: string;
}

export default function Stepper({ total, step, size, gap }: StepperProps) {
  const circles = new Array(total).fill(false).map((_, i) => i + 1 <= step && true);
  return (
    <Container gap={gap}>
      {circles.map((isFilled, index) => (
        <Circle
          key={index}
          isFilled={isFilled}
          size={size}
        />
      ))}
    </Container>
  );
}

const Container = styled.div<{ gap: string }>`
  display: flex;
  gap: ${({ gap }) => gap ?? '1rem'};
`;
const Circle = styled.div<{ isFilled: boolean; size: string }>`
  background-color: ${({ theme, isFilled }) =>
    isFilled ? theme.colors.gray['900'] : theme.colors.white['500']};
  width: ${({ size }) => size ?? '1.3rem'};
  height: ${({ size }) => size ?? '1.3rem'};
  border-radius: 50%;
`;
