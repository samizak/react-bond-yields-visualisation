import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import Plot from "react-plotly.js";
import bondYields_data from "../data/bonds.csv";

export default function Plot_2D_YieldCurves() {
  const [bondYields, setBondYields] = useState([]);

  const arrayColumn = (arr, n) => arr.map((x) => x[n]);

  // Set default data
  useEffect(() => {
    d3.csv(bondYields_data).then((e) => setBondYields(e));
  }, []);

  if (bondYields.length === 0) return;

  let data = [];

  let bondMaturities = Object.keys(bondYields[0]).slice(1);
  let _x = arrayColumn(bondYields, "date");

  for (let i = 0; i < Object.keys(bondYields[0]).length - 1; i++) {
    const trace = {
      type: "scatter",
      mode: "lines",
      name: bondMaturities[i],
      x: _x,
      y: arrayColumn(bondYields, bondMaturities[i]),
    };

    data.push(trace);
  }

  var layout = {
    title: "US Treasury Yield Curve",
    width: 1920,
    height: 1080,
  };

  return (
    <Plot
      data={data}
      layout={layout}
      useResizeHandler={true} // Make Chart responsive />;
    />
  );
}
