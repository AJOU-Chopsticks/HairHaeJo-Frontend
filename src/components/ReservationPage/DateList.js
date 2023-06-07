import React, { useEffect, useState } from "react";
import DateItem from "./DateItem";
import TimeItem from "./TimeItem";
import axios from "axios";
import { API } from "../../global/Constants";
import { useParams } from "react-router-dom";

const time = [
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
];

function DateList(props) {
  const { designerId } = useParams();
  const [date, setDate] = useState([]);
  const [noTime, setNoTime] = useState([]);

  useEffect(() => {
    let dateList = [];
    let today = new Date();

    dateList.push(today.setDate(today.getDate() + 1));
    dateList.push(today.setDate(today.getDate() + 1));
    dateList.push(today.setDate(today.getDate() + 1));
    dateList.push(today.setDate(today.getDate() + 1));
    dateList.push(today.setDate(today.getDate() + 1));
    dateList.push(today.setDate(today.getDate() + 1));
    dateList.push(today.setDate(today.getDate() + 1));
    setDate(dateList);
  }, []);

  useEffect(() => {
    if (!props.when.date) return;

    const selected = new Date(props.when.date);
    const year = selected.getFullYear();
    const month =
      selected.getMonth() + 1 > 9
        ? selected.getMonth() + 1
        : "0" + (selected.getMonth() + 1);
    const date =
      selected.getDate() > 9 ? selected.getDate() : "0" + selected.getDate();

    axios
      .get(
        API +
          `/reservation?designerId=${designerId}&reservationday=${year}-${month}-${date}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          setNoTime(response.data.data);
        } else alert("예약 가능 시간 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("예약 가능 시간 조회에 실패했습니다.");
      });
  }, [props.when.date, designerId]);

  return (
    <div className="w-5/6 sm:w-2/3 xl:w-3/4 mx-auto sm:mx-0 mb-40">
      <div className="text-lg">날짜 선택</div>
      <hr className="my-2" />
      <div className="flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-auto mx-auto py-4 px-2 dark:bg-gray-800 dark:border-gray-700">
        {date.map((item) => (
          <DateItem
            key={item}
            item={item}
            when={props.when}
            setWhen={props.setWhen}
          />
        ))}
      </div>
      <div className="text-lg mt-10">시간 선택</div>
      <hr className="my-2" />
      <div className="flex bg-white shadow-md justify-start rounded-lg flex-wrap mx-auto py-4 px-2 dark:bg-gray-800 dark:border-gray-700">
        {props.when.date &&
          time.map((item) => (
            <TimeItem
              key={item}
              item={item}
              when={props.when}
              setWhen={props.setWhen}
              noTime={noTime}
            />
          ))}
      </div>
    </div>
  );
}

export default DateList;
