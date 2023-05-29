import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart(props) {
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  let labels = props.label;
  let backgroundColor = "rgba(153, 102, 255, 0.2)";
  let borderColor = "rgb(153, 102, 255)";

  const data = {
    labels,
    datasets: [
      {
        label: props.name,
        data: props.data,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Bar
      options={options}
      data={data}
      className="border border-dark"
      height={190}
    />
  );
}
