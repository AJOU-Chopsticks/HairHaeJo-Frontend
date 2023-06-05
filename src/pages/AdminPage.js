import React, { useState } from "react";
import SideBar from "../components/AdminPage/SideBar";
import DesignerSignup from "../components/AdminPage/DesignerSignup";
import ReportList from "../components/AdminPage/ReportList";
import AdvertisementList from "../components/AdminPage/AdvertisementList";

function AdminPage() {
  const [adminType, setAdminType] = useState("designer");

  return (
    <div className="mx-auto pt-16 min-h-screen">
      <SideBar adminType={adminType} setAdminType={setAdminType} />
      {adminType === "designer" ? (
        <DesignerSignup />
      ) : adminType === "report" ? (
        <ReportList />
      ) : (
        <AdvertisementList />
      )}
    </div>
  );
}

export default AdminPage;
