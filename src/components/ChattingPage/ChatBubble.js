import React from "react";
import { useSelector } from "react-redux";

const ChatBubble = ({ message, image, isMyMessage, createdAt, info }) => {
  const user = useSelector((state) => state.user);

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

  return (
    <div
      className={`flex my-1 ${isMyMessage ? "flex-row-reverse" : "flex-row"}`}
    >
      {!isMyMessage && (
        <img
          className="mr-2 w-12 h-12 rounded-full"
          src={
            user.role === "ROLE_DESIGNER"
              ? info.clientImage
              : info.designerImage
          }
          alt="Profile_Image"
        />
      )}
      {message && (
        <div
          className={`${
            isMyMessage ? "bg-primary-500 text-white" : "bg-gray-200"
          } p-2 rounded-lg max-w-xs w-32 sm:w-48 lg:w-64`}
        >
          <div className={`relative p-1 break-words`}>
            <span className="text-sm">{message}</span>
          </div>
        </div>
      )}
      {image && (
        <div className={"rounded-lg max-w-xs w-32 sm:w-48 lg:w-64"}>
          <img src={image} alt="chatImage" className="rounded-lg w-full" />
        </div>
      )}

      <div
        className={`mt-auto mx-1 text-xs ${
          isMyMessage ? "ml-auto" : "mr-auto"
        }`}
      >
        <span>{convertTime(createdAt)}</span>
      </div>
    </div>
  );
};

export default ChatBubble;
