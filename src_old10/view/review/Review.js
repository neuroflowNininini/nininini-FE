import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import StarRate from '../components/StarRate';
import styled from 'styled-components';
import ReviewBarChart from '../components/ReviewBarChart';
import ReviewList from './ReviewList';
import theme from '../../shared/theme';
export default function Review({ reviewsData }) {

  return (
    <div style={{ display: "block" }}>
      <TopWrap>
        <StarWrap>
          <Title>
            구매자 총 평점
          </Title>
          <Rate>
            4.9
          </Rate>
          <div style={{ diplay: "flex", justifyContent: "center" }}>
            <StarRate AVR_RATE={95} width={20} height={19} />
          </div>
        </StarWrap>
        <BarWrap>
          <ReviewBarChart />
        </BarWrap>
      </TopWrap>
      <ReviewList />
    </div>
  );
}
const Title = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.medium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
font-weight: 400;
`;
const Rate = styled.div`
padding : 3px;
font-size: 40px;
font-weight: 600;
margin : 15px 5px 15px 5px;
`;
const TopWrap = styled.div`
display: flex;
justify-content: space-around;
padding : 20px 10px;
border-bottom: solid 1px #e2e2e2;
`;
const StarWrap = styled.div`
display: block;
justify-content : center;
width:40%;
`
const BarWrap = styled.div`
display: flex;
justify-content : center;
width:40%;
`