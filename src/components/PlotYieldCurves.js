import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import Plot from "react-plotly.js";
import bondYields_data from "../data/bonds.csv";

export default function PlotYieldCurves() {
  const [bondYields, setBondYields] = useState([]);

  // Set default data
  useEffect(() => {
    d3.csv(bondYields_data).then((e) => setBondYields(e));
  }, []);

  if (bondYields.length === 0) return;

  const _layout = {
    scene: {
      type: "surface",
      xaxis: {
        type: "category",
        title: "",
        showgrid: true,
        zeroline: false,
      },
      yaxis: {
        type: "date",
        title: "",
        showgrid: true,
        zeroline: false,
      },
      zaxis: {
        title: "Yield",
        showgrid: true,
        zeroline: false,
        ticksuffix: "%",
      },
      aspectmode: "manual",
      aspectratio: {
        x: 2,
        y: 4,
        z: 2,
      },
      camera: {
        eye: { x: 2, y: 3, z: 1 },
        center: { x: 0, y: 0, z: -0.5 },
      },
    },
    title: "US Treasury Yield Curve",
    width: 1920,
    height: 1080,
    margin: {
      b: 60,
      l: 0,
      r: 0,
      t: 60,
    },
    autosize: false,
    showlegend: false,
  };

  const _x = [
    "1 Month",
    "3 Month",
    "6 Month",
    "1 Year",
    "2 Year",
    "3 Year",
    "5 Year",
    "7 Years",
    "10 Year",
    "20 Year",
    "30 Year",
  ];
  let _y = [];
  let _z = [];

  for (const x of bondYields) {
    let rowValues = Object.values(x);
    _y.push(rowValues.shift());
    _z.push(rowValues);
  }

  var trace = {
    name: "",
    x: _x,
    y: _y,
    zmax: 20,
    zmin: 0,
    z: _z,
    type: "surface",
    inherit: false,
    colorbar: {
      title: "z",
    },
    lighting: {
      ambient: 0.9,
      diffuse: 0,
      fresnel: 1,
      specular: 0,
      roughness: 1,
    },
    showscale: false,
    colorscale: [
      [0, "#EEF4F8"],
      [0.4, "#5B94B6"],
      [1, "#243D52"],
    ],
    connectgaps: false,
  };

  var wireframe = {
    type: "surface",
    x: _x,
    y: _y,
    z: _z,
    hidesurface: true,
    contours: {
      x: {
        show: true,
        color: "#black",
      },
      y: { show: false },
      z: { show: false },
    },
    showscale: false,
  };

  return (
    <Plot
      data={[trace, wireframe]}
      layout={_layout}
      useResizeHandler={true} // Make Chart responsive
    />
  );
}
