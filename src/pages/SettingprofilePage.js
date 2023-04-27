import React, { useState } from "react";
import SettingCustomerForm from "../components/SettingCustomerprofilePage/SettingCustomerForm";
import SettingDesignerForm from "../components/SettingDesignerprofilePage/SettingDesignerForm";
import UserType from "../components/SettingCustomerprofilePage/UserType";

function SettingprofilePage() {
  const [type, setType] = useState(true);

  return (
    <div className="container mx-auto pt-16 h-screen">
      <UserType aaa={setType} />
      {type === true ? <SettingCustomerForm /> : <SettingDesignerForm />}
    </div>
  );
}

export default SettingprofilePage;
