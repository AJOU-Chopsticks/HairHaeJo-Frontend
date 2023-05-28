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
    revisit: "신규 고객",
    시술수: 1289,
    매출: 4000,
  },
  {
    revisit: "기존 고객",
    시술수: 1398,
    매출: 3000,
  },
];

function RevisitStatistics() {
  const [statisticsData, setStatisticsData] = useState([]);
  const [newly, setNewly] = useState(0);
  const [newlyTake, setNewlyTake] = useState(0);
  const [revisit, setRevisit] = useState(0);
  const [revisitTake, setRevisitTake] = useState(0);
  const [loading, setLoading] = useState(false);

  /*useEffect(() => {
    axios
      .get(API + `/statistics/revisit?year=&month=`, {
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
        else alert("신규/기존 고객 별 시술 수, 매출 조회 실패!");
      })
      .then(() => setLoading(false));
  }, [newly, newlyTake, revisit, revisitTake]);*/

  return (
    <div className="p-4 mb-8 md:ml-64">
      <div className="text-lg text-gray-900 md:text-xl dark:text-white">
        <h3 className="font-semibold ">신규/기존 고객 별 시술수, 매출 현황</h3>
      </div>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="revisit" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="시술수" fill="#8884d8" />
        <Bar dataKey="매출" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default RevisitStatistics;
