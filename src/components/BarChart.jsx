import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import ChartData from "../assets/bar.json";

export function BarChart() {
  const [dataChart, setDataChart] = useState({});

  /**chart js styling options */
  const chartOptions = {
    /** tooltip styling and logic */
    hover: { mode: "nearest", intersect: false, axis: "x" }, //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
    plugins: {
      title: {
        display: true,
        text: "Simple Bar Chart",
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
    legend: {
      display: false,
    },
    scales: {
      x: {
        offset: true, //adds padding to the beginning and end of map
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
        beginAtZero: false,

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

    ChartData.BarData.values.forEach((val) => {
      labels.push(val.category);
    });
    ChartData.BarData.values.forEach((val) => {
      data.push(val.amount);
    });

    setDataChart({
      labels,
      datasets: [
        {
          type: "bar",
          label: "values",
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
            "rgba(61, 75, 204, 0.2)",
            "rgba(54, 134, 88, 0.2)",
            "rgba(204, 106, 61, 0.2)",
            "rgba(204, 61, 128, 0.2)",
            "rgba(61, 152, 204, 0.2)",
            "rgba(141, 18, 110, 0.2)",
            "rgba(118, 141, 18, 0.2)",
            "rgba(138, 80, 66, 0.2)",
          ],
          borderWidth: 1.2,
        },
      ],
    });
  }, []);
  return (
    <div className="chart-container">
      <Bar data={dataChart} options={chartOptions} />
    </div>
  );
}

export function StackedBar() {
  const [dataChart, setDataChart] = useState({});

  /**chart js styling options */
  const chartOptions = {
    /** tooltip styling and logic */
    hover: { mode: "nearest", intersect: false, axis: "x" }, //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
    plugins: {
      title: {
        display: true,
        text: "Stacked Bar Chart",
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
    legend: {
      display: false,
    },
    scales: {
      x: {
        offset: true, //adds padding to the beginning and end of map
        beginAtZero: false,
        stacked: true,
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
        beginAtZero: false,
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

    ChartData.StackedBar.values.forEach((val) => {
      if (val.c === 0) {
        data.push(val.y);
        labels.push(val.x);
      }
    });
    ChartData.StackedBar.values.forEach((val) => {
      if (val.c === 1) {
        dataTwo.push(val.y);
      }
    });
    ChartData.StackedBar.values.forEach((val) => {
      if (val.c === 2) {
        dataTwo.push(val.y);
      }
    });

    setDataChart({
      labels,
      datasets: [
        {
          type: "bar",
          label: "values 2",
          data: dataTwo,
          fill: "origin",
          backgroundColor: ["rgb(97, 206, 152)"],
          borderWidth: 1.2,
        },
        {
          type: "bar",
          label: "values",
          data,
          fill: "origin",
          backgroundColor: ["rgba(97, 206, 152,0.5)"],
          borderWidth: 1.2,
        },
        {
          type: "bar",
          label: "values 3",
          data: dataTwo,
          fill: "origin",
          backgroundColor: ["rgb(84, 117, 228)"],
          borderWidth: 1.2,
        },
      ],
    });
  }, []);
  return (
    <div className="chart-container">
      <Bar data={dataChart} options={chartOptions} />
    </div>
  );
}

export function PopulationPyramid() {
  let categories = [];
  let male = [];
  let female = [];

  ChartData.PyramidData.values.forEach((val) => categories.push(val.Age));
  ChartData.PyramidData.values.forEach((val) => male.push(val.M));
  ChartData.PyramidData.values.forEach((val) => female.push(val.F));

  let options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Population pyramid for United States, 2020",
    },
    subtitle: {
      text: 'Source: <a href="https://www.populationpyramid.net/united-states-of-america/2020/">PopulationPyramid.net </a>',
    },
    accessibility: {
      point: {
        valueDescriptionFormat: "{index}. Age {xDescription}, {value}%.",
      },
    },
    xAxis: [
      {
        categories,
        reversed: false,
        labels: {
          step: 1,
        },
        accessibility: {
          description: "Age (female)",
        },
      },
      {
        // mirror axis on right side
        opposite: true,
        reversed: false,
        categories,
        linkedTo: 0,
        labels: {
          step: 1,
        },
        accessibility: {
          description: "Age (male)",
        },
      },
    ],
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        formatter: function () {
          return Math.abs(this.value / 1000000) + "M";
        },
      },
      accessibility: {
        description: "Total population by age",
        rangeDescription: "Range: 0 to 12 Million",
      },
    },

    plotOptions: {
      series: {
        stacking: "normal",
      },
      column: {
        colorByPoint: true,
      },
    },
    colors: ["#4e4ed6", "#54832e"],

    tooltip: {
      formatter: function () {
        return (
          "<b>" +
          this.series.name +
          ", age " +
          this.point.category +
          "</b><br/>" +
          "Population: " +
          Highcharts.numberFormat(Math.abs(this.point.y))
        );
      },
    },
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
        name: "Female",
        data: female,
      },
      {
        name: "Male",
        data: male,
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
export function GroupedBar() {
  let zero = [];
  let one = [];
  let two = [];
  let three = [];

  ChartData.Grouped.values.forEach((val) => {
    if (val.position === 0) {
      zero.push(val.value);
    }
  });
  ChartData.Grouped.values.forEach((val) => {
    if (val.position === 1) {
      one.push(val.value);
    }
  });
  ChartData.Grouped.values.forEach((val) => {
    if (val.position === 2) {
      two.push(val.value);
    }
  });
  ChartData.Grouped.values.forEach((val) => {
    if (val.position === 3) {
      three.push(val.value);
    }
  });

  let options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Grouped Bar Chart",
    },

    xAxis: { categories: ["A", "B", "C"] },

    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        overflow: "justify",
      },
    },

    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },

    tooltip: {
      formatter: function () {
        return (
          "<b>" +
          this.series.name +
          "</b><br/>" +
          "value: " +
          Highcharts.numberFormat(Math.abs(this.point.y))
        );
      },
    },

    series: [
      {
        name: "0",
        data: zero,
      },
      {
        name: "1",
        data: one,
      },
      {
        name: "2",
        data: two,
      },
      {
        name: "3",
        data: three,
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