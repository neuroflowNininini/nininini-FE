import { useState } from 'react';
import { styled } from 'styled-components';
import Divider from '~/components/common/Divider';
import { Pagination } from '~/components/common/Pagination';
import { Text } from '~/components/common/Text';
import ReviewListItem from '~/components/domain/ReviewListItem/ReviewListItem';
import { useReviews } from '~/hooks/api/useReviews';
import { ReviewStatistics } from '../ReviewStatistics';

interface ReviewsSectionProps {
  productId: string;
}

export default function ReviewsSection({ productId }: ReviewsSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useReviews({ productId, size: 5, pageNumber: currentPage });
  return (
    <Container>
      <ReviewStatistics
        overallRate={data.avgScore}
        ratiosData={data.scoreRatio}
      />
      {data.reviews.length > 0 ? (
        <>
          {data.reviews.map(({ score, uploadDate, content, buyerName, img }, index) => (
            <>
              <Divider color="gray.100" />
              <ReviewListItem
                key={index}
                rate={score}
                nickname={buyerName}
                date={uploadDate}
                image={img}
                content={content}
              />
            </>
          ))}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPage={data.maxPage}
          />
        </>
      ) : (
        <Text
          style={{ textAlign: 'center', margin: '2rem 0' }}
          fontSize="large"
          color="gray.400"
        >
          리뷰가 아직 없습니다.
        </Text>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
