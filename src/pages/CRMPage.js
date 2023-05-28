import React, { useState } from "react";
import SideBar from "../components/CRMPage/SideBar";
import VisitList from "../components/CRMPage/VisitList";
import Statistics from "../components/CRMPage/Statistics";

function CRMPage() {
  const [CRMType, setCRMType] = useState("visit");

  return (
    <div className="mx-auto pt-16 min-h-screen">
      <SideBar CRMType={CRMType} setCRMType={setCRMType} />
      {CRMType === "visit" ? <VisitList /> : <Statistics />}
    </div>
  );
}

export default CRMPage;
