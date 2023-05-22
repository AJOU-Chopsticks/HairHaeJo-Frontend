import React from "react";

function ReservationCategory(props) {
  return (
    <div className="flex flex-row gap-2">
      <button
        type="button"
        className={`${
          props.type
            ? "w-1/2 flex flex-row text-white bg-primary-700 border border-2 border-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            : "w-1/2 flex flex-row text-primary-700 bg-gray-50 dark:bg-gray-900 border border-2 border-primary-700 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        }`}
        onClick={() => {
          props.setType(true);
        }}
      >
        <p className="mx-auto">예약 목록</p>
      </button>
      <button
        type="button"
        className={`${
          !props.type
            ? "w-1/2 flex flex-row text-white bg-primary-700 border border-2 border-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            : "w-1/2 flex flex-row text-primary-700 bg-gray-50 dark:bg-gray-900 border border-2 border-primary-700 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        }`}
        onClick={() => {
          props.setType(false);
        }}
      >
        <p className="mx-auto">시술 완료</p>
      </button>
    </div>
  );
}

export default ReservationCategory;
