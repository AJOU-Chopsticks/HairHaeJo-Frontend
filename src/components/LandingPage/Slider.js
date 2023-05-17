import React from "react";
import { Carousel } from "flowbite-react";

function Slider() {
  return (
    <Carousel className="mt-5 h-1/2">
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        alt="..."
      />
    </Carousel>
  );
}

export default Slider;
