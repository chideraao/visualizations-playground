import React from "react";
import {
  Donut,
  DoubleDonut,
  PieChart,
  PolarChart,
  PolarLine,
  RadarChart,
} from "../components/PieChart";

function Pie() {
  return (
    <div>
      <PieChart />
      <RadarChart />
      <Donut />
      <PolarLine />
      <PolarChart />
      <DoubleDonut />
    </div>
  );
}

export default Pie;
