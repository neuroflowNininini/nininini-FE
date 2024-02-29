import styled from 'styled-components';
import { useTimer } from '~/hooks/useTimer';

interface TimerProps {
  totalSeconds: number;
}

export default function Timer({ totalSeconds }: TimerProps) {
  const { timerMM, timerSS } = useTimer(totalSeconds);
  return <TimerText>{`${timerMM.padStart(2, '0')} : ${timerSS.padStart(2, '0')}`}</TimerText>;
}

const TimerText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.theme};
  min-width: 5rem;
  text-align: center;
`;
