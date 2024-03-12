import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
export default function ReviewBarChart({ ratiosData }: { ratiosData: number[] }) {
  const labels = ['5점', '4점', '3점', '2점', '1점'];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
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

  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

  const dataset = {
    labels,
    datasets: [
      {
        data: ratiosData,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar
        options={options}
        data={dataset}
      />
    </div>
  );
}
