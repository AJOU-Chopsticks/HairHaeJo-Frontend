import React, { useEffect, useState } from "react";
import Article from "./Inventory";
import ArticleDetail from "./InventoryDetail";
import ArticleSearch from "./InventorySearch";
import ArticleCategory from "./InventoryCategory";
import axios from "axios";
import { API } from "../../global/Constants";
import Loading from "../Layout/Loading";

function InventoryList(props) {
  const [showDetail, setShowDetail] = useState(false);
  const [inventoryData, setInventoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const [name, setName] = useState("all");
  const [orderbystock, setOrderbyStock] = useState("all");
  const [orderbyprice, setOrderbyPrice] = useState("all");
  const [iswarning, setIswarning] = useState(true);

  /*useEffect(() => {
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
  }, [style, region, gender, tag, props.reload]);*/

  /*useEffect(() => {
    setDetailTarget("");
  }, [props.reload]);*/

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
            {inventoryData.map((item) => (
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
            reload={props.reload}
            setReload={props.setReload}
          />
          <ArticleMy
            setShowDetail={setShowDetail}
            setDetailTarget={setDetailTarget}
          />
        </>
      )}
    </div>
  );
}

export default InventoryList;
