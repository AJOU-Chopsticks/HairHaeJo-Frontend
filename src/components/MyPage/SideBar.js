import React from "react";
import My_Celebrity from "../../images/My_Celebrity.png";
import My_Haircut from "../../images/My_Haircut.png";
import My_Salon from "../../images/My_Salon.png";
import Portfolio from "../../images/Portfolio.png";
import MenuImage from "../../images/MenuImage.png";
import Reservation from "../../images/Reservation.png";
import Tabs from "./Tabs";
import { useSelector } from "react-redux";
import Advertisement from "../../global/Advertisement";

function SideBar(props) {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Tabs
        profileType={props.profileType}
        setProfileType={props.setProfileType}
      />
      <aside
        id="profile-sidebar"
        className="fixed top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 pb-20 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 noScrollBar">
          <div className="sticky top-0 z-50 bg-white">
            <div className="mb-3 flex items-center justify-center outline-none text-xl">
              <img className="mr-2 w-9" src={My_Celebrity} alt="My_Celebrity" />
              <span className="text-gray-900 dark:text-white">마이 페이지</span>
            </div>
            <ul className="space-y-2 border-y-2 border-solid border-gray-100 py-3">
              <li>
                <button
                  onClick={() => props.setProfileType("profile")}
                  className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                    props.profileType === "profile"
                      ? "bg-primary-500 text-white hover:bg-primary-700"
                      : "text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  <img className="mr-3 w-6" src={My_Haircut} alt="My_Haircut" />
                  <span>내 프로필</span>
                </button>
              </li>
              {user.role !== "ROLE_ADMIN" && (
                <li>
                  <button
                    onClick={() => props.setProfileType("change")}
                    className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                      props.profileType === "change"
                        ? "bg-primary-500 text-white hover:bg-primary-700"
                        : "text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <img className="mr-3 w-6" src={My_Salon} alt="My_Salon" />
                    <span>프로필 변경</span>
                  </button>
                </li>
              )}
              {user.role === "ROLE_DESIGNER" && (
                <li>
                  <button
                    onClick={() => props.setProfileType("portfolio")}
                    className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                      props.profileType === "portfolio"
                        ? "bg-primary-500 text-white hover:bg-primary-700"
                        : "text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <img className="mr-3 w-6" src={Portfolio} alt="Portfolio" />
                    <span>포트폴리오</span>
                  </button>
                </li>
              )}
              {user.role === "ROLE_DESIGNER" && (
                <li>
                  <button
                    onClick={() => props.setProfileType("menu")}
                    className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                      props.profileType === "menu"
                        ? "bg-primary-500 text-white hover:bg-primary-700"
                        : "text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <img className="mr-3 w-6" src={MenuImage} alt="MenuImage" />
                    <span>내 메뉴</span>
                  </button>
                </li>
              )}
              {user.role !== "ROLE_ADMIN" && (
                <li>
                  <button
                    onClick={() => props.setProfileType("reservation")}
                    className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                      props.profileType === "reservation"
                        ? "bg-primary-500 text-white hover:bg-primary-700"
                        : "text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <img
                      className="mr-3 w-6"
                      src={Reservation}
                      alt="Reservation"
                    />
                    <span>예약 목록</span>
                  </button>
                </li>
              )}
              {user.role === "ROLE_USER" && (
                <li>
                  <button
                    onClick={() => props.setProfileType("likeDesigner")}
                    className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                      props.profileType === "likeDesigner"
                        ? "bg-primary-500 text-white hover:bg-primary-700"
                        : "text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <img className="mr-3 w-6" src={MenuImage} alt="MenuImage" />
                    <span>관심 디자이너</span>
                  </button>
                </li>
              )}
            </ul>
          </div>
          <Advertisement />
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
