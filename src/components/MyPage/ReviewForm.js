import React, { useState } from "react";
import Loading from "../Layout/Loading";
import NoImage from "../../images/noImage.jpg";
import axios from "axios";
import { API } from "../../global/Constants";

function ReviewForm(props) {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(NoImage);
  const [reviewBody, setReviewBody] = useState("");
  const [rating, setRating] = useState(0);

  const imageHandler = () => {
    let imageFile = document.getElementById("Review_Image").files[0];
    if (imageFile !== undefined) {
      setImage(URL.createObjectURL(imageFile));
    } else {
      setImage(NoImage);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (rating === 0) return alert("별점을 설정해주세요.");
    if (image === NoImage) return alert("후기 이미지를 등록해주세요.");
    if (reviewBody === "") return alert("후기 내용을 입력해주세요.");

    setLoading(true);

    const formData = new FormData();
    formData.append(
      "jsonList",
      JSON.stringify({ reviewBody: reviewBody, rating: rating })
    );

    let Review_Image = document.getElementById("Review_Image");
    formData.append("image", Review_Image.files[0] || null);

    axios
      .post(API + "/review/" + props.target.reservationId, formData, {
        headers: {
          "Contest-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          alert("작성 완료!");

          setImage(NoImage);
          setRating(0);
          setReviewBody("");

          document.body.classList.remove("overflow-hidden");
          props.setShowModal(false);
          props.setReload(!props.reload);
        } else alert("후기 등록에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("후기 등록에 실패했습니다.");
      })
      .then(() => setLoading(false));
  };

  return (
    <div
      className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 flex ${
        props.showModal ? "active" : ""
      }`}
    >
      <div className="relative w-full max-w-xl max-h-full m-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={() => {
              setImage(NoImage);
              setRating(0);
              setReviewBody("");
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
            <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              후기 작성
            </h3>
            <form className="space-y-6" onSubmit={submitHandler}>
              <div className="flex items-center justify-center">
                <button type="button" onClick={() => setRating(1)}>
                  <svg
                    aria-hidden="true"
                    className={`w-10 h-10 ${
                      rating >= 1
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-500"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button type="button" onClick={() => setRating(2)}>
                  <svg
                    aria-hidden="true"
                    className={`w-10 h-10 ${
                      rating >= 2
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-500"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button type="button" onClick={() => setRating(3)}>
                  <svg
                    aria-hidden="true"
                    className={`w-10 h-10 ${
                      rating >= 3
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-500"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button type="button" onClick={() => setRating(4)}>
                  <svg
                    aria-hidden="true"
                    className={`w-10 h-10 ${
                      rating >= 4
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-500"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button type="button" onClick={() => setRating(5)}>
                  <svg
                    aria-hidden="true"
                    className={`w-10 h-10 ${
                      rating >= 5
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-500"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex items-center space-x-6">
                <div className="shrink-0">
                  <img
                    className="h-16 w-16 object-cover rounded-lg"
                    src={image}
                    alt="Review_Image"
                  />
                </div>
                <label className="block w-full">
                  <label
                    htmlFor="Review_Image"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    후기 이미지{" "}
                    <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="Review_Image"
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
                  htmlFor="Review_Body"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  후기 내용 <span className="text-red-600 font-bold">*</span>
                </label>
                <textarea
                  id="Review_Body"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="후기 내용"
                  rows={4}
                  value={reviewBody}
                  onChange={(event) => setReviewBody(event.target.value)}
                />
              </div>
              {loading ? (
                <Loading full={false} />
              ) : (
                <button
                  type="submit"
                  className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  확인
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
