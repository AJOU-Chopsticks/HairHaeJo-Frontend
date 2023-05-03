import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsCheck } from "react-icons/bs";
import KakaoMap from "../../global/KakaoMap";

function ArticleCategory() {
  const [showStyleModal, setShowStyleModal] = useState(false);
  const [showRegionModal, setShowRegionModal] = useState(false);
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [showTagModal, setShowTagModal] = useState(false);

  return (
    <>
      <div className="flex flex-row flex-wrap justify-between">
        <button
          type="button"
          className="flex flex-row text-white bg-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          onClick={() => {
            document.body.classList.add("overflow-hidden");
            setShowStyleModal(true);
          }}
        >
          <div className="mr-2">모든 스타일</div>{" "}
          <IoIosArrowDown className="text-lg" />
        </button>
        <button
          type="button"
          className="flex flex-row text-white bg-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          onClick={() => {
            document.body.classList.add("overflow-hidden");
            setShowRegionModal(true);
          }}
        >
          <div className="mr-2">모든 지역</div>{" "}
          <IoIosArrowDown className="text-lg" />
        </button>
        <button
          type="button"
          className="flex flex-row text-white bg-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          onClick={() => {
            document.body.classList.add("overflow-hidden");
            setShowGenderModal(true);
          }}
        >
          <div className="mr-2">모든 성별</div>{" "}
          <IoIosArrowDown className="text-lg" />
        </button>
        <button
          type="button"
          className="flex flex-row text-white bg-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          onClick={() => {
            document.body.classList.add("overflow-hidden");
            setShowTagModal(true);
          }}
        >
          <div className="mr-2">모든 카테고리</div>{" "}
          <IoIosArrowDown className="text-lg" />
        </button>
      </div>

      {showStyleModal && (
        <div
          className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 ${
            showStyleModal ? "active" : ""
          }`}
        >
          <div className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-xl md:mb-0 mb-16">
            <div className="relative bg-white rounded-t-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => {
                  document.body.classList.remove("overflow-hidden");
                  setShowStyleModal(false);
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  스타일을 선택하세요.
                </h3>
                <button className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-900">
                  <BsCheck className="text-xl my-auto" />
                  <div className="my-auto">모든 스타일</div>
                </button>
                <button className="w-full h-10 text-gray-500 dark:text-white">
                  커트
                </button>
                <button className="w-full h-10 text-gray-500 dark:text-white">
                  펌
                </button>
                <button className="w-full h-10 text-gray-500 dark:text-white">
                  염색
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showRegionModal && (
        <div
          className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 ${
            showRegionModal ? "active" : ""
          }`}
        >
          <div className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-xl md:mb-0 mb-16">
            <div className="relative bg-white rounded-t-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => {
                  document.body.classList.remove("overflow-hidden");
                  setShowRegionModal(false);
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  지역을 선택하세요.
                </h3>
                <KakaoMap />
                <button className="w-full text-white mt-6 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showGenderModal && (
        <div
          className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 ${
            showGenderModal ? "active" : ""
          }`}
        >
          <div className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-xl md:mb-0 mb-16">
            <div className="relative bg-white rounded-t-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => {
                  document.body.classList.remove("overflow-hidden");
                  setShowGenderModal(false);
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  성별을 선택하세요.
                </h3>
                <button className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-900">
                  <BsCheck className="text-xl my-auto" />
                  <div className="my-auto">모든 성별</div>
                </button>
                <button className="w-full h-10 text-gray-500 dark:text-white">
                  남성
                </button>
                <button className="w-full h-10 text-gray-500 dark:text-white">
                  여성
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showTagModal && (
        <div
          className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 ${
            showTagModal ? "active" : ""
          }`}
        >
          <div className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-xl md:mb-0 mb-16">
            <div className="relative bg-white rounded-t-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => {
                  document.body.classList.remove("overflow-hidden");
                  setShowTagModal(false);
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  종류를 선택하세요.
                </h3>
                <button className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-900">
                  <BsCheck className="text-xl my-auto" />
                  <div className="my-auto">모든 카테고리</div>
                </button>
                <button className="w-full h-10 text-gray-500 dark:text-white">
                  레이어드컷
                </button>
                <button className="w-full h-10 text-gray-500 dark:text-white">
                  허쉬컷
                </button>
                <button className="w-full h-10 text-gray-500 dark:text-white">
                  샤기컷
                </button>
                <button className="w-full h-10 text-gray-500 dark:text-white">
                  원랭스컷
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ArticleCategory;
