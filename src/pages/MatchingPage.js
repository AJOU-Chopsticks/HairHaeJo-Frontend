import React from "react";
import SideBar from "../components/MatchingPage/SideBar";
import ArticleForm from "../components/MatchingPage/ArticleForm";
import ArticleList from "../components/MatchingPage/ArticleList";

function MatchingPage() {
  return (
    <div className="mx-auto pt-16 min-h-screen">
      <SideBar />
      <ArticleList />
      <ArticleForm />
    </div>
  );
}

export default MatchingPage;
