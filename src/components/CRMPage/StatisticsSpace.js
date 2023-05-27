import React, { useState } from "react";
import StatisticsList from "./StatisticsList";
import Rechart from "./Rechart";

function StatisticsSpace() {
  const [reload, setReload] = useState(false);

  return (
    <div>
      <StatisticsList reload={reload} setReload={setReload} />
    </div>
  );
}

export default StatisticsSpace;
