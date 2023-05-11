import React, { useEffect, useState } from "react";
import DeleteModal from "./DeleteModal";
import axios from "axios";
import { API } from "../../global/Constants";

function PortfolioDetail(props) {
  const [PortfolioInfo, setPortfolioInfo] = useState({});
  const [showDelete, setShowDelete] = useState(false);

  const PortfolioModifyHandler = () => {
    props.setModifyData({ ...PortfolioInfo, portfolioId: props.detailTarget });
    props.setShowDetail(false);
    props.setShowModifyForm(true);
  };

  useEffect(() => {
    if (props.detailTarget !== "") {
      axios
        .get(API + "/portfolio/view?portfolioId=" + props.detailTarget, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.success) {
            setPortfolioInfo(response.data.data);
          }
        })
        .catch((err) => {
          if (err.response.data.message) alert(err.response.data.message);
          else alert("포트폴리오 상세 조회에 실패했습니다.");
        });
    }
  }, [props.detailTarget]);

  return (
    <div
      className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 ${
        props.showDetail ? "active" : ""
      }`}
    >
      <div className="relative p-4 w-full max-w-xl h-full md:h-auto mx-auto md:mt-10">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-700 sm:p-5">
          <div className="flex justify-between mb-4 rounded-t sm:mb-5">
            <div className="text-lg text-gray-900 md:text-xl dark:text-white">
              <h3 className="font-semibold ">{PortfolioInfo.tag}</h3>
            </div>
            <div>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  document.body.classList.remove("overflow-hidden");
                  props.setShowDetail(false);
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
            </div>
          </div>

          <figure className="w-full">
            <img
              className="h-auto w-full rounded-lg"
              src={PortfolioInfo.image}
              alt="Portpolio_Image"
            />
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
              시술 이미지
            </figcaption>
          </figure>

          <div className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            설명
          </div>
          <div className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
            {PortfolioInfo.text}
          </div>
          <div className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            카테고리
          </div>
          <div className="mb-8 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
            {`${PortfolioInfo.gender === 0 ? "남성" : "여성"} / ${
              PortfolioInfo.category
            } / ${PortfolioInfo.tag}`}
          </div>
          {
            <div className="flex justify-between items-center gap-4">
              <button
                type="button"
                className="w-1/2 text-white inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={PortfolioModifyHandler}
              >
                <svg
                  aria-hidden="true"
                  className="mr-1 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                수정
              </button>
              <button
                type="button"
                className="w-1/2 inline-flex items-center justify-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                onClick={() => setShowDelete(true)}
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
                삭제
              </button>
            </div>
          }
        </div>
      </div>
      <DeleteModal
        showModal={showDelete}
        setShowModal={setShowDelete}
        detailTarget={props.detailTarget}
      />
    </div>
  );
}

export default PortfolioDetail;
