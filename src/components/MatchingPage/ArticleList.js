import React, { useEffect, useState } from "react";
import Article from "./Article";
import ArticleDetail from "./ArticleDetail";
import ArticleSearch from "./ArticleSearch";
import ArticleCategory from "./ArticleCategory";
import axios from "axios";
import { API } from "../../global/Constants";
import Loading from "../Layout/Loading";
import { AddressToSearch } from "../../global/Functions";

function ArticleList(props) {
  const [showDetail, setShowDetail] = useState(false);
  const [articleData, setArticleData] = useState([]);
  const [detailTarget, setDetailTarget] = useState("");
  const [loading, setLoading] = useState(true);
  const [style, setStyle] = useState("all");
  const [region, setRegion] = useState("all");
  const [gender, setGender] = useState("all");
  const [tag, setTag] = useState("all");

  useEffect(() => {
    axios
      .get(
        API +
          `/advice/article/list?region=${AddressToSearch(
            region
          )}&category=${style}&tag=${tag}&gender=${gender}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          setArticleData(response.data.data);
        }
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("요청 글 목록 조회에 실패했습니다.");
      })
      .then(() => setLoading(false));
  }, [style, region, gender, tag]);

  return (
    <div className="p-4 mb-8 md:ml-64">
      {loading ? (
        <Loading full={true} />
      ) : (
        <>
          <ArticleSearch
            setArticleData={setArticleData}
            setLoading={setLoading}
          />
          <ArticleCategory
            style={style}
            region={region}
            gender={gender}
            tag={tag}
            setStyle={setStyle}
            setRegion={setRegion}
            setGender={setGender}
            setTag={setTag}
          />
          <div className="pt-6 grid gap-4 mb-8 md:mb-12 md:grid-cols-2 xl:grid-cols-3">
            {articleData.map((item) => (
              <Article
                data={item}
                key={item.articleId}
                setShowDetail={setShowDetail}
                setDetailTarget={setDetailTarget}
              />
            ))}
          </div>
          <ArticleDetail
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

export default ArticleList;
