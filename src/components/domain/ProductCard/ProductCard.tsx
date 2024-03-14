import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import styled from 'styled-components';
import { media } from '~/styles/breakpoints';
import { ProductListItem } from '~/types/apis/product';
import { clickAddCart } from '~/view/cart/CartFunc.js';
interface ProductCardProps {
  productData: ProductListItem;
}

export default function ProductCard({
  productData: { prodId, prodName, thumbnails, price },
}: ProductCardProps) {
  return (
    <Container>
      <Link to={`/product/${prodId}`}>
        <ImageBox src={thumbnails[0]} />
      </Link>
      <InfoBox>
        <TextSection>
          <Link to={`/product/${prodId}`}>
            <Title>{prodName}</Title>
          </Link>
          <Description>{price}원</Description>
        </TextSection>
        <BsBag
          className={'bag-icon'}
          onClick={() => clickAddCart(prodId, 1)}
          size="20"
          color="black"
        />
      </InfoBox>
    </Container>
  );
}
const Container = styled.div``;

const ImageBox = styled.img`
  width: 100%;
  margin: 0 auto;
  object-fit: cover;
`;

const InfoBox = styled.div`
  margin: 1.5rem 0;
  display: flex;
  justify-content: space-between;

  .bag-icon {
    margin-right: 0.7rem;
  }
`;

const TextSection = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.smallmedium};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${media.xs`
  font-size: ${({ theme }) => theme.fontSize.medium};
  `}
`;

const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  ${media.xs`
    font-size: ${({ theme }) => theme.fontSize.smallmedium};
  `}
`;
