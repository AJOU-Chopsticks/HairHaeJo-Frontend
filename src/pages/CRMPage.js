import React, { useState } from "react";
import SideBar from "../components/CRMPage/SideBar";
import CRMSpace from "../components/CRMPage/CRMSpace";

function CRMPage() {
  const [CRMType, setCRMType] = useState("visit");

  return (
    <div className="mx-auto pt-16 min-h-screen">
      <SideBar CRMType={CRMType} setCRMType={setCRMType} />
      <CRMSpace CRMType={CRMType} />
    </div>
  );
}

export default CRMPage;
