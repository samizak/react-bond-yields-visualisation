import React from "react";
import "./App.css";

import PlotYieldCurves from "./components/PlotYieldCurves.js";

function App() {
  return (
    <div className="App">
      <div className="graph-plot">
        <PlotYieldCurves />
      </div>
    </div>
  );
}

export default App;
