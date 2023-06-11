import React, { useState } from "react";
import { API, itemList } from "../../global/Constants";
import axios from "axios";

function InventoryAdd(props) {
  const [newItem, setNewItem] = useState({
    itemName: "",
    itemCategory: "카테고리를 선택해주세요.",
    stock: "0",
    warningStock: "0",
    itemPrice: "0",
  });

  const nameHandler = (event) =>
    setNewItem({ ...newItem, itemName: event.target.value });
  const categoryHandler = (event) =>
    setNewItem({ ...newItem, itemCategory: event.target.value });
  const stockHandler = (event) =>
    setNewItem({ ...newItem, stock: event.target.value });
  const warningstockHandler = (event) =>
    setNewItem({ ...newItem, warningStock: event.target.value });
  const priceHandler = (event) =>
    setNewItem({ ...newItem, itemPrice: event.target.value });

  const AddHandler = () => {
    if (newItem.itemName === "") return alert("재고 이름을 입력해주세요.");
    if (newItem.itemCategory === "카테고리를 선택해주세요.")
      return alert("재고 카테고리를 선택해주세요.");

    const formData = new FormData();

    formData.append("jsonList", JSON.stringify(newItem));
    formData.append("itemImage", null);

    axios
      .post(API + "/crm/inventory", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          props.setReload(!props.reload);
          setNewItem({
            ...newItem,
            itemName: "",
            itemCategory: "카테고리를 선택해주세요.",
            stock: "0",
            warningStock: "0",
            itemPrice: "0",
          });
        } else console.log("재고 추가에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("재고 추가에 실패했습니다.");
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
          placeholder="이름"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newItem.itemName}
          onChange={nameHandler}
        />
      </th>
      <td className="px-6 py-4">
        <select
          id="Item_Category"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newItem.itemCategory}
          onChange={categoryHandler}
        >
          {itemList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </td>
      <td className="px-6 py-4">
        <input
          type="number"
          placeholder="재고수"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newItem.stock}
          onChange={stockHandler}
          min={0}
        />
      </td>
      <td className="px-6 py-4">
        <input
          type="number"
          placeholder="위험재고수"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newItem.warningStock}
          onChange={warningstockHandler}
          min={0}
        />
      </td>
      <td className="px-6 py-4">
        <input
          type="number"
          placeholder="가격"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newItem.itemPrice}
          onChange={priceHandler}
          min={0}
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
      <td className="px-6 py-4"></td>
    </tr>
  );
}

export default InventoryAdd;
