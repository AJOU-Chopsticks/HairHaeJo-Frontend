import React, { useEffect, useState } from "react";
import Loading from "../Layout/Loading";
import Profile from "./Profile";
import ProfileChange from "./ProfileChange";
import axios from "axios";
import { API } from "../../global/Constants";
import { useSelector } from "react-redux";
import PortfolioSpace from "./PortfolioSpace";
import MenuSpace from "./MenuSpace";
import ReservationSpace from "./ReservationSpace";
import LikeDesignerList from "./LikeDesignerList";

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
    if (user.role === "ROLE_ADMIN") {
      setLoading(false);
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
            <ProfileChange
              profileInfo={profileInfo}
              reload={reload}
              setReload={setReload}
            />
          ) : props.profileType === "portfolio" ? (
            <PortfolioSpace reload={reload} setReload={setReload} />
          ) : props.profileType === "menu" ? (
            <MenuSpace />
          ) : props.profileType === "reservation" ? (
            <ReservationSpace />
          ) : (
            <LikeDesignerList />
          )}
        </>
      )}
    </div>
  );
}

export default MyPageSpace;
