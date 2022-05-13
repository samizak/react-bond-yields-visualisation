import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { Symbols } from "./components/Symbols";
import PlotGraph from "./components/PlotGraph";
import "./App.css";

function App() {
  const [chartType, setSymbol] = useState("3D_Yield_Curve");

  return (
    <div className="App">
      <div className="symbol-search-div">
        <div className="symbol-search">
          <Autocomplete
            id="autocomplete-symbol-search"
            defaultValue={Symbols["3D_Yield_Curve"]}
            options={Object.keys(Symbols).map((key) => Symbols[key])}
            sx={{ width: "100%" }}
            onChange={(e, _value) =>
              setSymbol(
                Object.keys(Symbols).find((key) => Symbols[key] === _value)
              )
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </div>
      </div>

      <div className="graph-plot">
        <PlotGraph chartType={chartType} />
      </div>
    </div>
  );
}

export default App;
