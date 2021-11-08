import React, { useEffect, useState } from "react";
import { Bubble, Scatter } from "react-chartjs-2";
import ChartData from "../assets/scatter.json";

export function ScatterPlot() {
  const [dataChart, setDataChart] = useState({});

  /**chart js styling options */
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    color: "#fff",
    layout: {
      padding: 40,
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: "Height Versus Weight of 507 Individuals by Gender",
        padding: {
          top: 20,
          bottom: 20,
        },
        color: "#fff",
        font: {
          family: '"Roboto", monospace',
          weight: "500",
          size: 18,
          lineHeight: 1,
        },
      },
      /** tooltip styling and logic */
      tooltip: {
        //basic styling of the tooltip(onHover)
        mode: "nearest", //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
        axis: "x",
        enabled: true,
        intersect: true,
        displayColors: false, //remove the tiny colored box in the tooltip label
        titleSpacing: 3,
        titleMarginBottom: 2,
        caretPadding: 6,
        caretSize: 4,
        padding: 8,
        backgroundColor: "rgb(5, 15, 25)",
        bodyAlign: "center",
        titleColor: "#fff",
        titleFont: {
          family: '"Roboto", monospace',
          weight: "700",
          size: 14,
          lineHeight: 1,
        },

        xPadding: 12,
        yPadding: 12,
        titleAlign: "left",
        callbacks: {
          /** label color */
          labelColor: function (tooltipItem, chart) {
            return {
              backgroundColor: "rgb(255, 255, 255)",
              borderColor: "rgb(255, 255, 255)",
            };
          },

          labelTextColor: function (tooltipItem, chart) {
            return "#fff";
          },
          title: (tooltipItem, data) => {
            return ` ${tooltipItem[0].dataset.label}`;
          },
          label: function (tooltipItem, data) {
            return `${tooltipItem.raw[0]}cm, ${tooltipItem.raw[1]}kg`;
          },
        },
      },
    },

    scales: {
      x: {
        offset: false,
        beginAtZero: false,
        title: {
          display: true,
          text: "Height(cm)",
          font: {
            family: '"Roboto", monospace',
            weight: "400",
            size: 13,
            lineHeight: 1,
          },
        },

        grid: {
          color: "transparent",
          display: false, //removes gridline display
          drawBorder: true,
        },
        distribution: "series",
        display: true,
      },

      y: {
        display: true,
        beginAtZero: false,

        ticks: {
          display: true,
        },
        grid: {
          display: true,
          drawBorder: false,
          color: "#201d3a",
        },
        title: {
          display: true,
          text: "Weight(kg)",
          font: {
            family: '"Roboto", monospace',
            weight: "400",
            size: 13,
            lineHeight: 1,
          },
        },
      },
    },
  };

  useEffect(() => {
    /**creating empty arrays for the chart data and pushing the props gotten from home component */
    let data = [];
    let dataTwo = [];
    let labels = [];

    ChartData.ScatterData.values.female.forEach((val) => {
      data.push(val);
    });
    ChartData.ScatterData.values.male.forEach((val) => {
      dataTwo.push(val);
    });

    setDataChart({
      labels,
      datasets: [
        {
          type: "scatter",
          label: "Female",
          data,
          backgroundColor: ["rgba(61, 75, 204,.3)"],
          hoverBackgroundColor: "rgb(61, 75, 204)",
          pointStyle: "rectRot",
          borderWidth: 1.7,
        },
        {
          type: "scatter",
          label: "Male",
          data: dataTwo,
          backgroundColor: ["rgba(255, 99, 132,.3)"],
          hoverBackgroundColor: "rgb(255, 99, 132)",

          borderWidth: 1.7,
        },
      ],
    });
  }, []);

  return (
    <div className="chart-container">
      <Scatter data={dataChart} options={chartOptions} />
    </div>
  );
}

export function ScatterRegression() {
  const [dataChart, setDataChart] = useState({});

  /**chart js styling options */
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    color: "#fff",
    layout: {
      padding: 40,
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: "Scatter Plot with Regression Line",
        padding: {
          top: 20,
          bottom: 20,
        },
        color: "#fff",
        font: {
          family: '"Roboto", monospace',
          weight: "500",
          size: 18,
          lineHeight: 1,
        },
      },
      /** tooltip styling and logic */
      tooltip: {
        //basic styling of the tooltip(onHover)
        mode: "nearest", //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
        axis: "x",
        enabled: true,
        intersect: true,
        displayColors: false, //remove the tiny colored box in the tooltip label
        titleSpacing: 3,
        titleMarginBottom: 2,
        caretPadding: 6,
        caretSize: 4,
        padding: 8,
        backgroundColor: "rgb(5, 15, 25)",
        bodyAlign: "center",
        titleColor: "#fff",
        titleFont: {
          family: '"Roboto", monospace',
          weight: "700",
          size: 14,
          lineHeight: 1,
        },

        xPadding: 12,
        yPadding: 12,
        titleAlign: "left",
        callbacks: {
          /** label color */
          labelColor: function (tooltipItem, chart) {
            return {
              backgroundColor: "rgb(255, 255, 255)",
              borderColor: "rgb(255, 255, 255)",
            };
          },

          labelTextColor: function (tooltipItem, chart) {
            return "#fff";
          },
          title: (tooltipItem, data) => {
            return ` ${tooltipItem[0].dataset.label}`;
          },
          label: function (tooltipItem, data) {
            return `${tooltipItem.raw[0]}cm, ${tooltipItem.raw[1]}kg`;
          },
        },
      },
    },

    scales: {
      x: {
        offset: false,
        beginAtZero: false,
        title: {
          display: true,
          text: "Height(cm)",
          font: {
            family: '"Roboto", monospace',
            weight: "400",
            size: 13,
            lineHeight: 1,
          },
        },

        grid: {
          color: "transparent",
          display: false, //removes gridline display
          drawBorder: true,
        },
        distribution: "series",
        display: true,
      },

      y: {
        display: true,
        beginAtZero: false,

        ticks: {
          display: true,
        },
        grid: {
          display: true,
          drawBorder: false,
          color: "#201d3a",
        },
        title: {
          display: true,
          text: "Weight(kg)",
          font: {
            family: '"Roboto", monospace',
            weight: "400",
            size: 13,
            lineHeight: 1,
          },
        },
      },
    },
  };

  useEffect(() => {
    /**creating empty arrays for the chart data and pushing the props gotten from home component */
    let data = [];
    let dataTwo = [];
    let labels = [];

    ChartData.ScatterData.values.female.forEach((val) => {
      data.push(val);
    });
    ChartData.ScatterData.values.male.forEach((val) => {
      dataTwo.push(val);
    });

    setDataChart({
      labels,
      datasets: [
        {
          type: "scatter",
          label: "Female",
          data,
          backgroundColor: ["#5864cc4c"],
          hoverBackgroundColor: "rgb(61, 75, 204)",
          pointStyle: "rectRot",
          borderWidth: 1.7,
        },
        {
          type: "scatter",
          label: "Male",
          data: dataTwo,
          backgroundColor: ["rgba(255, 99, 132,.3)"],
          hoverBackgroundColor: "rgb(255, 99, 132)",

          borderWidth: 1.7,
        },
        {
          type: "line",
          label: "Best Fit",
          data: [
            [150, 45],
            [195, 95],
          ],
          borderColor: ["rgb(29, 218, 86)"],
          pointStyle: "line",
          borderWidth: 1.7,
        },
      ],
    });
  }, []);

  return (
    <div className="chart-container">
      <Scatter data={dataChart} options={chartOptions} />
    </div>
  );
}
export function BubblePlot() {
  const [dataChart, setDataChart] = useState({});

  /**chart js styling options */
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    color: "#fff",
    layout: {
      padding: 40,
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: "Bubble Chart",
        padding: {
          top: 20,
          bottom: 20,
        },
        color: "#fff",
        font: {
          family: '"Roboto", monospace',
          weight: "500",
          size: 18,
          lineHeight: 1,
        },
      },
      /** tooltip styling and logic */
      tooltip: {
        //basic styling of the tooltip(onHover)
        mode: "nearest", //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
        axis: "x",
        enabled: true,
        intersect: true,
        displayColors: false, //remove the tiny colored box in the tooltip label
        titleSpacing: 3,
        titleMarginBottom: 2,
        caretPadding: 6,
        caretSize: 4,
        padding: 8,
        backgroundColor: "rgb(5, 15, 25)",
        bodyAlign: "left",
        titleColor: "#fff",
        titleFont: {
          family: '"Roboto", monospace',
          weight: "700",
          size: 14,
          lineHeight: 1,
        },

        xPadding: 12,
        yPadding: 12,
        titleAlign: "left",
        callbacks: {
          /** label color */
          labelColor: function (tooltipItem, chart) {
            return {
              backgroundColor: "rgb(255, 255, 255)",
              borderColor: "rgb(255, 255, 255)",
            };
          },

          labelTextColor: function (tooltipItem, chart) {
            return "#fff";
          },
          title: (tooltipItem, data) => {
            return ` ${tooltipItem[0].raw.country}`;
          },
          label: function (tooltipItem, data) {
            return [
              `Fat intake: ${tooltipItem.raw["x"]}g`,
              `Sugar intake: ${tooltipItem.raw["y"]}g`,
              `Obesity(adults): ${tooltipItem.raw["r"]}%`,
            ];
          },
        },
      },
    },

    scales: {
      x: {
        position: { x: 72.5 },
        offset: false,
        beginAtZero: false,
        title: {
          display: true,
          text: "Safe fat Intake(50g/day)",
          align: "end",
          font: {
            family: '"Roboto", monospace',
            weight: "500",
            size: 12,
            lineHeight: 1,
          },
        },

        grid: {
          display: false, //removes gridline display
          drawBorder: true,
          borderColor: "#232323",
        },
        ticks: {
          display: false,
        },
        distribution: "series",
        display: true,
      },

      y: {
        position: { y: 110 },
        display: true,
        beginAtZero: false,

        ticks: {
          display: false,
        },
        title: {
          display: true,
          text: "Safe Sugar Intake(67.5g/day)",
          align: "center",
          font: {
            family: '"Roboto", monospace',
            weight: "500",
            size: 12,
            lineHeight: 1,
          },
        },
        grid: {
          display: false,
          drawBorder: true,
          borderColor: "#232323",
        },
      },
    },
  };

  useEffect(() => {
    /**creating empty arrays for the chart data and pushing the props gotten from home component */
    let data = [];

    ChartData.BubbleData.forEach((val) => {
      data.push(val);
    });

    setDataChart({
      datasets: [
        {
          type: "bubble",
          label: "Sugar and fat intake per country",
          data,
          backgroundColor: ["rgba(61, 75, 204,.3)"],
          hoverBackgroundColor: "rgb(61, 75, 204)",
          pointStyle: "circle",
          borderWidth: 1.7,
        },
      ],
    });
  }, []);

  return (
    <div className="chart-container">
      <Bubble data={dataChart} options={chartOptions} />
    </div>
  );
}
