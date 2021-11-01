import axios from "axios";
import React, { useEffect, useState } from "react";
import { HeikenAshi, HLCChart, OHLCChart } from "../components/HLC.jsx";
import {
  CandleSticks,
  CandlesticksvHeikin,
  StockCharts,
} from "../components/OHLCCharts";

function CandleStick() {
  const [OHLC, setOHLC] = useState([]);
  const [market, setMarket] = useState([]);
  const [HLC, setHLC] = useState([]);
  const [heikin, setHeikin] = useState([]);
  const [ethMarket, setEthMarket] = useState([]);

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
          `https://api.coingecko.com/api/v3/coins/ethereum/ohlc?vs_currency=usd&days=14`
        ),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/ethereum/ohlc?vs_currency=usd&days=365`
        ),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=365`
        ),
      ])
      .then((res) => {
        setMarket(res[0].data);
        setOHLC(res[1].data);
        setHLC(res[2].data);
        setHeikin(res[3].data);
        setEthMarket(res[4].data);
      });
  }, []);

  return (
    <div>
      <OHLCChart hlc={HLC} />
      <CandleSticks />
      <HeikenAshi heikin={heikin} market={ethMarket} />
      <HLCChart ohlc={HLC} />
      <CandlesticksvHeikin ohlc={OHLC} />
      <StockCharts market={market} ohlc={OHLC} />
    </div>
  );
}

export default CandleStick;
