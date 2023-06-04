import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ChatBubble = ({ message, image, isMyMessage, createdAt, info, type }) => {
  const user = useSelector((state) => state.user);
  const navigation = useNavigate();

  const showProfile = () => {
    if (user.role === "ROLE_DESIGNER")
      navigation("/profile/user/" + info.clientId);
    else navigation("/profile/designer/" + info.designerId);
  };

  const convertTime = (updatedAt) => {
    let date = new Date(updatedAt);
    date.setHours(date.getHours() + 9);

    return `${date.getHours() < 12 ? "오전" : "오후"} ${
      (date.getHours() % 12 !== 0 ? date.getHours() % 12 : 12) <= 9
        ? "0" + (date.getHours() % 12 !== 0 ? date.getHours() % 12 : 12)
        : date.getHours() % 12 !== 0
        ? date.getHours() % 12
        : 12
    }:${date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes()}`;
  };

  if (type === "TYPE_INFO")
    return (
      <div className="flex p-2 my-2 text-sm text-primary-800 border border-primary-300 rounded-lg bg-primary-50 dark:bg-gray-800 dark:text-primary-400 dark:border-primary-800">
        <span className="mx-auto">{message}</span>
      </div>
    );
  else {
    return (
      <div
        className={`flex my-1 ${isMyMessage ? "flex-row-reverse" : "flex-row"}`}
      >
        {!isMyMessage && (
          <img
            className="mr-2 w-12 h-12 rounded-full hover:cursor-pointer"
            src={
              user.role === "ROLE_DESIGNER"
                ? info.clientImage
                : info.designerImage
            }
            alt="Profile_Image"
            onClick={showProfile}
          />
        )}
        {message && (
          <div
            className={`${
              isMyMessage
                ? "bg-primary-500 text-white"
                : "bg-gray-200 dark:text-gray-200 dark:bg-gray-600"
            } p-2 rounded-lg max-w-xs w-48 sm:w-64`}
          >
            <div className={`relative p-1 break-words`}>
              <span className="text-sm">{message}</span>
            </div>
          </div>
        )}
        {image && (
          <div className={"rounded-lg max-w-xs w-48 sm:w-64"}>
            <img src={image} alt="chatImage" className="rounded-lg w-full" />
          </div>
        )}
        <div
          className={`mt-auto mx-1 text-xs ${
            isMyMessage ? "ml-auto" : "mr-auto"
          }`}
        >
          <span className="dark:text-gray-400">{convertTime(createdAt)}</span>
        </div>
      </div>
    );
  }
};

export default ChatBubble;
