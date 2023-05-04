import React from "react";

function ChatListItem(props) {
  return (
    <li>
      <button
        onClick={() => {
          props.setShowChatSpace(true);
          props.setChatItem(props.item.chatRoomId);
        }}
        className={`w-full flex justify-between p-2 text-base font-normal rounded-lg border border-2 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 group ${
          props.chatItem === props.item.chatRoomId
            ? "bg-gray-200 border-primary-400"
            : "border-white dark:border-gray-800"
        }`}
      >
        <div className="flex flex-row">
          <img
            className="mr-3 w-12 h-12"
            src={props.item.designerImage}
            alt="Profile_Image"
          />
          <div className="flex flex-col text-left">
            <span className="text-lg text-black dark:text-white">
              {props.item.clientName}
            </span>
            <span className="text-sm text-gray-500 dark:text-white">
              {props.item.lastMessage}
            </span>
          </div>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-sm text-gray-600 dark:text-white">
            {props.item.updatedAt}
          </span>
        </div>
      </button>
    </li>
  );
}

export default ChatListItem;
