import React from "react";
import MainIcon from "../../images/MainIcon.png";

function MenuItem(props) {
  return (
    <li className="border-2 border-solid border-gray-100 dark:border-gray-900 rounded-lg">
      <button
        onClick={() => {
          props.setMenu(props.data);
        }}
        className={`w-full flex justify-between p-2 text-base font-normal rounded-lg border border-2 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 group ${
          props.data.menuId === props.menu.menuId
            ? "bg-gray-200 border-primary-400"
            : "border-white dark:border-gray-800"
        }`}
      >
        <div className="flex flex-row">
          <img
            className="mr-5 w-24 h-24 rounded-lg"
            src={MainIcon}
            alt="Menu_Image"
          />
          <div className="flex flex-col justify-between text-left">
            <span className="text-xl text-black font-bold dark:text-white">
              {props.data.menuName}
            </span>
            <span className="text-lg text-black dark:text-white">
              {props.data.menuPrice + "원"}
            </span>
            <span className="text-md text-gray-500 dark:text-white">
              {props.data.menuContent}
            </span>
          </div>
        </div>
      </button>
    </li>
  );
}

export default MenuItem;
