import React, { useEffect, useState } from "react";
import ReportItem from "./ReportItem";
import axios from "axios";
import { API } from "../../global/Constants";
import ReviewModal from "./ReviewModal";
import ArticleDetail from "./ArticleDetail";
import NoData from "../../global/NoData";

function ReportList() {
  const [reload, setReload] = useState(false);
  const [reportList, setReportList] = useState([]);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewId, setReviewId] = useState(undefined);
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [articleId, setArticleId] = useState(undefined);
  const [targetUserId, setTargetUserId] = useState(undefined);

  useEffect(() => {
    axios
      .get(API + "/admin/report", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setReportList(response.data.data);
        } else alert("신고 목록 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("신고 목록 조회에 실패했습니다.");
      });
  }, [reload]);

  return (
    <>
      <div className="p-4 mb-16 md:ml-64">
        {reportList.length > 0 ? (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg whitespace-nowrap">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                신고 관리
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                  요청된 신고 목록을 확인해주세요.
                </p>
              </caption>
              <thead className="text-lg text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-center">
                  <th scope="col" className="px-6 py-3">
                    종류
                  </th>
                  <th scope="col" className="px-6 py-3">
                    신고자
                  </th>
                  <th scope="col" className="px-6 py-3">
                    신고 대상
                  </th>
                  <th scope="col" className="px-6 py-3">
                    신고 내용
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="text-base">
                {reportList.map((item) => (
                  <ReportItem
                    key={item.reportId}
                    data={item}
                    reload={reload}
                    setReload={setReload}
                    setShowReviewModal={setShowReviewModal}
                    setReviewId={setReviewId}
                    setShowArticleModal={setShowArticleModal}
                    setArticleId={setArticleId}
                    setTargetUserId={setTargetUserId}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <NoData message={"요청된 신고가 없습니다."} />
        )}
      </div>
      <ReviewModal
        showModal={showReviewModal}
        setShowModal={setShowReviewModal}
        reviewId={reviewId}
        targetUserId={targetUserId}
      />
      <ArticleDetail
        showModal={showArticleModal}
        setShowModal={setShowArticleModal}
        articleId={articleId}
        targetUserId={targetUserId}
      />
    </>
  );
}

export default ReportList;
