import React from "react";
import { API } from "../../global/Constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserReservationFinishItem(props) {
  const navigation = useNavigate();
  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];

  const stringTodate = (item) => {
    let date = new Date(item);
    return `${date.getMonth() + 1}/${date.getDate()} (${
      WEEKDAY[date.getDay()]
    }) ${date.getHours()}:${date.getMinutes() || "00"}`;
  };

  const checkLikeDesigner = () => {
    for (let i = 0; i < props.likeDesignerData.length; i++) {
      if (props.likeDesignerData[i].designerId === props.data.userId)
        return true;
      else if (i === props.likeDesignerData.length - 1) return false;
    }
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

  const likeDesigner = () => {
    axios
      .post(
        API + "/designer/like?designerId=" + props.data.userId,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          props.setShowLikeModal(true);
        } else alert("관심 디자이너 등록에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("관심 디자이너 등록에 실패했습니다.");
      });
  };

  const unlikeDesigner = () => {
    axios
      .delete(API + "/designer/like?designerId=" + props.data.userId, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          props.setShowUnlikeModal(true);
        } else alert("관심 디자이너 취소에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("관심 디자이너 취소에 실패했습니다.");
      });
  };

  const writeReview = () => {
    props.setShowReviewModal(true);
    props.setTarget({
      ...props.target,
      reservationId: props.data.reservationId,
    });
  };

  const showReview = () => {
    document.body.classList.add("overflow-hidden");
    props.setShowMyReviewModal(true);
    props.setTarget({
      ...props.target,
      reservationId: props.data.reservationId,
      reviewId: props.data.reviewId,
    });
  };

  return (
    props.data.state === 2 && (
      <div className="m-2 mt-5 mb-16">
        <div className="flex flex-row justify-between">
          <span className="text-lg font-bold">
            {stringTodate(props.data.date)}
          </span>
          {props.data.reviewId === -1 ? (
            <button className="text-primary-600" onClick={writeReview}>
              후기 작성
            </button>
          ) : (
            <button className="text-red-600" onClick={showReview}>
              후기 조회
            </button>
          )}
        </div>
        <div className="bg-gray-100 p-4 my-2 text-gray-400 text-base rounded-md">
          <div className="w-24 min-[450px]:w-40 text-black mb-2">
            {props.data.menuName}
          </div>
          <div className="text-sm">{`${props.data.userName} (${props.data.location})`}</div>
        </div>
        <div className="flex flex-row mt-3 justify-between">
          {checkLikeDesigner() ? (
            <button className="text-red-600" onClick={unlikeDesigner}>
              관심 디자이너 취소
            </button>
          ) : (
            <button className="text-primary-600" onClick={likeDesigner}>
              관심 디자이너 등록
            </button>
          )}
          <button className="text-primary-600" onClick={sendChatting}>
            상담 신청
          </button>
          <button
            className="text-primary-600"
            onClick={() => navigation("/reservation/" + props.data.userId)}
          >
            다시 예약
          </button>
        </div>
      </div>
    )
  );
}

export default UserReservationFinishItem;
