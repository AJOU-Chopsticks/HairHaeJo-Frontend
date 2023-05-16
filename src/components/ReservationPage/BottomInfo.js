import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../global/Constants";
import { useParams } from "react-router-dom";

function BottomInfo(props) {
  const { designerId } = useParams();
  const [popup, setPopup] = useState();

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
        console.log(response);
        if (response.data.success) {
          const popup = window.open(
            response.data.data.next_redirect_pc_url,
            "카카오페이 결제",
            `width=${width},height=${height},left=${left},top=${top}`
          );
          setPopup(popup);
        } else alert("카카오페이 결제 시도에 실패했습니다.");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message) alert(err.response.data.message);
        else alert("카카오페이 결제 시도에 실패했습니다.");
      });
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    const searchParams = new URL(currentUrl).searchParams;
    const pg_token = searchParams.get("pg_token");
    if (pg_token) {
      window.opener.postMessage({ pg_token }, window.location.origin);
    }
  }, []);

  useEffect(() => {
    if (!popup) {
      return;
    }

    const kakaoPayListener = (e) => {
      // 동일한 Origin 의 이벤트만 처리하도록 제한
      // if (e.origin !== window.location.origin) {
      //   return;
      // }
      console.log(e.data);
      const { pg_token } = e.data;
      if (pg_token) {
        console.log(`The popup URL has URL code param = ${pg_token}`);
      }
      popup?.close();
      setPopup(null);
    };

    window.addEventListener("message", kakaoPayListener, false);

    return () => {
      window.removeEventListener("message", kakaoPayListener);
      popup?.close();
      setPopup(null);
    };
  }, [popup]);

  // useEffect(() => {
  //   if (!popup) {
  //     return;
  //   }

  //   const timer = setInterval(() => {
  //     if (!popup) {
  //       timer && clearInterval(timer);
  //       return;
  //     }

  //     const currentUrl = popup.location.href;
  //     if (!currentUrl) return;

  //     const searchParams = new URL(currentUrl).searchParams;
  //     const pg_token = searchParams.get("pg_token");
  //     if (pg_token) {
  //       popup.close();
  //       console.log(`pg_token = ${pg_token}`);
  //     }
  //   }, 500);
  // }, [popup]);

  return (
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
          예약 하기
        </button>
      </div>
    </div>
  );
}

export default BottomInfo;
