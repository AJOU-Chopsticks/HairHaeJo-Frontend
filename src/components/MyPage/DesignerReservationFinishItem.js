import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../global/Constants";

function DesignerReservationFinishItem(props) {
  const navigation = useNavigate();
  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];

  const stringTodate = (item) => {
    let date = new Date(item);
    return `${date.getMonth() + 1}/${date.getDate()} (${
      WEEKDAY[date.getDay()]
    }) ${date.getHours()}:${date.getMinutes() || "00"}`;
  };

  const sendChatting = () => {
    axios
      .post(
        API + "/chat?userId=" + props.data.userId,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          document.body.classList.remove("overflow-hidden");
          navigation("/chat");
        } else alert("채팅방 생성에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("채팅방 생성에 실패했습니다.");
      });
  };

  const showReview = () => {
    document.body.classList.add("overflow-hidden");
    props.setShowReviewModal(true);
    props.setTarget({
      ...props.target,
      reservationId: props.data.reservationId,
      userId: props.data.userId,
    });
  };

  return (
    <div className="m-2 mt-5 mb-16">
      <div className="flex flex-row justify-between">
        <span className="text-lg font-bold">
          {stringTodate(props.data.date)}
        </span>
        <button className="text-primary-600" onClick={showReview}>
          후기 확인
        </button>
      </div>
      <div className="bg-gray-100 p-4 my-2 text-gray-400 text-base rounded-md">
        <div className="w-24 min-[450px]:w-40 text-black mb-2">
          {props.data.menuName}
        </div>
        <div className="text-sm">{props.data.userName}</div>
      </div>
      <div className="flex flex-row mt-3 justify-around">
        <button
          className="text-primary-600"
          onClick={() => navigation("/profile/user/" + props.data.userId)}
        >
          고객 프로필
        </button>
        <button className="text-primary-600" onClick={sendChatting}>
          상담 신청
        </button>
      </div>
    </div>
  );
}

export default DesignerReservationFinishItem;
