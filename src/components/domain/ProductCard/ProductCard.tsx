import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import styled from 'styled-components';
import { clickAddCart } from '~/view/cart/CartFunc.js';

/* eslint-disable  @typescript-eslint/no-explicit-any */
/*FIXME - API 명세 확정 후 임시 any 타입 변경하기 */
interface ProductCardProps {
  cardData: any;
}

export default function ProductCard({ cardData }: ProductCardProps) {
  return (
    <CardWrap>
      <Link
        to={`/product/${cardData.id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ImageBox src={cardData.pics[0]} />
      </Link>
      <BlockWrap>
        <Link
          to={`/product/${cardData.id}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <NameWrap>{cardData.name}</NameWrap>
        </Link>
        <BsBag
          onClick={() => clickAddCart(cardData.id, 1)}
          size="20"
          color="black"
        />
      </BlockWrap>
      <CostWrap>{cardData.cost}원</CostWrap>
    </CardWrap>
  );
}
const CardWrap = styled.div`
  display: inline-block;
  padding: 0px 10px;
`;

const ImageBox = styled.img`
  width: 100%;
  margin: 0 auto;
  object-fit: cover;
  object-position: bottom;
`;

const BlockWrap = styled.div`
  margin: 15px 0px 0px 0px;
  padding: 0px 5px 0px 5px;
  display: flex;
  justify-content: space-between;
`;

const NameWrap = styled.div`
  font-weight: 600;
`;
const CostWrap = styled.div`
  display: flex;
  padding: 5px;
  font-weight: 400;
`;
