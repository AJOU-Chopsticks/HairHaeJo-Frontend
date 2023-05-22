import React, { useEffect, useState } from "react";
import Loading from "../Layout/Loading";
import { API } from "../../global/Constants";
import { useSelector } from "react-redux";
import axios from "axios";

function ReviewModal(props) {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [loadingReport, setLoadingReport] = useState(false);
  const [reload, setReload] = useState(false);
  const [reviewBody, setReviewBody] = useState("");
  const [reviewData, setReviewData] = useState({});
  const [reportReason, setReportReason] = useState("");
  const [showReport, setShowReport] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    if (reviewBody === "") return alert("답변을 등록해주세요.");

    setLoading(true);
    // API 수정되면, 리뷰 아이디 설정 해야함. (일단 임시로 10)
    axios
      .put(
        API + "/review/response/" + 10,
        { reply: reviewBody },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          alert("답변 작성 완료!");

          setReviewBody("");
          setReload(!reload);
        } else alert("후기 등록에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("후기 등록에 실패했습니다.");
      })
      .then(() => setLoading(false));
  };

  const reportSubmitHandler = (event) => {
    event.preventDefault();

    if (reportReason === "") return alert("신고 내용을 입력해주세요.");

    setLoadingReport(true);
    axios
      .post(
        API + "/user/report",
        {
          type: "REVIEW",
          targetUserId: props.target.userId,
          reason: reportReason,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          alert("신고 등록 완료!");

          setReportReason("");
          setShowReport(false);
        } else alert("신고 등록에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("신고 등록에 실패했습니다.");
      })
      .then(() => setLoadingReport(false));
  };

  useEffect(() => {
    // API 수정되면, 리뷰 아이디 설정 해야함. (일단 임시로 10)
    axios
      .get(API + "/review/" + 10, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setReviewData(response.data.data);
          if (response.data.data.reply !== null)
            setReviewBody(response.data.data.reply);
        } else alert("후기 상세 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("후기 상세 조회에 실패했습니다.");
      });
  }, [reload]);

  return (
    <div
      className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 flex ${
        props.showModal ? "active" : ""
      }`}
    >
      <div className="relative w-full max-w-xl min-h-full m-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={() => {
              document.body.classList.remove("overflow-hidden");
              setShowReport(false);
              setReportReason("");
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
            {user.role === "ROLE_DESIGNER" && (
              <>
                <hr className="my-5 border-1 border-primary-300" />
                <form className="space-y-6" onSubmit={submitHandler}>
                  <div>
                    <label
                      htmlFor="Review_Body"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {reviewData.reply
                        ? "디자이너 답변 수정 "
                        : "디자이너 답변 등록 "}
                      <span className="text-red-600 font-bold">*</span>
                    </label>
                    <textarea
                      id="Review_Body"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="디자이너 답변"
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
                      {reviewData.reply ? "답변 수정" : "답변 등록"}
                    </button>
                  )}
                </form>
                {!showReport ? (
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-10 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                    onClick={() => setShowReport(true)}
                  >
                    후기 신고
                  </button>
                ) : (
                  <form
                    className="space-y-6 mt-10"
                    onSubmit={reportSubmitHandler}
                  >
                    <div>
                      <label
                        htmlFor="reason"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        신고 내용{" "}
                        <span className="text-red-600 font-bold">*</span>
                      </label>
                      <textarea
                        id="reason"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="신고 내용"
                        rows={8}
                        value={reportReason}
                        onChange={(event) =>
                          setReportReason(event.target.value)
                        }
                      />
                    </div>
                    {loadingReport ? (
                      <Loading />
                    ) : (
                      <button
                        type="submit"
                        className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        신고하기
                      </button>
                    )}
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
