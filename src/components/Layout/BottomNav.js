import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function BottomNav() {
  const location = useLocation();
  const navigation = useNavigate();
  const user = useSelector((state) => state.user);

  return (
    <div className="fixed bottom-0 left-0 z-40 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 md:hidden">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-0"
          onClick={() => {
            navigation("/");
          }}
        >
          <svg
            className={`w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 ${
              location.pathname === "/" &&
              "text-primary-600 dark:text-primary-500"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          <span
            className={`text-sm text-gray-500 dark:text-gray-400 ${
              location.pathname === "/" &&
              "text-primary-600 dark:text-primary-500"
            }`}
          >
            홈
          </span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-0 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          onClick={() => {
            navigation("/matching");
          }}
        >
          <svg
            className={`w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 ${
              location.pathname === "/matching" &&
              "text-primary-600 dark:text-primary-500"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"></path>
          </svg>
          <span
            className={`text-sm text-gray-500 dark:text-gray-400 ${
              location.pathname === "/matching" &&
              "text-primary-600 dark:text-primary-500"
            }`}
          >
            매칭
          </span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-0 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          onClick={() => {
            navigation("/chat");
          }}
        >
          <svg
            className={`w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 ${
              location.pathname === "/chat" &&
              "text-primary-600 dark:text-primary-500"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
            ></path>
          </svg>
          <span
            className={`text-sm text-gray-500 dark:text-gray-400 ${
              location.pathname === "/chat" &&
              "text-primary-600 dark:text-primary-500"
            }`}
          >
            상담
          </span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-0 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          onClick={() => {
            navigation("/");
          }}
        >
          <svg
            className={`w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 ${
              location.pathname === "/aaa" &&
              "text-primary-600 dark:text-primary-500"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
            ></path>
          </svg>
          <span
            className={`text-sm text-gray-500 dark:text-gray-400 ${
              location.pathname === "/aaa" &&
              "text-primary-600 dark:text-primary-500"
            }`}
          >
            일정
          </span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-0 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          onClick={() => {
            navigation("/mypage");
          }}
        >
          <img
            className="w-9 h-9 rounded-full"
            src={user.profileImage}
            alt="User_Profile_Image"
          />
        </button>
      </div>
    </div>
  );
}

export default BottomNav;
