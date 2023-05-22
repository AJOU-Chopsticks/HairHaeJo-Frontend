import React from "react";

function DesignerReservationItem(props) {
  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];

  const stringTodate = (item) => {
    let date = new Date(item);
    return `${date.getMonth() + 1}/${date.getDate()} (${
      WEEKDAY[date.getDay()]
    }) ${date.getHours()}:${date.getMinutes() || "00"}`;
  };

  const completeHandler = () => {
    props.setShowCompleteModal(true);
    props.setTarget({
      ...props.target,
      reservationId: props.data.reservationId,
    });
  };

  return (
    <div className="m-2 mt-5 mb-16">
      <div className="flex flex-row justify-between">
        <span className="text-lg font-bold">
          {stringTodate(props.data.date)}
        </span>
        <button className="text-primary-600" onClick={completeHandler}>
          시술 완료
        </button>
      </div>
      <div className="bg-gray-100 p-4 mt-2 text-gray-400 text-base rounded-md">
        <div className="w-24 min-[450px]:w-40 text-black mb-2">
          {props.data.menuName}
        </div>
        <div className="text-sm">{props.data.userName}</div>
      </div>
    </div>
  );
}

export default DesignerReservationItem;
