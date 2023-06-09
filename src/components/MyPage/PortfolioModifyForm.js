import React, { useEffect, useState } from "react";
import NoImage from "../../images/noImage.jpg";
import axios from "axios";
import {
  API,
  styleList,
  cutList,
  permList,
  dyeingList,
} from "../../global/Constants";
import Loading from "../Layout/Loading";

function PortfolioModifyForm(props) {
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
      portfolioId: props.modifyData.portfolioId,
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
      .put(API + "/portfolio", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          alert("수정 완료!");
          document.body.classList.remove("overflow-hidden");
          props.setShowModal(false);
          props.setReload(!props.reload);
        } else alert("포트폴리오 수정에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("포트폴리오 수정에 실패했습니다.");
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    if (props.modifyData) {
      setImage(props.modifyData.image || NoImage);
      setText(props.modifyData.text || "");
      setStyle(props.modifyData.category || "스타일을 선택해주세요.");
      setTag(props.modifyData.tag || "카테고리를 선택해주세요.");
    }
  }, [props.modifyData]);

  return (
    <div
      className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 ${
        props.showModal ? "active" : "hidden"
      }`}
    >
      {props.showModal && (
        <div className="relative w-full max-w-xl min-h-full mx-auto md:mt-10 mb-24">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => {
                document.body.classList.remove("overflow-hidden");
                props.setShowModal(false);
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
                        defaultChecked={props.modifyData.gender === 0}
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
                        defaultChecked={props.modifyData.gender === 1}
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
      )}
    </div>
  );
}

export default PortfolioModifyForm;
