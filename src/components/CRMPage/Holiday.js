import React from "react";

function Holiday(props) {
  return (
    <figure
      className="flex flex-col items-center justify-center p-8 text-center bg-white border-2 border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-sm hover:cursor-pointer hover:bg-gray-50 hover:border-primary-700 dark:hover:cursor-pointer dark:hover:border-primary-700"
      onClick={() => {
        document.body.classList.add("overflow-hidden");
        props.setDetailTarget(props.data.holidayId);
        props.setShowDetail(true);
      }}
    >
      <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {props.data.Holiday}
        </h3>
      </blockquote>
    </figure>
  );
}

export default Holiday;
