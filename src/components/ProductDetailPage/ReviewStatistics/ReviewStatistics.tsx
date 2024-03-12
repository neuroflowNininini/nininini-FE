import { styled } from 'styled-components';
import { StarRate } from '~/components/common/StarRate';
import { Text } from '~/components/common/Text';
import ReviewBarChart from './ReviewBarChart';

/*FIXME - 더미데이터 변경 */
export default function ReviewStatistics() {
  return (
    <Container>
      <Column>
        <Text>구매자 총 평점</Text>
        <Rate>4.9</Rate>
        <StarRate
          rate={4}
          size={20}
        />
      </Column>
      <Column>
        <Text>평점 비율</Text>
        <ReviewBarChart ratiosData={[1, 0.5, 0, 0, 0]} />
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
