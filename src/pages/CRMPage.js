import React, { useState } from "react";
import SideBar from "../components/CRMPage/SideBar";
import VisitList from "../components/CRMPage/VisitList";
import Statistics from "../components/CRMPage/Statistics";
import HolidaySpace from "../components/CRMPage/HolidaySpace";

function CRMPage() {
  const [CRMType, setCRMType] = useState("visit");

  return (
    <div className="mx-auto pt-16 min-h-screen">
      <SideBar CRMType={CRMType} setCRMType={setCRMType} />
      {CRMType === "visit" ? (
        <VisitList />
      ) : CRMType === "statistics" ? (
        <Statistics />
      ) : (
        <HolidaySpace />
      )}
    </div>
  );
}

export default CRMPage;
