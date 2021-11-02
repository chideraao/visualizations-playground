import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import ChartData from "../assets/stock.json";
import React from "react";

export function DepthChart() {
  const options = {
    chart: {
      type: "area",
      zoomType: "xy",
      backgroundColor: "#1c1b2b",
      height: 600,
    },
    title: {
      text: "Market Depth",
      style: {
        color: "#fff",
      },
    },
    xAxis: {
      minPadding: 0,
      maxPadding: 0,
      plotLines: [
        {
          color: "#2f2952",
          value: 0.1523,
          width: 1,
          label: {
            text: "Actual price",
            rotation: 90,
            style: {
              color: "#4F6C89",
            },
          },
        },
      ],
      lineWidth: 0.1,
      tickColor: "#1c1b2b",
      crosshair: {
        color: "#696777",
        dashStyle: "dash",
      },
      title: {
        text: "Price",
        style: {
          color: "#4F6C89",
        },
      },
    },
    yAxis: [
      {
        // lineWidth: 1,
        gridLineWidth: 1,
        title: null,
        tickWidth: 1,
        tickLength: 5,
        tickPosition: "inside",
        labels: {
          align: "left",
          x: 8,
        },
        crosshair: {
          dashStyle: "dash",
          color: "#696777",
        },
        gridLineColor: "#201d3a",
        lineWidth: 0,
        tickColor: "#2f2952",
      },
      {
        opposite: true,
        linkedTo: 0,
        gridLineWidth: 0,
        title: null,
        tickWidth: 1,
        tickLength: 5,
        tickPosition: "inside",
        labels: {
          align: "right",
          x: -8,
        },
        crosshair: {
          dashStyle: "dash",
          color: "#696777",
        },
        gridLineColor: "#201d3a",
        lineWidth: 0,
        tickColor: "#2f2952",
      },
    ],
    legend: {
      enabled: false,
    },
    plotOptions: {
      area: {
        fillOpacity: 0.2,
        lineWidth: 1,
        step: "center",
      },
    },
    tooltip: {
      headerFormat:
        '<span style="font-size=10px;">Price: {point.key}</span><br/>',
      valueDecimals: 2,
    },
    series: [
      {
        name: "Bids",
        data: ChartData.DepthData.bids,
        color: "#4EA64A",
      },
      {
        name: "Asks",
        data: ChartData.DepthData.asks,
        color: "#FB1809",
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
