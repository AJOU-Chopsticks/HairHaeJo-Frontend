import React, { useEffect, useState } from "react";
import NoImage from "../../images/noImage.jpg";
import KakaoMap from "../../global/KakaoMap";
import { API } from "../../global/Constants";
import axios from "axios";
import Loading from "../Layout/Loading";
import { FiPlus } from "react-icons/fi";

function AdvertisementForm(props) {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(NoImage);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState();
  const [initial_pg_token] = useState(localStorage.getItem("pg_token"));
  const [kakaoPay, setKakaoPay] = useState({ tid: "", pg_token: "" });
  const [ready, setReady] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  const titleHandler = (event) => setTitle(event.target.value);
  const textHandler = (event) => setText(event.target.value);
  const startDateHandler = (event) => {
    if (endDate && new Date(endDate) < new Date(event.target.value))
      setEndDate("");
    setStartDate(event.target.value);
  };
  const endDateHandler = (event) => setEndDate(event.target.value);
  const imageHandler = (target) => {
    let imageFile = document.getElementById(target).files[0];
    if (imageFile !== undefined) {
      setImage(URL.createObjectURL(imageFile));
    } else {
      setImage(NoImage);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (title === "") return alert("제목을 입력해주세요.");
    if (text === "") return alert("내용을 입력해주세요.");
    if (image === NoImage) return alert("광고 이미지를 등록해주세요.");
    if (startDate === "") return alert("광고 시작 날짜를 선택해주세요.");
    if (endDate === "") return alert("광고 종료 날짜를 선택해주세요.");
    if (document.getElementById("Kakao_Address").value === "")
      return alert("지역을 선택해주세요.");
    if (price === 0) return alert("가격이 잘못 되었습니다.");

    setLoading(true);

    const width = 600;
    const height = 800;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    let info = {
      title: title,
      text: text,
      price: price,
      location: document.getElementById("Kakao_Address").value,
      startDate: startDate,
      endDate: endDate,
    };

    const formData = new FormData();
    formData.append("jsonList", JSON.stringify(info));

    let Ad_Image = document.getElementById("Ad_Image");
    formData.append("image", Ad_Image.files[0] || null);

    axios
      .post(API + "/ad/ready", formData, {
        headers: {
          "Contest-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          const popup = window.open(
            response.data.data.next_redirect_pc_url,
            "카카오페이 결제",
            `width=${width},height=${height},left=${left},top=${top}`
          );
          setPopup(popup);
          setKakaoPay({ ...kakaoPay, tid: response.data.data.tid });
        } else alert("광고 등록에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("광고 등록에 실패했습니다.");
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const diff = start.getTime() - end.getTime();

      setPrice(Math.abs(diff / (1000 * 60 * 60 * 24)) * 1000);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if (!popup) {
      return;
    }

    const timer = setInterval(() => {
      if (!popup) {
        timer && clearInterval(timer);
        return;
      }
      const pg_token = localStorage.getItem("pg_token");

      if (pg_token !== initial_pg_token) {
        timer && clearInterval(timer);
        setKakaoPay({ ...kakaoPay, pg_token: pg_token });
        setReady(true);
        return;
      }
    }, 500);
  }, [popup, initial_pg_token, kakaoPay]);

  useEffect(() => {
    if (!ready || paymentDone) {
      return;
    }

    axios
      .get(
        API + `/ad/success?pg_token=${kakaoPay.pg_token}&tid=${kakaoPay.tid}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          localStorage.removeItem("pg_token");
          setPaymentDone(true);
          setTitle("");
          setText("");
          setImage(NoImage);
          setStartDate("");
          setEndDate("");
          setPrice(0);
          props.setReload(!props.reload);
        } else alert("카카오페이 결제에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("카카오페이 결제에 실패했습니다.");
      });
  }, [ready, kakaoPay, paymentDone, props]);

  return (
    <>
      <button
        type="button"
        className="animate-bounce flex items-center justify-center fixed bottom-24 right-6 md:right-12 group ml-auto text-white bg-primary-700 rounded-full w-14 h-14 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800"
        onClick={() => {
          document.body.classList.add("overflow-hidden");
          setShowModal(true);
        }}
      >
        <FiPlus className="w-8 h-8" />
      </button>
      {showModal && (
        <div
          className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 ${
            showModal ? "active" : ""
          }`}
        >
          <div
            className={`relative w-full max-w-xl min-h-full mx-auto md:mt-10 mb-24 ${
              paymentDone && "flex flex-col justify-center"
            }`}
          >
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => {
                  document.body.classList.remove("overflow-hidden");
                  setPaymentDone(false);
                  setShowModal(false);
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
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
              {paymentDone ? (
                <div className="px-6 py-6 lg:px-8">
                  <div className="justify-center items-center w-full">
                    <div className="relative p-4 text-center mt-12">
                      <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-8">
                        <svg
                          aria-hidden="true"
                          className="w-16 h-16 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p className="mb-10 text-lg text-gray-900 dark:text-white">
                        정상적으로 광고 요청이 완료되었습니다.
                        <br />
                        관리자의 승인을 기다려주세요.
                      </p>
                      <div className="flex justify-center mt-4 space-x-8 md:mt-6">
                        <button
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800"
                          onClick={() => {
                            document.body.classList.remove("overflow-hidden");
                            setPaymentDone(false);
                            setShowModal(false);
                          }}
                        >
                          닫기
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    광고 등록
                  </h3>
                  <form className="space-y-6" onSubmit={submitHandler}>
                    <div>
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        제목 <span className="text-red-600 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="제목"
                        value={title}
                        onChange={titleHandler}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="text"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        내용 <span className="text-red-600 font-bold">*</span>
                      </label>
                      <textarea
                        id="text"
                        placeholder="내용"
                        rows={4}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        value={text}
                        onChange={textHandler}
                      />
                    </div>
                    <div>
                      <label className="block w-full">
                        <label
                          htmlFor="Ad_Image"
                          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          광고 이미지{" "}
                          <span className="text-red-600 font-bold">*</span>
                        </label>
                        <input
                          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          id="Ad_Image"
                          type="file"
                          accept="image/*"
                          onChange={() => imageHandler("Ad_Image")}
                        />
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                          이미지 파일을 선택해주세요.
                        </p>
                      </label>
                      <div className="shrink-0 mt-2">
                        <img
                          className="w-full object-cover rounded-lg"
                          src={image}
                          alt="Ad_Image"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justtify-between gap-4">
                      <div className="w-full">
                        <label
                          htmlFor="startDate"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          시작 날짜{" "}
                          <span className="text-red-600 font-bold">*</span>
                        </label>
                        <input
                          type="date"
                          id="startDate"
                          min={new Date().toISOString().split("T")[0]}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          value={startDate}
                          onChange={startDateHandler}
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="endDate"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          종료 날짜{" "}
                          <span className="text-red-600 font-bold">*</span>
                        </label>
                        <input
                          type="date"
                          id="endDate"
                          min={
                            startDate
                              ? new Date(startDate).toISOString().split("T")[0]
                              : new Date().toISOString().split("T")[0]
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          value={endDate}
                          onChange={endDateHandler}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        지역 <span className="text-red-600 font-bold">*</span>
                      </label>
                      <KakaoMap />
                    </div>
                    {loading ? (
                      <Loading />
                    ) : (
                      <button
                        type="submit"
                        className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        {price + "원 결제하기"}
                      </button>
                    )}
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdvertisementForm;
