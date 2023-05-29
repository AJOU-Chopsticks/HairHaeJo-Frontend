import React, { useState } from "react";
import HolidayList from "./HolidayList";
import HolidayForm from "./HolidayForm";
import HolidayModifyForm from "./HoildayModifyForm";

function HolidaySpace() {
  const [showModifyForm, setShowModifyForm] = useState(false);
  const [modifyData, setModifyData] = useState({});
  const [reload, setReload] = useState(false);

  return (
    <>
      <HolidayList
        setShowModifyForm={setShowModifyForm}
        setModifyData={setModifyData}
        reload={reload}
        setReload={setReload}
      />
      <HolidayForm reload={reload} setReload={setReload} />
      <HolidayModifyForm
        showModal={showModifyForm}
        setShowModal={setShowModifyForm}
        modifyData={modifyData}
        reload={reload}
        setReload={setReload}
      />
    </>
  );
}

export default HolidaySpace;
