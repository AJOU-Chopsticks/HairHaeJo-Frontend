import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../global/Constants";
import MemoItem from "./MemoItem";
import MemoForm from "./MemoForm";

function Memo(props) {
  const navigation = useNavigate();
  const [reload, setReload] = useState(false);
  const [memoList, setMemoList] = useState([]);

  const showProfile = () => {
    document.body.classList.remove("overflow-hidden");
    navigation("/profile/user/" + props.customerInfo.clientId);
  };

  useEffect(() => {
    if (!props.customerInfo.clientId) return;

    axios
      .get(API + "/crm/customer/memo/" + props.customerInfo.clientId, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setMemoList(response.data.data);
        } else alert("고객 메모 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("고객 메모 조회에 실패했습니다.");
      });
  }, [reload, props.customerInfo.clientId]);

  return (
    <div
      className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 ${
        props.showMemo ? "active" : ""
      }`}
    >
      <div className="relative p-4 w-full max-w-xl h-full md:h-auto mx-auto md:mt-10">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-700 sm:p-5">
          <div className="flex justify-between mb-4 rounded-t sm:mb-5">
            <div className="text-lg text-gray-900 md:text-xl dark:text-white">
              <h3 className="font-semibold ">고객 메모</h3>
            </div>
            <div>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  document.body.classList.remove("overflow-hidden");
                  props.setShowMemo(false);
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
              고객
            </div>
            <div className="mb-4 flex flex-row justify-between">
              <div className="flex items-center space-x-3">
                <img
                  className="rounded-full w-9 h-9"
                  src={props.customerInfo.profileImage}
                  alt="Profile_Image"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>{props.customerInfo.clientName}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {`최근 ${props.customerInfo.recentVisit} 방문 (총 ${props.customerInfo.visitCount}회)`}
                  </div>
                </div>
              </div>
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                onClick={showProfile}
              >
                <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  프로필
                </span>
              </button>
            </div>
            <div className="mb-3 font-semibold leading-none text-gray-900 dark:text-white">
              메모 내역
            </div>
            {memoList.map((item) => (
              <MemoItem
                key={item.memoId}
                data={item}
                reload={reload}
                setReload={setReload}
              />
            ))}
            <MemoForm
              reload={reload}
              setReload={setReload}
              clientId={props.customerInfo.clientId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memo;
