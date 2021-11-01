import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";

export function OHLCChart({ hlc }) {
  const [options, setOptions] = useState({
    chart: {
      backgroundColor: "#1c1b2b",
      borderRadius: 15,
      height: 600,
    },

    title: {
      text: "OHLC & MACD Oscillator",
      style: {
        color: "#fff",
      },
    },

    series: [],

    rangeSelector: {
      buttons: [
        {
          type: "minute",
          count: 1,
          text: "1d",
          title: "View 1 day",
        },
        {
          type: "day",
          count: 2,
          text: "2d",
          title: "View 2 days",
        },
        {
          type: "day",
          count: 7,
          text: "7d",
          title: "View 7 days",
        },
        {
          type: "all",
          count: 1,
          text: "All",
          title: "View all",
        },
      ],
      selected: 3,
      allButtonsEnabled: true,
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
      ohlc: {
        lineColor: "#FB1809",
        color: "#FB1809",
        upColor: "#4EA64A",
        upLineColor: "#4EA64A",
      },
      macd: {
        color: "#b9b938",
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
        height: "80%",
        crosshair: {
          dashStyle: "dash",
          color: "#696777",
        },
        resize: {
          enabled: true,
          lineWidth: 2,
          lineColor: "#1d1c30",
        },
        gridLineColor: "#201d3a",
        lineWidth: 0,
        visible: true,
      },
      {
        top: "80%",
        height: "20%",
        gridLineColor: "#201d3a",
      },
    ],

    tooltip: {
      split: true,
      shape: "rect",
      valueDecimals: 2,

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
  });

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      series: [
        {
          type: "ohlc",
          name: "Ethereum",
          id: "ethereum",
          data: hlc,
        },
        {
          type: "macd",
          id: "oscillator",
          linkedTo: "ethereum",
          yAxis: 1,
        },
      ],
    }));
  }, [hlc]);

  return (
    <div
      style={{
        minWidth: "360px",
        maxWidth: "800px",
        margin: "1em auto",
        marginBottom: "2rem",
      }}
    >
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
}

export function HLCChart({ ohlc }) {
  const [options, setOptions] = useState({
    chart: {
      backgroundColor: "#1c1b2b",
      borderRadius: 15,
      height: 600,
    },

    title: {
      text: "OHLC vs HLC & DMI Oscillator",
      style: {
        color: "#fff",
      },
    },

    series: [],

    rangeSelector: {
      buttons: [
        {
          type: "minute",
          count: 1,
          text: "1d",
          title: "View 1 day",
        },
        {
          type: "day",
          count: 2,
          text: "2d",
          title: "View 2 days",
        },
        {
          type: "day",
          count: 7,
          text: "7d",
          title: "View 7 days",
        },
        {
          type: "all",
          count: 1,
          text: "All",
          title: "View all",
        },
      ],
      selected: 3,
      allButtonsEnabled: true,
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
      ohlc: {
        lineColor: "#FB1809",
        color: "#FB1809",
        upColor: "#4EA64A",
        upLineColor: "#4EA64A",
      },
      hlc: {
        lineColor: "#FB1809",
        color: "#FB1809",
        upColor: "#4EA64A",
        upLineColor: "#4EA64A",
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
        height: "40%",
        crosshair: {
          dashStyle: "dash",
          color: "#696777",
          snap: false,
        },
        resize: {
          enabled: true,
          lineWidth: 2,
          lineColor: "#1d1c30",
        },
        gridLineColor: "#201d3a",
        lineWidth: 0,
        visible: true,
      },
      {
        labels: {
          align: "right",
          x: -2,
        },
        top: "40%",
        height: "40%",
        crosshair: {
          dashStyle: "dash",
          color: "#696777",
          snap: false,
        },
        resize: {
          enabled: true,
          lineWidth: 2,
          lineColor: "#1d1c30",
        },
        gridLineColor: "#201d3a",
        lineWidth: 0,
        visible: true,
      },
      {
        top: "80%",
        height: "20%",
        gridLineColor: "#201d3a",
      },
    ],

    tooltip: {
      split: true,
      shape: "rect",
      valueDecimals: 2,

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
  });

  useEffect(() => {
    let hlc = [];

    ohlc.forEach((val) => {
      hlc.push([
        val[0], // the date
        null, // open
        val[2], // high
        val[3], // low
        val[4], // close
      ]);
    });

    setOptions((prevState) => ({
      ...prevState,
      series: [
        {
          type: "ohlc",
          name: "Ethereum OHLC",
          id: "ethereum",
          data: ohlc,
          yAxis: 0,
        },
        {
          type: "ohlc",
          name: "Ethereum HLC",
          id: "ethereumhlc",
          data: hlc,
          tooltip: {
            pointFormat:
              '<span style="color:{point.color}">●</span> ' +
              "<b> {series.name}</b> " +
              "High: {point.high} " +
              "Low: {point.low} " +
              "Close: {point.close}",
          },
          yAxis: 1,
        },
        {
          type: "dmi",
          id: "oscillator",
          linkedTo: "ethereum",
          yAxis: 2,
        },
      ],
    }));
  }, [ohlc]);

  return (
    <div
      style={{
        minWidth: "360px",
        maxWidth: "800px",
        margin: "1em auto",
        marginBottom: "2rem",
      }}
    >
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
}

export function HeikenAshi({ heikin, market }) {
  const [options, setOptions] = useState({
    chart: {
      backgroundColor: "#1c1b2b",
      borderRadius: 15,
      height: 600,
    },

    title: {
      text: "Heikin Ashi & Bollinger Bands",
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
      allButtonsEnabled: false,
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
      heikinashi: {
        lineColor: "#FB1809",
        color: "#FB1809",
        upColor: "#4EA64A",
        upLineColor: "#4EA64A",
      },
      column: {
        color: "#435564",
      },
      bb: {
        lineWidth: 1,
        lineColor: "#20a0b1",
        bottomLine: {
          styles: {
            lineWidth: 0.5,
            lineColor: "#fcfc27",
          },
        },
        topLine: {
          styles: {
            lineWidth: 0.5,
            lineColor: "#fcfc27",
          },
        },
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
          color: "#696777",
        },

        resize: {
          enabled: true,
          lineWidth: 2,
          lineColor: "#1d1c30",
        },
        gridLineColor: "#201d3a",
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
        gridLineColor: "#201d3a",
        visible: true,
      },
    ],

    tooltip: {
      split: true,
      shadow: false,
      shape: "rect",
      valueDecimals: 2,

      positioner: function (width, height, point) {
        var chart = this.chart,
          position;
        if (point.isHeader) {
          position = {
            x: Math.max(
              // Left side limit
              chart.plotLeft,
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
  });

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      series: [
        {
          type: "heikinashi",
          name: "Ethereum",
          id: "ethereum",
          data: heikin,
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
          name: "Bollinger Bands",
          id: "overlay",
          linkedTo: "ethereum",
          yAxis: 0,
        },
      ],
    }));
  }, [heikin, market]);

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
