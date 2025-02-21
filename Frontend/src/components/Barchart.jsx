import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data }) => {
  const labels = data.map((item) => item.label);
  const scores = data.map((item) => item.score);
  const backgroundColors = data.map((item) =>
    item.label === "Real" ? "rgba(34, 197, 94, 0.8)" : "rgba(300, 68, 68, 0.9)"
  );
  const borderColors = data.map((item) =>
    item.label === "Real" ? "rgba(34, 197, 94, 1)" : "rgba(239, 68, 68, 1)"
  );

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: scores,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center m-auto">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          Fake vs Real Distribution
        </h2>
        <div className="h-64">
          <Doughnut data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;