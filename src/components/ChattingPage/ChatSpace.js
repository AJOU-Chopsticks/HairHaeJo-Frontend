import React, { useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

function ChatSpace(props) {
  const chatBubbleSpaceRef = useRef(null);

  useEffect(() => {
    const chatBubbleSpace = chatBubbleSpaceRef.current;
    chatBubbleSpace.scrollTop = chatBubbleSpace.scrollHeight;
  }, []);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 z-40 pt-16 md:pl-96 w-full h-screen transition-transform translate-x-full ${
          props.showChatSpace && "md:translate-x-0"
        }`}
      >
        <div className="flex flex-col justify-between gap-3 pb-5 px-1 h-full bg-gray-50 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-row justify-between text-xl h-12 border-b-2 border-solid border-gray-300">
            <button
              className="flex flex-row"
              onClick={() => {
                props.setShowChatSpace(false);
                props.setChatItem("");
              }}
            >
              <IoIosArrowBack className="mr-1 my-auto text-2xl" />
              <span className="my-auto">디자이너1</span>
            </button>
            <button>
              <BsThreeDotsVertical className="mr-2" />
            </button>
          </div>

          <div
            className="flex flex-col h-full overflow-y-auto px-2"
            ref={chatBubbleSpaceRef}
          >
            <ChatBubble message={"테스트1"} isMyMessage={true} />
            <ChatBubble
              message={"테스트2asdawwdawdawdwawadwadawdwdawdwadawdawdawdwadw"}
              isMyMessage={false}
            />
            <ChatBubble message={"테스트3"} isMyMessage={true} />
            <ChatBubble message={"테스트4"} isMyMessage={false} />
            <ChatBubble message={"테스트5"} isMyMessage={true} />
            <ChatBubble message={"테스트6"} isMyMessage={false} />
            <ChatBubble message={"테스트7"} isMyMessage={true} />
            <ChatBubble message={"테스트8"} isMyMessage={false} />
          </div>
          <form>
            <div className="flex items-center px-3 py-2 rounded-lg bg-primary-200 dark:bg-gray-700">
              <button
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <textarea
                rows="1"
                className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="메시지를 입력해주세요.."
              ></textarea>
              <button
                type="submit"
                className="inline-flex justify-center p-2 text-primary-600 rounded-full cursor-pointer hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-600"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatSpace;
