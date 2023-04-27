import React from "react";

function UserType(props) {
  return (
    <div className="w-2/5 ml-2">
      <label
        htmlFor="usertype"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        사용자 유형 <span className="text-red-600 font-bold">*</span>
      </label>
      <ul className="flex flex-row justify-between w-full gap-2">
        <li className="w-full">
          <input
            type="radio"
            id="customer"
            name="user"
            value="0"
            className="hidden peer"
            onClick={() => props.aaa(true)}
            defaultChecked
          />
          <label
            htmlFor="customer"
            className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="w-full text-md text-center">고객</div>
          </label>
        </li>
        <li className="w-full">
          <input
            type="radio"
            id="designer"
            name="user"
            value="1"
            className="hidden peer"
            onClick={() => props.aaa(false)}
          />
          <label
            htmlFor="designer"
            className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="w-full text-md text-center">디자이너</div>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default UserType;
