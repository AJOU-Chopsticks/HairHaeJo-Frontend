import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import UnLikeDesignerModal from "./UnLikeDesignerModal";
import axios from "axios";
import { API } from "../../global/Constants";
import NoData from "../../global/NoData";
import Loading from "../Layout/Loading";

function LikeDesignerList() {
  const [showUnlikeModal, setShowUnlikeModal] = useState(false);
  const [likeDesignerData, setLikeDesignerData] = useState([]);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      })
      .then(() => setLoading(false));
  }, [reload]);

  if (likeDesignerData.length > 0)
    return (
      <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {likeDesignerData.map((item) => (
          <ProfileCard
            data={item}
            key={item.designerId}
            setShowUnlikeModal={setShowUnlikeModal}
          />
        ))}
        <UnLikeDesignerModal
          showModal={showUnlikeModal}
          setShowModal={setShowUnlikeModal}
          reload={reload}
          setReload={setReload}
        />
      </div>
    );
  else {
    if (loading) return <Loading full={true} />;
    return <NoData message={"관심 디자이너가 없습니다."} />;
  }
}

export default LikeDesignerList;
