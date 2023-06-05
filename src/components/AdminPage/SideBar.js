import React from "react";
import Developer from "../../images/Developer.png";
import Designer from "../../images/designer.png";
import Siren from "../../images/Siren.png";
import Advertisement_Image from "../../images/Advertisement.png";
import Tabs from "./Tabs";

function SideBar(props) {
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
            <li>
              <button
                onClick={() => props.setAdminType("advertisement")}
                className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                  props.adminType === "advertisement"
                    ? "bg-primary-500 text-white hover:bg-primary-700"
                    : "text-gray-900 hover:bg-gray-200"
                }`}
              >
                <img
                  className="mr-3 w-6"
                  src={Advertisement_Image}
                  alt="Advertisement_Image"
                />
                <span>광고 요청</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
