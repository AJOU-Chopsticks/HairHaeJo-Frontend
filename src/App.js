import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./hoc/Auth";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Layout/Header";
import BottomNav from "./components/Layout/BottomNav";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MatchingPage from "./pages/MatchingPage";

import ChangeprofilePage from "./pages/ChangeprofilePage";
import LookupprofilePage from "./pages/LookupprofilePage";
import AddportfolioPage from "./pages/AddportfolioPage";

function App() {
  const AuthLandingPage = Auth(LandingPage, null);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 m-0">
      <Header />
      <Routes>
        <Route path="/" element={<AuthLandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/matching" element={<MatchingPage />} />
        <Route path="/changeprofile" element={<ChangeprofilePage />} />
        <Route path="/lookupprofile" element={<LookupprofilePage />} />
        <Route path="/portfoliolist" element={<AddportfolioPage />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
