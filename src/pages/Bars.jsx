import React from "react";
import {
  BarChart,
  GroupedBar,
  PopulationPyramid,
  StackedBar,
} from "../components/BarChart";

function Bars() {
  return (
    <div>
      <BarChart />
      <PopulationPyramid />
      <GroupedBar />
      <StackedBar />
    </div>
  );
}

export default Bars;
