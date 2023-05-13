import React from "react";

function ProfileCard(props) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 pt-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={props.data.profileImage}
          alt="Designer_ProfileImage"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {props.data.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {/* 리안헤어 ({props.data.designerId}) */}
          리안헤어 (수원시 팔달구 ~)
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            프로필 보기
          </button>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
            상담 신청
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
