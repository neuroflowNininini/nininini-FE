import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import theme from "../../shared/theme";
import { clickAddCart } from "../cart/CartFunc";

export default function ProdCard({ cardData, onClick }) {
  return (
    <CardWrap >
      <Link to={`/product/${cardData.id}`} style={{ textDecoration: "none", color: "black" }}>
        <ImageBox src={cardData.pics[0]} />
      </Link>
      <BlockWrap>
        <Link to={`/product/${cardData.id}`} style={{ textDecoration: "none", color: "black" }}>
          <NameWrap>{cardData.name}</NameWrap>
        </Link>
        <BsBag onClick={() => clickAddCart(cardData.id, 1)} size="20" color="black" />
      </BlockWrap>
      <CostWrap>{cardData.cost}원</CostWrap>
    </CardWrap>
  )
}
const CardWrap = styled.div`
  display: inline-block;
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
padding: 0px 10px;
margin-bottom : 20px;
`;

const ImageBox = styled.img`
  width: 50vw;
  height: 30vh;
  object-fit: cover;
`
const BlockWrap = styled.div`
  margin : 15px 0px 0px 0px;
  padding : 0px 5px 0px 5px;
  display: flex;
  justify-content: space-between;
`;

const NameWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
font-weight:600;
`;
const CostWrap = styled.div`
display: flex;
padding : 5px;
font-weight:400;
`;
