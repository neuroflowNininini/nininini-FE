import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { styled } from 'styled-components';
import { Text } from '../Text';

interface PaginationProps {
  maxPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export default function Pagination({ maxPage, currentPage, setCurrentPage }: PaginationProps) {
  const goPrevious = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const goNext = () => {
    if (currentPage === maxPage) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
      <IconButton
        onClick={goPrevious}
        disabled={currentPage === 1}
        aria-label="이전 페이지 이동"
      >
        <FaChevronLeft />
      </IconButton>
      {Array.from({ length: maxPage }).map((_, i) => {
        const page = i + 1;
        return (
          <NumberButton
            key={i}
            onClick={() => setCurrentPage(page)}
            aria-label="페이지 버튼"
          >
            <Text isBold={page === currentPage}>{page}</Text>
          </NumberButton>
        );
      })}
      <IconButton
        onClick={goNext}
        disabled={currentPage === maxPage}
        aria-label="다음 페이지 이동"
      >
        <FaChevronRight />
      </IconButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 10rem 0;
`;

const IconButton = styled.button``;

const NumberButton = styled.button`
  border-radius: 3px;
`;
