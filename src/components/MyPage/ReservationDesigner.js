import React, { useEffect, useState } from "react";
import ReservationComplete from "./ReservationComplete";
import ReviewModal from "./ReviewModal";
import axios from "axios";
import { API } from "../../global/Constants";
import DesignerReservationItem from "./DesignerReservationItem";
import DesignerReservationFinishItem from "./DesignerReservationFinishItem";

function ReservationDesigner(props) {
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [reservationProgressData, setReservationProgressData] = useState([]);
  const [reservationFinishData, setReservationFinishData] = useState([]);
  const [target, setTarget] = useState({});

  useEffect(() => {
    axios
      .get(API + "/reservation/list/designer/progress", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setReservationProgressData(response.data.data);
        } else alert("예약 목록 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("예약 목록 조회에 실패했습니다.");
      });

    axios
      .get(API + "/reservation/list/designer/finished", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setReservationFinishData(response.data.data);
        } else alert("예약 목록 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("예약 목록 조회에 실패했습니다.");
      });
  }, [reload]);

  return (
    <>
      {props.type ? (
        <div className="max-w-3xl mx-auto">
          {reservationProgressData.map((item) => (
            <DesignerReservationItem
              key={item.reservationId}
              data={item}
              setShowCompleteModal={setShowCompleteModal}
              target={target}
              setTarget={setTarget}
            />
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          {reservationFinishData.map((item) => (
            <DesignerReservationFinishItem
              key={item.reservationId}
              data={item}
              setShowReviewModal={setShowReviewModal}
              target={target}
              setTarget={setTarget}
            />
          ))}
        </div>
      )}
      <ReservationComplete
        showModal={showCompleteModal}
        setShowModal={setShowCompleteModal}
        reload={reload}
        setReload={setReload}
        target={target}
      />
      <ReviewModal
        showModal={showReviewModal}
        setShowModal={setShowReviewModal}
        target={target}
      />
    </>
  );
}

export default ReservationDesigner;
