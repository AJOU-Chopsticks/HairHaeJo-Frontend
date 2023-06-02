import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SideBar from "../components/ProfilePage/SideBar";
import MyPageSpace from "../components/ProfilePage/MyPageSpace";
import { BsSendFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { API } from "../global/Constants";
import axios from "axios";

function ProfilePage() {
  const user = useSelector((state) => state.user);
  const navigation = useNavigate();
  const { role, id } = useParams();
  const [profileType, setProfileType] = useState("profile");

  const sendChatting = () => {
    if (user.role === "ROLE_DESIGNER" && role === "designer")
      return alert("디자이너가 디자이너에게 상담을 신청할 수 없습니다.");
    if (user.role === "ROLE_USER" && role === "user")
      return alert("고객이 고객에게 상담을 신청할 수 없습니다.");

    axios
      .post(
        API + "/chat?userId=" + id,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem("chatRoomId", response.data.data.chatRoomId);
          navigation("/chat");
        } else alert("채팅방 생성에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("채팅방 생성에 실패했습니다.");
      });
  };

  return (
    <div className="mx-auto pt-16 min-h-screen">
      <SideBar
        role={role}
        profileType={profileType}
        setProfileType={setProfileType}
      />
      <MyPageSpace role={role} id={id} profileType={profileType} />
      {user.userId.toString() !== id && (
        <button
          type="button"
          className="animate-bounce flex items-center justify-center fixed bottom-24 right-6 md:right-12 group ml-auto text-white bg-primary-700 rounded-full w-14 h-14 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800"
          onClick={sendChatting}
        >
          <BsSendFill />
        </button>
      )}
    </div>
  );
}

export default ProfilePage;
