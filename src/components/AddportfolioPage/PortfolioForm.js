import React, { useState } from "react";
import NoImage from "../../images/noImage.jpg";
import Loading from "../Layout/Loading";

function PortfolioForm() {
  const [showModal, setShowModal] = useState(false);
  const [period, setPeriod] = useState("");
  const [beforeImage, setBeforeImage] = useState(NoImage);
  const [afterImage, setAfterImage] = useState(NoImage);
  const [detail, setDetail] = useState("");
  const [loading, setLoading] = useState(false);

  const periodHandler = (event) => setPeriod(event.target.value);
  const imageHandler = (target) => {
    let imageFile = document.getElementById(target).files[0];
    if (imageFile !== undefined) {
      if (target === "Before_Image")
        setBeforeImage(URL.createObjectURL(imageFile));
      else setAfterImage(URL.createObjectURL(imageFile));
    } else {
      if (target === "Before_Image") setBeforeImage(NoImage);
      else setAfterImage(NoImage);
    }
  };
  const detailHandler = (event) => setDetail(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    if (period === "") return alert("시술날짜를 입력해주세요.");
    if (detail === "") return alert("간략한 시술내용을 적어주세요.");

    setLoading(true);

    let PortfolioInfo = {
      period: period,
      detail: detail,
    };
  };
  return (
    <>
      <button
        type="button"
        className="animate-bounce flex items-center justify-center fixed bottom-24 right-6 md:right-12 group ml-auto text-white bg-primary-700 rounded-full w-14 h-14 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800"
        onClick={() => {
          document.body.classList.add("overflow-hidden");
          setShowModal(true);
        }}
      >
        <svg
          aria-hidden="true"
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
        </svg>
      </button>
      {showModal && (
        <div
          className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 ${
            showModal ? "active" : ""
          }`}
        >
          <div className="relative w-full max-w-xl min-h-full mx-auto md:mt-10 mb-24">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => {
                  document.body.classList.remove("overflow-hidden");
                  setShowModal(false);
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
                  포트폴리오 작성
                </h3>
                <form className="space-y-6" onSubmit={submitHandler}>
                  <div>
                    <label
                      htmlFor="period"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      시술 날짜{" "}
                      <span className="text-red-600 font-bold">*</span>
                    </label>
                    <input
                      type="period"
                      id="period"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="2022/03/01"
                      value={period}
                      onChange={periodHandler}
                    />
                  </div>
                  <br></br>
                  <div className="flex items-center space-x-6">
                    <div className="shrink-0">
                      <img
                        className="h-16 w-16 object-cover rounded-lg"
                        src={beforeImage}
                        alt="Before_Image"
                      />
                    </div>
                    <label className="block w-full">
                      <label
                        htmlFor="Before_Image"
                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        시술 전{" "}
                        <span className="text-red-600 font-bold">*</span>
                      </label>
                      <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="Before_Image"
                        type="file"
                        accept="image/*"
                        onChange={() => imageHandler("Before_Image")}
                      />
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                        이미지 파일을 선택해주세요.
                      </p>
                    </label>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="shrink-0">
                      <img
                        className="h-16 w-16 object-cover rounded-lg"
                        src={afterImage}
                        alt="After_Image"
                      />
                    </div>
                    <label className="block w-full">
                      <label
                        htmlFor="After_Image"
                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        시술 후{" "}
                        <span className="text-red-600 font-bold">*</span>
                      </label>
                      <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="After_Image"
                        type="file"
                        accept="image/*"
                        onChange={() => imageHandler("After_Image")}
                      />
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                        이미지 파일을 선택해주세요.
                      </p>
                    </label>
                  </div>
                  <br></br>
                  <div>
                    <label
                      htmlFor="detail"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      고객 시술 이력
                      <span className="text-red-600 font-bold">*</span>
                    </label>
                    <textarea
                      id="detail"
                      placeholder="고객 시술 이력"
                      rows={4}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={detail}
                      onChange={detailHandler}
                    />
                  </div>
                  <br></br>
                  {loading ? (
                    <Loading />
                  ) : (
                    <button
                      type="submit"
                      className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      등록하기
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PortfolioForm;
