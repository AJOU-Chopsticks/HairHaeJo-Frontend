import React, { useEffect, useState } from "react";
import Loading from "../Layout/Loading";
import Profile from "./Profile";
import ProfileChange from "./ProfileChange";
import axios from "axios";
import { API } from "../../global/Constants";
import { useSelector } from "react-redux";
import AddportfolioPage from "../../pages/AddportfolioPage";

function MyPageSpace(props) {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [profileInfo, setProfileInfo] = useState({});
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (user.role === "ROLE_USER") {
      axios
        .get(API + "/user/profile/" + user.userId, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.success) {
            setProfileInfo(response.data.data);
          } else alert("프로필 정보 조회에 실패했습니다.");
        })
        .catch((err) => {
          if (err.response.data.message) alert(err.response.data.message);
          else alert("프로필 정보 조회에 실패했습니다.");
        })
        .then(() => setLoading(false));
    }
    if (user.role === "ROLE_DESIGNER") {
      axios
        .get(API + "/designer/profile/" + user.userId, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.success) {
            setProfileInfo(response.data.data);
          } else alert("프로필 정보 조회에 실패했습니다.");
        })
        .catch((err) => {
          if (err.response.data.message) alert(err.response.data.message);
          else alert("프로필 정보 조회에 실패했습니다.");
        })
        .then(() => setLoading(false));
    }
  }, [reload, user.role, user.userId]);

  return (
    <div
      className={`p-4 mb-8 min-h-screen md:ml-64 ${
        props.profileType === "profile" && "bg-primary-100 dark:bg-gray-800"
      }`}
    >
      {loading ? (
        <Loading full={true} />
      ) : (
        <>
          {props.profileType === "profile" ? (
            <Profile profileInfo={profileInfo} />
          ) : props.profileType === "change" ? (
            <ProfileChange profileInfo={profileInfo} />
          ) : (
            <AddportfolioPage profileInfo={profileInfo} />
          )}
        </>
      )}
    </div>
  );
}

export default MyPageSpace;