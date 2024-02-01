import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import theme from "../../shared/theme";
import styled from "styled-components";
export default function ReviewBarChart() {
  const labels = ['5점', '4점', '3점', '2점', '1점']
  const options = {
    responsive: true,
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        display: false, // Y-축 값 숨기기
      },
    },
    layout: {
      padding: {
        left: 20, // 차트의 왼쪽 패딩 설정
        right: 20, // 차트의 오른쪽 패딩 설정
      },
    },
    barPercentage: 0.8, // 바의 너비(50%)
    categoryPercentage: 0.7, // 카테고리 너비(80%)
  };
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
  );


  const dataset = {
    labels,
    datasets: [
      {
        data: [1, 1, 0, 0, 0],
        borderWidth: 1
      }]
  };

  return (
    <div style={{ display: "block" }}>
      <Title>
        평점 비율
      </Title>
      <BarWrap>
        <Bar options={options} data={dataset} />
      </BarWrap>
    </div>

  )
}

const BarWrap = styled.div`
padding: 20px 10px 10px 10px;
width : 48vw;
`;
const Title = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.medium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
font-weight: 400;
`;