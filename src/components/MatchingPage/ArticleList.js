import React, { useState } from "react";
import Article from "./Article";
import ArticleDetail from "./ArticleDetail";

const data = [
  {
    id: "1",
    title: "제 머리좀 살려주세요...",
    information: "여성 / 커트 / 펌",
    profileImage:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMDRfMTI1%2FMDAxNTgwODEyNDY3Nzcw.0CwROtLN7llMZj-hTead7MRI2_dg4qNCLMzmMTQPtBgg.5gCii1I-gyUsg-nD60edSDJq3zgnkqHBdOJ5LzaAN54g.JPEG.validism%2FIMG_5805.JPG&type=sc960_832",
    name: "지수",
    region: "팔달구",
  },
  {
    id: "2",
    title: "내 디자이너는 어디?",
    information: "여성 / 커트 / 볼륨매직",
    profileImage:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjhfMTUg%2FMDAxNjQ2MDU5NTczMjMw.uWru-7JCbICbXZ7Uw2Ril34Afi7oMtNs6ptjAeZXNZAg.gLfEY4rQCi6aCP_M_EUUvBXu27k41ETVVSz--4e2zrIg.JPEG.dltpdud03%2FPicsart%25A3%25DF22%25A3%25AD02%25A3%25AD28%25A3%25DF23%25A3%25AD43%25A3%25AD11%25A3%25AD038.jpg&type=sc960_832",
    name: "아이유",
    region: "강남구",
  },
  {
    id: "3",
    title: "헤어 디자이너 급구",
    information: "남성 / 커트 / 다운펌",
    profileImage:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20151017_115%2Fwergg9194_1445093855038wdABl_JPEG%2F201501232229779417_54c24fcb628c0_99_20150124075606.jpg&type=sc960_832",
    name: "이종석",
    region: "팔달구",
  },
  {
    id: "4",
    title: "머리 예쁘게 잘하는 분?",
    information: "여성 / 커트 / 레이어드펌",
    profileImage:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA4MjFfMSAg%2FMDAxNTY2MzcxMjM0Mzc4.Cd3RWeVvynAYwfl8kUAGr-Um1YxD3oI9e7h7Z-OmwOYg.34yVxfVI8ZjosMD3NzyCCMb-LzivpOTDneyQ63Z8y_Mg.JPEG.freeletics00%2FKakaoTalk_20190821_160120290_26.jpg&type=sc960_832",
    name: "예지",
    region: "강남구",
  },
];

function ArticleList() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="p-4 mb-8 md:ml-64">
      <div className="grid gap-4 mb-8 md:mb-12 md:grid-cols-2 xl:grid-cols-3">
        {data.map((item) => (
          <Article data={item} key={item.id} setShowDetail={setShowDetail} />
        ))}
      </div>
      <ArticleDetail showDetail={showDetail} setShowDetail={setShowDetail} />
    </div>
  );
}

export default ArticleList;
