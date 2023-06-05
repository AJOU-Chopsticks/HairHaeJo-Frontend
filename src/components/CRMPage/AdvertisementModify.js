import React, { useEffect, useState } from "react";
import NoImage from "../../images/noImage.jpg";
import KakaoMap from "../../global/KakaoMap";
import { API } from "../../global/Constants";
import { AddressToSearch } from "../../global/Functions";
import axios from "axios";
import Loading from "../Layout/Loading";

function AdvertisementModify(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(NoImage);
  const [loading, setLoading] = useState(false);

  const titleHandler = (event) => setTitle(event.target.value);
  const textHandler = (event) => setText(event.target.value);
  const imageHandler = (target) => {
    let imageFile = document.getElementById(target).files[0];
    if (imageFile !== undefined) {
      setImage(URL.createObjectURL(imageFile));
    } else {
      setImage(NoImage);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (title === "") return alert("제목을 입력해주세요.");
    if (text === "") return alert("내용을 입력해주세요.");
    if (image === NoImage) return alert("광고 이미지를 등록해주세요.");
    if (document.getElementById("Kakao_Address").value === "")
      return alert("지역을 선택해주세요.");

    setLoading(true);

    let info = {
      advertiseId: props.data.advertiseId,
      title: title,
      text: text,
      location: AddressToSearch(document.getElementById("Kakao_Address").value),
    };

    const formData = new FormData();
    formData.append("jsonList", JSON.stringify(info));

    let Ad_Image = document.getElementById("Ad_Image");
    formData.append("image", Ad_Image.files[0] || null);

    axios
      .put(API + "/ad/change", formData, {
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
        } else alert("광고 수정에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("광고 수정에 실패했습니다.");
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    setTitle(props.data.title);
    setText(props.data.text);
    setImage(props.data.image);
  }, [props]);

  return (
    <>
      {props.showModal && (
        <div
          className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 ${
            props.showModal ? "active" : ""
          }`}
        >
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
                  광고 수정
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
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      내용 <span className="text-red-600 font-bold">*</span>
                    </label>
                    <textarea
                      id="text"
                      placeholder="내용"
                      rows={4}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={text}
                      onChange={textHandler}
                    />
                  </div>
                  <div>
                    <label className="block w-full">
                      <label
                        htmlFor="Ad_Image"
                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        광고 이미지{" "}
                        <span className="text-red-600 font-bold">*</span>
                      </label>
                      <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="Ad_Image"
                        type="file"
                        accept="image/*"
                        onChange={() => imageHandler("Ad_Image")}
                      />
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                        이미지 파일을 선택해주세요.
                      </p>
                    </label>
                    <div className="shrink-0 mt-2">
                      <img
                        className="w-full object-cover rounded-lg"
                        src={image}
                        alt="Ad_Image"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      지역 <span className="text-red-600 font-bold">*</span>
                    </label>
                    <KakaoMap address={props.data.location} />
                  </div>
                  {loading ? (
                    <Loading />
                  ) : (
                    <button
                      type="submit"
                      className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      수정하기
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

export default AdvertisementModify;
