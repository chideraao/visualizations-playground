import React from "react";
import {
  BarChart,
  GradientKey,
  GroupedBar,
  PopulationPyramid,
  StackedBar,
} from "../components/BarChart";

function Bars() {
  return (
    <div>
      <BarChart />
      <GradientKey />
      <PopulationPyramid />
      <GroupedBar />
      <StackedBar />
    </div>
  );
}

export default Bars;
