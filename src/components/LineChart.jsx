import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  ALL_CHART,
  DAILY_CHART,
  MONTHLY_CHART,
  WEEKLY_CHART,
  YEARLY_CHART,
} from "../state/AppReducer";
import {
  ClickContext,
  CryptosContext,
  SparklineContext,
  UserDataContext,
} from "../state/context/AppContext";
import Loading from "./Loading";
import ChartData from "../assets/area.json";

const intlFormat = (num) => {
  return Intl.NumberFormat().format(num);
};
/** convert date from API to GMT standard */
const formatDate = (str) => {
  let newFormat = new Date(str);
  return newFormat.toUTCString();
};

export function LineChart() {
  const [dataChart, setDataChart] = useState({});

  /**chart js styling options */
  const chartOptions = {
    /** tooltip styling and logic */
    hover: { mode: "nearest", intersect: false, axis: "x" }, //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
    plugins: {
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
        backgroundColor: "rgb(5, 15, 25)",
        bodyAlign: "center",
        titleColor: "#fff",
        titleFont: {
          family: '"Roboto", monospace',
          weight: "500",
          size: 18,
          lineHeight: 1,
        },

        xPadding: 12,
        yPadding: 12,
        titleAlign: "center",
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
          backgroundColor: "rgb(86, 94, 190)",
          borderWidth: 1.7,
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

export function BTCChart() {
  const [sparkline, setSparkline] = useContext(SparklineContext);
  const [cryptos, setCryptos] = useContext(CryptosContext);
  const [state, dispatch] = useContext(ClickContext);
  const [dataChart, setDataChart] = useState({});
  const [userData, setUserData] = useContext(UserDataContext);
  const [arrIndex, setArrIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [option, setOption] = useState("1d");

  /**chart js styling options */
  const chartOptions = {
    interaction: {
      mode: "nearest",
    },
    /** tooltip styling and logic */
    hover: { mode: "nearest", intersect: false, axis: "x" }, //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        //basic styling of the tooltip(onHover)
        enabled: true,
        mode: "nearest", //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
        intersect: false, //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
        axis: "x",
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
          weight: "500",
          size: 18,
          lineHeight: 1,
        },

        callbacks: {
          /** label color */
          labelColor: function (tooltipItem, chart) {
            return {
              borderColor: "rgb(5, 15, 25)",
              backgroundColor: "rgb(5, 15, 25)",
            };
          },

          labelTextColor: function (tooltipItem, chart) {
            return "#90a1b8";
          },
          /** switching title and label positioning */
          title: (tooltipItem, data) => {
            return `${userData.currency.code} ${tooltipItem[0].formattedValue}`;
          },
          label: function (tooltipItem, data) {
            return tooltipItem["label"].slice(4, -7);
          },
        },
      },
    },
    elements: {
      point: { radius: 0 }, //removes all the axis intersection points
      line: { tension: 0.1 }, //makes the chart a little less curvy ;)
    },

    scales: {
      x: {
        offset: false,
        grid: {
          color: "transparent",
          display: false, //removes gridline display
          drawBorder: false,
        },
        distribution: "series",
        display: true,
        ticks: {
          //basic styling of the ticks(axis)
          display: true,
          fontSize: 18,
          lineHeight: 1.2,
          fontFamily: '"Roboto", sans-serif',
          fontWeight: "500",
          padding: 0,
          fontColor: "rgba(17, 51, 83, 0.3)",
          maxTicksLimit: 9,
          minRotation: 0,
          maxRotation: 0,
          callback: function (value, index, values) {
            /** logic to render different x-axis labels for different set of data */
            if (option === "1d") {
              return this.getLabelForValue(value).slice(17, -7);
            } else if (option === "7d" || option === "30d") {
              return this.getLabelForValue(value).slice(5, -18);
            }
            return this.getLabelForValue(value).slice(8, -12);
          },
        },
      },

      y: {
        display: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  useEffect(() => {
    /**creating empty arrays for the chart data and pushing the props gotten from home component */
    let prices = [];
    let timestamps = [];

    if (sparkline.length) {
      sparkline[arrIndex].prices.forEach((item) => {
        prices.push(Math.round(item[1] * 100) / 100);
      });
      sparkline[arrIndex].prices.forEach((item) => {
        timestamps.push(formatDate(item[0]));
      });
    }

    setDataChart({
      labels: timestamps,
      datasets: [
        {
          label: "prices",
          data: prices,
          borderColor: "#2764e7",
          fill: false,
          borderWidth: 1.5,
        },
      ],
    });
  }, [sparkline, arrIndex]);

  /** all onClick declarations below*/
  const handleDailyClick = (e) => {
    dispatch({ type: DAILY_CHART });
    setOption("1d");
    setArrIndex(e.target.value);
  };

  const handleWeeklyClick = (e) => {
    dispatch({ type: WEEKLY_CHART });
    setOption("7d");
    setArrIndex(e.target.value);
  };

  const handleMonthlyClick = (e) => {
    dispatch({ type: MONTHLY_CHART });
    setOption("30d");
    setArrIndex(e.target.value);
  };

  const handleYearlyClick = (e) => {
    dispatch({ type: YEARLY_CHART });
    setOption("365d");
    setArrIndex(e.target.value);
  };

  const handleAllClick = (e) => {
    dispatch({ type: ALL_CHART });
    setOption("all");
    setArrIndex(e.target.value);
  };

  return (
    <div className="sparkline-container">
      {cryptos.length ? (
        <div className="">
          <div className="crypto-name flex">
            <div className="img-container">
              <img src={cryptos[0].logo_url} alt="bitcoin logo" />
            </div>

            <div className="text-container">
              <h1>
                {cryptos[0].name} price&nbsp;
                <span>({cryptos[0].id})</span>
              </h1>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {sparkline.length ? (
        <div className="card">
          <div className="coins-header flex">
            <div className="coins-header-text flex">
              <span className="currency-code">{userData.currency.code}</span>
              <h1 className="flex">
                {intlFormat(Math.round(cryptos[0].price))} <span>.64</span>
              </h1>
              <span
                className={
                  option !== "all"
                    ? cryptos[0][`${option}`].price_change_pct * 100 >= 0
                      ? "gains"
                      : "loss"
                    : "gains"
                }
              >
                {option !== "all"
                  ? cryptos[0][`${option}`].price_change_pct * 100 > 0
                    ? `+${
                        Math.round(
                          cryptos[0][`${option}`].price_change_pct * 10000
                        ) / 100
                      }%`
                    : `${
                        Math.round(
                          cryptos[0][`${option}`].price_change_pct * 10000
                        ) / 100
                      }%`
                  : "+90,000.44%"}
              </span>
            </div>
            <div className="chart-duration">
              <ul className="flex">
                <li
                  value="0"
                  onClick={handleDailyClick}
                  className={option === "1d" ? "on-option" : ""}
                >
                  24H
                </li>
                <li
                  value="1"
                  onClick={handleWeeklyClick}
                  className={option === "7d" ? "on-option" : ""}
                >
                  1W
                </li>
                <li
                  value="2"
                  onClick={handleMonthlyClick}
                  className={option === "30d" ? "on-option" : ""}
                >
                  1M
                </li>
                <li
                  value="3"
                  onClick={handleYearlyClick}
                  className={option === "365d" ? "on-option" : ""}
                >
                  1Y
                </li>
                <li
                  value="4"
                  onClick={handleAllClick}
                  className={option === "all" ? "on-option" : ""}
                >
                  ALL
                </li>
              </ul>
            </div>
          </div>

          {isLoading ? (
            <div className="flex">
              <Loading />
            </div>
          ) : (
            <div className="chart-container">
              <Line data={dataChart} options={chartOptions} />
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
