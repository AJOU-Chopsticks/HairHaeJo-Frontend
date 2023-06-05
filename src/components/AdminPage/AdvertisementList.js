import React, { useEffect, useState } from "react";
import AdvertisementItem from "./AdvertisementItem";
import Loading from "../Layout/Loading";
import axios from "axios";
import { API } from "../../global/Constants";
import NoData from "../../global/NoData";

function AdvertisementList() {
  const [loading, setLoading] = useState(true);
  const [adList, setAdList] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    axios
      .get(API + "/admin/ad", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setAdList(response.data.data);
        } else alert("광고 요청 목록 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("광고 요청 목록 조회에 실패했습니다.");
      })
      .then(() => setLoading(false));
  }, [reload]);

  return (
    <div className="p-4 mb-16 md:ml-64">
      {loading ? (
        <Loading full={true} />
      ) : adList.length > 0 ? (
        <div className="mb-8 md:mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {adList.map((item) => (
            <AdvertisementItem
              key={item.advertiseId}
              data={item}
              reload={reload}
              setReload={setReload}
            />
          ))}
        </div>
      ) : (
        <NoData message={"요청된 광고가 없습니다."} />
      )}
    </div>
  );
}

export default AdvertisementList;
