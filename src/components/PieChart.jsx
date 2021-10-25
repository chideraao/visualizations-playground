import React, { useEffect, useState } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import ChartData from "../assets/pie.json";

export function PieChart() {
  const [dataChart, setDataChart] = useState({});

  /**chart js styling options */
  const chartOptions = {
    /** tooltip styling and logic */
    hover: { mode: "nearest", intersect: false, axis: "x" }, //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Simple Pie Chart",
        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          family: '"Roboto", monospace',
          weight: "500",
          size: 18,
          lineHeight: 1,
        },
      },
      tooltip: {
        //basic styling of the tooltip(onHover)
        mode: "nearest", //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
        intersect: false, //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
        axis: "x",
        enabled: true,
        displayColors: false, //remove the tiny colored box in the tooltip label
        titleSpacing: 3,
        titleMarginBottom: 2,
        caretPadding: 6,
        caretSize: 4,
        padding: 8,
        backgroundColor: "rgb(255, 255, 255)",
        bodyAlign: "center",
        titleColor: "#333",
        titleFont: {
          family: '"Roboto", monospace',
          weight: "500",
          size: 18,
          lineHeight: 1,
        },

        xPadding: 12,
        yPadding: 12,
        titleAlign: "center",
        callbacks: {
          /** label color */
          labelColor: function (tooltipItem, chart) {
            return {
              borderColor: "rgb(5, 15, 25)",
              backgroundColor: "rgb(5, 15, 25)",
            };
          },

          labelTextColor: function (tooltipItem, chart) {
            return "#333";
          },
        },
      },
    },
    elements: {
      point: { radius: 0 }, //removes all the axis intersection points
      line: { tension: 0.4 }, //makes the chart a little less curvy ;)
    },

    scales: {
      x: {
        offset: false,
        beginAtZero: false,
        grid: {
          color: "transparent",
          display: false, //removes gridline display
          drawBorder: true,
        },
        distribution: "series",
        display: false,
        ticks: {
          //basic styling of the ticks(axis)
          fontSize: 18,
          lineHeight: 1.2,
          fontFamily: '"Roboto", sans-serif',
          fontWeight: "300",
          padding: 0,
          fontColor: "rgba(17, 51, 83, 0.3)",
          maxTicksLimit: 20,
          minRotation: 0,
          maxRotation: 0,
        },
      },

      y: {
        display: false,
        beginAtZero: true,

        ticks: {
          display: true,
        },
        grid: {
          color: "blue",
          display: false,
          drawBorder: true,
        },
      },
    },
  };

  useEffect(() => {
    /**creating empty arrays for the chart data and pushing the props gotten from home component */
    let data = [];
    let labels = [];

    ChartData.PieData.values.forEach((val) => {
      labels.push(val.id);
    });
    ChartData.PieData.values.forEach((val) => {
      data.push(val.field);
    });

    setDataChart({
      labels,
      datasets: [
        {
          type: "pie",
          label: "prices",
          data,
          borderColor: [
            "rgba(61, 75, 204)",
            "rgba(54, 134, 88)",
            "rgba(204, 106, 61)",
            "rgba(204, 61, 128)",
            "rgba(61, 152, 204)",
            "rgba(141, 18, 110)",
            "rgba(118, 141, 18)",
            "rgba(138, 80, 66)",
          ],
          fill: "origin",
          backgroundColor: [
            "rgba(61, 75, 204)",
            "rgba(54, 134, 88)",
            "rgba(204, 106, 61)",
            "rgba(204, 61, 128)",
            "rgba(61, 152, 204)",
            "rgba(141, 18, 110)",
            "rgba(118, 141, 18)",
            "rgba(138, 80, 66)",
          ],
          borderWidth: 1.7,
          hoverOffset: 40,
        },
      ],
    });
  }, []);

  return (
    <div className="chart-container">
      <Pie data={dataChart} options={chartOptions} />
    </div>
  );
}
export function Donut() {
  const [dataChart, setDataChart] = useState({});

  /**chart js styling options */
  const chartOptions = {
    /** tooltip styling and logic */
    hover: { mode: "nearest", intersect: false, axis: "x" }, //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Simple Donut Chart",
        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          family: '"Roboto", monospace',
          weight: "500",
          size: 18,
          lineHeight: 1,
        },
      },
      tooltip: {
        //basic styling of the tooltip(onHover)
        mode: "nearest", //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
        intersect: false, //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
        axis: "x",
        enabled: true,
        displayColors: false, //remove the tiny colored box in the tooltip label
        titleSpacing: 3,
        titleMarginBottom: 2,
        caretPadding: 6,
        caretSize: 4,
        padding: 8,
        backgroundColor: "rgb(255, 255, 255)",
        bodyAlign: "center",
        titleColor: "#333",
        titleFont: {
          family: '"Roboto", monospace',
          weight: "500",
          size: 18,
          lineHeight: 1,
        },

        xPadding: 12,
        yPadding: 12,
        titleAlign: "center",
        callbacks: {
          /** label color */
          labelColor: function (tooltipItem, chart) {
            return {
              borderColor: "rgb(5, 15, 25)",
              backgroundColor: "rgb(5, 15, 25)",
            };
          },

          labelTextColor: function (tooltipItem, chart) {
            return "#333";
          },
        },
      },
    },
    elements: {
      point: { radius: 0 }, //removes all the axis intersection points
      line: { tension: 0.4 }, //makes the chart a little less curvy ;)
    },

    scales: {
      x: {
        offset: false,
        beginAtZero: false,
        grid: {
          color: "transparent",
          display: false, //removes gridline display
          drawBorder: true,
        },
        distribution: "series",
        display: false,
        ticks: {
          //basic styling of the ticks(axis)
          fontSize: 18,
          lineHeight: 1.2,
          fontFamily: '"Roboto", sans-serif',
          fontWeight: "300",
          padding: 0,
          fontColor: "rgba(17, 51, 83, 0.3)",
          maxTicksLimit: 20,
          minRotation: 0,
          maxRotation: 0,
        },
      },

      y: {
        display: false,
        beginAtZero: true,

        ticks: {
          display: true,
        },
        grid: {
          color: "blue",
          display: false,
          drawBorder: true,
        },
      },
    },
  };

  useEffect(() => {
    /**creating empty arrays for the chart data and pushing the props gotten from home component */
    let data = [];
    let labels = [];

    ChartData.PieData.values.forEach((val) => {
      labels.push(val.id);
    });
    ChartData.PieData.values.forEach((val) => {
      data.push(val.field);
    });

    setDataChart({
      labels,
      datasets: [
        {
          type: "doughnut",
          label: "prices",
          data,
          borderColor: [
            "rgba(61, 75, 204)",
            "rgba(54, 134, 88)",
            "rgba(204, 106, 61)",
            "rgba(204, 61, 128)",
            "rgba(61, 152, 204)",
            "rgba(141, 18, 110)",
            "rgba(118, 141, 18)",
            "rgba(138, 80, 66)",
          ],
          fill: "origin",
          backgroundColor: [
            "rgba(61, 75, 204)",
            "rgba(54, 134, 88)",
            "rgba(204, 106, 61)",
            "rgba(204, 61, 128)",
            "rgba(61, 152, 204)",
            "rgba(141, 18, 110)",
            "rgba(118, 141, 18)",
            "rgba(138, 80, 66)",
          ],
          borderWidth: 1.7,
          hoverOffset: 40,
        },
      ],
    });
  }, []);

  return (
    <div className="chart-container">
      <Doughnut data={dataChart} options={chartOptions} />
    </div>
  );
}
