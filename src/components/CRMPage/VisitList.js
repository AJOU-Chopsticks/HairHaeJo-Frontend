import React, { useEffect, useState } from "react";
import Visit from "./Visit";
import axios from "axios";
import { API } from "../../global/Constants";
import Loading from "../Layout/Loading";
import { AddressToSearch } from "../../global/Functions";

function VisitList(props) {
  const [visitData, setVisitData] = useState([]);
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
          setVisitData(response.data.data);
        }
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("방문 고객 목록 조회에 실패했습니다.");
      })
      .then(() => setLoading(false));
  }, [style, region, gender, tag, props.reload]);

  return (
    <div className="p-4 mb-8 md:ml-64">
      {loading ? (
        <Loading full={true} />
      ) : (
        <>
          <div className="pt-6 grid gap-4 mb-8 md:mb-12 md:grid-cols-2 xl:grid-cols-3">
            {visitData.map((item) => (
              <Visit data={item} key={item.visitId} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default VisitList;
