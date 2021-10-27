import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import { Doughnut, Pie, PolarArea, Radar } from "react-chartjs-2";
import ChartData from "../assets/pie.json";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";

HighchartsMore(Highcharts);

export function PieChart() {
  const [dataChart, setDataChart] = useState({});

  /**chart js styling options */
  const chartOptions = {
    layout: {
      padding: 40,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Simple Pie Chart",
        padding: {
          top: 20,
          bottom: 20,
        },
        font: {
          family: '"Roboto", monospace',
          weight: "500",
          size: 18,
          lineHeight: 1,
        },
      },
      //tooltip styling and logic
      tooltip: {
        // basic styling of the tooltip(onHover)
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
          borderColor: ["rgb(255, 255, 255)"],
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
          borderWidth: 3,
          hoverOffset: 30,
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
    layout: {
      padding: 40,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Simple Donut Chart",
        padding: {
          top: 20,
          bottom: 20,
        },
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
          borderColor: ["rgb(255, 255, 255)"],
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
          hoverOffset: 30,
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

export function DoubleDonut() {
  const [dataChart, setDataChart] = useState({});

  /**chart js styling options */
  const chartOptions = {
    layout: {
      padding: 40,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Double Donut Chart",
        padding: {
          top: 20,
          bottom: 20,
        },
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

    scales: {
      x: {
        offset: false,
        beginAtZero: false,
        stacked: true,

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
        stacked: true,

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
    let dataTwo = [];
    let labels = [];

    ChartData.PieData.values.forEach((val) => {
      labels.push(val.id);
    });
    ChartData.PieData.values.forEach((val) => {
      data.push(val.field);
    });
    ChartData.PieData.values.forEach((val) => {
      dataTwo.push(val.field + Math.round(Math.random() * 10) + 1.5);
    });

    setDataChart({
      labels,
      datasets: [
        {
          type: "doughnut",
          label: "First Dataset",
          data,
          borderColor: ["rgb(255, 255, 255)"],
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
          hoverOffset: 30,
          rotation: 30,
        },
        {
          type: "doughnut",
          label: "Second Dataset",
          data: dataTwo,
          borderColor: ["rgb(255, 255, 255)"],
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
          hoverOffset: 30,
          rotation: 35,
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

export function RadarChart() {
  const [dataChart, setDataChart] = useState({});

  /**chart js styling options */
  const chartOptions = {
    layout: {
      padding: 40,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Radar Chart",
        padding: {
          top: 20,
          bottom: 20,
        },
        font: {
          family: '"Roboto", monospace',
          weight: "500",
          size: 18,
          lineHeight: 1,
        },
      },
      //tooltip styling and logic
      tooltip: {
        // basic styling of the tooltip(onHover)
        mode: "nearest", //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
        axis: "x",
        enabled: true,
        displayColors: true, //remove the tiny colored box in the tooltip label
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
              borderColor: tooltipItem.dataset.borderColor,
              backgroundColor: tooltipItem.dataset.borderColor,
            };
          },

          labelTextColor: function (tooltipItem, chart) {
            return "#333";
          },
        },
      },
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
    let dataTwo = [];
    let labels = [];

    ChartData.RadarData.values.forEach((val) => {
      if (val.category === "Allocated budget") {
        labels.push(val.key);
        data.push(val.value);
      }
    });
    ChartData.RadarData.values.forEach((val) => {
      if (val.category === "Actual Spending") {
        dataTwo.push(val.value);
      }
    });

    setDataChart({
      labels,
      datasets: [
        {
          type: "radar",
          label: "Allocated budget",
          data,
          borderColor: ["rgba(61, 75, 204)"],
          fill: "origin",
          backgroundColor: ["rgba(61, 75, 204,0.2)"],
          borderWidth: 1.7,
          hoverOffset: 30,
        },
        {
          type: "radar",
          label: "Actual spending",
          data: dataTwo,
          borderColor: ["rgba(141, 18, 110)"],
          fill: "origin",
          backgroundColor: ["rgba(141, 18, 110,.2)"],
          borderWidth: 1.7,
          hoverOffset: 30,
        },
      ],
    });
  }, []);

  return (
    <div className="chart-container">
      <Radar data={dataChart} options={chartOptions} />
    </div>
  );
}
export function PolarChart() {
  const [dataChart, setDataChart] = useState({});

  /**chart js styling options */
  const chartOptions = {
    layout: {
      padding: 40,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Polar Area Chart",
        padding: {
          top: 20,
          bottom: 20,
        },
        font: {
          family: '"Roboto", monospace',
          weight: "500",
          size: 18,
          lineHeight: 1,
        },
      },
      //tooltip styling and logic
      tooltip: {
        // basic styling of the tooltip(onHover)
        mode: "nearest", //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
        axis: "x",
        enabled: true,
        displayColors: true, //remove the tiny colored box in the tooltip label
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
              borderColor: tooltipItem.dataset.borderColor,
              backgroundColor: tooltipItem.dataset.borderColor,
            };
          },

          labelTextColor: function (tooltipItem, chart) {
            return "#333";
          },
        },
      },
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
    let dataTwo = [];
    let labels = [];

    ChartData.RadarData.values.forEach((val) => {
      if (val.category === "Allocated budget") {
        labels.push(val.key);
        data.push(val.value);
      }
    });
    ChartData.PolarData.values.forEach((val) => {
      dataTwo.push(val);
    });

    setDataChart({
      labels,
      datasets: [
        {
          type: "polarArea",
          label: "Actual spending",
          data: dataTwo,
          borderColor: [
            "rgba(141, 18, 110)",
            "rgba(61, 75, 204)",
            "rgba(189, 46, 10)",
            "rgba(26, 238, 72)",
            "rgba(21, 138, 216)",
            "rgba(96, 21, 216)",
          ],
          fill: "origin",
          backgroundColor: [
            "rgba(141, 18, 110,.4)",
            "rgba(61, 75, 204,0.4)",
            "rgba(189, 46, 10,0.4)",
            "rgba(26, 238, 72, 0.4)",
            "rgba(21, 138, 216, 0.4)",
            "rgba(96, 21, 216, 0.4)",
          ],
          borderWidth: 1.7,
          hoverOffset: 30,
        },
      ],
    });
  }, []);

  return (
    <div className="chart-container">
      <PolarArea data={dataChart} options={chartOptions} />
    </div>
  );
}

export function PolarLine() {
  let values = [];

  ChartData.PolarData.values.forEach((val) => values.push(val));

  let options = {
    chart: {
      polar: true,
    },
    title: {
      text: "Polar Line Chart",
    },

    xAxis: {
      tickInterval: 45,
      min: 0,
      max: 360,
      labels: {
        format: "{value}°",
      },
    },

    yAxis: {
      min: 0,
    },

    plotOptions: {
      series: {
        pointStart: 0,
        pointInterval: 45,
      },
      column: {
        pointPadding: 0,
        groupPadding: 0,
      },
    },

    colors: ["#4e4ed6"],

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      x: -70,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
      shadow: true,
    },

    series: [
      {
        type: "line",
        name: "Line",
        data: values,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div style={{ minWidth: "360px", maxWidth: "800px", margin: "1em auto" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
