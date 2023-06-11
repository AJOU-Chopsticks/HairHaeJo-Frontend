import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../global/Constants";
import InventoryItem from "./InventoryItem";
import InventoryAdd from "./InventoryAdd";

function InventorySpace() {
  const [reload, setReload] = useState(false);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios
      .get(
        API +
          `/crm/inventory?category=${"all"}&name=${"all"}&orderBystock=${"false"}&orderByprice=${"false"}&isWarning=${"false"}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          setItemList(response.data.data);
        } else console.log("내 재고 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("내 재고 조회에 실패했습니다.");
      });
  }, [reload]);

  return (
    <div className="p-4 mb-8 md:ml-64">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg whitespace-nowrap">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            내 미용실 재고
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              미용실 재고를 관리해주세요.
            </p>
          </caption>
          <thead className="text-lg text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                이름
              </th>
              <th scope="col" className="px-6 py-3">
                카테고리
              </th>
              <th scope="col" className="px-6 py-3">
                현재 수량
              </th>
              <th scope="col" className="px-6 py-3">
                위험 수량
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
