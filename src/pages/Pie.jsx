import React from "react";
import {
  Donut,
  DoubleDonut,
  PieChart,
  RadarChart,
} from "../components/PieChart";

function Pie() {
  return (
    <div>
      <PieChart />
      <Donut />
      {/* <DoubleDonut /> */}
      <RadarChart />
    </div>
  );
}

export default Pie;
