import React from "react";

function NoData(props) {
  return (
    <div className="w-5/6 sm:w-2/3 xl:w-3/4 mx-auto mb-40 mt-6">
      <div className="justify-center items-center w-full">
        <div className="relative py-4 text-center">
          <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-8">
            <svg
              aria-hidden="true"
              className="w-16 h-16 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="mb-10 text-lg text-gray-900 dark:text-white">
            {props.message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoData;
