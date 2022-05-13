import React from "react";

import Plot_3D_YieldCurves from "./Plot_3D_YieldCurves";
import Plot_2D_YieldCurves from "./Plot_2D_YieldCurves";

export default function PlotGraph({ chartType }) {
  let _component = {
    "3D_Yield_Curve": <Plot_3D_YieldCurves />,
    "2D_Yield_Curve": <Plot_2D_YieldCurves />,
  };

  console.log(chartType);

  return _component[chartType];
}
