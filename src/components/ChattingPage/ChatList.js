import React, { useEffect, useState } from "react";
import Appointment from "../../images/appointment.png";
import { API } from "../../global/Constants";
import ChatListItem from "./ChatListItem";
import axios from "axios";

function ChatList(props) {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    axios
      .get(API + "/chat", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setChatList(response.data.data);
        }
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("상담 내역 조회에 실패했습니다.");
      });
  });

  return (
    <div>
      <aside
        id="Chatting_List"
        className="fixed top-16 left-0 z-30 w-full md:w-64 lg:w-96 h-screen transition-transform -translate-x-full translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 pb-20 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 noScrollBar">
          <div className="mb-3 flex items-center justify-center outline-none text-xl">
            <img className="mr-2 w-9" src={Appointment} alt="Chatting" />
            <span className="text-gray-900 dark:text-white">상담</span>
          </div>
          {chatList.length > 0 ? (
            <ul className="space-y-2 border-y-2 border-solid border-gray-100 py-3 mb-16">
              {chatList.map((item) => {
                return (
                  <ChatListItem
                    chatItem={props.chatItem}
                    setChatItem={props.setChatItem}
                    item={item}
                    key={item.chatRoomId}
                    setShowChatSpace={props.setShowChatSpace}
                  />
                );
              })}
            </ul>
          ) : (
            <div className="text-center mt-16">
              생성된 채팅방 목록이 없습니다.
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}

export default ChatList;
