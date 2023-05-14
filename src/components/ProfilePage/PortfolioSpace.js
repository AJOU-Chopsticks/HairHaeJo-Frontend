import React from "react";
import PortfolioList from "./PortfolioList";

function PortfolioSpace(props) {
  return (
    <div>
      <PortfolioList
        id={props.id}
        reload={props.reload}
        setReload={props.setReload}
      />
    </div>
  );
}

export default PortfolioSpace;
