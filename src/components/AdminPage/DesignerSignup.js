import React, { useEffect, useState } from "react";
import DesignerSignupItem from "./DesignerSignupItem";
import axios from "axios";
import { API } from "../../global/Constants";

function DesignerSignup() {
  const [reload, setReload] = useState(false);
  const [designerList, setDesignerList] = useState([]);

  useEffect(() => {
    axios
      .get(API + "/admin/designer/signup", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setDesignerList(response.data.data);
        } else alert("디자이너 가입 요청 목록 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("디자이너 가입 요청 목록 조회에 실패했습니다.");
      });
  }, [reload]);

  return (
    <div className="p-4 mb-8 md:ml-64">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg whitespace-nowrap">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            디자이너 가입 요청
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              디자이너의 가입 요청을 확인해주세요.
            </p>
          </caption>
          <thead className="text-lg text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center">
              <th scope="col" className="px-6 py-3">
                아이디
              </th>
              <th scope="col" className="px-6 py-3">
                이름
              </th>
              <th scope="col" className="px-6 py-3">
                사업자 등록증
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
            {designerList.map((item) => (
              <DesignerSignupItem
                key={item.requestId}
                data={item}
                reload={reload}
                setReload={setReload}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DesignerSignup;
