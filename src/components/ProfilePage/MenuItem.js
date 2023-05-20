import React from "react";

function MenuItem(props) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.data.menuName}
      </th>
      <td className="px-6 py-4">{props.data.menuContent}</td>
      <td className="px-6 py-4">{props.data.menuPrice}원</td>
    </tr>
  );
}

export default MenuItem;
