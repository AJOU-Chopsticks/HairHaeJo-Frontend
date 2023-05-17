import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsCheck } from "react-icons/bs";
import KakaoMap from "../../global/KakaoMap";
import {
  styleList,
  cutList,
  cutMaleList,
  cutFemaleList,
  permList,
  permMaleList,
  permFemaleList,
  dyeingList,
} from "../../global/Constants";

const shortStyleList = styleList.slice(1);
const shortCutList = cutList.slice(1);
const shortCutMaleList = cutMaleList.slice(1);
const shortCutFemaleList = cutFemaleList.slice(1);
const shortPermList = permList.slice(1);
const shortPermMaleList = permMaleList.slice(1);
const shortPermFemaleList = permFemaleList.slice(1);
const shortDyeingList = dyeingList.slice(1);

function PortfolioCategory(props) {
  const [showStyleModal, setShowStyleModal] = useState(false);
  const [showRegionModal, setShowRegionModal] = useState(false);
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [showTagModal, setShowTagModal] = useState(false);
  const [genderCutList, setGenderCutList] = useState(shortCutList);
  const [genderPermList, setGenderPermList] = useState(shortPermList);

  const regionHandler = () => {
    let selected = document.getElementById("Kakao_Address").value;
    if (selected === "") selected = "all";

    props.setRecommend(false);
    props.setRegion(selected);
    document.body.classList.remove("overflow-hidden");
    setShowRegionModal(false);
  };

  useEffect(() => {
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
  }, [props.gender]);

  return (
    <>
      <div className="flex flex-row gap-2">
        <button
          type="button"
          className={`${
            !props.recommend
              ? "w-1/2 flex flex-row text-white bg-primary-700 border border-2 border-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              : "w-1/2 flex flex-row text-primary-700 bg-gray-50 dark:bg-gray-900 border border-2 border-primary-700 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          }`}
          onClick={() => {
            props.setRecommend(!props.recommend);
          }}
        >
          <p className="mx-auto">포트폴리오 검색</p>
        </button>
        <button
          type="button"
          className={`${
            props.recommend
              ? "w-1/2 flex flex-row text-white bg-primary-700 border border-2 border-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              : "w-1/2 flex flex-row text-primary-700 bg-gray-50 dark:bg-gray-900 border border-2 border-primary-700 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          }`}
          onClick={() => {
            props.setRecommend(!props.recommend);
          }}
        >
          <p className="mx-auto">헤어 디자이너 추천</p>
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 mt-4">
        {!props.recommend && (
          <>
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
              <div className="mx-auto">
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
              <div className="mx-auto">
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
              <div className="mx-auto">
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
              <div className="mx-auto">
                {props.tag === "all" ? "모든 카테고리" : props.tag}
              </div>{" "}
              <IoIosArrowDown className="text-lg" />
            </button>
          </>
        )}
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
                      props.setRecommend(false);
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
                      props.setRecommend(false);
                      props.setStyle("all");
                      props.setTag("all");
                    }}
                  >
                    모든 스타일
                  </button>
                )}
                {shortStyleList.map((item) =>
                  props.style === item ? (
                    <button
                      key={item}
                      className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-400"
                      onClick={() => {
                        document.body.classList.remove("overflow-hidden");
                        setShowStyleModal(false);
                        props.setRecommend(false);
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
                        props.setRecommend(false);
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
                      props.setRecommend(false);
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
                      props.setRecommend(false);
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
                      props.setRecommend(false);
                      props.setGender("남성");
                      props.setTag("all");
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
                      props.setRecommend(false);
                      props.setGender("남성");
                      props.setTag("all");
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
                      props.setRecommend(false);
                      props.setGender("여성");
                      props.setTag("all");
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
                      props.setRecommend(false);
                      props.setGender("여성");
                      props.setTag("all");
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
                      props.setRecommend(false);
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
                      props.setRecommend(false);
                      props.setTag("all");
                    }}
                  >
                    모든 카테고리
                  </button>
                )}
                {(props.style === "all" || props.style === "커트") &&
                  genderCutList.map((item) =>
                    props.tag === item ? (
                      <button
                        key={item}
                        className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowTagModal(false);
                          props.setRecommend(false);
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
                          props.setRecommend(false);
                          props.setTag(item);
                        }}
                      >
                        {item}
                      </button>
                    )
                  )}
                {props.style === "펌" &&
                  genderPermList.map((item) =>
                    props.tag === item ? (
                      <button
                        key={item}
                        className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowTagModal(false);
                          props.setRecommend(false);
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
                          props.setRecommend(false);
                          props.setTag(item);
                        }}
                      >
                        {item}
                      </button>
                    )
                  )}
                {props.style === "염색" &&
                  shortDyeingList.map((item) =>
                    props.tag === item ? (
                      <button
                        key={item}
                        className="w-full h-10 flex flex-row justify-center text-primary-900 dark:text-primary-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowTagModal(false);
                          props.setRecommend(false);
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
                          props.setRecommend(false);
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

export default PortfolioCategory;
