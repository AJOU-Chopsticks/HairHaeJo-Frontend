import React, { useState } from "react";
import PortfolioList from "./PortfolioList";
import NoImage from "../../images/noImage.jpg";

function PortfolioDetail(props) {
  const [period, setPeriod] = useState("");
  const [body, setBody] = useState("");
  const [beforeImage, setBeforeImage] = useState(NoImage);
  const [afterImage, setAfterImage] = useState(NoImage);

  const periodHandler = (event) => setPeriod(event.target.value);
  const bodyHandler = (event) => setBody(event.target.value);
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

  return (
    <div
      className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 ${
        props.showDetail ? "active" : ""
      }`}
    >
      <form className="space-y-6">
        <div class="mb-3">
          <PortfolioList />
          <br></br>
          <label
            htmlFor="portfolio"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            포트폴리오(있다면 작성!){" "}
            <span className="text-red-600 font-bold"></span>
          </label>
          <br></br>
          <div class="mb-3">
            <div>
              <label
                htmlFor="period"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                시술 날짜 <span className="text-red-600 font-bold">*</span>
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
                  시술 전 <span className="text-red-600 font-bold">*</span>
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
                  시술 후 <span className="text-red-600 font-bold">*</span>
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
                htmlFor="body"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                고객시술세부사항{" "}
                <span className="text-red-600 font-bold">*</span>
              </label>
              <textarea
                id="body"
                placeholder="세부 사항"
                rows={4}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={body}
                onChange={bodyHandler}
              />
            </div>
            <br></br>
            <button
              type="submit"
              className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              등록하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PortfolioDetail;
