import React from "react";

function DesignerProfile(props) {
  return (
    <div className="w-1/3 xl:w-1/4 h-80 sticky top-32 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hidden sm:block">
      <div className="flex flex-col items-center pb-10 pt-10">
        <img
          className="w-24 h-24 mb-4 rounded-full shadow-lg"
          src={props.designerInfo.profileImage}
          alt="Designer_ProfileImage"
        />
        <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">
          {props.designerInfo.name}
        </h5>
        <span className="mb-1 text-sm text-gray-500 dark:text-gray-400">
          {props.designerProfileInfo.hairSalonName}
        </span>
        <span className="mb-5 text-sm text-gray-500 dark:text-gray-400">
          ({props.designerProfileInfo.hairSalonAddress})
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {props.designerProfileInfo.introduction}
        </span>
      </div>
    </div>
  );
}

export default DesignerProfile;
