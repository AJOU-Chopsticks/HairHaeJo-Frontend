import React, { useState } from "react";
import Hair_Salon from "../../images/Hair_Salon.png";
import Hair_Cutting from "../../images/Hair_Cutting.png";
import Hair_Dryer from "../../images/Hair_Dryer.png";
import ProfileTab from "./ProfileTab";

function ProfileSidebar() {
  const [profileType, setProfileType] = useState("lookup");

  return (
    <div>
      <ProfileTab profileType={profileType} setProfileType={setProfileType} />
      <aside
        id="myprofile-sidebar"
        className="fixed top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="mb-3 flex items-center justify-center outline-none text-xl">
            <img className="mr-2 w-9" src={Hair_Salon} alt="Hair-Dryer" />
            <span className="text-gray-900 dark:text-white">내 프로필</span>
          </div>
          <ul className="space-y-2 border-y-2 border-solid border-gray-100 py-3">
            <li>
              <button
                onClick={() => setProfileType("lookup")}
                className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                  profileType === "lookup"
                    ? "bg-primary-500 text-white hover:bg-primary-700"
                    : "text-gray-900 hover:bg-gray-200"
                }`}
              >
                <img
                  className="mr-3 w-6"
                  src={Hair_Cutting}
                  alt="Hair_Cutting"
                />
                <span>프로필 조회</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setProfileType("change")}
                className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                  profileType === "change"
                    ? "bg-primary-500 text-white hover:bg-primary-700"
                    : "text-gray-900 hover:bg-gray-200"
                }`}
              >
                <img className="mr-3 w-6" src={Hair_Dryer} alt="Hair_Dryer" />
                <span>프로필 변경</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default ProfileSidebar;
