import React from "react";
import VisitedCustomer from "../../images/VisitedCustomer.png";
import Statistics from "../../images/Statistics.png";
import Holiday from "../../images/Holiday.png";

function Tabs(props) {
  return (
    <div className="px-4 border-b border-gray-200 dark:border-gray-700 md:hidden">
      <ul className="flex flex-wrap -mb-px text-md font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="w-1/2">
          <button
            onClick={() => props.setCRMType("visit")}
            className={`${
              props.CRMType === "visit"
                ? "w-full inline-flex justify-center p-4 text-primary-600 border-b-2 border-primary-600 rounded-t-lg active dark:text-primary-500 dark:border-primary-500 group"
                : "w-full inline-flex justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            }`}
          >
            <img
              className="mr-3 w-6"
              src={VisitedCustomer}
              alt="VisitedCustomer"
            />
            방문 고객
          </button>
        </li>
        <li className="w-1/2">
          <button
            onClick={() => props.setCRMType("statistics")}
            aria-current="page"
            className={`${
              props.CRMType === "statistics"
                ? "w-full inline-flex justify-center p-4 text-primary-600 border-b-2 border-primary-600 rounded-t-lg active dark:text-primary-500 dark:border-primary-500 group"
                : "w-full inline-flex justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            }`}
          >
            <img className="mr-3 w-6" src={Statistics} alt="Statistics" />
            통계
          </button>
        </li>
        <li className="w-1/2">
          <button
            onClick={() => props.setCRMType("holiday")}
            aria-current="page"
            className={`${
              props.CRMType === "holiday"
                ? "w-full inline-flex justify-center p-4 text-primary-600 border-b-2 border-primary-600 rounded-t-lg active dark:text-primary-500 dark:border-primary-500 group"
                : "w-full inline-flex justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            }`}
          >
            <img className="mr-3 w-6" src={Holiday} alt="Holiday" />
            휴일
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
