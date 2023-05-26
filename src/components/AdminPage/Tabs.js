import React from "react";
import Designer from "../../images/designer.png";
import Siren from "../../images/Siren.png";

function Tabs(props) {
  return (
    <div className="px-4 border-b border-gray-200 dark:border-gray-700 md:hidden">
      <ul className="flex flex-wrap -mb-px text-md font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="w-1/2">
          <button
            onClick={() => props.setAdminType("designer")}
            className={`${
              props.adminType === "designer"
                ? "w-full inline-flex justify-center p-4 text-primary-600 border-b-2 border-primary-600 rounded-t-lg active dark:text-primary-500 dark:border-primary-500 group"
                : "w-full inline-flex justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            }`}
          >
            <img className="mr-3 w-6" src={Designer} alt="Designer" />
            디자이너 가입
          </button>
        </li>
        <li className="w-1/2">
          <button
            onClick={() => props.setAdminType("report")}
            aria-current="page"
            className={`${
              props.adminType === "report"
                ? "w-full inline-flex justify-center p-4 text-primary-600 border-b-2 border-primary-600 rounded-t-lg active dark:text-primary-500 dark:border-primary-500 group"
                : "w-full inline-flex justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            }`}
          >
            <img className="mr-3 w-6" src={Siren} alt="Siren" />
            신고 관리
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
