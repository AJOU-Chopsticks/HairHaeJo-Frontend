import React from "react";

function BottomInfo(props) {
  return (
    <div className="fixed left-0 bottom-16 md:bottom-0 w-full h-20 bg-primary-100">
      <div className="flex flex-row justify-around md:justify-center mt-3">
        <div className="flex flex-col justify-between text-left text-center">
          <span className="text-xl text-black font-bold dark:text-white">
            {props.menu.menuName || "메뉴 이름"}
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
          onClick={() => props.setStep(props.step + 1)}
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
