import React, { useState } from "react";
import Loading from "../Layout/Loading";
import Profile from "./Profile";
import ProfileChange from "./ProfileChange";

function MyPageSpace(props) {
  const [loading, setLoading] = useState(false);

  return (
    <div
      className={`p-4 mb-8 min-h-screen md:ml-64 ${
        props.profileType === "profile" && "bg-primary-100 dark:bg-gray-800"
      }`}
    >
      {loading ? (
        <Loading full={true} />
      ) : (
        <>{props.profileType === "profile" ? <Profile /> : <ProfileChange />}</>
      )}
    </div>
  );
}

export default MyPageSpace;
