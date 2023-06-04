import React from "react";
import { DEFAULT_PROFILE_IMAGE } from "./Constants";

function Advertisement() {
  return (
    <div className="p-4 mt-6 rounded-lg border border-primary-300 bg-primary-50 dark:bg-primary-900 dark:border-primary-800">
      <div className="flex items-center mb-3">
        <span className="bg-red-100 text-red-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
          지역 광고
        </span>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-primary-50 text-primary-900 rounded-lg focus:ring-2 focus:ring-primary-400 p-1 hover:bg-primary-200 inline-flex h-6 w-6 dark:bg-primary-900 dark:text-primary-400 dark:hover:bg-primary-800"
          aria-label="Close"
          // onClick={() => setShowNotice(false)}
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4"
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
      <div className="p-2 text-primary-800 border border-primary-300 rounded-lg bg-primary-50 dark:bg-gray-800 dark:text-primary-400 dark:border-primary-800">
        <div className="font-bold text-center">{"이벤트 합니다~"}</div>
      </div>
      <div className="flex items-center space-x-3 my-3">
        <img
          className="rounded-full w-9 h-9"
          src={DEFAULT_PROFILE_IMAGE}
          alt="Advertiser_Image"
        />
        <div className="space-y-0.5 text-sm font-medium dark:text-white text-left">
          <div>{"유진 (헤어살롱)"}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {"수원시 팔달구"}
          </div>
        </div>
      </div>
      <figure>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://ssl.pstatic.net/melona/libs/1450/1450325/30efdf7e3ee1f0f25bbd_20230523134715272_3.jpg"
          alt="After_Image"
        />
        <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          원하는 스타일 예시 원하는 스타일 예시 원하는 스타일 예시 원하는 스타일
          예시스타일 예시스타일 예시스타일 예시스타일 예시스타일 예시스타일
          예시스타일 예시스타일 예시스타일 예시스타일 예시
        </figcaption>
      </figure>
      <div className="flex my-4 space-x-3">
        <button
          className="w-1/2 px-4 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          // onClick={showProfile}
        >
          프로필
        </button>
        <button
          className="w-1/2 px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          // onClick={sendChatting}
        >
          상담
        </button>
      </div>
      <button
        type="button"
        className="text-white w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
        // onClick={() =>
        //   navigation("/reservation/" + props.data.designerId)
        // }
      >
        예약하기
      </button>
    </div>
  );
}

export default Advertisement;
