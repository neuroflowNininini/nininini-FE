import styled from 'styled-components';
import { Stepper } from '~/components/common/Stepper';

interface SignUpHeaderProps {
  title?: string;
  step: number;
  totalSteps: number;
}

export default function SignUpHeader({ title = '회원가입', totalSteps, step }: SignUpHeaderProps) {
  return (
    <Container>
      <div>{title}</div>
      <Stepper
        total={totalSteps}
        step={step}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: 900;
`;
