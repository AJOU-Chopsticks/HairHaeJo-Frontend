import axios from "axios";
import React, { useState } from "react";
import { API } from "../../global/Constants";

function MenuItem(props) {
  const [basicType, setBasicType] = useState(true);
  const [info, setInfo] = useState(props.data);

  const nameHandler = (event) =>
    setInfo({ ...info, menuName: event.target.value });
  const contentHandler = (event) =>
    setInfo({ ...info, menuContent: event.target.value });
  const priceHandler = (event) =>
    setInfo({ ...info, menuPrice: event.target.value });

  const modifyHandler = () => {
    const formData = new FormData();
    formData.append("jsonList", JSON.stringify(info));

    axios
      .put(API + "/menu/list", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          props.setReload(!props.reload);
          setBasicType(true);
        } else alert("메뉴 수정에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("메뉴 수정에 실패했습니다.");
      });
  };

  const deleteHandler = () => {
    const formData = new FormData();
    formData.append("jsonList", JSON.stringify({ menuId: props.data.menuId }));

    axios
      .delete(API + "/menu/list", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
        data: formData,
      })
      .then((response) => {
        if (response.data.success) {
          props.setReload(!props.reload);
        } else alert("메뉴 삭제에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("메뉴 삭제에 실패했습니다.");
      });
  };

  if (basicType) {
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
        <td className="px-6 py-4 text-center">
          <button
            className="font-medium text-blue-600 dark:text-blue-500"
            onClick={() => setBasicType(false)}
          >
            수정
          </button>
        </td>
        <td className="px-6 py-4">
          <button
            className="font-medium text-red-600 dark:text-red-500"
            onClick={deleteHandler}
          >
            삭제
          </button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <input
            type="text"
            placeholder="메뉴 이름"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={info.menuName}
            onChange={nameHandler}
          />
        </th>
        <td className="px-6 py-4">
          <input
            type="text"
            placeholder="메뉴 설명"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={info.menuContent}
            onChange={contentHandler}
          />
        </td>
        <td className="px-6 py-4">
          <input
            type="text"
            placeholder="메뉴 가격"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={info.menuPrice}
            onChange={priceHandler}
          />
        </td>
        <td className="px-6 py-4 text-center">
          <button
            className="font-medium text-blue-600 dark:text-blue-500"
            onClick={modifyHandler}
          >
            완료
          </button>
        </td>
        <td className="px-6 py-4">
          <button
            className="font-medium text-red-600 dark:text-red-500"
            onClick={() => setBasicType(true)}
          >
            취소
          </button>
        </td>
      </tr>
    );
  }
}

export default MenuItem;
