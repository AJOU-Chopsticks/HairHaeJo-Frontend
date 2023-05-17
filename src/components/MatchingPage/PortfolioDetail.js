import React, { useEffect, useState } from "react";
import { BsFillSendFill, BsFillCalendarCheckFill } from "react-icons/bs";
import Badge from "./Badge";
import axios from "axios";
import { API } from "../../global/Constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PortfolioDetail(props) {
  const navigation = useNavigate();
  const user = useSelector((state) => state.user);
  const [portfolioInfo, setPortfolioInfo] = useState({});

  const showProfile = () => {
    document.body.classList.remove("overflow-hidden");
    navigation("/profile/designer/" + portfolioInfo.designerId);
  };

  const sendChatting = () => {
    axios
      .post(
        API + "/chat?userId=" + portfolioInfo.designerId,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          document.body.classList.remove("overflow-hidden");
          navigation("/chat");
        } else alert("채팅방 생성에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("채팅방 생성에 실패했습니다.");
      });
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
          } else alert("포트폴리오 상세 조회에 실패했습니다.");
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
              <h3 className="font-semibold ">{portfolioInfo.tag}</h3>
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
          <div>
            <div className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              디자이너
            </div>
            <div className="mb-4 flex flex-row justify-between">
              <div className="flex items-center space-x-3">
                <img
                  className="rounded-full w-9 h-9"
                  src={portfolioInfo.designerImage}
                  alt="Profile_Image"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>{portfolioInfo.designerName}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {`${portfolioInfo.hairSalonName} (${portfolioInfo.hairSalonAddress})`}
                  </div>
                </div>
              </div>
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                onClick={showProfile}
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  프로필 보기
                </span>
              </button>
            </div>
            <figure className="w-full">
              <img
                className="h-auto max-w-full rounded-lg mx-auto"
                src={portfolioInfo.image}
                alt="After_Image"
              />
              <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                시술 이미지
              </figcaption>
            </figure>
            <div className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              설명
            </div>
            <div className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
              {portfolioInfo.text}
            </div>
            <div className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              카테고리
            </div>
            <div className="mb-8 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
              <Badge item={portfolioInfo.gender === 0 ? "남성" : "여성"} />
              <Badge item={portfolioInfo.category} />
              <Badge item={portfolioInfo.tag} />
            </div>
          </div>
          {user.role !== "ROLE_DESIGNER" && (
            <div className="flex flex-row justify-between gap-4">
              <button
                type="button"
                className="w-full text-white inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => {
                  document.body.classList.remove("overflow-hidden");
                  navigation("/reservation/" + portfolioInfo.designerId);
                }}
              >
                <BsFillCalendarCheckFill className="mr-2 w-4 h-4" />
                바로 예약하기
              </button>
              <button
                type="button"
                className="w-full text-white inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={sendChatting}
              >
                <BsFillSendFill className="mr-2 w-4 h-4" />
                상담 메시지 보내기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetail;
