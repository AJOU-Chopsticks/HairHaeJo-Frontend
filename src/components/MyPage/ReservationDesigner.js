import React, { useEffect, useState } from "react";
import ReservationComplete from "./ReservationComplete";
import ReviewModal from "./ReviewModal";
import axios from "axios";
import { API } from "../../global/Constants";
import DesignerReservationItem from "./DesignerReservationItem";
import DesignerReservationFinishItem from "./DesignerReservationFinishItem";
import Loading from "../Layout/Loading";
import NoData from "../../global/NoData";

function ReservationDesigner(props) {
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [reservationProgressData, setReservationProgressData] = useState([]);
  const [reservationFinishData, setReservationFinishData] = useState([]);
  const [target, setTarget] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

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
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("예약 목록 조회에 실패했습니다.");
      })
      .then(() => setLoading(false));

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
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("예약 목록 조회에 실패했습니다.");
      })
      .then(() => setLoading(false));
  }, [reload]);

  if (loading)
    return (
      <div className="mt-64">
        <Loading />
      </div>
    );
  return (
    <>
      {props.type ? (
        <div className="max-w-3xl mx-auto">
          {reservationProgressData.length > 0 ? (
            reservationProgressData.map((item) => (
              <DesignerReservationItem
                key={item.reservationId}
                data={item}
                setShowCompleteModal={setShowCompleteModal}
                target={target}
                setTarget={setTarget}
              />
            ))
          ) : (
            <NoData message={"예약 목록이 비어있습니다."} />
          )}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          {reservationFinishData.length > 0 ? (
            reservationFinishData.map((item) => (
              <DesignerReservationFinishItem
                key={item.reservationId}
                data={item}
                setShowReviewModal={setShowReviewModal}
                target={target}
                setTarget={setTarget}
              />
            ))
          ) : (
            <NoData message={"시술 완료 내역이 없습니다."} />
          )}
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
