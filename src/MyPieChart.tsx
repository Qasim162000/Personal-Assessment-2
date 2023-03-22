import React, { useEffect, useRef } from "react";
// import { Chart, ChartConfiguration } from "chart.js";
import Chart, { ChartConfiguration } from "chart.js/auto";

interface MyPieChartProps {
  value1: any;
  value2: any;
}

function MyPieChart({ value1, value2 }: MyPieChartProps) {
  const canvasRef = useRef<any>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const chartConfig: ChartConfiguration = {
      type: "pie",
      data: {
        labels: ["Value 1", "Value 2"],
        datasets: [
          {
            data: [value1, value2],
            backgroundColor: ["#37bc6c", "rgb(255, 0, 0)"],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "My Pie Chart",
          },
        },
      },
    };

    const chart = new Chart(canvas, chartConfig);

    return () => {
      chart.destroy();
    };
  }, [value1, value2]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        maxWidth: "280px",
        maxHeight: "280px",
        width: "100%",
        height: "100%",
        margin: "0px auto 50px auto",
      }}
    />
  );
}

export default MyPieChart;
