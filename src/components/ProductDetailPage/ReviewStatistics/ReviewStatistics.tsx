import { styled } from 'styled-components';
import { StarRate } from '~/components/common/StarRate';
import { Text } from '~/components/common/Text';
import ReviewBarChart from './ReviewBarChart';

interface ReviewStatisticsProps {
  overallRate: number;
  ratiosData: number[];
}

export default function ReviewStatistics({ overallRate, ratiosData }: ReviewStatisticsProps) {
  return (
    <Container>
      <Column>
        <Text>구매자 총 평점</Text>
        <Rate>{overallRate}</Rate>
        <StarRate
          rate={overallRate}
          size={20}
        />
      </Column>
      <Column>
        <Text>평점 비율</Text>
        <ReviewBarChart ratiosData={ratiosData} />
      </Column>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Rate = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 50%;
`;
