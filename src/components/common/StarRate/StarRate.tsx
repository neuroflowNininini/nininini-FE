import { styled } from 'styled-components';
import { ReactComponent as Star } from '~/shared/star.svg';

interface StarRateProps {
  rate: number;
  size?: number;
}

const FILLED_COLOR = '#FFD700';
const BLANK_COLOR = '#cacaca';

export default function StarRate({ rate, size = 15 }: StarRateProps) {
  return (
    <StarRateWrap>
      <div>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((order) => (
          <Star
            key={order}
            width={size}
            fill={BLANK_COLOR}
          />
        ))}
      </div>
      <FilledStars width={`${(rate / 5) * 100}%`}>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((order) => (
          <div key={order}>
            <Star
              width={size}
              fill={FILLED_COLOR}
            />
          </div>
        ))}
      </FilledStars>
    </StarRateWrap>
  );
}

const StarRateWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const FilledStars = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  overflow: hidden;
  position: absolute;
  top: -1px;
  left: 0;
  z-index: 20;
  height: 100%;
  display: flex;
`;
