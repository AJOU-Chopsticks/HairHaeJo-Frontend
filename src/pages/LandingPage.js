import React from "react";
import Example from "../images/example.jpg";
import TestButton from "../components/LandingPage/TestButton";

function LandingPage() {
  return (
    <React.Fragment>
      <img src={Example} alt="example" />
      <div>헤어해죠</div>
      <TestButton />
    </React.Fragment>
  );
}

export default LandingPage;
