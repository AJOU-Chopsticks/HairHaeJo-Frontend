import React, { useState } from "react";
import ChatList from "../components/ChattingPage/ChatList";
import ChatSpace from "../components/ChattingPage/ChatSpace";

function ChattingPage() {
  const [chatItem, setChatItem] = useState("");
  const [showChatSpace, setShowChatSpace] = useState(false);

  return (
    <div className="mx-auto pt-16 min-h-screen">
      <ChatList
        setShowChatSpace={setShowChatSpace}
        chatItem={chatItem}
        setChatItem={setChatItem}
      />
      <ChatSpace
        showChatSpace={showChatSpace}
        setShowChatSpace={setShowChatSpace}
        setChatItem={setChatItem}
      />
    </div>
  );
}

export default ChattingPage;
