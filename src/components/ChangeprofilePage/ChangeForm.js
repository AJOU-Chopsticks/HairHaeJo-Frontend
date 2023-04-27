import React, { useState } from "react";

function ChangeForm() {
  const [type, setType] = useState(true);
  return type == true ? <SettingCustomerForm /> : <SettingDesignerForm />;
}

export default ChangeForm;
