import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../global/Constants";
import { useSelector } from "react-redux";
import HolidayItem from "./HolidayItem";
import HolidayAdd from "./HolidayAdd";

function HolidaySpace() {
  const user = useSelector((state) => state.user);
  const [reload, setReload] = useState(false);
  const [holidayList, setHolidayList] = useState([]);

  useEffect(() => {
    axios
      .get(API + "/crm/holiday?DesignerId=" + user.userId, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setHolidayList(response.data.data);
        } else alert("내 메뉴 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("내 메뉴 조회에 실패했습니다.");
      });
  }, [user.userId, reload]);

  return (
    <div className="p-4 mb-8 md:ml-64">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg whitespace-nowrap">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            디자이너 휴일
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              디자이너 휴일을 설정해주세요.
            </p>
          </caption>
          <tbody className="text-base">
            {holidayList.map((item) => (
              <HolidayItem
                key={item.holiday}
                data={item}
                reload={reload}
                setReload={setReload}
              />
            ))}
            <HolidayAdd reload={reload} setReload={setReload} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HolidaySpace;
