import React from "react";
import DateItem from "./DateItem";
import TimeItem from "./TimeItem";

const date = [
  {
    day: "일",
    date: "11",
  },
  {
    day: "월",
    date: "12",
  },
  {
    day: "화",
    date: "13",
  },
  {
    day: "수",
    date: "14",
  },
  {
    day: "목",
    date: "15",
  },
  {
    day: "금",
    date: "16",
  },
  {
    day: "토",
    date: "17",
  },
];

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
];

function DateList(props) {
  return (
    <div className="w-5/6 sm:w-2/3 xl:w-3/4 mx-auto sm:mx-0 mb-40">
      <div className="text-lg">날짜 선택</div>
      <hr className="my-2" />
      <div className="flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-auto mx-auto py-4 px-2 dark:bg-gray-800 dark:border-gray-700">
        {date.map((item) => (
          <DateItem
            key={item.date}
            item={item}
            when={props.when}
            setWhen={props.setWhen}
          />
        ))}
      </div>
      <div className="text-lg mt-10">시간 선택</div>
      <hr className="my-2" />
      <div className="flex bg-white shadow-md justify-start rounded-lg flex-wrap mx-auto py-4 px-2 dark:bg-gray-800 dark:border-gray-700">
        {time.map((item) => (
          <TimeItem
            key={item}
            item={item}
            when={props.when}
            setWhen={props.setWhen}
          />
        ))}
      </div>
    </div>
  );
}

export default DateList;
