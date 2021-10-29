import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";

export function OHLCChart({ hlc }) {
  const [options, setOptions] = useState({
    stockTools: {
      gui: {
        enabled: false,
      },
    },
    rangeSelector: {
      buttons: [
        {
          type: "minute",
          count: 1,
          text: "1m",
        },
        {
          type: "hour",
          count: 1,
          text: "1h",
        },
        {
          type: "day",
          count: 1,
          text: "1D",
        },
      ],
      allButtonsEnabled: true,
      selected: 5,
    },

    title: {
      text: "Bitcoin Historical",
    },

    yAxis: [
      {
        labels: {
          align: "right",
          x: -3,
        },
        title: {
          text: "OHLC",
        },
        height: "100%",
        lineWidth: 2,
        resize: {
          enabled: true,
        },
      },
    ],

    tooltip: {
      split: true,
    },

    series: [
      {
        type: "ohlc",
        name: "Bitcoin",
        data: [],
        dataGrouping: {
          units: [
            [
              "week", // unit name
              [1], // allowed multiples
            ],
            ["month", [1, 2, 3, 4, 6]],
          ],
        },
      },
    ],
    credits: {
      enabled: false,
    },
  });

  console.log(hlc);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      series: [{ ...prevState.series[0], data: hlc }],
    }));
  }, [hlc]);
  console.log(hlc);

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
