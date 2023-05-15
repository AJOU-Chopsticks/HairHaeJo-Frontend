import React from "react";
import TestButton from "../components/LandingPage/TestButton";
import { useSelector } from "react-redux";
import Landing from "../components/LandingPage/Landing";

function LandingPage() {
  return (
    <div className="container mx-auto pt-16 h-screen">
      <Landing />
    </div>
  );
}

export default LandingPage;
