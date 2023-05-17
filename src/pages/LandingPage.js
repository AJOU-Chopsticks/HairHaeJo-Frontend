import React from "react";
import Landing from "../components/LandingPage/Landing";
import Slider from "../components/LandingPage/Slider";
import Testmonial from "../components/LandingPage/Testmonial";
import Footer from "../components/LandingPage/Footer";

function LandingPage() {
  return (
    <div className="mx-auto pt-16 h-screen">
      <Landing />
      <Slider />
      <Testmonial />
      <Footer />
    </div>
  );
}

export default LandingPage;
