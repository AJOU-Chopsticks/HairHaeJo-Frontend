import React, { useState } from "react";
import SideBar from "../components/MatchingPage/SideBar";
import ArticleForm from "../components/MatchingPage/ArticleForm";
import ArticleList from "../components/MatchingPage/ArticleList";
import ArticleModifyForm from "../components/MatchingPage/ArticleModifyForm";

function MatchingPage() {
  const [showModifyForm, setShowModifyForm] = useState(false);

  return (
    <div className="mx-auto pt-16 min-h-screen">
      <SideBar />
      <ArticleList setShowModifyForm={setShowModifyForm} />
      <ArticleForm />
      <ArticleModifyForm
        showModal={showModifyForm}
        setShowModal={setShowModifyForm}
      />
    </div>
  );
}

export default MatchingPage;
