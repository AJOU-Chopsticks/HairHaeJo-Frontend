import React from "react";
import { useNavigate } from "react-router-dom";

function Result() {
  const navigation = useNavigate();

  return (
    <div className="w-5/6 sm:w-2/3 xl:w-3/4 mx-auto sm:mx-0 mb-40 mt-6">
      <div className="justify-center items-center w-full">
        <div className="relative p-4 text-center">
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
            정상적으로 예약이 완료되었습니다.
          </p>
          <div className="flex justify-center mt-4 space-x-8 md:mt-6">
            <button
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800"
              onClick={() => navigation("/mypage", { replace: true })}
            >
              마이페이지
            </button>
            <button
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              onClick={() => navigation("/", { replace: true })}
            >
              메인으로
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
