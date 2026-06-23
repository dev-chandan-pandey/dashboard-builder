import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartWidget({
  widget,
}) {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
    ],
    datasets: [
      {
        label: "Revenue",
        data: widget.data,
      },
    ],
  };

  return widget.chartType === "bar" ? (
    <Bar data={data} />
  ) : (
    <Line data={data} />
  );
}