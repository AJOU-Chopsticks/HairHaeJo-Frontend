import React, { useState } from "react";
import PortfolioList from "./PortfolioList";
import PortfolioForm from "./PortfolioForm";
import PortfolioModifyForm from "./PortfolioModifyForm";

function PortfolioSpace(props) {
  const [showModifyForm, setShowModifyForm] = useState(false);
  const [modifyData, setModifyData] = useState({});

  return (
    <div>
      <PortfolioList
        setShowModifyForm={setShowModifyForm}
        setModifyData={setModifyData}
        reload={props.reload}
        setReload={props.setReload}
      />
      <PortfolioForm reload={props.reload} setReload={props.setReload} />
      <PortfolioModifyForm
        showModal={showModifyForm}
        setShowModal={setShowModifyForm}
        modifyData={modifyData}
        reload={props.reload}
        setReload={props.setReload}
      />
    </div>
  );
}

export default PortfolioSpace;
