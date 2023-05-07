import React, { useState } from "react";
import CustomerForm from "./CustomerForm";
import DesignerForm from "./DesignerForm";
import AccoutForm from "./AccoutForm";
import PasswordForm from "./PasswordForm";
import { useSelector } from "react-redux";

const up = (
  <svg
    data-accordion-icon
    className="w-6 h-6 rotate-180 shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const down = (
  <svg
    data-accordion-icon
    className="w-6 h-6 shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    ></path>
  </svg>
);

function ProfileChange(props) {
  const user = useSelector((state) => state.user);
  const [target, setTarget] = useState(0);

  const targetHandler = (select) => {
    if (target === select) setTarget(0);
    else setTarget(select);
  };

  return (
    <div>
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl dark:border-gray-700 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 ${
            target === 1 &&
            "bg-primary-100 dark:bg-gray-800 text-primary-600 dark:text-white"
          }`}
          onClick={() => targetHandler(1)}
        >
          <span>프로필 정보 변경</span>
          {target === 1 ? up : down}
        </button>
      </h2>
      <div className={target === 1 ? "block" : "hidden"}>
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          {user.role === "ROLE_USER" ? (
            <CustomerForm profileInfo={props.profileInfo} />
          ) : (
            <DesignerForm profileInfo={props.profileInfo} />
          )}
        </div>
      </div>
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 ${
            target === 2 &&
            "bg-primary-100 dark:bg-gray-800 text-primary-600 dark:text-white"
          }`}
          onClick={() => targetHandler(2)}
        >
          <span>계정 정보 변경</span>
          {target === 2 ? up : down}
        </button>
      </h2>
      <div className={target === 2 ? "block" : "hidden"}>
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <AccoutForm setTarget={setTarget} />
        </div>
      </div>
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 rounded-b-xl dark:border-gray-700 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 ${
            target === 3 &&
            "bg-primary-100 dark:bg-gray-800 text-primary-600 dark:text-white rounded-b-none"
          }`}
          onClick={() => targetHandler(3)}
        >
          <span>비밀번호 변경</span>
          {target === 3 ? up : down}
        </button>
      </h2>
      <div className={target === 3 ? "block" : "hidden"}>
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 rounded-b-xl">
          <PasswordForm setTarget={setTarget} />
        </div>
      </div>
    </div>
  );
}

export default ProfileChange;
