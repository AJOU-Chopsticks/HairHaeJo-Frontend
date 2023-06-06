import React, { useEffect, useState } from "react";
import Loading from "../Layout/Loading";
import Profile from "./Profile";
import axios from "axios";
import { API } from "../../global/Constants";
import PortfolioSpace from "./PortfolioSpace";
import MenuSpace from "./MenuSpace";
import ReviewList from "./ReviewList";

function MyPageSpace(props) {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [profileInfo, setProfileInfo] = useState({});
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(API + "/user/info?userId=" + props.id, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setUserInfo(response.data.data);

          if (props.role === "user") {
            axios
              .get(API + "/user/profile/" + props.id, {
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
          if (props.role === "designer") {
            axios
              .get(API + "/designer/profile/" + props.id, {
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
        } else alert("유저 정보 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("유저 정보 조회에 실패했습니다.");
        setLoading(false);
      });
  }, [reload, props.role, props.id]);

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
            <Profile userInfo={userInfo} profileInfo={profileInfo} />
          ) : props.profileType === "portfolio" ? (
            <PortfolioSpace
              id={props.id}
              reload={reload}
              setReload={setReload}
            />
          ) : props.profileType === "menu" ? (
            <MenuSpace id={props.id} />
          ) : (
            <ReviewList id={props.id} />
          )}
        </>
      )}
    </div>
  );
}

export default MyPageSpace;
