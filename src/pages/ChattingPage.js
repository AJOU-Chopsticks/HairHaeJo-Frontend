import React from "react";
import ChatList from "../components/ChattingPage/ChatList";
import ChatSpace from "../components/ChattingPage/ChatSpace";

function ChattingPage() {
  return (
    <div className="mx-auto pt-16 min-h-screen">
      <ChatList />
      <ChatSpace />
    </div>
  );
}

export default ChattingPage;
