import axios from "axios";
import React, { useState } from "react";
import { API } from "../../global/Constants";

function MenuAdd(props) {
  const [newMenu, setNewMenu] = useState({
    menuName: "",
    menuPrice: "",
    menuContent: "",
  });

  const clearInfo = () => {
    setNewMenu({
      ...newMenu,
      menuName: "",
      menuPrice: "",
      menuContent: "",
    });
  };

  const nameHandler = (event) =>
    setNewMenu({ ...newMenu, menuName: event.target.value });
  const contentHandler = (event) =>
    setNewMenu({ ...newMenu, menuContent: event.target.value });
  const priceHandler = (event) =>
    setNewMenu({ ...newMenu, menuPrice: event.target.value });

  const AddHandler = () => {
    const formData = new FormData();
    formData.append(
      "jsonList",
      JSON.stringify({
        menuName: newMenu.menuName,
        menuPrice: parseInt(newMenu.menuPrice),
        menuContent: newMenu.menuContent,
      })
    );

    axios
      .post(API + "/menu/list", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          props.setReload(!props.reload);
          setNewMenu({
            ...newMenu,
            menuName: "",
            menuPrice: "",
            menuContent: "",
          });
        } else alert("메뉴 추가에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("메뉴 추가에 실패했습니다.");
      });
  };

  return (
    <tr className="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <input
          type="text"
          placeholder="메뉴 이름"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newMenu.menuName}
          onChange={nameHandler}
        />
      </th>
      <td className="px-6 py-4">
        <input
          type="text"
          placeholder="메뉴 설명"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newMenu.menuContent}
          onChange={contentHandler}
        />
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          placeholder="메뉴 가격"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newMenu.menuPrice}
          onChange={priceHandler}
        />
      </td>
      <td className="px-6 py-4 text-center">
        <button
          className="font-medium text-blue-600 dark:text-blue-500"
          onClick={AddHandler}
        >
          추가
        </button>
      </td>
      <td className="px-6 py-4">
        <button
          className="font-medium text-red-600 dark:text-red-500"
          onClick={clearInfo}
        >
          초기화
        </button>
      </td>
    </tr>
  );
}

export default MenuAdd;
