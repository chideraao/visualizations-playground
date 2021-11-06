/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import ChartData from "../assets/area.json";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export function LineChart() {
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
        text: "Area Chart",
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
        display: true,
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
        display: true,
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

    ChartData.AreaData.values.forEach((val) => {
      labels.push(val.u);
    });
    ChartData.AreaData.values.forEach((val) => {
      data.push(val.v);
    });

    setDataChart({
      labels,
      datasets: [
        {
          type: "line",
          label: "prices",
          data,
          borderColor: "rgb(61, 75, 204)",
          fill: "origin",
          backgroundColor: "rgba(86, 94, 190,0.2)",
          hoverBackgroundColor: "rgb(61, 75, 204)",
          borderWidth: 1,
        },
      ],
    });
  }, []);

  return (
    <div className="chart-container">
      <Line data={dataChart} options={chartOptions} />
    </div>
  );
}

export function StackedArea() {
  const options = {
    chart: {
      type: "areaspline",
      backgroundColor: "#1c1b2b",
      borderRadius: 15,
      height: 600,
    },

    title: {
      text: "Engagement Last 14 years",
      align: "left",
      padding: 40,
      style: {
        color: "#fff",
      },
    },

    plotOptions: {
      series: {
        stacking: "normal",

        label: {
          connectorAllowed: false,
        },
        pointStart: 2008,
        pointInterval: 1,
        borderColor: "red",
        marker: {
          enabled: false,
          radius: 0,
        },
      },
      area: {
        fillColor: null,
      },
    },

    colors: ["#4196db", "#fb09aa"],

    xAxis: {
      gridLineWidth: 1,
      lineWidth: 0.1,
      tickColor: "#1c1b2b",
      crosshair: false,
      gridLineColor: "#201d3a",
    },

    yAxis: {
      gridLineColor: "#201d3a",
      lineWidth: 0.3,

      title: {
        text: "",
      },
      labels: {
        format: "{value}",
      },
    },

    legend: {
      layout: "horizontal",
      align: "center",
      itemStyle: {
        color: "#fff",
      },
      verticalAlign: "bottom",
      margin: 30,
    },

    series: [
      {
        name: "Modules passed",
        data: [
          510, 420, 610, 520, 490, 525, 625, 495, 530, 520, 520, 510, 0, 5,
        ],
      },
      {
        name: "All submissions",
        data: [100, 120, 110, 130, 90, 105, 125, 85, 100, 96, 100, 120, 0],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div
      className="highcharts-container"
      style={{ minWidth: "360px", maxWidth: "800px", margin: "1em auto" }}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export function MultiLine() {
  const options = {
    chart: {
      type: "line",
      backgroundColor: "#1c1b2b",
      borderRadius: 15,
      height: 600,
    },
    title: {
      text: "Annual GDP Growth(%)",
      style: {
        color: "#fff",
      },
    },
    subtitle: {
      text: "Source: <a style='color: #fff;' href='https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG'> worldbank.org</a> ",
      style: {
        color: "#fff",
      },
    },

    yAxis: {
      title: {
        text: "Annual Growth",
      },
      labels: {
        format: "{value}%",
      },
      gridLineColor: "#201d3a",
      lineWidth: 0.7,
    },

    xAxis: {
      gridLineWidth: 1,
      lineWidth: 0.7,
      tickColor: "#1c1b2b",
      crosshair: false,
      gridLineColor: "#201d3a",
    },

    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      margin: 30,
      itemStyle: {
        color: "#fff",
      },
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2006,
        pointInterval: 1,
      },
      column: {
        colorByPoint: true,
      },
    },
    colors: ["#4e4ed6", "#ca2626", "#8edcf0", "#ec11da", "#54832e"],

    series: [
      {
        name: "World",
        data: [
          3.899, 4.329, 1.859, -1.666, 4.31, 3.127, 2.52, 2.672, 2.874, 2.919,
          2.606, 3.281, 3.034, 2.336, -3.593,
        ],
      },
      {
        name: "United States",
        data: [
          3.153, 2.855, -0.137, -2.537, 2.564, 1.551, 2.25, 1.842, 2.526, 3.076,
          1.711, 2.333, 2.996, -2.161, -3.486,
        ],
      },
      {
        name: "Russia",
        data: [
          6.4, 8.2, 8.5, 5.2, -4.8, 4.5, 4.3, 4.024, 1.775, 0.736, -1.973,
          1.826, 2.807, 2.033, -2.951,
        ],
      },
      {
        name: "China",
        data: [
          11.395, 12.721, 14.231, 9.651, 9.939, 10.636, 7.864, 7.776, 7.426,
          7.041, 6.849, 6.947, 6.75, 5.95, 2.336,
        ],
      },
      {
        name: "Nigeria",
        data: [
          6.439, 6.059, 6.591, 6.764, 8.037, 8.006, 5.308, 4.23, 6.671, 6.31,
          2.653, -1.617, 0.806, 1.923, -1.794,
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div
      className="highcharts-container"
      style={{ minWidth: "360px", maxWidth: "800px", margin: "1em auto" }}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
export function WeatherChart() {
  const options = {
    chart: {
      type: "spline",
      backgroundColor: "#1c1b2b",
      borderRadius: 15,
      height: 600,
    },
    title: {
      text: "Average Monthly Temperatures by Cities(°C)",
      style: {
        color: "#fff",
      },
    },
    subtitle: {
      text: "Source: <a style='color:#fff' href='https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature'> en.wikipedia.org</> ",
      style: {
        color: "#fff",
      },
    },
    colors: ["#4e4ed6", "#8edcf0", "#ec11da", "#54832e"],

    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      gridLineWidth: 0,
      lineWidth: 0.4,
      tickColor: "#1c1b2b",
      crosshair: false,
      gridLineColor: "#201d3a",
    },

    yAxis: {
      title: {
        text: "Temperature",
      },
      labels: {
        format: "{value}°",
      },
      gridLineColor: "#201d3a",
      lineWidth: 0,
    },

    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      margin: 30,
      itemStyle: {
        color: "#fff",
      },
    },

    series: [
      {
        name: "Moscow",
        data: [
          {
            y: -16.5,
            marker: {
              symbol: `url(https://www.highcharts.com/samples/graphics/snow.png)`,
            },
          },
          -14.8,
          -7.6,
          2.3,
          11.8,
          17.1,
          19.4,
          16.6,
          10.2,
          3.1,
          -6.9,
          -14.0,
        ],
      },
      {
        name: "Dubai",
        data: [
          18.7,
          19.3,
          22.3,
          26.1,
          29.9,
          {
            y: 32.2,
            marker: {
              symbol:
                "url(https://www.highcharts.com/samples/graphics/sun.png)",
            },
          },
          34.4,
          34.4,
          32.1,
          28.7,
          24.3,
          20.6,
        ],
      },
      {
        name: "Washington, DC",
        data: [
          {
            y: 2.3,
            marker: {
              symbol: `url(https://www.highcharts.com/samples/graphics/snow.png)`,
            },
          },
          3.9,
          8.3,
          13.8,
          {
            y: 18.9,
            marker: {
              symbol:
                "url(https://www.highcharts.com/samples/graphics/sun.png)",
            },
          },
          24.1,
          26.6,
          25.7,
          21.7,
          15.3,
          9.8,
          4.3,
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div
      className="highcharts-container"
      style={{ minWidth: "360px", maxWidth: "800px", margin: "1em auto" }}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export function BoostModule() {
  function getData(n) {
    var arr = [],
      i,
      x,
      a,
      b,
      c,
      spike;
    for (
      i = 0, x = Date.UTC(new Date().getUTCFullYear(), 0, 1) - n * 36e5;
      i < n;
      i = i + 1, x = x + 36e5
    ) {
      if (i % 100 === 0) {
        a = 2 * Math.random();
      }
      if (i % 1000 === 0) {
        b = 2 * Math.random();
      }
      if (i % 10000 === 0) {
        c = 2 * Math.random();
      }
      if (i % 50000 === 0) {
        spike = 10;
      } else {
        spike = 0;
      }
      arr.push([x, 2 * Math.sin(i / 100) + a + b + c + spike + Math.random()]);
    }
    return arr;
  }
  var n = 5000,
    data = getData(n);

  var options = {
    chart: {
      zoomType: "x",
      backgroundColor: "#1c1b2b",
      borderRadius: 15,
      height: 600,
    },

    title: {
      text: "Demonstrating Boost Module with " + n + " random points",
      style: {
        color: "#fff",
      },
    },

    subtitle: {
      text: `Boost module used to render large amounts of data. Click and drag
      desired area to zoom in.`,
      style: {
        color: "#fff",
      },
    },

    tooltip: {
      valueDecimals: 2,
    },

    xAxis: {
      type: "datetime",
      gridLineColor: "#201d3a",
      lineWidth: 0.5,
      tickColor: "#1c1b2b",
    },

    yAxis: {
      gridLineColor: "#201d3a",
      lineWidth: 0,
    },

    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      margin: 30,
      itemStyle: {
        color: "#fff",
      },
    },

    series: [
      {
        data: data,
        lineWidth: 0.5,
        name: "Hourly data points",
      },
    ],

    colors: ["#8a27fc"],

    credits: {
      enabled: false,
    },
  };

  return (
    <div>
      <p></p>
      <div
        className="highcharts-container"
        style={{ minWidth: "360px", maxWidth: "800px", margin: "1em auto" }}
      >
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}
