import React from "react";
import axios from "axios";
import { API } from "../../global/Constants";

function ReportItem(props) {
  const showDetailHandler = () => {
    document.body.classList.add("overflow-hidden");

    if (props.data.reportType === "REVIEW") {
      props.setShowReviewModal(true);
      props.setReviewId(props.data.targetId);
      props.setTargetUserId(props.data.targetUserId);
    } else {
      props.setShowArticleModal(true);
      props.setArticleId(props.data.targetId);
      props.setTargetUserId(props.data.targetUserId);
    }
  };

  const completeHandler = () => {
    axios
      .delete(API + "/admin/report?reportId=" + props.data.reportId, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          alert("처리 완료!");
          props.setReload(!props.reload);
        } else alert("신고 처리에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("신고 처리에 실패했습니다.");
      });
  };

  return (
    <tr className="bg-white text-center text-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-4 py-4 font-medium whitespace-nowrap dark:text-white"
      >
        {props.data.reportType === "REVIEW" ? "후기" : "요청 글"}
      </th>
      <td className="px-4 py-4">{props.data.reporterName}</td>
      <td className="px-4 py-4">{props.data.targetName}</td>
      <td className="px-4 py-4 whitespace-normal text-left">
        {props.data.reportReason}
      </td>
      <td className="px-4 py-4">
        <button
          className="font-medium text-blue-600 dark:text-blue-500"
          onClick={showDetailHandler}
        >
          글 조회
        </button>
      </td>
      <td className="px-4 py-4">
        <button
          className="font-medium text-primary-600 dark:text-primary-500"
          onClick={completeHandler}
        >
          처리 완료
        </button>
      </td>
    </tr>
  );
}

export default ReportItem;
