import React from "react";
import { Routes, Route } from "react-router-dom";
import "./util/fcm";
import Auth from "./hoc/Auth";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Layout/Header";
import BottomNav from "./components/Layout/BottomNav";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MatchingPage from "./pages/MatchingPage";
import ChattingPage from "./pages/ChattingPage";
import MyPage from "./pages/MyPage";
import ProfilePage from "./pages/ProfilePage";
import ReservationPage from "./pages/ReservationPage";
import CRMPage from "./pages/CRMPage";
import AdminPage from "./pages/AdminPage";
import AdResultPage from "./pages/AdResultPage";

function App() {
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthSignupPage = Auth(SignupPage, false);
  const AuthMatchingPage = Auth(MatchingPage, true);
  const AuthChattingPage = Auth(ChattingPage, true);
  const AuthMyPage = Auth(MyPage, true);
  const AuthProfilePage = Auth(ProfilePage, true);
  const AuthReservationPage = Auth(ReservationPage, true);
  const AuthCRMPage = Auth(CRMPage, true);
  const AuthAdminPage = Auth(AdminPage, true, true);
  const AuthAdResultPage = Auth(AdResultPage, true);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 m-0">
      <Header />
      <Routes>
        <Route path="/" element={<AuthLandingPage />} />
        <Route path="/login" element={<AuthLoginPage />} />
        <Route path="/signup" element={<AuthSignupPage />} />
        <Route path="/matching" element={<AuthMatchingPage />} />
        <Route path="/chat" element={<AuthChattingPage />} />
        <Route path="/mypage" element={<AuthMyPage />} />
        <Route path="/profile/:role/:id" element={<AuthProfilePage />} />
        <Route
          path="/reservation/:designerId"
          element={<AuthReservationPage />}
        />
        <Route path="/crm" element={<AuthCRMPage />} />
        <Route path="/admin" element={<AuthAdminPage />} />
        <Route path="/ad/result" element={<AuthAdResultPage />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
