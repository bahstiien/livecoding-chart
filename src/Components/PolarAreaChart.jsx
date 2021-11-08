import React from "react";
import { PolarArea } from "react-chartjs-2";
import data from "../data";

const PolarAreaChart = () => {
  console.log(data);
  return (
    <div className="chart-container">
      <h2>Polar AreaChart</h2>
      <PolarArea
        data={{
          labels: ["alpha", "bravo", "charlie"],
          datasets: [
            {
              label: "Tab3",
              data: data.chart3,
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
            },
          ],
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: 5,
                },
              },
            ],
          },
          // remove box
          legend: {
            labels: {
              boxWidth: 0,
            },
          },
        }}
      />
    </div>
  );
};

export default PolarAreaChart;
