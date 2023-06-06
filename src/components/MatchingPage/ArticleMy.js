import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../global/Constants";
import { useSelector } from "react-redux";

function ArticleMy(props) {
  const user = useSelector((state) => state.user);
  const [myArticle, setMyArticle] = useState([]);

  useEffect(() => {
    axios
      .get(API + "/advice/article/my?userId=" + user.userId, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setMyArticle(response.data.data);
        } else console.log("내 요청 글 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("내 요청 글 조회에 실패했습니다.");
      });
  }, [user.userId]);

  if (myArticle.length === 0) return null;
  else {
    return (
      <div className="fixed bottom-20 md:bottom-8 left-0 w-full md:pl-64">
        <button
          type="button"
          className="flex items-center justify-center group mx-auto text-white bg-primary-700 rounded-lg py-3 px-8 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800"
          onClick={() => {
            document.body.classList.add("overflow-hidden");
            props.setDetailTarget(myArticle[0].articleId);
            props.setShowDetail(true);
          }}
        >
          내 요청 글
        </button>
      </div>
    );
  }
}

export default ArticleMy;
