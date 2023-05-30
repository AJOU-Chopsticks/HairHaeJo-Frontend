import React, { useState } from "react";
import SideBar from "../components/MyPage/SideBar";
import MyPageSpace from "../components/MyPage/MyPageSpace";
import { useSearchParams } from "react-router-dom";

function MyPage() {
  const [searchParams] = useSearchParams();
  const [profileType, setProfileType] = useState(
    searchParams.get("type") || "profile"
  );

  return (
    <div className="mx-auto pt-16 min-h-screen">
      <SideBar profileType={profileType} setProfileType={setProfileType} />
      <MyPageSpace profileType={profileType} />
    </div>
  );
}

export default MyPage;
