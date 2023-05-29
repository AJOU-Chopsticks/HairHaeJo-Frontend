import React from "react";
import HairSalonCRM from "../../images/HairSalonCRM.png";
import VisitedCustomer from "../../images/VisitedCustomer.png";
import Statistics from "../../images/Statistics.png";
import Tabs from "./Tabs";

function SideBar(props) {
  return (
    <div>
      <Tabs CRMType={props.CRMType} setCRMType={props.setCRMType} />
      <aside
        id="CRM-sidebar"
        className="fixed top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="mb-3 flex items-center justify-center outline-none text-xl">
            <img className="mr-2 w-9" src={HairSalonCRM} alt="Hair-Dryer" />
            <span className="text-gray-900 dark:text-white">고객 관리</span>
          </div>
          <ul className="space-y-2 border-y-2 border-solid border-gray-100 py-3">
            <li>
              <button
                onClick={() => props.setCRMType("visit")}
                className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                  props.CRMType === "visit"
                    ? "bg-primary-500 text-white hover:bg-primary-700"
                    : "text-gray-900 hover:bg-gray-200"
                }`}
              >
                <img
                  className="mr-3 w-6"
                  src={VisitedCustomer}
                  alt="VisitedCustomer"
                />
                <span>방문 고객</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => props.setCRMType("statistics")}
                className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                  props.CRMType === "statistics"
                    ? "bg-primary-500 text-white hover:bg-primary-700"
                    : "text-gray-900 hover:bg-gray-200"
                }`}
              >
                <img className="mr-3 w-6" src={Statistics} alt="Statistics" />
                <span>통계</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default SideBar;