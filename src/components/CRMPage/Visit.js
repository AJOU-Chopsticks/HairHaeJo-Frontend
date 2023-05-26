import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Visit(props) {
  const [visitInfo, setVisitInfo] = useState({});
  const navigation = useNavigate();

  const showProfile = () => {
    document.body.classList.remove("overflow-hidden");
    navigation("/profile/user/" + visitInfo.userId);
  };
  return (
    <figure
      className="flex flex-col items-center justify-center p-8 text-center bg-white border-2 border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-sm hover:cursor-pointer hover:bg-gray-50 hover:border-primary-700 dark:hover:cursor-pointer dark:hover:border-primary-700"
      onClick={() => {
        document.body.classList.add("overflow-hidden");
      }}
    >
      <figcaption className="flex items-center justify-center space-x-3">
        <img
          className="rounded-full w-9 h-9"
          src={props.data.profileImage}
          alt="Profile_Image"
        />
        <div className="space-y-0.5 font-medium dark:text-white text-left">
          <div>{props.data.userName}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {props.data.region}
            <br></br>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              onClick={showProfile}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                프로필 보기
              </span>
            </button>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              onClick={() => {
                document.body.classList.add("overflow-hidden");
                props.setShowModal(true);
              }}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                고객 메모
              </span>
            </button>
          </div>
          <div>{props.data.memo}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export default Visit;
