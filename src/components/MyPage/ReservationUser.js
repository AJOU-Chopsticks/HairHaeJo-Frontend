import React, { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";
import ReservationCancel from "./ReservationCancel";
import LikeDesignerModal from "./LikeDesignerModal";
import UnLikeDesignerModal from "./UnLikeDesignerModal";
import ReviewModal from "./ReviewModal";
import { API } from "../../global/Constants";
import axios from "axios";
import UserReservationItem from "./UserReservationItem";
import UserReservationFinishItem from "./UserReservationFinishItem";
import Loading from "../Layout/Loading";
import NoData from "../../global/NoData";

function ReservationUser(props) {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showReservationCancelModal, setShowReservationCancelModal] =
    useState(false);
  const [showLikeModal, setShowLikeModal] = useState(false);
  const [showUnlikeModal, setShowUnlikeModal] = useState(false);
  const [showMyReviewModal, setShowMyReviewModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [reservationData, setReservationData] = useState([]);
  const [likeDesignerData, setLikeDesignerData] = useState([]);
  const [target, setTarget] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get(API + "/reservation/list/client", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setReservationData(response.data.data);
        } else alert("예약 목록 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("예약 목록 조회에 실패했습니다.");
      })
      .then(() => setLoading(false));

    axios
      .get(API + "/designer/like", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setLikeDesignerData(response.data.data);
        } else alert("관심 디자이너 목록 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("관심 디자이너 목록 조회에 실패했습니다.");
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
          {reservationData.length > 0 ? (
            reservationData.map((item) => (
              <UserReservationItem
                data={item}
                key={item.reservationId}
                reload={reload}
                setReload={setReload}
                target={target}
                setTarget={setTarget}
                setShowReservationCancelModal={setShowReservationCancelModal}
              />
            ))
          ) : (
            <NoData message={"예약 목록이 비어있습니다."} />
          )}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          {reservationData.length > 0 ? (
            reservationData.map((item) => (
              <UserReservationFinishItem
                data={item}
                key={item.reservationId}
                likeDesignerData={likeDesignerData}
                target={target}
                setTarget={setTarget}
                setShowLikeModal={setShowLikeModal}
                setShowUnlikeModal={setShowUnlikeModal}
                setShowReviewModal={setShowReviewModal}
                setShowMyReviewModal={setShowMyReviewModal}
              />
            ))
          ) : (
            <NoData message={"시술 완료 내역이 없습니다."} />
          )}
        </div>
      )}
      <ReviewForm
        showModal={showReviewModal}
        setShowModal={setShowReviewModal}
        target={target}
        reload={reload}
        setReload={setReload}
      />
      <ReservationCancel
        showModal={showReservationCancelModal}
        setShowModal={setShowReservationCancelModal}
        target={target}
        reload={reload}
        setReload={setReload}
      />
      <LikeDesignerModal
        showModal={showLikeModal}
        setShowModal={setShowLikeModal}
        reload={reload}
        setReload={setReload}
      />
      <UnLikeDesignerModal
        showModal={showUnlikeModal}
        setShowModal={setShowUnlikeModal}
        reload={reload}
        setReload={setReload}
      />
      <ReviewModal
        showModal={showMyReviewModal}
        setShowModal={setShowMyReviewModal}
        target={target}
      />
    </>
  );
}

export default ReservationUser;
