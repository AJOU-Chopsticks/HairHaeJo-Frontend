import React, { useState } from "react";
import SettingDesignerForm from "../SettingDesignerprofilePage/SettingDesignerForm";

function LookupForm() {
  const [type, setType] = useState(true);
  return (
    <div className="p-4 mb-8 md:ml-64">
      <SettingDesignerForm />
    </div>
  );
}

export default LookupForm;
