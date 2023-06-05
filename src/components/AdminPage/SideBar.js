import React, { useState } from "react";
import Developer from "../../images/Developer.png";
import Designer from "../../images/designer.png";
import Siren from "../../images/Siren.png";
import Tabs from "./Tabs";

function SideBar(props) {
  const [showNotice, setShowNotice] = useState(true);

  return (
    <div>
      <Tabs adminType={props.adminType} setAdminType={props.setAdminType} />
      <aside
        id="admin-sidebar"
        className="fixed top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 pb-20 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 noScrollBar">
          <div className="mb-3 flex items-center justify-center outline-none text-xl">
            <img className="mr-2 w-9" src={Developer} alt="Hair-Dryer" />
            <span className="text-gray-900 dark:text-white">관리자</span>
          </div>
          <ul className="space-y-2 border-y-2 border-solid border-gray-100 py-3">
            <li>
              <button
                onClick={() => props.setAdminType("designer")}
                className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                  props.adminType === "designer"
                    ? "bg-primary-500 text-white hover:bg-primary-700"
                    : "text-gray-900 hover:bg-gray-200"
                }`}
              >
                <img className="mr-3 w-6" src={Designer} alt="Designer" />
                <span>디자이너 가입</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => props.setAdminType("report")}
                className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                  props.adminType === "report"
                    ? "bg-primary-500 text-white hover:bg-primary-700"
                    : "text-gray-900 hover:bg-gray-200"
                }`}
              >
                <img className="mr-3 w-6" src={Siren} alt="Siren" />
                <span>신고 관리</span>
              </button>
            </li>
          </ul>
          {showNotice && (
            <div className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900">
              <div className="flex items-center mb-3">
                <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
                  공지
                </span>
                <button
                  type="button"
                  className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                  aria-label="Close"
                  onClick={() => setShowNotice(false)}
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
              <p className="text-sm text-blue-800 dark:text-blue-400">
                06/01 02:00 ~ 04:00
                <br />
                시스템 점검 예정
              </p>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
