import React, { useState } from "react";
import Appointment from "../../images/appointment.png";
import { DEFAULT_PROFILE_IMAGE } from "../../global/Constants";
import ChatListItem from "./ChatListItem";

const data = [
  {
    id: "1",
    profileImage: DEFAULT_PROFILE_IMAGE,
    name: "이름1",
    date: "2023-05-01",
    lastChat: "안녕하세요~ 예약 가능할까요?...",
  },
  {
    id: "2",
    profileImage: DEFAULT_PROFILE_IMAGE,
    name: "이름2",
    date: "2023-05-01",
    lastChat: "머리 가능할까요?",
  },
  {
    id: "3",
    profileImage: DEFAULT_PROFILE_IMAGE,
    name: "이름3",
    date: "2023-05-01",
    lastChat: "감사합니다!!!",
  },
  {
    id: "4",
    profileImage: DEFAULT_PROFILE_IMAGE,
    name: "이름4",
    date: "2023-05-01",
    lastChat: "좋은 하루 보내세요",
  },
  {
    id: "5",
    profileImage: DEFAULT_PROFILE_IMAGE,
    name: "이름5",
    date: "2023-05-01",
    lastChat: "다음에 봐요 ㅎㅎ",
  },
];

function ChatList() {
  const [chatItem, setChatItem] = useState("");

  return (
    <div>
      <aside
        id="Chatting_List"
        className="fixed top-16 left-0 z-50 w-96 h-screen transition-transform -translate-x-full md:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="mb-3 flex items-center justify-center outline-none text-xl">
            <img className="mr-2 w-9" src={Appointment} alt="Chatting" />
            <span className="text-gray-900 dark:text-white">상담</span>
          </div>
          <ul className="space-y-2 border-y-2 border-solid border-gray-100 py-3 mb-16">
            {data.map((item) => {
              return (
                <ChatListItem
                  chatItem={chatItem}
                  setChatItem={setChatItem}
                  item={item}
                  key={item.id}
                />
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default ChatList;
