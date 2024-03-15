import styled from 'styled-components';

interface DetailsSectionProps {
  detailImage: string;
}

export default function DetailsSection({ detailImage }: DetailsSectionProps) {
  return (
    <Container>
      <DetailImageBox src={detailImage} />
    </Container>
  );
}

const Container = styled.div``;
const DetailImageBox = styled.img`
  width: 100%;
`;
