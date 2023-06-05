import React, { useEffect, useState } from "react";
import Portfolio from "./Portfolio";
import PortfolioDetail from "./PortfolioDetail";
import Loading from "../Layout/Loading";
import { useSelector } from "react-redux";
import { API } from "../../global/Constants";
import axios from "axios";
import NoData from "../../global/NoData";

function PortfolioList(props) {
  const user = useSelector((state) => state.user);
  const [showDetail, setShowDetail] = useState(false);
  const [portfolioData, setPortfolioData] = useState([]);
  const [detailTarget, setDetailTarget] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(API + `/portfolio?designerId=${user.userId}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setPortfolioData(response.data.data);
        } else alert("포트폴리오 목록 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("포트폴리오 목록 조회에 실패했습니다.");
      })
      .then(() => setLoading(false));
  }, [user.userId]);

  return (
    <div className="mb-8">
      {loading ? (
        <Loading full={true} />
      ) : portfolioData.length > 0 ? (
        <>
          <div className="pt-6 mb-8 md:mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.map((item) => (
              <Portfolio
                data={item}
                key={item.portfolioId}
                setShowDetail={setShowDetail}
                setDetailTarget={setDetailTarget}
              />
            ))}
          </div>
          <PortfolioDetail
            showDetail={showDetail}
            setShowDetail={setShowDetail}
            setShowModifyForm={props.setShowModifyForm}
            detailTarget={detailTarget}
            setModifyData={props.setModifyData}
            reload={props.reload}
            setReload={props.setReload}
          />
        </>
      ) : (
        <NoData message={"내 포트폴리오가 없습니다."} />
      )}
    </div>
  );
}

export default PortfolioList;
