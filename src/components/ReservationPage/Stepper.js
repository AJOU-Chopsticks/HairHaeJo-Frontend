import React from "react";

const check = (
  <svg
    aria-hidden="true"
    className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    ></path>
  </svg>
);

function Stepper(props) {
  return (
    <ol className="flex items-center justify-center w-full font-medium text-center text-gray-500 dark:text-gray-400 text-base sticky top-14 md:top-16 py-5 bg-gray-50 dark:bg-gray-900">
      {props.step >= 1 ? (
        <li className="flex md:w-full items-center text-primary-600 dark:text-primary-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            {props.step > 1 ? check : <span className="mr-2 w-4">1</span>}
            <span className="whitespace-nowrap">메뉴</span>
          </span>
        </li>
      ) : (
        <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span className="mr-2 w-4">1</span>
            <span className="whitespace-nowrap">메뉴</span>
          </span>
        </li>
      )}
      {props.step >= 2 ? (
        <li className="flex md:w-full items-center text-primary-600 dark:text-primary-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            {props.step > 2 ? check : <span className="mr-2 w-4">2</span>}
            <span className="whitespace-nowrap">날짜 및 시간</span>
          </span>
        </li>
      ) : (
        <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span className="mr-2 w-4">2</span>
            <span className="whitespace-nowrap">날짜 및 시간</span>
          </span>
        </li>
      )}
      {props.step >= 3 ? (
        <li className="flex items-center text-primary-600">
          {props.step > 3 ? check : <span className="mr-2 w-4">3</span>}
          <span className="whitespace-nowrap">결제</span>
        </li>
      ) : (
        <li className="flex items-center">
          <span className="mr-2 w-4">3</span>
          <span className="whitespace-nowrap">결제</span>
        </li>
      )}

      {/* <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
          <span className="mr-2 w-4">2</span>
          <span className="whitespace-nowrap">날짜 및 시간</span>
        </span>
      </li>
      <li className="flex items-center">
        <span className="mr-2">3</span>
        <span className="whitespace-nowrap">결제</span>
      </li> */}
    </ol>
  );
}

export default Stepper;
