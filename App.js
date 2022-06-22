import React from "react";
import ReactEcharts from "echarts-for-react";
import "./App.css";

function App() {
  const scoption = {
    title: {
      text: "Color Intensity and Hue",
      left: "center",
    },
    xAxis: {
      axisLabel: {
        formatter: "{value}",
      },
      name: "Color Intensity",
      nameLocation: "middle",
      nameGap: 30,
    },
    yAxis: {
      axisLabel: {
        formatter: "{value}",
      },
      name: "Hue",
      nameLocation: "middle",
      nameGap: 50,
    },
    series: [
      {
        symbolSize: 20,
        data: [
          [5.64, 1.04],
          [4.38, 1.05],
          [5.68, 1.03],
          [7.8, 0.86],
          [4.32, 1.04],
          [6.75, 1.05],
          [5.25, 1.02],
          [5.05, 1.06],
          [5.2, 1.08],
          [7.22, 1.01],
          [5.75, 1.25],
          [5, 1.17],
          [5.6, 1.15],
          [5.4, 1.25],
          [7.5, 1.2],
          [7.3, 1.28],
          [6.2, 1.07],
          [6.6, 1.13],
          [8.7, 1.23],
        ],
        type: "scatter",
      },
    ],
  };
  const option = {
    title: {
      text: "Alcohol category and average of Malic Acid",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "10%",
      right: "15%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["class 1", "class 2", "class 3"],
      axisTick: {
        alignWithLabel: true,
      },
    },
    yAxis: [
      {
        type: "value",
        axisLabel: {
          formatter: "{value}",
        },
        name: "Alcoloh class",
        nameLocation: "middle",
        nameGap: 50,
      },
    ],
    series: [
      {
        data: [13.83, 12.7, 13.15],
        type: "bar",
        barWidth: "20%",
      },
    ],
  };
  return (
    <div className="graph">
      <ReactEcharts option={scoption} />
      <ReactEcharts option={option} />
    </div>
  );
}
export default App;
