import React, { useEffect, useState } from "react";
import Portfolio from "./Portfolio";
import PortfolioDetail from "./PortfolioDetail";
import axios from "axios";
import { API } from "../../global/Constants";
import Loading from "../Layout/Loading";

function PortfolioList(props) {
  const [showDetail, setShowDetail] = useState(false);
  const [portfolioData, setPortfolioData] = useState([]);
  const [detailTarget, setDetailTarget] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <div className="p-4 mb-8 md:ml-64">
      {loading ? (
        <Loading full={true} />
      ) : (
        <>
          <div className="pt-6 grid gap-4 mb-8 md:mb-12 md:grid-cols-2 xl:grid-cols-3">
            {portfolioData.map((item) => (
              <Portfolio
                data={item}
                key={item.PortfolioId}
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
