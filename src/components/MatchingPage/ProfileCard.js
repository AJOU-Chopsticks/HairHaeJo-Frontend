import React from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../global/Constants";
import axios from "axios";
import { AddressToSimple } from "../../global/Functions";
import { useSelector } from "react-redux";

function ProfileCard(props) {
  const navigation = useNavigate();
  const user = useSelector((state) => state.user);

  const showProfile = () => {
    navigation("/profile/designer/" + props.data.designerId);
  };

  const sendChatting = () => {
    if (user.role === "ROLE_DESIGNER")
      return alert("디자이너가 디자이너에게 상담을 신청할 수 없습니다.");

    axios
      .post(
        API + "/chat?userId=" + props.data.designerId,
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
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 pt-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={props.data.profileImage}
          alt="Designer_ProfileImage"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {props.data.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {`${props.data.hairSalonName} (${AddressToSimple(
            props.data.hairSalonAddress
          )})`}
        </span>
        <div className="flex my-4 space-x-3 md:mt-6">
          <button
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={showProfile}
          >
            프로필 보기
          </button>
          <button
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            onClick={sendChatting}
          >
            상담 신청
          </button>
        </div>
        <button
          type="button"
          className="text-white w-[210px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
          onClick={() => navigation("/reservation/" + props.data.designerId)}
        >
          예약하기
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
