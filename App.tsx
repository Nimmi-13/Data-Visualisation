import React from "react";
import ReactEcharts from "echarts-for-react";
import "./App.css";

function App() {                    // Main function to call in index file 

    // The constant for scatter chart of color intensity and hue
    const scoption = {
        title: {
            text: "Color Intensity and Hue",              // title of the chart
            left: "center",
        },
        xAxis: {
            axisLabel: {                                  // label of x axis
                formatter: "{value}",
            },
            name: "Color Intensity",
            nameLocation: "middle",
            nameGap: 30,
        },
        yAxis: {                                            // label of y axis
            axisLabel: {
                formatter: "{value}",
            },
            name: "Hue",
            nameLocation: "middle",
            nameGap: 50,
        },
        series: [
            {
                symbolSize: 20,                             // size of the circles on the charts
                data: [
                    [5.64, 1.04],                             // data of both color itensity and hue Left side data is shown on X axis (color intensity) and right side on Y axis (hue)
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
                type: "scatter",                    // defines the type of chart
            },
        ],
    };

    // Bar graph of alcohol and Malic Acid constant
    const option = {
        title: {                                                               // title of the chart
            text: "Alcohol category and average of Malic Acid",
            left: "center",
        },
        tooltip: {                                          //use of hover the mouse effect on bars
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        grid: {                                             // it defines the margin between chart and page
            left: "10%",
            right: "15%",
            bottom: "3%",
            containLabel: true,
        },
        xAxis: {
            type: "category",
            data: ["class 1", "class 2", "class 3"],              // X axis category
            axisTick: {
                alignWithLabel: true,
            },
        },
        yAxis: [
            {
                type: "value",                                  // defines Y axis label
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
                data: [13.83, 12.7, 13.15],                               // data shown by bars, value on Y axis
                type: "bar",                                             // defines the type of chart
                barWidth: "20%",                                           // defines width of the bars on chart
            },
        ],
    };
    // use to call the functions constant and render them
    return (
        <div className="graph">

            <ReactEcharts option={scoption} />
            <ReactEcharts option={option} />
        </div>
    );
}
export default App;
