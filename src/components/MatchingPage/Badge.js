import React from "react";

function Badge(props) {
  return (
    <span className="bg-purple-100 text-purple-800 text-md font-medium mr-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
      {props.item}
    </span>
  );
}

export default Badge;
