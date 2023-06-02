import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function ChatListItem(props) {
  const user = useSelector((state) => state.user);

  const convertDate = (updatedAt) => {
    let date = new Date(updatedAt);
    date.setHours(date.getHours() + 9);
    let now = new Date();

    if (
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() === now.getMonth() &&
      date.getDate() === now.getDate()
    ) {
      return `${date.getHours() < 12 ? "오전" : "오후"} ${
        (date.getHours() % 12 !== 0 ? date.getHours() % 12 : 12) <= 9
          ? "0" + (date.getHours() % 12 !== 0 ? date.getHours() % 12 : 12)
          : date.getHours() % 12 !== 0
          ? date.getHours() % 12
          : 12
      }:${
        date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes()
      }`;
    } else {
      return `${date.getFullYear()}-${
        date.getMonth() + 1 <= 9
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1
      }-${date.getDate() <= 9 ? "0" + date.getDate() : date.getDate()}`;
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("chatRoomId") === props.item.chatRoomId.toString()
    ) {
      localStorage.removeItem("chatRoomId");
      props.setShowChatSpace(true);
      props.setChatItem(props.item);
    }
  }, [props]);

  return (
    <li>
      <button
        onClick={() => {
          props.setShowChatSpace(true);
          props.setChatItem(props.item);
        }}
        className={`w-full flex justify-between p-2 text-base font-normal rounded-lg border border-2 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 group ${
          props.chatItem.chatRoomId === props.item.chatRoomId
            ? "bg-gray-200 border-primary-400"
            : "border-white dark:border-gray-800"
        }`}
      >
        <div className="flex flex-row">
          <img
            className="mr-3 w-12 h-12 rounded-full"
            src={
              user.role === "ROLE_DESIGNER"
                ? props.item.clientImage
                : props.item.designerImage
            }
            alt="Profile_Image"
          />
          <div className="flex flex-col text-left">
            <span className="text-lg text-black dark:text-white">
              {user.role === "ROLE_DESIGNER"
                ? props.item.clientName
                : props.item.designerName}
            </span>
            <span className="text-sm text-gray-500 dark:text-white">
              {props.item.lastMessage}
            </span>
          </div>
        </div>
        <div className="flex flex-col text-left w-24">
          <span className="text-sm ml-auto text-gray-600 dark:text-white">
            {convertDate(props.item.updatedAt)}
          </span>
        </div>
      </button>
    </li>
  );
}

export default ChatListItem;
