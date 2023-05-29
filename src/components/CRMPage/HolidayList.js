import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../global/Constants";
import Loading from "../Layout/Loading";
import Holiday from "./Holiday";
import HolidayDetail from "./HolidayDetail";

function HolidayList(props) {
  const [showDetail, setShowDetail] = useState(false);
  const [holidayData, setHolidayData] = useState([]);
  const [detailTarget, setDetailTarget] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API + `/crm/holiday/list`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setHolidayData(response.data.data);
        }
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("휴일 조회에 실패했습니다.");
      })
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    setDetailTarget("");
  }, [props.reload]);

  return (
    <div className="p-4 mb-8 md:ml-64">
      {loading ? (
        <Loading full={true} />
      ) : (
        <>
          <div className="pt-6 grid gap-4 mb-8 md:mb-12 md:grid-cols-2 xl:grid-cols-3">
            {holidayData.map((item) => (
              <Holiday
                data={item}
                key={item.holidayId}
                setShowDetail={setShowDetail}
                setDetailTarget={setDetailTarget}
              />
            ))}
          </div>
          <HolidayDetail
            showDetail={showDetail}
            setShowDetail={setShowDetail}
            setShowModifyForm={props.setShowModifyForm}
            detailTarget={detailTarget}
            setModifyData={props.setModifyData}
            reload={props.reload}
            setReload={props.setReload}
          />
        </>
      )}
    </div>
  );
}

export default HolidayList;
