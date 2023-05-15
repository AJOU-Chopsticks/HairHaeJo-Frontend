import React from "react";
import { useSelector } from "react-redux";
import Body from "../components/HomePage/Body";
import Footer from "../components/HomePage/Footer";

function HomePage() {
  const user = useSelector((state) => state.user);
  return (
    <div className="container mx-auto pt-16 h-screen">
      <Body />
      <Footer />
    </div>
  );
}

export default HomePage;
