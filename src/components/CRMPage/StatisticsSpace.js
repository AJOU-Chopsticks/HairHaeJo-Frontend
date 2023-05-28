import React, { useState } from "react";
import MonthStatistics from "./MonthStatistics";
import GenderStatistics from "./GenderStatistics";
import AgeStatistics from "./AgeStatistics";
import MenuStatistics from "./MenuStatistics";
import RevisitStatistics from "./RevisitStatistics";

function StatisticsSpace() {
  const [reload, setReload] = useState(false);

  return (
    <div>
      <MonthStatistics reload={reload} setReload={setReload} />
      <GenderStatistics reload={reload} setReload={setReload} />
      <AgeStatistics reload={reload} setReload={setReload} />
      <MenuStatistics reload={reload} setReload={setReload} />
      <RevisitStatistics reload={reload} setReload={setReload} />
    </div>
  );
}

export default StatisticsSpace;
