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

  useEffect(() => {
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
        if (err.response.data.message) alert(err.response.data.message);
        else alert("예약 목록 조회에 실패했습니다.");
      });

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
        if (err.response.data.message) alert(err.response.data.message);
        else alert("관심 디자이너 목록 조회에 실패했습니다.");
      });
  }, [reload]);

  return (
    <>
      {props.type ? (
        <div className="max-w-3xl mx-auto">
          {reservationData.map((item) => (
            <UserReservationItem
              data={item}
              key={item.reservationId}
              reload={reload}
              setReload={setReload}
              target={target}
              setTarget={setTarget}
              setShowReservationCancelModal={setShowReservationCancelModal}
            />
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          {reservationData.map((item) => (
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
          ))}
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
