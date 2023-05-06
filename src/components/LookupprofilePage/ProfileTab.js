import React from "react";
import Hair_Cutting from "../../images/Hair_Cutting.png";
import Hair_Dryer from "../../images/Hair_Dryer.png";

function ProfileTab(props) {
  return (
    <div className="px-4 border-b border-gray-200 dark:border-gray-700 md:hidden">
      <ul className="flex flex-wrap -mb-px text-md font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="w-1/2">
          <button
            onClick={() => props.setProfileType("lookup")}
            className={`${
              props.profileType === "general"
                ? "w-full inline-flex justify-center p-4 text-primary-600 border-b-2 border-primary-600 rounded-t-lg active dark:text-primary-500 dark:border-primary-500 group"
                : "w-full inline-flex justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            }`}
          >
            <img className="mr-3 w-6" src={Hair_Cutting} alt="Hair_Cutting" />
            프로필 조회
          </button>
        </li>
        <li className="w-1/2">
          <button
            onClick={() => props.setProfileType("change")}
            aria-current="page"
            className={`${
              props.profileType === "fast"
                ? "w-full inline-flex justify-center p-4 text-primary-600 border-b-2 border-primary-600 rounded-t-lg active dark:text-primary-500 dark:border-primary-500 group"
                : "w-full inline-flex justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            }`}
          >
            <img className="mr-3 w-6" src={Hair_Dryer} alt="Hair_Dryer" />
            프로필 변경
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ProfileTab;
