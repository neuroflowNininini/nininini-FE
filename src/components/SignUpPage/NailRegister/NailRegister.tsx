import styled from 'styled-components';
import { ThemeButton } from '~/components/common/ThemeButton';
import { NailMeasure } from '~/components/domain/NailMeasure';
import { SignUpHeader } from '../SignUpHeader';

interface NailRegisterProps {
  onNext: () => void;
}

export default function NailRegister({ onNext }: NailRegisterProps) {
  return (
    <Container>
      <SignUpHeader
        totalSteps={4}
        step={4}
      />
      <div>
        <Title>{'지금 AI를 통해 손톱을 측정하세요.\n내 손톱 맞춤 상품을 만나볼 수 있어요!'}</Title>
        <NailMeasure />
      </div>
      <ButtonsWrap>
        <ThemeButton onClick={onNext}>다음</ThemeButton>
        <button onClick={() => onNext()}>다음에 답변하기</button>
      </ButtonsWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  white-space: pre-wrap;
  margin-bottom: 2rem;
`;

const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;
