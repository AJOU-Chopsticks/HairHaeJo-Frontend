import React, { useState } from "react";
import SideBar from "../components/CRMPage/SideBar";
import VisitSpace from "../components/CRMPage/VisitSpace";

function CRMPage() {
  const [CRMType, setCRMType] = useState("visit");

  return (
    <div className="mx-auto pt-16 min-h-screen">
      <SideBar CRMType={CRMType} setCRMType={setCRMType} />
      {CRMType === "visit" ? <VisitSpace /> : <VisitSpace />}
    </div>
  );
}

export default CRMPage;
