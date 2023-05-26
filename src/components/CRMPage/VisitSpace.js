import React, { useState } from "react";
import VisitList from "./VisitList";
import VisitForm from "./VisitForm";

function VisitSpace() {
  const [reload, setReload] = useState(false);
  return (
    <div>
      <VisitList reload={reload} setReload={setReload} />
      <VisitForm reload={reload} setReload={setReload} />
    </div>
  );
}

export default VisitSpace;
