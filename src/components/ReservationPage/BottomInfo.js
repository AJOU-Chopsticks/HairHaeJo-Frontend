import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../global/Constants";
import { useParams } from "react-router-dom";

function BottomInfo(props) {
  const { designerId } = useParams();
  const [popup, setPopup] = useState();
  const [initial_pg_token] = useState(localStorage.getItem("pg_token"));
  const [kakaoPay, setKakaoPay] = useState({ tid: "", pg_token: "" });
  const [ready, setReady] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  const clickHandler = () => {
    if (props.step < 3) {
      props.setStep(props.step + 1);
      return;
    }

    const selected = new Date(props.when.date);
    const year = selected.getFullYear();
    const month =
      selected.getMonth() + 1 > 9
        ? selected.getMonth() + 1
        : "0" + (selected.getMonth() + 1);
    const date =
      selected.getDate() > 9 ? selected.getDate() : "0" + selected.getDate();

    const width = 600;
    const height = 800;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    let data = {
      designer_id: designerId.toString(),
      start_time: `${year}-${month}-${date}T${props.when.time.substr(
        0,
        2
      )}:${props.when.time.substr(3, 2)}:00`,
      end_time: `${year}-${month}-${date}T${
        props.when.time.substr(3, 2) === "00"
          ? props.when.time.substr(0, 2)
          : parseInt(props.when.time.substr(0, 2)) + 1
      }:${props.when.time.substr(3, 2) === "00" ? "30" : "00"}:00`,
      menu_id: props.menu.menuId,
    };
    const formData = new FormData();
    formData.append("jsonList", JSON.stringify(data));

    axios
      .post(API + "/payment/ready", formData, {
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
        } else alert("카카오페이 결제 시도에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("카카오페이 결제 시도에 실패했습니다.");
      });
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

    axios
      .get(
        API +
          `/payment/success?pg_token=${kakaoPay.pg_token}&tid=${kakaoPay.tid}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          localStorage.removeItem("pg_token");
          props.setStep(props.step + 1);
          setPaymentDone(true);
        } else alert("카카오페이 결제에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) console.log(err.response.data.message);
        else console.log("카카오페이 결제에 실패했습니다.");
      });
  }, [ready, kakaoPay, paymentDone, props]);

  return (
    <>
      {props.step < 4 && (
        <div className="fixed left-0 bottom-16 md:bottom-0 w-full h-20 bg-primary-100">
          <div className="flex flex-row justify-around md:justify-center mt-3">
            <div className="flex flex-col justify-between text-left text-center">
              <span className="text-xl text-black font-bold dark:text-white">
                {props.menu.menuName || "메뉴"}
              </span>
              <span className="text-lg text-black dark:text-white">
                {(props.menu.menuPrice || "0") + "원"}
              </span>
            </div>
            <button
              className={`w-60 md:w-96 md:ml-56 text-white font-medium rounded-lg text-md px-4 md:px-5 py-2 md:py-2.5 mr-2 focus:outline-none
          ${
            (props.step === 1 && props.menu.menuName) ||
            (props.step === 2 && props.when.date && props.when.time) ||
            (props.step === 3 && props.agree)
              ? "bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
              : "bg-gray-300 dark:bg-gray-300"
          }`}
              onClick={clickHandler}
              disabled={
                !(
                  (props.step === 1 && props.menu.menuName) ||
                  (props.step === 2 && props.when.date && props.when.time) ||
                  (props.step === 3 && props.agree)
                )
              }
            >
              {props.step === 1
                ? "메뉴 선택"
                : props.step === 2
                ? "예약 하기"
                : "결제 하기"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BottomInfo;
