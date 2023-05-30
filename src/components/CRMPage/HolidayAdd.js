import axios from "axios";
import React, { useState } from "react";
import { API } from "../../global/Constants";

const Category = [
  "매월",
  "매월 첫째주",
  "매월 둘째주",
  "매월 셋째주",
  "매월 넷째주",
  "매월 다섯째주",
];

const Day = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];

const DateList = [
  "01일",
  "02일",
  "03일",
  "04일",
  "05일",
  "06일",
  "07일",
  "08일",
  "09일",
  "10일",
  "11일",
  "12일",
  "13일",
  "14일",
  "15일",
  "16일",
  "17일",
  "18일",
  "19일",
  "20일",
  "21일",
  "22일",
  "23일",
  "24일",
  "25일",
  "26일",
  "27일",
  "28일",
  "29일",
  "30일",
  "31일",
];

function HolidayAdd(props) {
  const [newHoliday, setNewHoliday] = useState({
    category: "매월",
    detail: "01일",
  });

  const categoryHandler = (event) =>
    setNewHoliday({
      ...newHoliday,
      category: event.target.value,
      detail: event.target.value === "매월" ? "01일" : "월요일",
    });
  const detailHandler = (event) =>
    setNewHoliday({ ...newHoliday, detail: event.target.value });

  const AddHandler = () => {
    let target = "";
    if (newHoliday.category === "매월") {
      target = "1" + newHoliday.detail.substring(0, 2);
    } else {
      if (newHoliday.category === "매월 첫째주") target += "1";
      else if (newHoliday.category === "매월 둘째주") target += "2";
      else if (newHoliday.category === "매월 셋째주") target += "3";
      else if (newHoliday.category === "매월 넷째주") target += "4";
      else if (newHoliday.category === "매월 다섯째주") target += "5";

      if (newHoliday.detail === "월요일") target += "1";
      else if (newHoliday.detail === "화요일") target += "2";
      else if (newHoliday.detail === "수요일") target += "3";
      else if (newHoliday.detail === "목요일") target += "4";
      else if (newHoliday.detail === "금요일") target += "5";
      else if (newHoliday.detail === "토요일") target += "6";
      else if (newHoliday.detail === "일요일") target += "7";
    }

    const formData = new FormData();
    formData.append(
      "jsonList",
      JSON.stringify({
        holiday: target,
      })
    );

    axios
      .post(API + "/crm/holiday", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          props.setReload(!props.reload);
          setNewHoliday({
            ...newHoliday,
            category: "매월",
            detail: "01일",
          });
        } else alert("휴일 추가에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("휴일 추가에 실패했습니다.");
      });
  };

  return (
    <tr className="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <select
          id="category"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newHoliday.category}
          onChange={categoryHandler}
        >
          {Category.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </th>
      <td className="px-6 py-4">
        <select
          id="detail"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newHoliday.detail}
          onChange={detailHandler}
        >
          {newHoliday.category === "매월"
            ? DateList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))
            : Day.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
        </select>
      </td>
      <td className="px-6 py-4 text-center">
        <button
          className="font-medium text-blue-600 dark:text-blue-500"
          onClick={AddHandler}
        >
          추가
        </button>
      </td>
    </tr>
  );
}

export default HolidayAdd;
