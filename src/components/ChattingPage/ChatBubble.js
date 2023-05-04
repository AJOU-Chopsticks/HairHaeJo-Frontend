import React from "react";
import { DEFAULT_PROFILE_IMAGE } from "../../global/Constants";

const ChatBubble = ({ message, isMyMessage }) => {
  return (
    <div
      className={`flex my-1 ${isMyMessage ? "flex-row-reverse" : "flex-row"}`}
    >
      {!isMyMessage && (
        <img
          className="mr-2 w-12 h-12"
          src={DEFAULT_PROFILE_IMAGE}
          alt="Profile_Image"
        />
      )}
      <div
        className={`${
          isMyMessage ? "bg-primary-500 text-white" : "bg-gray-200"
        } p-2 rounded-lg max-w-xs w-64`}
      >
        <div className={`relative p-1 break-words`}>
          {/* <span className="absolute top-0 -mt-3">
          {isMyMessage ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 110-16 8 8 0 010 16zm0-2a6 6 0 100-12 6 6 0 000 12zM9 9a1 1 0 011-1h1a1 1 0 010 2H10a1 1 0 01-1-1zm1-3a1 1 0 110 2 1 1 0 010-2zm-2 0a1 1 0 110 2 1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-gray-200"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 110-16 8 8 0 010 16zm-7-9a1 1 0 011-1h1a1 1 0 010 2H4a1 1 0 01-1-1zm13-2a1 1 0 011 1v1a1 1 0 01-2 0V8a1 1 0 011-1zM6.707 6.293a1 1 0 111.414-1.414l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L8.586 9H2a1 1 0 110-2h6.586l-1.879-1.879z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span> */}
          <span>{message}</span>
        </div>
      </div>
      <div
        className={`mt-auto mx-1 text-sm ${
          isMyMessage ? "ml-auto" : "mr-auto"
        }`}
      >
        <span>3시 10분</span>
      </div>
    </div>
  );
};

export default ChatBubble;
