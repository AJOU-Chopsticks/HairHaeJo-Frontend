import React from "react";
import { Carousel } from "flowbite-react";
import MainImage1 from "../../images/mainImage1.png";
import MainImage2 from "../../images/mainImage2.png";
import MainImage3 from "../../images/mainImage3.png";
import MainImage4 from "../../images/mainImage4.png";

function Slider() {
  return (
    <Carousel className="mt-5 h-2/5">
      <img src={MainImage1} alt="..." />
      <img src={MainImage2} alt="..." />
      <img src={MainImage3} alt="..." />
      <img src={MainImage4} alt="..." />
      <img src={MainImage1} alt="..." />
    </Carousel>
  );
}

export default Slider;
