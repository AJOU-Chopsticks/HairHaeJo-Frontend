import React from "react";
import profileEX from "../../images/designer.png";

function DesignerProfile(props) {
  return (
    <div className="w-1/3 xl:w-1/4 h-64 sticky top-32 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hidden sm:block">
      <div className="flex flex-col items-center pb-10 pt-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={profileEX}
          alt="Designer_ProfileImage"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {props.designerInfo.hairSalonName}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {props.designerInfo.hairSalonAddress}
        </span>
      </div>
    </div>
  );
}

export default DesignerProfile;
