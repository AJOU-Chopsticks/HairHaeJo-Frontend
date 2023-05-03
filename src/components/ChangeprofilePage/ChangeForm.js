import React, { useState } from "react";
import SettingCustomerForm from "../SettingCustomerprofilePage/SettingCustomerForm";
import SettingDesignerForm from "../SettingDesignerprofilePage/SettingDesignerForm";

function ChangeForm() {
  const [type, setType] = useState(true);
  return (
    <div className="p-4 mb-8 md:ml-64">
      <SettingCustomerForm />
    </div>
  );
}

export default ChangeForm;
