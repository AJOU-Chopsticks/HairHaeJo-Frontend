import React from "react";
import My_Haircut from "../../images/My_Haircut.png";
import My_Salon from "../../images/My_Salon.png";
import Portfolio from "../../images/Portfolio.png";
import { useSelector } from "react-redux";

function Tabs(props) {
  const user = useSelector((state) => state.user);

  if (user.role === "ROLE_DESIGNER") {
    // 디자이너 프로필
    return (
      <div className="px-4 border-b border-gray-200 dark:border-gray-700 md:hidden">
        <ul className="flex flex-wrap -mb-px text-md font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="w-1/3">
            <button
              onClick={() => props.setProfileType("profile")}
              className={`${
                props.profileType === "profile"
                  ? "w-full inline-flex justify-center p-4 text-primary-600 border-b-2 border-primary-600 rounded-t-lg active dark:text-primary-500 dark:border-primary-500 group"
                  : "w-full inline-flex justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }`}
            >
              <img className="mr-3 w-6" src={My_Haircut} alt="My_Haircut" />
              {"내 프로필"}
            </button>
          </li>
          <li className="w-1/3">
            <button
              onClick={() => props.setProfileType("change")}
              aria-current="page"
              className={`${
                props.profileType === "change"
                  ? "w-full inline-flex justify-center p-4 text-primary-600 border-b-2 border-primary-600 rounded-t-lg active dark:text-primary-500 dark:border-primary-500 group"
                  : "w-full inline-flex justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }`}
            >
              <img className="mr-3 w-6" src={My_Salon} alt="My_Salon" />
              {"프로필 변경"}
            </button>
          </li>
          <li className="w-1/3">
            <button
              onClick={() => props.setProfileType("portfolio")}
              aria-current="page"
              className={`${
                props.profileType === "portfolio"
                  ? "w-full inline-flex justify-center p-4 text-primary-600 border-b-2 border-primary-600 rounded-t-lg active dark:text-primary-500 dark:border-primary-500 group"
                  : "w-full inline-flex justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }`}
            >
              <img className="mr-3 w-6" src={Portfolio} alt="Portfolio" />
              {"포트폴리오"}
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    // 고객 프로필
    return (
      <div className="px-4 border-b border-gray-200 dark:border-gray-700 md:hidden">
        <ul className="flex flex-wrap -mb-px text-md font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="w-1/2">
            <button
              onClick={() => props.setProfileType("profile")}
              className={`${
                props.profileType === "profile"
                  ? "w-full inline-flex justify-center p-4 text-primary-600 border-b-2 border-primary-600 rounded-t-lg active dark:text-primary-500 dark:border-primary-500 group"
                  : "w-full inline-flex justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }`}
            >
              <img className="mr-3 w-6" src={My_Haircut} alt="My_Haircut" />
              {"내 프로필"}
            </button>
          </li>
          <li className="w-1/2">
            <button
              onClick={() => props.setProfileType("change")}
              aria-current="page"
              className={`${
                props.profileType === "change"
                  ? "w-full inline-flex justify-center p-4 text-primary-600 border-b-2 border-primary-600 rounded-t-lg active dark:text-primary-500 dark:border-primary-500 group"
                  : "w-full inline-flex justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }`}
            >
              <img className="mr-3 w-6" src={My_Salon} alt="My_Salon" />
              {"프로필 변경"}
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Tabs;
