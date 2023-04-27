import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SettingCustomerprofilePage from "./pages/SettingCustomerprofilePage";
import SettingDesignerprofilePage from "./pages/SettingDesignerprofilePage";
import LookupprofilePage from "./pages/LookupprofilePage";
import ChangeprofilePage from "./pages/ChangeprofilePage";
import AddportfolioPage from "./pages/AddportfolioPage";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/settingcustomerprofile"
          element={<SettingCustomerprofilePage />}
        />
        <Route
          path="/settingdesignerprofile"
          element={<SettingDesignerprofilePage />}
        />
        <Route path="/lookupprofile" element={<LookupprofilePage />} />
        <Route path="/changeprofile" element={<ChangeprofilePage />} />
        <Route path="/portfoliolist" element={<AddportfolioPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
