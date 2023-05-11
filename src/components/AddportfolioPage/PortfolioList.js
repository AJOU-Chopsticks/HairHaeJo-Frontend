import React, { useEffect, useState } from "react";
import Portfolio from "./Portfolio";
import PortfolioDetail from "./PortfolioDetail";
import Loading from "../Layout/Loading";
import { useSelector } from "react-redux";
import { API } from "../../global/Constants";
import axios from "axios";

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
  }, []);

  return (
    <div className="mb-8">
      {loading ? (
        <Loading full={true} />
      ) : (
        <>
          <div className="pt-6 grid gap-4 mb-8 md:mb-12 md:grid-cols-2 xl:grid-cols-3">
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
          />
        </>
      )}
    </div>
  );
}

export default PortfolioList;
