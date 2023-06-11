import axios from "axios";
import React, { useState } from "react";
import { API, itemList } from "../../global/Constants";

function InventoryItem(props) {
  const [basicType, setBasicType] = useState(true);
  const [info, setInfo] = useState(props.data);

  const nameHandler = (event) =>
    setInfo({ ...info, itemName: event.target.value });
  const categoryHandler = (event) =>
    setInfo({ ...info, itemCategory: event.target.value });
  const warningstockHandler = (event) =>
    setInfo({ ...info, warningStock: event.target.value });
  const priceHandler = (event) =>
    setInfo({ ...info, itemPrice: event.target.value });

  const modifyHandler = () => {
    if (info.itemCategory === "카테고리를 선택해주세요.")
      return alert("재고 카테고리를 선택해주세요.");

    const formData = new FormData();
    formData.append("jsonList", JSON.stringify(info));
    formData.append("itemImage", null);

    axios
      .put(API + "/crm/inventory", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          props.setReload(!props.reload);
          setBasicType(true);
        } else console.log("재고 정보 수정에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("재고 정보 수정에 실패했습니다.");
      });
  };

  const deleteHandler = () => {
    axios
      .delete(API + "/crm/inventory", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
        data: { itemId: props.data.itemId },
      })
      .then((response) => {
        if (response.data.success) {
          props.setReload(!props.reload);
        } else console.log("재고 삭제에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("재고 삭제에 실패했습니다.");
      });
  };

  const minusStock = () => {
    if (info.stock === 0) return;
    const formData = new FormData();
    formData.append(
      "jsonList",
      JSON.stringify({ itemId: props.data.itemId, stock: 1 })
    );

    axios
      .put(API + "/crm/inventory/use", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setInfo({ ...info, stock: info.stock - 1 });
        } else console.log("현재 수량 수정에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("현재 수량 수정에 실패했습니다.");
      });
  };

  const plusStock = () => {
    const formData = new FormData();
    formData.append(
      "jsonList",
      JSON.stringify({ itemId: props.data.itemId, stock: -1 })
    );

    axios
      .put(API + "/crm/inventory/use", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setInfo({ ...info, stock: info.stock + 1 });
        } else console.log("현재 수량 수정에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("현재 수량 수정에 실패했습니다.");
      });
  };

  if (basicType) {
    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {props.data.itemName}
        </th>
        <td className="px-6 py-4">{props.data.itemCategory}</td>
        <td
          className={`px-6 py-4 ${
            props.data.stock < props.data.warningStock &&
            "text-red-600 dark:text-red-500"
          }`}
        >
          {props.data.stock}
        </td>
        <td
          className={`px-6 py-4 ${
            props.data.stock < props.data.warningStock &&
            "text-red-600 dark:text-red-500"
          }`}
        >
          {props.data.warningStock}
        </td>
        <td className="px-6 py-4">{props.data.itemPrice}원</td>
        <td className="px-6 py-4">
          <button
            className="font-medium text-blue-600 dark:text-blue-500"
            onClick={() => setBasicType(false)}
          >
            수정
          </button>
        </td>
        <td className="px-6 py-4">
          <button
            className="text-left font-medium text-red-600 dark:text-red-500"
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
            placeholder="이름"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={info.itemName}
            onChange={nameHandler}
          />
        </th>
        <td className="px-6 py-4">
          {/* <input
            type="text"
            placeholder="카테고리"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={info.itemCategory}
            onChange={categoryHandler}
          /> */}
          <select
            id="Modify_Item_Category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={info.itemCategory}
            onChange={categoryHandler}
          >
            {itemList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </td>
        <td className="px-6 py-4 flex flex-row justify-around">
          <button
            type="button"
            className="text-lg font-bold flex items-center justify-center text-white bg-primary-700 rounded-full w-7 h-7 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800"
            onClick={minusStock}
          >
            -
          </button>
          {info.stock}
          <button
            type="button"
            className="text-lg font-bold flex items-center justify-center text-white bg-primary-700 rounded-full w-7 h-7 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800"
            onClick={plusStock}
          >
            +
          </button>
        </td>
        <td className="px-6 py-4">
          <input
            type="number"
            placeholder="위험재고수"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={info.warningStock}
            onChange={warningstockHandler}
            min={0}
          />
        </td>
        <td className="px-6 py-4">
          <input
            type="number"
            placeholder="가격"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={info.itemPrice}
            onChange={priceHandler}
            min={0}
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
            onClick={() => {
              setInfo({ ...info, ...props.data });
              setBasicType(true);
            }}
          >
            취소
          </button>
        </td>
      </tr>
    );
  }
}

export default InventoryItem;
