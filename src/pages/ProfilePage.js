import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/ProfilePage/SideBar";
import MyPageSpace from "../components/ProfilePage/MyPageSpace";

function ProfilePage() {
  const { role, id } = useParams();
  const [profileType, setProfileType] = useState("profile");

  return (
    <div className="mx-auto pt-16 min-h-screen">
      <SideBar
        role={role}
        profileType={profileType}
        setProfileType={setProfileType}
      />
      <MyPageSpace role={role} id={id} profileType={profileType} />
    </div>
  );
}

export default ProfilePage;
