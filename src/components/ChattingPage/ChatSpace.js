import React, { useEffect, useRef, useState } from "react";
import ChatBubble from "./ChatBubble";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import { API } from "../../global/Constants";
import { useSelector } from "react-redux";
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import NoImage from "../../images/noImage.jpg";

function ChatSpace(props) {
  const user = useSelector((state) => state.user);
  const chatBubbleSpaceRef = useRef(null);
  const client = useRef({});
  const [chatHistory, setChatHistory] = useState([]);
  const [chatText, setChatText] = useState("");
  const [chatImage, setChatImage] = useState(NoImage);

  useEffect(() => {
    const chatBubbleSpace = chatBubbleSpaceRef.current;
    chatBubbleSpace.scrollTop = chatBubbleSpace.scrollHeight;
  }, [chatHistory]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (!client.current.connected) {
      return;
    }

    if (chatImage !== NoImage) {
      // 이미지 전송
      const formData = new FormData();
      formData.append(
        "chatImage",
        document.getElementById("Input_Image").files[0] || null
      );

      axios
        .post(API + "/chat/image", formData, {
          headers: {
            "Contest-Type": "multipart/form-data",
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.success) {
            client.current.publish({
              destination: "/pub/chat/message",
              body: JSON.stringify({
                type: "TYPE_IMAGE",
                roomId: props.chatItem.chatRoomId,
                writerId:
                  user.role === "ROLE_DESIGNER"
                    ? props.chatItem.designerId
                    : props.chatItem.clientId,
                image: response.data.data,
              }),
            });

            setChatImage(NoImage);
          } else alert("이미지 업로드에 실패했습니다.");
        })
        .catch((err) => {
          if (err.response.data.message) alert(err.response.data.message);
          else alert("이미지 업로드에 실패했습니다.");
        });
    } else {
      // 텍스트 전송
      if (chatText === "") return alert("메시지를 입력해주세요.");

      client.current.publish({
        destination: "/pub/chat/message",
        body: JSON.stringify({
          type: "TYPE_TEXT",
          roomId: props.chatItem.chatRoomId,
          writerId:
            user.role === "ROLE_DESIGNER"
              ? props.chatItem.designerId
              : props.chatItem.clientId,
          text: chatText,
        }),
      });

      setChatText("");
    }
  };

  const imageHandler = () => {
    let imageFile = document.getElementById("Input_Image").files[0];
    if (imageFile !== undefined) {
      setChatImage(URL.createObjectURL(imageFile));
    } else {
      setChatImage(NoImage);
    }
  };

  useEffect(() => {
    if (!props.chatItem.chatRoomId) return;

    axios
      .get(API + `/chat/history?roomId=${props.chatItem.chatRoomId}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setChatHistory(response.data.data);

          client.current = Stomp.over(() => {
            const sock = new SockJS(API + "/ws/chat");
            return sock;
          });
          client.current.connect(
            {
              Authorization: localStorage.getItem("token"),
            },
            () => {
              client.current.subscribe(
                `/sub/chat/${props.chatItem.chatRoomId}`,
                (message) => {
                  setChatHistory((chatHistory) => [
                    ...chatHistory,
                    JSON.parse(message.body),
                  ]);
                },
                {
                  Authorization: localStorage.getItem("token"),
                }
              );
            }
          );
        } else alert("채팅 내역 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("채팅 내역 조회에 실패했습니다.");
      });

    return () => {
      client.current.deactivate();
    };
  }, [props.chatItem]);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 z-50 md:z-20 md:pt-16 w-full pl-0 md:pl-64 lg:pl-96 h-screen transition-transform translate-x-full ${
          props.showChatSpace && "min-[0px]:translate-x-0"
        }`}
      >
        <div className="flex flex-col justify-between gap-3 pb-5 px-1 h-full bg-gray-50 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-row justify-between pt-3 pb-2 h-16 text-xl border-b-2 border-solid border-gray-300">
            <button
              className="flex flex-row"
              onClick={() => {
                props.setShowChatSpace(false);
                props.setChatItem("");
              }}
            >
              <IoIosArrowBack className="mr-1 my-auto text-2xl" />
              <span className="my-auto">
                {user.role === "ROLE_DESIGNER"
                  ? props.chatItem.clientName
                  : props.chatItem.designerName}
              </span>
            </button>
            <button>
              <BsThreeDotsVertical className="mr-2" />
            </button>
          </div>

          <div
            className="flex flex-col h-full overflow-y-auto px-2"
            ref={chatBubbleSpaceRef}
          >
            {chatHistory.map((item) => (
              <ChatBubble
                key={item.createdAt}
                message={item.text}
                image={item.image}
                isMyMessage={item.writerName === user.name}
                createdAt={item.createdAt}
                info={props.chatItem}
              />
            ))}
          </div>

          {chatImage !== NoImage && (
            <div className="rounded-lg bg-primary-100">
              <img
                className="h-auto w-48 mx-auto rounded-lg shadow-xl dark:shadow-gray-800"
                src={chatImage}
                alt="Image_Description"
              />
            </div>
          )}
          <form onSubmit={sendMessage}>
            <div className="flex items-center px-3 py-2 rounded-lg bg-primary-200 dark:bg-gray-700">
              <label
                htmlFor="Input_Image"
                className={`inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 ${
                  chatImage !== NoImage && "hidden"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className="w-7 h-7"
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
                <input
                  id="Input_Image"
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={imageHandler}
                />
              </label>
              <button
                type="button"
                onClick={() => setChatImage(NoImage)}
                className={`inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 ${
                  chatImage === NoImage && "hidden"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <textarea
                rows="1"
                className="block mx-2 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="메시지를 입력해주세요.."
                value={
                  chatImage !== NoImage
                    ? "선택한 이미지를 전송할까요?"
                    : chatText
                }
                onChange={(e) => setChatText(e.target.value)}
                disabled={chatImage !== NoImage}
              ></textarea>
              <button
                type="submit"
                className="inline-flex justify-center p-2 text-primary-600 rounded-full cursor-pointer hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-600"
              >
                <svg
                  aria-hidden="true"
                  className="w-7 h-7 rotate-90"
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
