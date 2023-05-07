import React, { useState } from "react";
import SideBar from "../components/MyPage/SideBar";
import MyPageSpace from "../components/MyPage/MyPageSpace";

function MyPage() {
  const [profileType, setProfileType] = useState("profile");

  return (
    <div className="mx-auto pt-16 min-h-screen">
      <SideBar profileType={profileType} setProfileType={setProfileType} />
      <MyPageSpace profileType={profileType} />
    </div>
  );
}

export default MyPage;
