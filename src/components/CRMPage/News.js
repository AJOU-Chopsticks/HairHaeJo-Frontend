import React, { useState } from "react";
import { API } from "../../global/Constants";
import axios from "axios";
import Loading from "../Layout/Loading";
import { BsFillMegaphoneFill } from "react-icons/bs";

function News() {
  const [showModal, setShowModal] = useState(false);
  const [news, setNews] = useState("");
  const [loading, setLoading] = useState(false);

  const newsHandler = (event) => setNews(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    if (news === "") return alert("소식을 입력해주세요.");

    setLoading(true);

    axios
      .post(
        API + "/crm/news",
        { news: news },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          alert("모든 방문 고객의 이메일로 소식 전송이 완료되었습니다.");

          setNews("");
          document.body.classList.remove("overflow-hidden");
          setShowModal(false);
        } else alert("소식 전송에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("소식 전송에 실패했습니다.");
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
        <BsFillMegaphoneFill className="w-6 h-6" />
      </button>
      {showModal && (
        <div
          className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 ${
            showModal ? "active" : ""
          }`}
        >
          <div className="relative w-full max-w-xl min-h-full mx-auto mb-24 flex flex-col justify-center">
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
                <h3 className="text-xl mb-2 font-bold text-gray-900 dark:text-white">
                  소식 전송
                </h3>
                <div className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">
                  모든 방문 고객의 이메일로 소식을 전송합니다.
                </div>
                <form className="space-y-6" onSubmit={submitHandler}>
                  <div>
                    <label
                      htmlFor="news"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      내용 <span className="text-red-600 font-bold">*</span>
                    </label>
                    <textarea
                      id="news"
                      placeholder="내용"
                      rows={4}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={news}
                      onChange={newsHandler}
                    />
                  </div>
                  {loading ? (
                    <Loading />
                  ) : (
                    <button
                      type="submit"
                      className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      전송하기
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

export default News;
