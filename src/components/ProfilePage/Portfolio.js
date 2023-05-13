import React from "react";

function Portfolio(props) {
  return (
    <div
      className="hover:cursor-pointer dark:hover:cursor-pointer"
      onClick={() => {
        document.body.classList.add("overflow-hidden");
        props.setDetailTarget(props.data.portfolioId);
        props.setShowDetail(true);
      }}
    >
      <img
        className="h-auto max-w-full rounded-lg"
        src={props.data.image}
        alt="Portfolio_Image"
      />
    </div>
  );
}

export default Portfolio;
