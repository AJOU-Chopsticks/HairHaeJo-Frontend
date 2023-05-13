import React, { useEffect, useState } from "react";
import NoImage from "../../images/noImage.jpg";
import KakaoMap from "../../global/KakaoMap";
import { useSelector } from "react-redux";
import axios from "axios";
import { API } from "../../global/Constants";
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

function ArticleModifyForm(props) {
  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [beforeImage, setBeforeImage] = useState(NoImage);
  const [afterImage, setAfterImage] = useState(NoImage);
  const [style, setStyle] = useState("스타일을 선택해주세요.");
  const [tag, setTag] = useState("카테고리를 선택해주세요.");
  const [loading, setLoading] = useState(false);

  const titleHandler = (event) => setTitle(event.target.value);
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
  const styleHandler = (event) => {
    setTag("카테고리를 선택해주세요.");
    setStyle(event.target.value);
  };
  const tagHandler = (event) => setTag(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    if (title === "") return alert("제목을 입력해주세요.");
    if (body === "") return alert("내용을 입력해주세요.");
    if (style === "스타일을 선택해주세요.")
      return alert("스타일을 선택해주세요.");
    if (tag === "카테고리를 선택해주세요.")
      return alert("카테고리를 선택해주세요.");
    if (document.getElementById("Kakao_Address").value === "")
      return alert("지역을 선택해주세요.");

    setLoading(true);

    let articleInfo = {
      title: title,
      body: body,
      region: document.getElementById("Kakao_Address").value,
      category: style,
      gender: user.gender === 0 ? "남성" : "여성",
      tag: tag,
      articleId: props.modifyData.articleId.toString(),
    };

    const formData = new FormData();
    formData.append("jsonlist", JSON.stringify(articleInfo));

    let Before_Image = document.getElementById("Before_Image");
    formData.append("beforeimage", Before_Image.files[0] || null);
    let After_Image = document.getElementById("After_Image");
    formData.append("afterimage", After_Image.files[0] || null);

    axios
      .put(API + "/advice/article", formData, {
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
        } else alert("요청 글 수정에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("요청 글 수정에 실패했습니다.");
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    if (props.modifyData) {
      setTitle(props.modifyData.title || "");
      setBody(props.modifyData.body || "");
      setBeforeImage(props.modifyData.beforeimage);
      setAfterImage(props.modifyData.afterimage);
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
                요청 글 수정
              </h3>
              <form className="space-y-6" onSubmit={submitHandler}>
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    제목 <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="제목"
                    value={title}
                    onChange={titleHandler}
                  />
                </div>
                <div>
                  <label
                    htmlFor="body"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    내용 <span className="text-red-600 font-bold">*</span>
                  </label>
                  <textarea
                    id="body"
                    placeholder="내용"
                    rows={4}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={body}
                    onChange={bodyHandler}
                  />
                </div>
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
                      현재 상태 이미지
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
                      원하는 스타일 예시 이미지
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
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    카테고리 <span className="text-red-600 font-bold">*</span>
                  </label>
                  <div className="flex flex-row gap-2">
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
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    지역 <span className="text-red-600 font-bold">*</span>
                  </label>
                  <KakaoMap />
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

export default ArticleModifyForm;
