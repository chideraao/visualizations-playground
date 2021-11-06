// /* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { BTCChart } from "../components/HLC";
import {
  LineChart,
  WeatherChart,
  MultiLine,
  BoostModule,
  StackedArea,
} from "../components/LineChart";
import { SparklineContext } from "../state/context/AppContext";

const api = {
  base: "https://api.nomics.com/v1/currencies/ticker?",
  key: process.env.REACT_APP_NOMICS_KEY,
  sparklineBase: "https://api.coingecko.com/api/v3/coins/",
  zoneKey: process.env.REACT_APP_LOCATION_KEY,
  zoneBase: "https://api.ipgeolocation.io/ipgeo?",
};

function Lines() {
  const [sparkline, setSparkline] = useContext(SparklineContext);

  useEffect(() => {
    axios
      .get(`${api.zoneBase}apiKey=${api.zoneKey}&include=useragent`)
      .then((response) => {
        axios
          .all([
            axios.get(
              `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${response.data.currency.code}&days=720&interval=hourly`
            ),
          ])
          .then((ress) => {
            setSparkline(ress[0].data);
          })
          .catch((errr) => {
            console.log(errr);
          });
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {};
  }, [setSparkline]);

  return (
    <div className="container lines">
      <BTCChart splineData={sparkline} />
      <BoostModule />
      <WeatherChart />
      <StackedArea />
      <LineChart />
      <MultiLine />
    </div>
  );
}

export default Lines;
