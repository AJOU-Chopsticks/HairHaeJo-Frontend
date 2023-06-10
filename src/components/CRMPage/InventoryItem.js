import axios from "axios";
import React, { useState } from "react";
import NoImage from "../../images/noImage.jpg";
import { API } from "../../global/Constants";

function InventoryItem(props) {
  const [basicType, setBasicType] = useState(true);
  const [info, setInfo] = useState(props.data);
  const [image, setImage] = useState(NoImage);
  const [stockinfo, setStockInfo] = useState(props.data);

  const imageHandler = (target) => {
    let itemImage = document.getElementById(target).files[0];
    if (itemImage !== undefined) {
      setImage(URL.createObjectURL(itemImage));
    } else {
      setImage(NoImage);
    }
  };
  const nameHandler = (event) =>
    setInfo({ ...info, itemName: event.target.value });
  const categoryHandler = (event) =>
    setInfo({ ...info, itemCategory: event.target.value });
  const stockHandler = (event) =>
    setStockInfo({ ...stockinfo, stock: event.target.value });
  const warningstockHandler = (event) =>
    setInfo({ ...info, warningStock: event.target.value });
  const priceHandler = (event) =>
    setInfo({ ...info, itemPrice: event.target.value });

  const modifyHandler = () => {
    const formData = new FormData();
    formData.append("jsonList", JSON.stringify(info));
    formData.append("jsonList", JSON.stringify(stockinfo));

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
        } else alert("재고 정보 수정에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("재고 정보 수정에 실패했습니다.");
      });

    axios
      .put(API + "/crm/inventory/use", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          props.setReload(!props.reload);
          setBasicType(true);
        } else alert("재고수 수정에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("재고수 수정에 실패했습니다.");
      });
  };

  const deleteHandler = () => {
    const formData = new FormData();
    formData.append("jsonList", JSON.stringify({ itemId: props.data.itemId }));

    axios
      .delete(API + "/crm/inventory", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
        data: formData,
      })
      .then((response) => {
        if (response.data.success) {
          props.setReload(!props.reload);
        } else alert("재고 삭제에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("재고 삭제에 실패했습니다.");
      });
  };

  if (basicType) {
    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="px-6 py-4">{props.data.itemImage}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {props.data.itemName}
        </th>
        <td className="px-6 py-4">{props.data.itemCategory}</td>
        <td className="px-6 py-4">{props.data.stock}개</td>
        <td className="px-6 py-4">{props.data.warningStock}개</td>
        <td className="px-6 py-4">{props.data.itemPrice}원</td>
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
        <td className="px-6 py-4">
          <input
            type="text"
            placeholder="이미지"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={info.itemimage}
            onChange={categoryHandler}
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
            value={info.itemName}
            onChange={nameHandler}
          />
        </th>
        <td className="px-6 py-4">
          <input
            type="text"
            placeholder="카테고리"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={info.itemCategory}
            onChange={categoryHandler}
          />
        </td>
        <td className="px-6 py-4">
          <input
            type="text"
            placeholder="재고수"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={stockinfo.stock}
            onChange={stockHandler}
          />
        </td>
        <td className="px-6 py-4">
          <input
            type="text"
            placeholder="위험재고수"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={info.warningStock}
            onChange={warningstockHandler}
          />
        </td>
        <td className="px-6 py-4">
          <input
            type="text"
            placeholder="가격"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={info.itemPrice}
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

export default InventoryItem;
