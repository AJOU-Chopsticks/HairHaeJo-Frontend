import React from "react";
import Body from "../components/HomePage/Body";
import Footer from "../components/LandingPage/Footer";
import Testmonial from "../components/LandingPage/Testmonial";

function HomePage() {
  return (
    <div className="container mx-auto pt-16 h-screen">
      <Body />
      <br></br>
      <Testmonial />
      <br></br>
      <Footer />
    </div>
  );
}

export default HomePage;
