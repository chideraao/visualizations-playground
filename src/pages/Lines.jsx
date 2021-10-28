/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useContext, useEffect } from "react";
import {
  LineChart,
  BTCChart,
  WeatherChart,
  MultiLine,
  BoostModule,
  StackedArea,
} from "../components/LineChart";
import {
  CryptosContext,
  SparklineContext,
  UserDataContext,
} from "../state/context/AppContext";

const api = {
  base: "https://api.nomics.com/v1/currencies/ticker?",
  key: process.env.REACT_APP_NOMICS_KEY,
  sparklineBase: "https://api.coingecko.com/api/v3/coins/",
  zoneKey: process.env.REACT_APP_LOCATION_KEY,
  zoneBase: "https://api.ipgeolocation.io/ipgeo?",
};

/** Getting UTC data for API calls */

let currentDate = new Date();
let currentUNIX = Math.floor(currentDate.getTime() / 1000);

let WeekDate = new Date();

let past7 = WeekDate.getDate() - 7;
WeekDate.setDate(past7);
let weekUNIX = Math.floor(WeekDate.getTime() / 1000);

let date24hr = new Date();

let past24 = date24hr.getDate() - 1;
date24hr.setDate(past24);
let dayUNIX = Math.floor(date24hr.getTime() / 1000);

let dateMonth = new Date();

let pastMonth = dateMonth.getDate() - 30;
dateMonth.setDate(pastMonth);
let monthUNIX = Math.floor(dateMonth.getTime() / 1000);

let date365 = new Date();

let past365 = date365.getDate() - 366;
date365.setDate(past365);
let yearUNIX = Math.floor(date365.getTime() / 1000);

function Lines() {
  const [sparkline, setSparkline] = useContext(SparklineContext);
  const [cryptos, setCryptos] = useContext(CryptosContext);
  const [userData, setUserData] = useContext(UserDataContext);

  useEffect(() => {
    axios
      .get(`${api.zoneBase}apiKey=${api.zoneKey}&include=useragent`)
      .then((response) => {
        setUserData(response.data);
        const fetchCalls = (url, setState, retries = 7) => {
          fetch(url)
            .then((res) => {
              // check if successful. If so, return the response transformed to json
              if (res.ok) {
                return res.json();
              }
              // else, return a call to fetchRetry
              if (retries > 0) {
                return fetchCalls(url, setState, retries - 1);
              } else {
                throw new Error(res);
              }
            })
            .then((data) => {
              if (data !== undefined) {
                setState(data);
                axios
                  .all([
                    axios.get(
                      `${api.sparklineBase}bitcoin/market_chart/range?vs_currency=${response.data.currency.code}&from=${dayUNIX}&to=${currentUNIX}`
                    ),
                    axios.get(
                      `${api.sparklineBase}bitcoin/market_chart/range?vs_currency=${response.data.currency.code}&from=${weekUNIX}&to=${currentUNIX}`
                    ),
                    axios.get(
                      `${api.sparklineBase}bitcoin/market_chart/range?vs_currency=${response.data.currency.code}&from=${monthUNIX}&to=${currentUNIX}`
                    ),
                    axios.get(
                      `${api.sparklineBase}bitcoin/market_chart/range?vs_currency=${response.data.currency.code}&from=${yearUNIX}&to=${currentUNIX}`
                    ),
                    axios.get(
                      `${api.sparklineBase}bitcoin/market_chart/range?vs_currency=${response.data.currency.code}&from=1313625600&to=${currentUNIX}`
                    ),
                  ])
                  .then((ress) => {
                    setSparkline((prevState) => {
                      return [...prevState, ress[0].data];
                    });
                    setSparkline((prevState) => {
                      return [...prevState, ress[1].data];
                    });
                    setSparkline((prevState) => {
                      return [...prevState, ress[2].data];
                    });
                    setSparkline((prevState) => {
                      return [...prevState, ress[3].data];
                    });
                    setSparkline((prevState) => {
                      return [...prevState, ress[4].data];
                    });
                  })
                  .catch((errr) => {
                    console.log(errr);
                  });
              }
              // Do something with the response
            })
            .catch((error) => {
              console.log(error);
            });
        };
        fetchCalls(
          `${api.base}key=${api.key}&ids=BTC&convert=${response.data.currency.code}&interval=1d,7d,30d,365d`,
          setCryptos
        );
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {};
  }, [setCryptos, setSparkline, setUserData]);

  return (
    <div className="container">
      <BTCChart />
      <StackedArea />
      <BoostModule />
      <WeatherChart />
      <LineChart />
      <MultiLine />
    </div>
  );
}

export default Lines;
