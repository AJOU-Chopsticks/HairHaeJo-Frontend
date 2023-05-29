import React from "react";
import VisitList from "./VisitList";
import Statistics from "./Statistics";
import HolidaySpace from "./HolidaySpace";

function CRMSpace(props) {
  return (
    <div className={`${props.CRMType === "visit"}`}>
      {
        <>
          {props.CRMType === "visit" ? (
            <VisitList />
          ) : props.CRMType === "statistics" ? (
            <Statistics />
          ) : (
            <HolidaySpace />
          )}
        </>
      }
    </div>
  );
}

export default CRMSpace;
