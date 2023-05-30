import axios from "axios";
import React from "react";
import { API } from "../../global/Constants";

function HolidayItem(props) {
  const deleteHandler = () => {
    const formData = new FormData();
    formData.append(
      "jsonList",
      JSON.stringify({ holiday: props.data.holiday })
    );

    axios
      .delete(API + "/crm/holiday", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
        data: formData,
      })
      .then((response) => {
        if (response.data.success) {
          props.setReload(!props.reload);
        } else alert("휴일 삭제에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("휴일 삭제에 실패했습니다.");
      });
  };

  const textToInfo = (text) => {
    if (text.length === 3) return "매월";
    if (text[0] === "1") return "매월 첫째주";
    if (text[0] === "2") return "매월 둘째주";
    if (text[0] === "3") return "매월 셋째주";
    if (text[0] === "4") return "매월 넷째주";
    if (text[0] === "5") return "매월 다섯째주";
  };

  const textToDay = (text) => {
    if (text.length === 3) return text[1] + text[2] + "일";
    else if (text[1] === "1") return "월요일";
    else if (text[1] === "2") return "화요일";
    else if (text[1] === "3") return "수요일";
    else if (text[1] === "4") return "목요일";
    else if (text[1] === "5") return "금요일";
    else if (text[1] === "6") return "토요일";
    else if (text[1] === "7") return "일요일";
  };

  if (props.data.holiday !== "") {
    return (
      <tr className="bg-white border-b text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
          {textToInfo(props.data.holiday)}
        </th>
        <td className="px-6 py-4">{textToDay(props.data.holiday)}</td>
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
      <tr className="bg-white border-b text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
          등록된 휴일이 없습니다.
        </th>
      </tr>
    );
  }
}

export default HolidayItem;
