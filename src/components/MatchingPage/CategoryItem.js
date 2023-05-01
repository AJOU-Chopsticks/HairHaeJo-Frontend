import React from "react";

function CategoryItem(props) {
  return (
    <li className="w-full">
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.value}
        className="hidden peer"
      />
      <label
        htmlFor={props.id}
        className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="w-full text-md text-center">{props.value}</div>
      </label>
    </li>
  );
}

export default CategoryItem;
