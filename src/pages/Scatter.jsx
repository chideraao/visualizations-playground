import React from "react";
import {
  BubblePlot,
  ScatterPlot,
  ScatterRegression,
} from "../components/ScatterChart";

function Scatter() {
  return (
    <div>
      <ScatterPlot />
      <BubblePlot />
      <ScatterRegression />
    </div>
  );
}

export default Scatter;
