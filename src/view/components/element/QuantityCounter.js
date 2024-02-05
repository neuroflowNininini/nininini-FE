import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../shared/theme';

const QuantityCounter = ({ initialQuantity, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    if (onQuantityChange) {
      onQuantityChange(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      if (onQuantityChange) {
        onQuantityChange(quantity - 1);
      }
    }
  };

  return (
    <TopWrap>
      <ButtonWrap onClick={decreaseQuantity}>-</ButtonWrap>
      <NumWrap>{quantity}</NumWrap>
      <ButtonWrap onClick={increaseQuantity}>+</ButtonWrap>
    </TopWrap>
  );
};
const TopWrap = styled.div`
  display: flex;
`;
const ButtonWrap = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px lightgray;
`;
const NumWrap = styled.div`
  width: 50px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px lightgray;
  font-weight: 600;
`;
export default QuantityCounter;
