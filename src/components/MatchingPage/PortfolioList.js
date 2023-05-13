import React, { useEffect, useState } from "react";
import Loading from "../Layout/Loading";
import PortfolioCategory from "./PortfolioCategory";
import Portfolio from "./Portfolio";
import PortfolioDetail from "./PortfolioDetail";
import axios from "axios";
import { API } from "../../global/Constants";
import ProfileCard from "./ProfileCard";

function PortfolioList() {
  const [loading, setLoading] = useState(false);
  const [portfolioData, setPortfolioData] = useState([]);
  const [detailTarget, setDetailTarget] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const [style, setStyle] = useState("all");
  const [region, setRegion] = useState("all");
  const [gender, setGender] = useState("all");
  const [tag, setTag] = useState("all");
  const [recommend, setRecommend] = useState(false);
  const [recommendData, setRecommendData] = useState([]);

  useEffect(() => {
    if (recommend) {
      setLoading(true);
      axios
        // .get(API + "/designer/recommend?region=" + "팔달구", {
        .get(API + "/designer/recommend?region=팔달구", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.success) {
            setRecommendData(response.data.data);
          } else alert("헤어 디자이너 추천 리스트 조회에 실패했습니다.");
        })
        .catch((err) => {
          if (err.response.data.message) alert(err.response.data.message);
          else alert("헤어 디자이너 추천 리스트 조회에 실패했습니다.");
        })
        .then(() => setLoading(false));
    } else {
      setLoading(true);
      axios
        .get(
          API +
            `/portfolio/style?region=${region}&category=${style}&tag=${tag}&gender=${
              gender === "남성" ? 0 : gender === "여성" ? 1 : 2
            }`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          if (response.data.success) {
            setPortfolioData(response.data.data);
          } else alert("스타일 목록 조회에 실패했습니다.");
        })
        .catch((err) => {
          if (err.response.data.message) alert(err.response.data.message);
          else alert("스타일 목록 조회에 실패했습니다.");
        })
        .then(() => setLoading(false));
    }
  }, [style, region, gender, tag, recommend]);

  return (
    <div className="p-4 mb-8 md:ml-64">
      {loading ? (
        <Loading full={true} />
      ) : (
        <>
          <PortfolioCategory
            style={style}
            region={region}
            gender={gender}
            tag={tag}
            recommend={recommend}
            setStyle={setStyle}
            setRegion={setRegion}
            setGender={setGender}
            setTag={setTag}
            setRecommend={setRecommend}
          />
          {recommend ? (
            <div className="pt-6 mb-8 md:mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendData.map((item) => (
                <ProfileCard data={item} key={item.designerId} />
              ))}
            </div>
          ) : (
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
          )}
          <PortfolioDetail
            showDetail={showDetail}
            setShowDetail={setShowDetail}
            detailTarget={detailTarget}
          />
        </>
      )}
    </div>
  );
}

export default PortfolioList;
