import React, { useEffect } from "react";
import Loading from "../components/Layout/Loading";
import { useSearchParams } from "react-router-dom";

function AdResultPage() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    localStorage.setItem("pg_token", searchParams.get("pg_token"));
    window.close();
  });
  return (
    <div>
      <Loading full={true} />
    </div>
  );
}

export default AdResultPage;
