import React, { useEffect, useState } from "react";
import { API } from "../../global/Constants";
import axios from "axios";
import Loading from "../Layout/Loading";

function AdvertisementExtension(props) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState();
  const [initial_pg_token] = useState(localStorage.getItem("pg_token"));
  const [kakaoPay, setKakaoPay] = useState({ tid: "", pg_token: "" });
  const [ready, setReady] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  const startDateHandler = (event) => {
    if (endDate && new Date(endDate) < new Date(event.target.value))
      setEndDate("");
    setStartDate(event.target.value);
  };
  const endDateHandler = (event) => setEndDate(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    setLoading(true);

    const width = 600;
    const height = 800;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    axios
      .post(
        API + "/ad/extension",
        {
          advertiseId: props.data.advertiseId,
          extensionDays: price / 1000,
          price: price,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          const popup = window.open(
            response.data.data.next_redirect_pc_url,
            "카카오페이 결제",
            `width=${width},height=${height},left=${left},top=${top}`
          );
          setPopup(popup);
          setKakaoPay({ ...kakaoPay, tid: response.data.data.tid });
        } else alert("광고 연장 요청에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("광고 연장 요청에 실패했습니다.");
      })
      .then(() => setLoading(false));
  };

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
    if (!props.showModal && !paymentDone) return;

    axios
      .get(
        API +
          `/ad/extension/success?pg_token=${kakaoPay.pg_token}&tid=${kakaoPay.tid}`,
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

  useEffect(() => {
    if (endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const diff = start.getTime() - end.getTime();

      setPrice(Math.abs(diff / (1000 * 60 * 60 * 24)) * 1000 + 1000);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    let startDate = new Date(props.data.endDate);
    startDate.setDate(startDate.getDate() + 1);
    setStartDate(startDate);
  }, [props.data.endDate]);

  return (
    <>
      {props.showModal && (
        <div
          className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 ${
            props.showModal ? "active" : ""
          }`}
        >
          <div className="relative w-full max-w-xl min-h-full mx-auto flex flex-col justify-center">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => {
                  document.body.classList.remove("overflow-hidden");
                  props.setShowModal(false);
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
                        정상적으로 광고 연장이 완료되었습니다.
                      </p>
                      <div className="flex justify-center mt-4 space-x-8 md:mt-6">
                        <button
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800"
                          onClick={() => {
                            document.body.classList.remove("overflow-hidden");
                            setPaymentDone(false);
                            props.setShowModal(false);
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
                    광고 연장
                  </h3>
                  <form className="space-y-6" onSubmit={submitHandler}>
                    <div className="flex flex-row justtify-between gap-4">
                      <div className="w-full">
                        <label
                          htmlFor="startDate"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          시작 날짜
                        </label>
                        <input
                          type="date"
                          id="startDate"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          value={
                            new Date(startDate).toISOString().split("T")[0]
                          }
                          onChange={startDateHandler}
                          disabled={true}
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
                          min={new Date(startDate).toISOString().split("T")[0]}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          value={endDate}
                          onChange={endDateHandler}
                        />
                      </div>
                    </div>
                    {loading ? (
                      <Loading />
                    ) : (
                      <button
                        type="submit"
                        className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        {"추가 " + price + "원 결제하기"}
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

export default AdvertisementExtension;
