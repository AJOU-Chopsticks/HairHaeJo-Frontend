import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../global/Constants";
import { useSelector } from "react-redux";
import InventoryItem from "./InventoryItem";
import InventoryAdd from "./InventoryAdd";

function InventorySpace() {
  const user = useSelector((state) => state.user);
  const [reload, setReload] = useState(false);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios
      .get(
        API +
          "/crm/inventory?category,name,orderBystock,orderByprice,isWarning" +
          user.itemId,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          setItemList(response.data.data);
        } else alert("내 재고 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("내 재고 조회에 실패했습니다.");
      });
  }, [user.itemId, reload]);

  return (
    <div className="p-4 mb-8 md:ml-64">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg whitespace-nowrap">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            내 재고
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              재고의 사진, 이름, 카테고리, 재고수, 위험재고수, 가격을
              등록해주세요.
            </p>
          </caption>
          <thead className="text-lg text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                사진
              </th>
              <th scope="col" className="px-6 py-3">
                이름
              </th>
              <th scope="col" className="px-6 py-3">
                카테고리
              </th>
              <th scope="col" className="px-6 py-3">
                재고수
              </th>
              <th scope="col" className="px-6 py-3">
                위험재고수
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
            {itemList.map((item) => (
              <InventoryItem
                key={item.itemId}
                data={item}
                reload={reload}
                setReload={setReload}
              />
            ))}
            <InventoryAdd reload={reload} setReload={setReload} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventorySpace;
