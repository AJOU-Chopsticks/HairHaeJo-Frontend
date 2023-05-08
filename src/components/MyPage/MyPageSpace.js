import React, { useEffect, useState } from "react";
import Loading from "../Layout/Loading";
import Profile from "./Profile";
import ProfileChange from "./ProfileChange";
import PortfolioForm from "../AddportfolioPage/PortfolioForm";
import axios from "axios";
import { API } from "../../global/Constants";
import { useSelector } from "react-redux";

function MyPageSpace(props) {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    skinType: 1,
    hairType: 1,
    hairThickness: 1,
    dyeingHistory: 1,
    decolorizationHistory: 1,
    abstractLocation: "경기도 수원시 팔달구 ~",
    introduction: "소개입니다",
    hairSalonName: "리안헤어",
    hairSalonAddress: "아주대 근처",
    hairSalonNumber: "0313331234",
  });

  useEffect(() => {
    // if (user.role === "ROLE_USER") {
    //   axios
    //     .get(API + "/user/profile/" + user.userId, {
    //       headers: {
    //         Authorization: localStorage.getItem("token"),
    //       },
    //     })
    //     .then((response) => {
    //       console.log(response);
    //       // if (response.data.success) {
    //       //   setArticleData(response.data.data);
    //       // }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       // if (err.response.data.message) alert(err.response.data.message);
    //       // else alert("요청 글 목록 조회에 실패했습니다.");
    //     })
    //     .then(() => setLoading(false));
    // }
    // if (user.role === "ROLE_DESIGNER") {
    //   axios
    //     .get(API + "/designer/profile/" + user.userId, {
    //       headers: {
    //         Authorization: localStorage.getItem("token"),
    //       },
    //     })
    //     .then((response) => {
    //       console.log(response);
    //       // if (response.data.success) {
    //       //   setArticleData(response.data.data);
    //       // }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       // if (err.response.data.message) alert(err.response.data.message);
    //       // else alert("요청 글 목록 조회에 실패했습니다.");
    //     })
    //     .then(() => setLoading(false));
    // }
  }, []);

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
          ) : (
            <ProfileChange profileInfo={profileInfo} />
          )}
        </>
      )}
    </div>
  );
}

export default MyPageSpace;
