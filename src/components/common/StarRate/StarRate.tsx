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
      {Array.from({ length: 5 }, (_, i) => i + 1).map((order) => (
        <Star
          key={order}
          width={size}
          fill={order <= rate ? FILLED_COLOR : BLANK_COLOR}
        />
      ))}
    </StarRateWrap>
  );
}

const StarRateWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .star_icon {
    display: inline-flex;
    margin-right: 2px;
  }
`;
