import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import StockData from "../assets/stock.json";
import HollowCandlestick from "highcharts/modules/hollowcandlestick";
import HeikinAshi from "highcharts/modules/heikinashi";
import Indicators from "highcharts/indicators/indicators-all";
import DragPanes from "highcharts/modules/drag-panes";
import AnnotationsAdvanced from "highcharts/modules/annotations-advanced";
import PriceIndicator from "highcharts/modules/price-indicator";
import FullScreen from "highcharts/modules/full-screen";
import StockTools from "highcharts/modules/stock-tools";

import "../App.css";
HollowCandlestick(Highcharts);
HeikinAshi(Highcharts);

Indicators(Highcharts);
DragPanes(Highcharts);
AnnotationsAdvanced(Highcharts);
PriceIndicator(Highcharts);
FullScreen(Highcharts);
StockTools(Highcharts);

export function StockCharts({ market, ohlc }) {
  const [options, setOptions] = useState({
    chart: {
      backgroundColor: "#2f2c49",
      borderRadius: 15,
      height: 500,
    },

    title: {
      text: "Bitcoin 1y Candlestick & Volume",
      style: {
        color: "#fff",
      },
    },

    series: [],

    rangeSelector: {
      buttons: [
        {
          type: "month",
          count: 1,
          text: "1m",
          title: "View 1 month",
        },
        {
          type: "month",
          count: 4,
          text: "4m",
          title: "View 4 months",
        },
        {
          type: "month",
          count: 8,
          text: "8m",
          title: "View 8 months",
        },
        {
          type: "ytd",
          text: "YTD",
          title: "View year to date",
        },
        {
          type: "all",
          count: 1,
          text: "All",
          title: "View All",
        },
      ],
      buttonTheme: {
        // styles for the buttons
        fill: "none",
        stroke: "none",
        "stroke-width": 0,
        r: 8,
        style: {
          color: "#4F6C89",
          fontWeight: "bold",
        },
        states: {
          hover: {},
          select: {
            fill: "transparent",
            style: {
              color: "#D76F2A",
            },
          },
        },
      },
      inputBoxBorderColor: "#4F6C89",
      inputBoxWidth: 110,
      inputBoxHeight: 18,
      inputStyle: {
        color: "#4F6C89",
        fontWeight: "bold",
      },
      labelStyle: {
        color: "#cbd1d6",
        fontWeight: "bold",
      },
      selected: 5,
    },

    plotOptions: {
      line: {
        dashStyle: "dash",
      },
      series: {
        borderColor: "red",
        marker: {
          enabled: false,
          radius: 0,
        },
      },
      candlestick: {
        lineColor: "#FB1809",
        color: "#FB1809",
        upColor: "#4EA64A",
        upLineColor: "#4EA64A",
      },
      column: {
        color: "#405466",
      },
      sma: {
        lineWidth: 1,
      },
    },

    xAxis: {
      lineWidth: 0.1,
      tickColor: "#312e52",
      crosshair: {
        color: "#696777",
        dashStyle: "dash",
      },
    },

    yAxis: [
      {
        labels: {
          align: "right",
          x: -2,
        },
        height: "69%",
        crosshair: {
          dashStyle: "dash",
          color: "#696777",
        },

        resize: {
          enabled: true,
          lineWidth: 1,
          lineColor: "#312e52",
        },
        gridLineColor: "#312e52",
        lineWidth: 0,
        visible: true,
      },
      {
        labels: {
          align: "right",
          x: -3,
        },
        top: "69%",
        height: "31%",
        offset: 0,
        lineWidth: 0,
        crosshair: false,
        gridLineColor: "#312e52",
        visible: true,
      },
    ],

    tooltip: {
      shape: "rect",
      split: true,
      // shadow: false,
      // positioner: function (width, height, point) {
      //   var chart = this.chart,
      //     position;
      //   if (point.isHeader) {
      //     position = {
      //       x: Math.max(
      //         // Left side limit
      //         chart.plotLeft,
      //         Math.min(
      //           point.plotX + chart.plotLeft - width / 2,
      //           // Right side limit
      //           chart.chartWidth - width - chart.marginRight
      //         )
      //       ),
      //       y: point.plotY,
      //     };
      //   } else {
      //     position = {
      //       x: point.series.chart.plotLeft,
      //       y: point.series.yAxis.top - chart.plotTop,
      //     };
      //   }
      //   return position;
      // },
    },

    stockTools: {
      gui: {
        enabled: false,
      },
    },

    navigator: {
      enabled: true,
      height: 50,
      margin: 10,
      outlineColor: "#8380a5",
      handles: {
        backgroundColor: "#8380a5",
        borderColor: "#e9d5d5",
      },
      xAxis: {
        gridLineColor: "#8380a5",
      },
    },

    scrollbar: {
      barBackgroundColor: "#8380a5",
      barBorderColor: "#8380a5",
      barBorderRadius: 8,
      buttonArrowColor: "#fff",
      buttonBackgroundColor: "#405466",
      rifleColor: "#fff",
      trackBackgroundColor: "#e9d5d5",
    },

    credits: {
      enabled: false,
    },
  });

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      series: [
        {
          type: "candlestick",
          name: "Bitcoin",
          id: "bitcoin",
          data: ohlc,
        },
        {
          type: "column",
          name: "Volume",
          id: "volume",
          data: market.total_volumes,
          yAxis: 1,
        },
        {
          type: "bb",
          id: "overlay",
          linkedTo: "bitcoin",
          yAxis: 0,
        },
        {
          type: "sma",
          id: "overlay",
          linkedTo: "bitcoin",
          yAxis: 0,
        },
      ],
    }));
  }, [ohlc, market]);

  return (
    <div style={{ minWidth: "360px", maxWidth: "800px", margin: "1em auto" }}>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
}

export function CandleSticks() {
  var data = StockData.AAPLStock;

  var ohlc = [],
    volume = [],
    dataLength = data.length,
    i = 0;

  for (i; i < dataLength; i += 1) {
    ohlc.push([
      data[i][0], // the date
      data[i][1], // open
      data[i][2], // high
      data[i][3], // low
      data[i][4], // close
    ]);

    volume.push([
      data[i][0], // the date
      data[i][5], // the volume
    ]);
  }
  var options = {
    chart: {
      backgroundColor: "#212121",
      borderRadius: 15,
      height: 500,
    },

    title: {
      text: "AAPL Historical",
      style: {
        color: "#fff",
      },
    },

    series: [
      {
        type: "candlestick",
        name: "AAPL",
        id: "aapl",
        data: ohlc,
        tooltip: {
          pointFormat:
            '<span style="color:{point.color}">●</span>' +
            "<b> {series.name} </b>" +
            "Open: {point.open} " +
            "High: {point.high} " +
            "Low: {point.low} " +
            "Close: {point.close}",
        },
      },
      {
        type: "column",
        name: "Volume",
        id: "volume",
        data: volume,
        yAxis: 1,
      },
      {
        type: "pc",
        id: "overlay",
        linkedTo: "aapl",
        yAxis: 0,
      },
    ],

    rangeSelector: {
      buttonTheme: {
        // styles for the buttons
        fill: "none",
        stroke: "none",
        "stroke-width": 0,
        r: 8,
        style: {
          color: "#4F6C89",
          fontWeight: "bold",
        },
        states: {
          hover: {},
          select: {
            fill: "transparent",
            style: {
              color: "#D76F2A",
            },
          },
        },
      },
      inputBoxBorderColor: "#4F6C89",
      inputBoxWidth: 110,
      inputBoxHeight: 18,
      inputStyle: {
        color: "#4F6C89",
        fontWeight: "bold",
      },
      labelStyle: {
        color: "#cbd1d6",
        fontWeight: "bold",
      },
      selected: 1,
    },

    plotOptions: {
      line: {
        dashStyle: "dash",
      },
      series: {
        borderColor: "red",
        marker: {
          enabled: false,
          radius: 0,
        },
      },
      candlestick: {
        lineColor: "#FB1809",
        color: "#FB1809",
        upColor: "#4EA64A",
        upLineColor: "#4EA64A",
      },
      column: {
        color: "#435564",
      },
      pc: {
        color: "#e2c623",
      },
    },

    xAxis: {
      lineWidth: 0.1,
      tickColor: "#2f2952",
      crosshair: {
        color: "#8e8aac",
        dashStyle: "dash",
      },
    },

    yAxis: [
      {
        labels: {
          align: "right",
          x: -2,
        },
        height: "69%",
        crosshair: {
          dashStyle: "dash",
          snap: false,
          color: "#696777",
        },

        resize: {
          enabled: true,
          lineWidth: 1,
          lineColor: "#211d44",
        },
        gridLineColor: "#211d44",
        lineWidth: 0,
        visible: true,
      },
      {
        labels: {
          align: "right",
          x: -3,
        },
        top: "69%",
        height: "31%",
        offset: 0,
        lineWidth: 0,
        crosshair: {
          dashStyle: "dash",
          snap: false,
          color: "#696777",
        },
        gridLineColor: "#211d44",
        visible: true,
      },
    ],

    tooltip: {
      split: true,
      shape: "rect",
      shadow: false,
      positioner: function (width, height, point) {
        var chart = this.chart,
          position;

        if (point.isHeader) {
          position = {
            x: Math.max(
              // Left side limit
              0,
              Math.min(
                point.plotX + chart.plotLeft - width / 2,
                // Right side limit
                chart.chartWidth - width - chart.marginRight
              )
            ),
            y: point.plotY,
          };
        } else {
          position = {
            x: point.series.chart.plotLeft,
            y: point.series.yAxis.top - chart.plotTop,
          };
        }

        return position;
      },
    },

    stockTools: {
      gui: {
        enabled: false,
      },
    },

    navigator: {
      enabled: true,
      height: 50,
      margin: 10,
      outlineColor: "#8380a5",
      handles: {
        backgroundColor: "#8380a5",
        borderColor: "#e9d5d5",
      },
      xAxis: {
        gridLineColor: "#8380a5",
      },
    },

    scrollbar: {
      barBackgroundColor: "#8380a5",
      barBorderColor: "#8380a5",
      barBorderRadius: 8,
      buttonArrowColor: "#fff",
      buttonBackgroundColor: "#405466",
      rifleColor: "#fff",
      trackBackgroundColor: "#e9d5d5",
    },

    credits: {
      enabled: false,
    },
  };

  return (
    <div style={{ minWidth: "360px", maxWidth: "800px", margin: "1em auto" }}>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
}
