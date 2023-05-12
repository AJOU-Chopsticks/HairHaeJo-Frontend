import React, { useEffect, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import ReportModal from "./ReportModal";
import DeleteModal from "./DeleteModal";
import axios from "axios";
import { API } from "../../global/Constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Badge from "./Badge";

function ArticleDetail(props) {
  const user = useSelector((state) => state.user);
  const navigation = useNavigate();
  const [articleInfo, setArticleInfo] = useState({});
  const [showReport, setShowReport] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const articleModifyHandler = () => {
    props.setModifyData({ ...articleInfo, articleId: props.detailTarget });
    props.setShowDetail(false);
    props.setShowModifyForm(true);
  };

  const sendChatting = () => {
    axios
      .post(
        API + "/chat?userId=" + articleInfo.userId,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
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
        .get(API + "/advice/article?articleId=" + props.detailTarget, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.success) {
            setArticleInfo(response.data.data);
          }
        })
        .catch((err) => {
          if (err.response.data.message) alert(err.response.data.message);
          else alert("요청 글 상세 조회에 실패했습니다.");
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
              <h3 className="font-semibold ">{articleInfo.title}</h3>
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
              작성자
            </div>
            <div className="mb-4 flex flex-row justify-between">
              <div className="flex items-center space-x-3">
                <img
                  className="rounded-full w-9 h-9"
                  src={articleInfo.profileImage}
                  alt="Profile_Image"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>{articleInfo.userName}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {articleInfo.region}
                  </div>
                </div>
              </div>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  프로필 보기
                </span>
              </button>
            </div>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <figure className="max-w-lg">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={articleInfo.beforeimage}
                  alt="Before_Image"
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                  현재 상태
                </figcaption>
              </figure>
              <figure className="max-w-lg">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={articleInfo.afterimage}
                  alt="After_Image"
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                  원하는 스타일 예시
                </figcaption>
              </figure>
            </div>
            <div className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              내용
            </div>
            <div className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
              {articleInfo.body}
            </div>
            <div className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              카테고리
            </div>
            <div className="mb-8 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
              <Badge item={articleInfo.gender} />
              <Badge item={articleInfo.category} />
              <Badge item={articleInfo.tag} />
            </div>
          </div>
          {user.profileImage === articleInfo.profileImage && (
            <div className="flex justify-between items-center gap-4">
              <button
                type="button"
                className="w-1/2 text-white inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={articleModifyHandler}
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
          )}
          {user.role === "ROLE_DESIGNER" && (
            <div className="flex justify-between items-center gap-4">
              <button
                type="button"
                className="w-1/4 inline-flex items-center justify-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                onClick={() => setShowReport(true)}
              >
                신고
              </button>
              <button
                type="button"
                className="w-3/4 text-white inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={sendChatting}
              >
                <BsFillSendFill className="mr-2 w-4 h-4" />
                상담 메시지 보내기
              </button>
            </div>
          )}
        </div>
      </div>
      <ReportModal showModal={showReport} setShowModal={setShowReport} />
      <DeleteModal
        showModal={showDelete}
        setShowModal={setShowDelete}
        detailTarget={props.detailTarget}
      />
    </div>
  );
}

export default ArticleDetail;
