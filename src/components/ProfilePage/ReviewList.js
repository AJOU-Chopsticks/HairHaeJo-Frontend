import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../global/Constants";
import ReviewItem from "./ReviewItem";
import NoData from "../../global/NoData";
import Loading from "../Layout/Loading";

function ReviewList(props) {
  const [reviewData, setReviewData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API + "/review/list/" + props.id, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setReviewData(response.data.data);
        } else alert("후기 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("후기 조회에 실패했습니다.");
      })
      .then(() => setLoading(false));
  }, [props.id]);

  if (reviewData.length > 0)
    return (
      <div>
        <div className="mb-8 md:mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {reviewData.map((item) => (
            <ReviewItem key={item.reviewId} data={item} />
          ))}
        </div>
      </div>
    );
  else {
    if (loading) return <Loading full={true} />;
    return <NoData message={"등록된 디자이너 후기가 없습니다."} />;
  }
}

export default ReviewList;
