import React, { useState } from "react";
import KakaoMap from "../../global/KakaoMap";
import CategoryItem from "./CategoryItem";

const categoryList = [
  { id: "perm", value: "펌" },
  { id: "cut", value: "커트" },
  { id: "male", value: "남성" },
  { id: "female", value: "여성" },
  { id: "magic", value: "매직" },
  { id: "clinic", value: "클리닉" },
];

function ArticleModifyForm(props) {
  const [title, setTitle] = useState("제 머리좀 살려주세요...");
  const [body, setBody] = useState(
    "저번에 다른 지역 미용실에서 시술했는데... 지금 상태가 너무 심각해요....... 제 머리좀 제발 살려주세요 ㅠ_ㅠ"
  );
  const [beforeImage, setBeforeImage] = useState(
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMDRfMTI1%2FMDAxNTgwODEyNDY3Nzcw.0CwROtLN7llMZj-hTead7MRI2_dg4qNCLMzmMTQPtBgg.5gCii1I-gyUsg-nD60edSDJq3zgnkqHBdOJ5LzaAN54g.JPEG.validism%2FIMG_5805.JPG&type=sc960_832"
  );
  const [afterImage, setAfterImage] = useState(
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMTFfMTU4%2FMDAxNjE1MzkwMTA4NDkw.39z3iICA5ZpAK16QpYRe4D6Cal-JJsjImnG_QeTkv7Ug.Cc00o27JILG41RJAy51JX161zt8PEg9Y_qt8qoV8F-sg.JPEG.phucxt_0703%2F20210309_160150.jpg&type=sc960_832"
  );

  const titleHandler = (event) => setTitle(event.target.value);
  const bodyHandler = (event) => setBody(event.target.value);
  const imageHandler = (target) => {
    let imageFile = document.getElementById(target).files[0];
    if (imageFile !== undefined) {
      if (target === "Before_Image")
        setBeforeImage(URL.createObjectURL(imageFile));
      else setAfterImage(URL.createObjectURL(imageFile));
    } else {
      if (target === "Before_Image")
        setBeforeImage(
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMDRfMTI1%2FMDAxNTgwODEyNDY3Nzcw.0CwROtLN7llMZj-hTead7MRI2_dg4qNCLMzmMTQPtBgg.5gCii1I-gyUsg-nD60edSDJq3zgnkqHBdOJ5LzaAN54g.JPEG.validism%2FIMG_5805.JPG&type=sc960_832"
        );
      else
        setAfterImage(
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMTFfMTU4%2FMDAxNjE1MzkwMTA4NDkw.39z3iICA5ZpAK16QpYRe4D6Cal-JJsjImnG_QeTkv7Ug.Cc00o27JILG41RJAy51JX161zt8PEg9Y_qt8qoV8F-sg.JPEG.phucxt_0703%2F20210309_160150.jpg&type=sc960_832"
        );
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const selectedCategory = document.querySelectorAll(
      'input[name="category"]:checked'
    );
    let category = "";
    selectedCategory.forEach((item, index) => {
      if (index === 0) category += item.value;
      else category += " / " + item.value;
    });

    console.log(title);
    console.log(body);
    console.log(category);
    console.log(document.getElementById("Kakao_Address").value);
  };

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
                  <ul className="w-full gap-2 grid grid-cols-3 lg:grid-cols-4">
                    {categoryList.map((item) => (
                      <CategoryItem
                        key={item.id}
                        id={item.id}
                        value={item.value}
                      />
                    ))}
                  </ul>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    지역 <span className="text-red-600 font-bold">*</span>
                  </label>
                  <KakaoMap />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  등록하기
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleModifyForm;
