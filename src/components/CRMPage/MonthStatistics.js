import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { API } from "../../global/Constants";

const data = [
  {
    name: "Page A",
    시술수: 4000,
    매출: 2400,
  },
  {
    name: "Page B",
    시술수: 3000,
    매출: 1398,
  },
  {
    name: "Page C",
    시술수: 2000,
    매출: 9800,
  },
  {
    name: "Page D",
    시술수: 2780,
    매출: 3908,
  },
  {
    name: "Page E",
    시술수: 1890,
    매출: 4800,
  },
  {
    name: "Page F",
    시술수: 2390,
    매출: 3800,
  },
  {
    name: "Page G",
    시술수: 3490,
    매출: 4300,
  },
];

function MonthStatistics() {
  const [statisticsData, setStatisticsData] = useState([]);
  const [month, setMonth] = useState("all");
  const [count, setCount] = useState(0);
  const [take, setTake] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(API + `/statistics/monthly?year=`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setStatisticsData(response.data.data);
        }
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("월 별 시술 수, 매출 조회 실패!");
      })
      .then(() => setLoading(false));
  }, [month, count, take]);

  return (
    <div className="p-4 mb-8 md:ml-64">
      <BarChart width={730} height={250} data={statisticsData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="시술수" fill="#8884d8" />
        <Bar dataKey="매출" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default MonthStatistics;
