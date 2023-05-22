import React from "react";

function UserReservationItem(props) {
  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];

  const stringTodate = (item) => {
    let date = new Date(item);
    return `${date.getMonth() + 1}/${date.getDate()} (${
      WEEKDAY[date.getDay()]
    }) ${date.getHours()}:${date.getMinutes() || "00"}`;
  };

  const cancelHandler = () => {
    props.setTarget({
      ...props.target,
      reservationId: props.data.reservationId,
    });
    props.setShowReservationCancelModal(true);
  };

  return (
    props.data.state === 1 && (
      <div className="m-2 mt-5 mb-16">
        <div className="flex flex-row justify-between">
          <span className="text-lg font-bold">
            {stringTodate(props.data.date)}
          </span>
          <button className="text-red-600" onClick={cancelHandler}>
            취소하기
          </button>
        </div>
        <div className="bg-gray-100 p-4 mt-2 text-gray-400 text-base rounded-md">
          <div className="w-24 min-[450px]:w-40 text-black mb-2">
            {props.data.menuName}
          </div>
          <div className="text-sm">{`${props.data.userName} (${props.data.location})`}</div>
        </div>
      </div>
    )
  );
}

export default UserReservationItem;
