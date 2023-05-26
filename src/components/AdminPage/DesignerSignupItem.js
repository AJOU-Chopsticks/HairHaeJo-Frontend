import axios from "axios";
import React from "react";
import { API } from "../../global/Constants";

function DesignerSignupItem(props) {
  const signupHandler = (approve) => {
    axios
      .post(
        API + "/admin/designer/signup",
        { requestId: props.data.requestId, approve: approve },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          alert("완료되었습니다.");
          props.setReload(!props.reload);
        } else alert("디자이너 가입 승인 또는 거절에 실패했습니다.");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message) alert(err.response.data.message);
        else alert("디자이너 가입 승인 또는 거절에 실패했습니다.");
      });
  };

  return (
    <tr className="bg-white text-lg text-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 text-center font-medium whitespace-nowrap dark:text-white"
      >
        {props.data.designerId}
      </th>
      <td className="px-6 py-4 text-center">{props.data.designerName}</td>
      <td className="px-6 py-4">
        <img
          src={props.data.licenseImage}
          alt="License_Image"
          className="w-64 mx-auto"
        />
      </td>
      <td className="px-6 py-4">
        <button
          className="font-medium text-blue-600 dark:text-blue-500"
          onClick={() => signupHandler(true)}
        >
          승인
        </button>
      </td>
      <td className="px-6 py-4">
        <button
          className="font-medium text-red-600 dark:text-red-500"
          onClick={() => signupHandler(false)}
        >
          거절
        </button>
      </td>
    </tr>
  );
}

export default DesignerSignupItem;
