import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
export default function ChartData(props) {
  const data = {
    labels: props.label,
    datasets: [
      {
        data: props.dataArray,
        backgroundColor: [
          "#00CB93",
          "#A600CB",
          "#00ACCB",
          "#EEF600",
          "#F68100",
        ],
      },
    ],
  };

  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );
  const options = {
    responsive: true,
    plugins: {
      display: true,
      text: "Marks",
    },
  };

  return (
    <div>
      {props.type === "bar" ? (
        <Bar data={data} options={options} />
      ) : (
        <Doughnut data={data} options={options} />
      )}
    </div>
  );
}
