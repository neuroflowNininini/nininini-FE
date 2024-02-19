import styled from 'styled-components';
import { Heading } from '~/components/common/Heading';
import { Stepper } from '~/components/common/Stepper';

interface SignUpHeaderProps {
  title?: string;
  step: number;
  totalSteps: number;
}

export default function SignUpHeader({ title = '회원가입', totalSteps, step }: SignUpHeaderProps) {
  return (
    <Container>
      <Heading>{title}</Heading>
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
`;
