import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../global/Constants";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import MenuAdd from "./MenuAdd";

function MenuSpace() {
  const user = useSelector((state) => state.user);
  const [reload, setReload] = useState(false);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    axios
      .get(API + "/menu/list?designerId=" + user.userId, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setMenuList(response.data.data);
        } else alert("내 메뉴 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("내 메뉴 조회에 실패했습니다.");
      });
  }, [user.userId, reload]);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg whitespace-nowrap">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            내 메뉴
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              메뉴의 이름, 설명, 가격을 등록해주세요.
            </p>
          </caption>
          <thead className="text-lg text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                이름
              </th>
              <th scope="col" className="px-6 py-3">
                설명
              </th>
              <th scope="col" className="px-6 py-3">
                가격
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="text-base">
            {menuList.map((item) => (
              <MenuItem
                key={item.menuId}
                data={item}
                reload={reload}
                setReload={setReload}
              />
            ))}
            <MenuAdd reload={reload} setReload={setReload} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MenuSpace;
