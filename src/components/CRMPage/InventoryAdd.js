import React, { useState } from "react";
import NoImage from "../../images/noImage.jpg";
import { API } from "../../global/Constants";
import axios from "axios";

function InventoryAdd(props) {
  const [image, setImage] = useState(NoImage);
  const [newItem, setNewItem] = useState({
    itemImage: "",
    itemName: "",
    itemCategory: "",
    stock: "",
    warningStock: "",
    itemPrice: "",
  });

  const clearInfo = () => {
    setNewItem({
      ...newItem,
      itemImage: "",
      itemName: "",
      itemCategory: "",
      stock: "",
      warningStock: "",
      itemPrice: "",
    });
  };

  const imageHandler = (target) => {
    let itemImage = document.getElementById(target).files[0];
    if (itemImage !== undefined) {
      setImage(URL.createObjectURL(itemImage));
    } else {
      setImage(NoImage);
    }
  };
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
    const formData = new FormData();
    formData.append(
      "jsonList",
      JSON.stringify({
        itemName: newItem.itemName,
        itemCategory: newItem.itemCategory,
        stock: parseInt(newItem.stock),
        warningStock: parseInt(newItem.warningStock),
        itemPrice: parseInt(newItem.itemPrice),
      })
    );

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
            itemImage: "",
            itemName: "",
            itemCategory: "",
            stock: "",
            warningStock: "",
            itemPrice: "",
          });
        } else alert("재고 추가에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("재고 추가에 실패했습니다.");
      });
  };

  return (
    <tr className="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">
        <input
          type="text"
          placeholder="이미지"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newItem.itemImage}
          onChange={imageHandler}
        />
      </td>
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
        <input
          type="text"
          placeholder="카테고리"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newItem.itemCategory}
          onChange={categoryHandler}
        />
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          placeholder="재고수"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newItem.stock}
          onChange={stockHandler}
        />
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          placeholder="위험재고수"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newItem.warningStock}
          onChange={warningstockHandler}
        />
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          placeholder="가격"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newItem.itemPrice}
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

export default InventoryAdd;
