import styled from "styled-components"
import theme from '../../shared/theme';
import SwiperAd from '../components/SwiperAd';
import { useState, useEffect } from "react";
import CartOrder from "../cart/CartOrder";
import CartProds from "../cart/CartProds";

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
    setCartProdsId(updatedCheckedInputs)
    console.log("localStorage는요", localStorage)
  }, [localStorage])

  return (<TopWrap>
    <SwiperAd />
    <Space />
    <TitleWrap id="hometop">장바구니</TitleWrap>
    <CartProds cartProdsId={cartProdsId} setCartProdsId={setCartProdsId} setTotalCartProds={setTotalCartProds} />
    <CartOrder cartProdsId={cartProdsId} setCartProdsId={setCartProdsId} totalCartProds={totalCartProds} />
  </TopWrap>)
}

const TopWrap = styled.div`
padding-bottom : 50px;
`;

const TitleWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.large};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display:flex;
height : 40px;
justify-content:center;
align-items: center;
font-weight: 600;
padding : 20px 0px;
`;

const Space = styled.div`
  height: 42px;
`;
