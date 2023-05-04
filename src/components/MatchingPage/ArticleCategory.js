import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsCheck } from "react-icons/bs";
import KakaoMap from "../../global/KakaoMap";

const styleList = ["커트", "펌", "염색"];
const cutList = ["레이어드컷", "허쉬컷", "샤기컷", "원랭스컷"];
const permList = ["히피펌", "레이어드펌", "허쉬펌", "애즈펌"];
const dyeingList = ["다크브라운", "레드브라운", "애쉬블루", "애쉬브라운"];

function ArticleCategory(props) {
  const [showStyleModal, setShowStyleModal] = useState(false);
  const [showRegionModal, setShowRegionModal] = useState(false);
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [showTagModal, setShowTagModal] = useState(false);

  const regionHandler = () => {
    let selected = document.getElementById("Kakao_Address").value;
    if (selected === "") selected = "all";

    props.setRegion(selected);
    document.body.classList.remove("overflow-hidden");
    setShowRegionModal(false);
  };

  return (
    <>
      <div className="flex flex-row flex-wrap">
        <button
          type="button"
          className={`${
            props.style === "all"
              ? "flex flex-row text-primary-700 bg-white border border-2 border-primary-700 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              : "flex flex-row text-white bg-primary-700 border border-2 border-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          }`}
          onClick={() => {
            document.body.classList.add("overflow-hidden");
            setShowStyleModal(true);
          }}
        >
          <div className="mr-2">
            {props.style === "all" ? "모든 스타일" : props.style}
          </div>{" "}
          <IoIosArrowDown className="text-lg" />
        </button>
        <button
          type="button"
          className={`${
            props.region === "all"
              ? "flex flex-row text-primary-700 bg-white border border-2 border-primary-700 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              : "flex flex-row text-white bg-primary-700 border border-2 border-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          }`}
          onClick={() => {
            document.body.classList.add("overflow-hidden");
            setShowRegionModal(true);
          }}
        >
          <div className="mr-2">
            {props.region === "all" ? "모든 지역" : props.region}
          </div>{" "}
          <IoIosArrowDown className="text-lg" />
        </button>
        <button
          type="button"
          className={`${
            props.gender === "all"
              ? "flex flex-row text-primary-700 bg-white border border-2 border-primary-700 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              : "flex flex-row text-white bg-primary-700 border border-2 border-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          }`}
          onClick={() => {
            document.body.classList.add("overflow-hidden");
            setShowGenderModal(true);
          }}
        >
          <div className="mr-2">
            {props.gender === "all" ? "모든 성별" : props.gender}
          </div>{" "}
          <IoIosArrowDown className="text-lg" />
        </button>
        <button
          type="button"
          className={`${
            props.tag === "all"
              ? "flex flex-row text-primary-700 bg-white border border-2 border-primary-700 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              : "flex flex-row text-white bg-primary-700 border border-2 border-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          }`}
          onClick={() => {
            document.body.classList.add("overflow-hidden");
            setShowTagModal(true);
          }}
        >
          <div className="mr-2">
            {props.tag === "all" ? "모든 카테고리" : props.tag}
          </div>{" "}
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
                {props.style === "all" ? (
                  <button
                    className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-400"
                    onClick={() => {
                      document.body.classList.remove("overflow-hidden");
                      setShowStyleModal(false);
                      props.setStyle("all");
                      props.setTag("all");
                    }}
                  >
                    <BsCheck className="text-xl my-auto" />
                    <div className="my-auto">모든 스타일</div>
                  </button>
                ) : (
                  <button
                    className="w-full h-10 text-gray-500 dark:text-white"
                    onClick={() => {
                      document.body.classList.remove("overflow-hidden");
                      setShowStyleModal(false);
                      props.setStyle("all");
                      props.setTag("all");
                    }}
                  >
                    모든 스타일
                  </button>
                )}
                {styleList.map((item) =>
                  props.style === item ? (
                    <button
                      key={item}
                      className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-400"
                      onClick={() => {
                        document.body.classList.remove("overflow-hidden");
                        setShowStyleModal(false);
                        props.setStyle(item);
                        props.setTag("all");
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
                        setShowStyleModal(false);
                        props.setStyle(item);
                        props.setTag("all");
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
                <button
                  className="w-full text-white mt-6 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={regionHandler}
                >
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
                {props.gender === "all" ? (
                  <button
                    className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-400"
                    onClick={() => {
                      document.body.classList.remove("overflow-hidden");
                      setShowGenderModal(false);
                      props.setGender("all");
                    }}
                  >
                    <BsCheck className="text-xl my-auto" />
                    <div className="my-auto">모든 성별</div>
                  </button>
                ) : (
                  <button
                    className="w-full h-10 text-gray-500 dark:text-white"
                    onClick={() => {
                      document.body.classList.remove("overflow-hidden");
                      setShowGenderModal(false);
                      props.setGender("all");
                    }}
                  >
                    모든 성별
                  </button>
                )}
                {props.gender === "남성" ? (
                  <button
                    className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-400"
                    onClick={() => {
                      document.body.classList.remove("overflow-hidden");
                      setShowGenderModal(false);
                      props.setGender("남성");
                    }}
                  >
                    <BsCheck className="text-xl my-auto" />
                    <div className="my-auto">남성</div>
                  </button>
                ) : (
                  <button
                    className="w-full h-10 text-gray-500 dark:text-white"
                    onClick={() => {
                      document.body.classList.remove("overflow-hidden");
                      setShowGenderModal(false);
                      props.setGender("남성");
                    }}
                  >
                    남성
                  </button>
                )}
                {props.gender === "여성" ? (
                  <button
                    className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-400"
                    onClick={() => {
                      document.body.classList.remove("overflow-hidden");
                      setShowGenderModal(false);
                      props.setGender("여성");
                    }}
                  >
                    <BsCheck className="text-xl my-auto" />
                    <div className="my-auto">여성</div>
                  </button>
                ) : (
                  <button
                    className="w-full h-10 text-gray-500 dark:text-white"
                    onClick={() => {
                      document.body.classList.remove("overflow-hidden");
                      setShowGenderModal(false);
                      props.setGender("여성");
                    }}
                  >
                    여성
                  </button>
                )}
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
                  카테고리를 선택하세요.
                </h3>
                {props.tag === "all" ? (
                  <button
                    className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-400"
                    onClick={() => {
                      document.body.classList.remove("overflow-hidden");
                      setShowTagModal(false);
                      props.setTag("all");
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
                      setShowTagModal(false);
                      props.setTag("all");
                    }}
                  >
                    모든 카테고리
                  </button>
                )}
                {(props.style === "all" || props.style === "커트") &&
                  cutList.map((item) =>
                    props.tag === item ? (
                      <button
                        key={item}
                        className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowTagModal(false);
                          props.setTag(item);
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
                          setShowTagModal(false);
                          props.setTag(item);
                        }}
                      >
                        {item}
                      </button>
                    )
                  )}
                {props.style === "펌" &&
                  permList.map((item) =>
                    props.tag === item ? (
                      <button
                        key={item}
                        className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowTagModal(false);
                          props.setTag(item);
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
                          setShowTagModal(false);
                          props.setTag(item);
                        }}
                      >
                        {item}
                      </button>
                    )
                  )}
                {props.style === "염색" &&
                  dyeingList.map((item) =>
                    props.tag === item ? (
                      <button
                        key={item}
                        className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowTagModal(false);
                          props.setTag(item);
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
                          setShowTagModal(false);
                          props.setTag(item);
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

export default ArticleCategory;
