import React, { useState } from "react";
import MonthStatistics from "./MonthStatistics";

function StatisticsSpace() {
  const [reload, setReload] = useState(false);

  return (
    <div>
      <MonthStatistics reload={reload} setReload={setReload} />
    </div>
  );
}

export default StatisticsSpace;
