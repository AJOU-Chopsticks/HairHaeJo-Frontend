import React from "react";
import MonthStatistics from "./MonthStatistics";
import GenderStatistics from "./GenderStatistics";
import AgeStatistics from "./AgeStatistics";
import MenuStatistics from "./MenuStatistics";
import RevisitStatistics from "./RevisitStatistics";

function StatisticsSpace() {
  return (
    <div>
      <MonthStatistics />
      <GenderStatistics />
      <AgeStatistics />
      <MenuStatistics />
      <RevisitStatistics />
    </div>
  );
}

export default StatisticsSpace;
