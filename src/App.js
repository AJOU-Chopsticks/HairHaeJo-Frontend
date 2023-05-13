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

function App() {
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthMatchingPage = Auth(MatchingPage, true);
  const AuthChattingPage = Auth(ChattingPage, true);
  const AuthMyPage = Auth(MyPage, true);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 m-0">
      <Header />
      <Routes>
        <Route path="/" element={<AuthLandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/matching" element={<AuthMatchingPage />} />
        <Route path="/chat" element={<AuthChattingPage />} />
        <Route path="/mypage" element={<AuthMyPage />} />
        <Route path="/profile/:role/:id" element={<ProfilePage />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
