"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const DoughutChart = () => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [2000, 4500, 10000],
        backgroundColor: ["#0747b6", "#2255d8", "#2f91fa"],
      },
    ],
    labels: ["Bank of America", "Chase", "Wells Fargo"],
  };
  return (
    <Doughnut
      data={data}
      options={{
        plugins: {
          legend: {
            display: true,
          },
          title: {
            display: true,
            text: "Bank Accounts",
            font: {
              size: 16,
            },
          },
        },
      }}
    />
  );
};

export default DoughutChart;
