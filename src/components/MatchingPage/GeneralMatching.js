import React, { useState } from "react";
import ArticleList from "./ArticleList";
import ArticleForm from "./ArticleForm";
import ArticleModifyForm from "./ArticleModifyForm";

function GeneralMatching() {
  const [showModifyForm, setShowModifyForm] = useState(false);
  const [modifyData, setModifyData] = useState({});

  return (
    <>
      <ArticleList
        setShowModifyForm={setShowModifyForm}
        setModifyData={setModifyData}
      />
      <ArticleForm />
      <ArticleModifyForm
        showModal={showModifyForm}
        setShowModal={setShowModifyForm}
        modifyData={modifyData}
      />
    </>
  );
}

export default GeneralMatching;
