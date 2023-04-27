import React, { useState } from "react";
import SettingCustomerForm from "../SettingCustomerprofilePage/SettingCustomerForm";
import SettingDesignerForm from "../SettingDesignerprofilePage/SettingDesignerForm";

function LookupForm() {
  const [type, setType] = useState(true);
  return type == true ? <SettingCustomerForm /> : <SettingDesignerForm />;
}

export default LookupForm;
