import React, { useEffect, useState } from "react";
import Loading from "../Layout/Loading";
import StatisticsCategory from "./StatisticsCategory";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import ChartCategory from "./ChartCategory";
import axios from "axios";
import { API } from "../../global/Constants";

function Statistics() {
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState(undefined);
  const [year, setYear] = useState(undefined);
  const [month, setMonth] = useState(undefined);
  const [name, setName] = useState("");
  const [label, setLabel] = useState("");
  const [countData, setCountData] = useState([]);
  const [takeData, setTakeData] = useState([]);
  const [noData, setNoData] = useState(true);
  const [chartType, setChartType] = useState("bar");

  useEffect(() => {
    setLoading(true);

    if (type === "월 별" && year) {
      axios
        .get(API + `/statistics/monthly?year=${year}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.success) {
            let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            let take = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let i = 0; i < response.data.data.length; i++) {
              let month = response.data.data[i].month.split("-");
              count[parseInt(month[1]) - 1] = parseInt(
                response.data.data[i].count
              );
              take[parseInt(month[1]) - 1] = parseInt(
                response.data.data[i].take
              );
            }
            setCountData(count);
            setTakeData(take);
            setName(year + "년 월 별");
            setLabel([
              "1월",
              "2월",
              "3월",
              "4월",
              "5월",
              "6월",
              "7월",
              "8월",
              "9월",
              "10월",
              "11월",
              "12월",
            ]);
          } else alert("월 별 시술 수, 매출 조회에 실패했습니다.");
        })
        .catch((err) => {
          if (err.response.data.message) alert(err.response.data.message);
          else alert("월 별 시술 수, 매출 조회에 실패했습니다.");
        })
        .then(() => {
          setNoData(false);
          setLoading(false);
        });
    } else if (type === "성별 별" && year && month) {
      axios
        .get(API + `/statistics/gender?year=${year}&month=${month}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.success) {
            let count = [0, 0];
            let take = [0, 0];
            for (let i = 0; i < response.data.data.length; i++) {
              let gender = parseInt(response.data.data[i].gender);
              count[gender] = parseInt(response.data.data[i].count);
              take[gender] = parseInt(response.data.data[i].take);
            }
            setCountData(count);
            setTakeData(take);
            setName(`${year}년 ${month}월 성별 별`);
            setLabel(["남성", "여성"]);
          } else alert("성별 별 시술 수, 매출 조회에 실패했습니다.");
        })
        .catch((err) => {
          if (err.response.data.message) alert(err.response.data.message);
          else alert("성별 별 시술 수, 매출 조회에 실패했습니다.");
        })
        .then(() => {
          setNoData(false);
          setLoading(false);
        });
    } else if (type === "연령대 별" && year && month) {
      axios
        .get(API + `/statistics/age?year=${year}&month=${month}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.success) {
            let count = [0, 0, 0, 0, 0, 0, 0];
            let take = [0, 0, 0, 0, 0, 0, 0];
            for (let i = 0; i < response.data.data.length; i++) {
              let ageGroup = parseInt(response.data.data[i].ageGroup[0]);
              count[ageGroup] = parseInt(response.data.data[i].count);
              take[ageGroup] = parseInt(response.data.data[i].take);
            }
            setCountData(count);
            setTakeData(take);
            setName(`${year}년 ${month}월 연령대 별`);
            setLabel(["0대", "10대", "20대", "30대", "40대", "50대", "60대"]);
          } else alert("연령대 별 시술 수, 매출 조회에 실패했습니다.");
        })
        .catch((err) => {
          if (err.response.data.message) alert(err.response.data.message);
          else alert("연령대 별 시술 수, 매출 조회에 실패했습니다.");
        })
        .then(() => {
          setNoData(false);
          setLoading(false);
        });
    } else if (type === "메뉴 별" && year && month) {
      axios
        .get(API + `/statistics/menu?year=${year}&month=${month}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.success) {
            let count = [];
            let take = [];
            let menu = [];
            for (let i = 0; i < response.data.data.length; i++) {
              menu[i] = response.data.data[i].menu;
              count[i] = parseInt(response.data.data[i].count);
              take[i] = parseInt(response.data.data[i].take);
            }
            setCountData(count);
            setTakeData(take);
            setName(`${year}년 ${month}월 메뉴 별`);
            setLabel(menu);
          } else alert("메뉴 별 시술 수, 매출 조회에 실패했습니다.");
        })
        .catch((err) => {
          if (err.response.data.message) alert(err.response.data.message);
          else alert("메뉴 별 시술 수, 매출 조회에 실패했습니다.");
        })
        .then(() => {
          setNoData(false);
          setLoading(false);
        });
    } else if (type === "기존/신규 고객 별" && year && month) {
      axios
        .get(API + `/statistics/revisit?year=${year}&month=${month}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.success) {
            let count = [response.data.data.revisit, response.data.data.newly];
            let take = [
              response.data.data.revisitTake,
              response.data.data.newlyTake,
            ];
            setCountData(count);
            setTakeData(take);
            setName(`${year}년 ${month}월 기존/신규 고객 별`);
            setLabel(["기존 고객", "신규 고객"]);
          } else alert("기존/신규 고객 별 시술 수, 매출 조회에 실패했습니다.");
        })
        .catch((err) => {
          if (err.response.data.message) alert(err.response.data.message);
          else alert("기존/신규 고객 별 시술 수, 매출 조회에 실패했습니다.");
        })
        .then(() => {
          setNoData(false);
          setLoading(false);
        });
    } else {
      setLoading(false);
      setNoData(true);
    }
  }, [type, year, month]);

  return (
    <div className="p-4 mb-8 md:ml-64">
      {loading ? (
        <Loading full={true} />
      ) : (
        <>
          <StatisticsCategory
            type={type}
            setType={setType}
            year={year}
            setYear={setYear}
            month={month}
            setMonth={setMonth}
          />
          {noData ? (
            <div className="mt-36 text-center">
              <span>통계 카테고리를 선택해주세요.</span>
            </div>
          ) : (
            <>
              <ChartCategory
                chartType={chartType}
                setChartType={setChartType}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mb-12">
                <div>
                  {chartType === "bar" ? (
                    <BarChart
                      name={name + " 시술 수"}
                      label={label}
                      data={countData}
                    />
                  ) : (
                    <LineChart
                      name={name + " 시술 수"}
                      label={label}
                      data={countData}
                    />
                  )}
                </div>
                <div>
                  {chartType === "bar" ? (
                    <BarChart
                      name={name + " 매출"}
                      label={label}
                      data={takeData}
                    />
                  ) : (
                    <LineChart
                      name={name + " 매출"}
                      label={label}
                      data={takeData}
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Statistics;
