// Loading.js
import React from 'react';
import Spinner from '../../../shared/gifs/Spin-1s-200px.gif';
import styled from 'styled-components';

export default function Loading() {
  return (
    <Background>
      <Img src={Spinner} />
    </Background>
  );
}

const Img = styled.img`
  width: 60px;
  margin: auto;
`;
const Background = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  width: calc(100vw - 40px);
  top: 24vh;
  padding: auto;
`;
