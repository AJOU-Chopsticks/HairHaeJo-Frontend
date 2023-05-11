import React, { useState } from "react";
import PortfolioForm from "../components/AddportfolioPage/PortfolioForm";
import PortfolioList from "../components/AddportfolioPage/PortfolioList";
import PortfolioModifyForm from "../components/AddportfolioPage/PortfolioModifyForm";

function AddportfolioPage() {
  const [showModifyForm, setShowModifyForm] = useState(false);
  const [modifyData, setModifyData] = useState({});
  return (
    <div>
      <PortfolioList
        setShowModifyForm={setShowModifyForm}
        setModifyData={setModifyData}
      />
      <PortfolioForm />
      <PortfolioModifyForm
        showModal={showModifyForm}
        setShowModal={setShowModifyForm}
        modifyData={modifyData}
      />
    </div>
  );
}

export default AddportfolioPage;
