import React, { useState } from "react";
import ArticleList from "./ArticleList";
import ArticleForm from "./ArticleForm";
import ArticleModifyForm from "./ArticleModifyForm";

function GeneralMatching() {
  const [showModifyForm, setShowModifyForm] = useState(false);
  const [modifyData, setModifyData] = useState({});
  const [reload, setReload] = useState(false);

  return (
    <>
      <ArticleList
        setShowModifyForm={setShowModifyForm}
        setModifyData={setModifyData}
        reload={reload}
        setReload={setReload}
      />
      <ArticleForm reload={reload} setReload={setReload} />
      <ArticleModifyForm
        showModal={showModifyForm}
        setShowModal={setShowModifyForm}
        modifyData={modifyData}
        reload={reload}
        setReload={setReload}
      />
    </>
  );
}

export default GeneralMatching;
