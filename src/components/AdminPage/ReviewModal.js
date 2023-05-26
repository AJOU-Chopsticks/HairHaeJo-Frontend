import React, { useEffect, useState } from "react";
import Loading from "../Layout/Loading";
import { API } from "../../global/Constants";
import axios from "axios";

function ReviewModal(props) {
  const [loading, setLoading] = useState(false);
  const [reviewData, setReviewData] = useState({});

  const deleteHandler = () => {
    axios
      .delete(API + "/admin/review?reviewId=" + props.reviewId, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          alert("삭제 완료!");
          setReviewData({});
        } else alert("후기 삭제에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("후기 삭제에 실패했습니다.");
      });
  };

  const stopHandler = () => {
    axios
      .put(
        API + "/admin/user?userId=" + props.targetUserId,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          alert("이용자 정지 완료!");
        } else alert("이용자 정지에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("이용자 정지에 실패했습니다.");
      });
  };

  useEffect(() => {
    if (props.reviewId === undefined) return;
    setLoading(true);
    axios
      .get(API + "/review/" + props.reviewId, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setReviewData(response.data.data);
          setLoading(false);
        } else alert("후기 상세 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("후기 상세 조회에 실패했습니다.");
        setLoading(false);
      });
  }, [props.reviewId]);

  return (
    <div
      className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 flex ${
        props.showModal ? "active" : ""
      }`}
    >
      <div className="relative w-full max-w-xl min-h-full m-auto">
        {loading ? (
          <Loading full={true} />
        ) : (
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
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                후기
              </h3>
              {reviewData.rating ? (
                <>
                  <figure className="w-full">
                    <img
                      className="h-auto max-w-full rounded-lg mx-auto"
                      src={reviewData.reviewImage}
                      alt="Review_Image"
                    />
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                      후기 이미지
                    </figcaption>
                  </figure>
                  <div className="my-3 flex items-center justify-center">
                    <svg
                      aria-hidden="true"
                      className={`w-10 h-10 ${
                        reviewData.rating >= 1
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-500"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className={`w-10 h-10 ${
                        reviewData.rating >= 2
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-500"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className={`w-10 h-10 ${
                        reviewData.rating >= 3
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-500"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className={`w-10 h-10 ${
                        reviewData.rating >= 4
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-500"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className={`w-10 h-10 ${
                        reviewData.rating >= 5
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-500"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <div className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                    후기 내용
                  </div>
                  <div className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                    {reviewData.reviewBody}
                  </div>
                  <div className="mt-4 mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                    디자이너 답변
                  </div>
                  <div className="mb-8 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                    {reviewData.reply || "등록된 답변이 없습니다."}
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <button
                      type="button"
                      className="w-full text-white inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={deleteHandler}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 mr-1.5 -ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      후기 삭제
                    </button>

                    <button
                      type="button"
                      className="w-full inline-flex items-center justify-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                      onClick={stopHandler}
                    >
                      작성자 정지
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center mb-10">
                    후기가 이미 삭제되었습니다.
                  </div>
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                    onClick={stopHandler}
                  >
                    작성자 정지
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewModal;
