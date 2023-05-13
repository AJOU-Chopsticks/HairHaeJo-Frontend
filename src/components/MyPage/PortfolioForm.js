import React, { useState } from "react";
import NoImage from "../../images/noImage.jpg";
import { API } from "../../global/Constants";
import axios from "axios";
import Loading from "../Layout/Loading";

const styleList = ["스타일을 선택해주세요.", "커트", "펌", "염색"];
const cutList = [
  "카테고리를 선택해주세요.",
  "레이어드컷",
  "허쉬컷",
  "샤기컷",
  "원랭스컷",
];
const permList = [
  "카테고리를 선택해주세요.",
  "히피펌",
  "레이어드펌",
  "허쉬펌",
  "애즈펌",
];
const dyeingList = [
  "카테고리를 선택해주세요.",
  "다크브라운",
  "레드브라운",
  "애쉬블루",
  "애쉬브라운",
];

function PortfolioForm(props) {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(NoImage);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState("스타일을 선택해주세요.");
  const [tag, setTag] = useState("카테고리를 선택해주세요.");

  const imageHandler = () => {
    let imageFile = document.getElementById("Portpolio_Image").files[0];
    if (imageFile !== undefined) {
      setImage(URL.createObjectURL(imageFile));
    } else {
      setImage(NoImage);
    }
  };
  const textHandler = (event) => setText(event.target.value);

  const styleHandler = (event) => {
    setTag("카테고리를 선택해주세요.");
    setStyle(event.target.value);
  };
  const tagHandler = (event) => setTag(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    if (image === NoImage) return alert("시술 이미지을 첨부해주세요.");
    if (text === "") return alert("간략한 시술 설명을 적어주세요.");
    if (style === "스타일을 선택해주세요.")
      return alert("스타일을 선택해주세요.");
    if (tag === "카테고리를 선택해주세요.")
      return alert("카테고리를 선택해주세요.");
    if (event.target.gender.value === "") return alert("성별을 선택해주세요.");

    setLoading(true);

    let PortfolioInfo = {
      text: text,
      category: style,
      tag: tag,
      gender: event.target.gender.value,
    };

    const formData = new FormData();
    formData.append("jsonList", JSON.stringify(PortfolioInfo));

    let Portpolio_Image = document.getElementById("Portpolio_Image");
    formData.append("image", Portpolio_Image.files[0] || null);

    axios
      .post(API + "/portfolio", formData, {
        headers: {
          "Contest-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          alert("포트폴리오 등록 완료!");
          setImage(NoImage);
          setText("");
          setStyle("스타일을 선택해주세요.");
          setTag("카테고리를 선택해주세요.");

          document.body.classList.remove("overflow-hidden");
          setShowModal(false);
          props.setReload(!props.reload);
        } else alert("포트폴리오 등록에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("포트폴리오 등록에 실패했습니다.");
      })
      .then(() => setLoading(false));
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
                  <div className="flex items-center space-x-6">
                    <div className="shrink-0">
                      <img
                        className="h-16 w-16 object-cover rounded-lg"
                        src={image}
                        alt="Portpolio_Image"
                      />
                    </div>
                    <label className="block w-full">
                      <label
                        htmlFor="Portpolio_Image"
                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        시술 이미지{" "}
                        <span className="text-red-600 font-bold">*</span>
                      </label>
                      <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="Portpolio_Image"
                        type="file"
                        accept="image/*"
                        onChange={imageHandler}
                      />
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                        이미지 파일을 선택해주세요.
                      </p>
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      설명
                      <span className="text-red-600 font-bold">*</span>
                    </label>
                    <textarea
                      id="text"
                      placeholder="설명"
                      rows={4}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={text}
                      onChange={textHandler}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      카테고리 <span className="text-red-600 font-bold">*</span>
                    </label>
                    <div className="flex flex-row gap-4">
                      <select
                        id="style"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        value={style}
                        onChange={styleHandler}
                      >
                        {styleList.map((item) => (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <select
                        id="tag"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        value={tag}
                        onChange={tagHandler}
                        disabled={style === "스타일을 선택해주세요."}
                      >
                        {style === "커트" &&
                          cutList.map((item) => (
                            <option value={item} key={item}>
                              {item}
                            </option>
                          ))}
                        {style === "펌" &&
                          permList.map((item) => (
                            <option value={item} key={item}>
                              {item}
                            </option>
                          ))}
                        {style === "염색" &&
                          dyeingList.map((item) => (
                            <option value={item} key={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      성별 <span className="text-red-600 font-bold">*</span>
                    </label>
                    <ul className="flex flex-row justify-between w-full gap-2">
                      <li className="w-full">
                        <input
                          type="radio"
                          id="MALE"
                          name="gender"
                          value="0"
                          className="hidden peer"
                        />
                        <label
                          htmlFor="MALE"
                          className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                          <div className="w-full text-md text-center">남</div>
                        </label>
                      </li>
                      <li className="w-full">
                        <input
                          type="radio"
                          id="FEMALE"
                          name="gender"
                          value="1"
                          className="hidden peer"
                        />
                        <label
                          htmlFor="FEMALE"
                          className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                          <div className="w-full text-md text-center">여</div>
                        </label>
                      </li>
                    </ul>
                  </div>
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