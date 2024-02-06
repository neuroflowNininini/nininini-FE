import styled from 'styled-components';
import theme from '../../shared/theme';
import { useState, useEffect } from 'react';
import CartOrder from '../cart/CartOrder';
import CartProds from '../cart/CartProds';

export default function CartPage() {
  const [cartProdsId, setCartProdsId] = useState([]);
  const [totalCartProds, setTotalCartProds] = useState([]);

  useEffect(() => {
    let _storage = JSON.parse(localStorage.getItem('cartProds'));
    let updatedCheckedInputs = [...cartProdsId]; // 기존 cartProdsId 값으로 시작

    for (let i = 0; i < _storage?.length; i++) {
      if (!updatedCheckedInputs.includes(_storage[i].id)) {
        updatedCheckedInputs.push(_storage[i].id); // 중복 아이템은 추가하지 않음
      }
    }
    setCartProdsId(updatedCheckedInputs);
  }, [localStorage]);

  return (
    <TopWrap>
      <TitleWrap id="hometop">장바구니</TitleWrap>
      <CartProds
        cartProdsId={cartProdsId}
        setCartProdsId={setCartProdsId}
        setTotalCartProds={setTotalCartProds}
      />
      <CartOrder
        cartProdsId={cartProdsId}
        setCartProdsId={setCartProdsId}
        totalCartProds={totalCartProds}
      />
    </TopWrap>
  );
}

const TopWrap = styled.div`
  padding-bottom: 120px;
`;

const TitleWrap = styled.div`
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 20px 0px;
`;
