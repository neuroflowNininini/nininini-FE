import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import Divider from '~/components/common/Divider';
import { Pagination } from '~/components/common/Pagination';
import ReviewListItem from '~/components/domain/ReviewListItem/ReviewListItem';
import { useReviews } from '~/hooks/api/useReviews';
import { ReviewStatistics } from '../ReviewStatistics';

export default function ReviewsSection() {
  const { id: productId } = useParams<{ id: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useReviews({ productId: productId!, size: 5, pageNumber: currentPage });
  return (
    <Container>
      <ReviewStatistics />
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
