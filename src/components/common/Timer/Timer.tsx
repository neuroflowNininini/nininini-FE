import styled from 'styled-components';

interface TimerProps {
  totalSeconds: number;
}

export default function Timer({ totalSeconds }: TimerProps) {
  return (
    <TimerText>{`${Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, '0')} : ${(totalSeconds % 60).toString().padStart(2, '0')}`}</TimerText>
  );
}

const TimerText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.theme};
  min-width: 5rem;
  text-align: center;
`;
