import React, { useState } from "react";
import ProfileSidebar from "../components/LookupprofilePage/ProfileSidebar";
import PortfolioForm from "../components/AddportfolioPage/PortfolioForm";
import PortfolioList from "../components/AddportfolioPage/PortfolioList";

function AddportfolioPage() {
  const [showModifyForm, setShowModifyForm] = useState(false);
  const [modifyData, setModifyData] = useState({});
  return (
    <div className="mx-auto pt-16 min-h-screen">
      <ProfileSidebar />
      <PortfolioList
        setShowModifyForm={setShowModifyForm}
        setModifyData={setModifyData}
      />
      <PortfolioForm />
    </div>
  );
}

export default AddportfolioPage;
