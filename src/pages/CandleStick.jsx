import axios from "axios";
import React, { useEffect, useState } from "react";
import { OHLCChart } from "../components/HLC.jsx";
import { CandleSticks, StockCharts } from "../components/OHLCCharts";

function CandleStick() {
  const [OHLC, setOHLC] = useState([]);
  const [market, setMarket] = useState([]);
  const [HLC, setHLC] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365`
        ),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=365`
        ),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=1`
        ),
      ])
      .then((res) => {
        setMarket(res[0].data);
        setOHLC(res[1].data);
        setHLC(res[2].data);
      });
  }, []);

  console.log(OHLC);

  return (
    <div>
      <OHLCChart hlc={HLC} />
      <StockCharts market={market} ohlc={OHLC} />
      <CandleSticks market={market} ohlc={OHLC} />
    </div>
  );
}

export default CandleStick;
