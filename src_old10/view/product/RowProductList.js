import styled from 'styled-components';
import ProdCard from './ProdCard';
import { useState } from 'react';

export default function RowProductList({ dummy }) {

  return (
    <>
      <ProductListWrap>
        <ProdCard cardData={dummy[0]} />
        <ProdCard cardData={dummy[1]} />
        <ProdCard cardData={dummy[2]} />
        <ProdCard cardData={dummy[3]} />
      </ProductListWrap>
    </>
  )
}

const ProductListWrap = styled.div`
  display : flex;
  overflow: auto;
  overflow-x:auto;
  margin-top:20px;
  margin-bottom:30px;
`;