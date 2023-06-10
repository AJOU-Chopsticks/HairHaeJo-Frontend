import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsCheck } from "react-icons/bs";
import { itemList } from "../../global/Constants";

const shortItemList = itemList.slice(1);

function InventoryCategory(props) {
  const [showNameModal, setShowNameModal] = useState(false);
  const [showOrderByStockModal, setShowOrderByStockModal] = useState(false);
  const [showOrderByPriceModal, setShowOrderByPriceModal] = useState(true);
  const [showIsWarningModal, setShowIsWarningModal] = useState(true);
  const [showCategoryModal, setShowCategoryModal] = useState(true);
  const [itemCategoryList, setItemCategoryList] = useState(shortItemList);

  /*useEffect(() => {
    if (props.gender === "남성") {
      setGenderCutList(shortCutMaleList);
      setGenderPermList(shortPermMaleList);
    } else if (props.gender === "여성") {
      setGenderCutList(shortCutFemaleList);
      setGenderPermList(shortPermFemaleList);
    } else {
      setGenderCutList(shortCutList);
      setGenderPermList(shortPermList);
    }
  }, [props.gender]);*/

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
        <button
          type="button"
          className={`${
            props.category === "all"
              ? "flex flex-row text-primary-700 bg-white border border-2 border-primary-700 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              : "flex flex-row text-white bg-primary-700 border border-2 border-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          }`}
          onClick={() => {
            document.body.classList.add("overflow-hidden");
            setShowCategoryModal(true);
          }}
        >
          <div className="mx-auto">
            {props.category === "all" ? "모든 카테고리" : props.category}
          </div>{" "}
          <IoIosArrowDown className="text-lg" />
        </button>
      </div>

      {showCategoryModal && (
        <div
          className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 ${
            showCategoryModal ? "active" : ""
          }`}
        >
          <div className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-xl md:mb-0 mb-16">
            <div className="relative bg-white rounded-t-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => {
                  document.body.classList.remove("overflow-hidden");
                  setShowCategoryModal(false);
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
                  카테고리를 선택하세요.
                </h3>
                {props.category === "all" ? (
                  <button
                    className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-400"
                    onClick={() => {
                      document.body.classList.remove("overflow-hidden");
                      setShowCategoryModal(false);
                      props.setCategory("all");
                    }}
                  >
                    <BsCheck className="text-xl my-auto" />
                    <div className="my-auto">모든 카테고리</div>
                  </button>
                ) : (
                  <button
                    className="w-full h-10 text-gray-500 dark:text-white"
                    onClick={() => {
                      document.body.classList.remove("overflow-hidden");
                      setShowCategoryModal(false);
                      props.setCategory("all");
                    }}
                  >
                    모든 카테고리
                  </button>
                )}
                {props.category === "all" &&
                  shortItemList.map((item) =>
                    props.tag === item ? (
                      <button
                        key={item}
                        className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowCategoryModal(false);
                          props.setCategory(item);
                        }}
                      >
                        <BsCheck className="text-xl my-auto" />
                        <div className="my-auto">{item}</div>
                      </button>
                    ) : (
                      <button
                        key={item}
                        className="w-full h-10 text-gray-500 dark:text-white"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowCategoryModal(false);
                          props.setCategory(item);
                        }}
                      >
                        {item}
                      </button>
                    )
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InventoryCategory;
