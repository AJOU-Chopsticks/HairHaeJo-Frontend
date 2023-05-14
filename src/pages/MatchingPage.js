import React, { useState } from "react";
import SideBar from "../components/MatchingPage/SideBar";
import GeneralMatching from "../components/MatchingPage/GeneralMatching";
import FastMatching from "../components/MatchingPage/FastMatching";

function MatchingPage() {
  const [matchingType, setMatchingType] = useState("general");

  return (
    <div className="mx-auto pt-16 min-h-screen">
      <SideBar matchingType={matchingType} setMatchingType={setMatchingType} />
      {matchingType === "general" ? <GeneralMatching /> : <FastMatching />}
    </div>
  );
}

export default MatchingPage;
