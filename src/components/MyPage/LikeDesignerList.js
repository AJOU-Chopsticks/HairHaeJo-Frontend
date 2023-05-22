import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import UnLikeDesignerModal from "./UnLikeDesignerModal";
import axios from "axios";
import { API } from "../../global/Constants";

function LikeDesignerList() {
  const [showUnlikeModal, setShowUnlikeModal] = useState(false);
  const [likeDesignerData, setLikeDesignerData] = useState([]);
  const [reload, setReload] = useState(false);

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
      });
  }, [reload]);

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
}

export default LikeDesignerList;
