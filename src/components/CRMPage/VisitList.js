import React, { useEffect, useState } from "react";
import Visit from "./Visit";
import axios from "axios";
import { API } from "../../global/Constants";
import Loading from "../Layout/Loading";
import Memo from "./Memo";
import NoData from "../../global/NoData";
import News from "./News";

function VisitList() {
  const [visitData, setVisitData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMemo, setShowMemo] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({});

  useEffect(() => {
    axios
      .get(API + "/crm/customer/list", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setVisitData(response.data.data);
        } else alert("방문 고객 목록 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("방문 고객 목록 조회에 실패했습니다.");
      })
      .then(() => setLoading(false));
  }, []);

  return (
    <div className="p-4 mb-8 md:ml-64">
      {loading ? (
        <Loading full={true} />
      ) : visitData.length > 0 ? (
        <>
          <div className="pt-6 mb-8 md:mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visitData.map((item) => (
              <Visit
                data={item}
                key={item.clientId}
                setShowMemo={setShowMemo}
                setCustomerInfo={setCustomerInfo}
              />
            ))}
          </div>
          <Memo
            showMemo={showMemo}
            setShowMemo={setShowMemo}
            customerInfo={customerInfo}
          />
          <News />
        </>
      ) : (
        <NoData message={"방문 고객이 없습니다."} />
      )}
    </div>
  );
}

export default VisitList;
