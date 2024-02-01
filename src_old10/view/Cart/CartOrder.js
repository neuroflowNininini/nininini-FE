import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CheckoutBox from '../components/CheckoutBox';
import theme from '../../shared/theme';

export default function CartOrder({ cartProdsId, totalCartProds, setCartProdsId }) {

  const [totalPrice, setTotalPrice] = useState(0);

  const clickBuyCartProd = () => {
    let _count = [];
    let _id = [];
    let _storage = [];

    let _localStorage = JSON.parse(localStorage.getItem('cartProds'));

    for (let i = 0; i < totalCartProds.length; i++) {
      if (cartProdsId.includes(totalCartProds[i].id)) {
        _count.push(totalCartProds[i].quantity);
        _id.push(totalCartProds[i].id);
      } else {
        _storage.push(totalCartProds[i]);
      }
    }

    for (let i = 0; i < cartProdsId.length; i++) {
      // dispatch<any>(prodActions.deleteCartProd(cartProdsId[i]));
      if (_localStorage !== null) {
        _localStorage = _localStorage.filter((data) => {
          return data.id !== cartProdsId[i];
        });
      }

      localStorage.setItem('cartProds', JSON.stringify(_localStorage));
    }
    console.log("CartOrder 구매 버튼 클릭했구낭?", _count, _id)

    setCartProdsId([]);
    // dispatch<any>(orderActions.buyAllProductDB(2, _count, _id));

    // window.alert('주문이 완료되었습니다.');
  }

  useEffect(() => {
    let _totalPrice = 0;
    if (!totalCartProds === undefined) {
      return;
    }

    for (let i = 0; i < totalCartProds?.length; i++) {
      if (cartProdsId.includes(totalCartProds[i].id)) {
        _totalPrice += totalCartProds[i].quantity * 12900
      }
    }

    setTotalPrice(_totalPrice)
  }, [totalCartProds, cartProdsId])

  return (
    <CartOrderWrap >
      <CheckoutBox cost={totalPrice} discount={0} />
      <Button onClick={clickBuyCartProd}>구매하기</Button>
    </CartOrderWrap>
  )
}
const Button = styled.div`
position: fixed;
left:0;
bottom:50px;
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.smallmedium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display:flex;
justify-content : center;
align-items : center;
width: 100%;
height:54px;
background-color: black;
color : white;
font-weight:700;
margin:auto;
`;



const CartOrderWrap = styled.div`
  margin-top: 40px;
  padding: 12px 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const CartOrderTitle = styled.h2`
  margin-bottom: 24px;
  font-size: var(--font-large);
`;

const CartOrderInfoWrap = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartOrderText = styled.p`
  font-size: var(--font-lg-small);
`;

const CartOrderTotlaPrice = styled.p`
  font-size: var(--font-large);
  font-weight: 800;
`;

