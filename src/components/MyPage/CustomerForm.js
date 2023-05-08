import React, { useEffect, useState } from "react";
import Loading from "../Layout/Loading";
import KakaoMap from "../../global/KakaoMap";
import axios from "axios";
import { API } from "../../global/Constants";

function CustomerForm(props) {
  const [loading, setLoading] = useState(false);

  const customerSubmitHandler = (event) => {
    event.preventDefault();

    let skinType = document.querySelector(
      "input[type=radio][name=skinType]:checked"
    );
    let hairType = document.querySelector(
      "input[type=radio][name=hairType]:checked"
    );
    let hairThickness = document.querySelector(
      "input[type=radio][name=hairThickness]:checked"
    );
    let dyeingHistory = document.querySelector(
      "input[type=radio][name=dyeingHistory]:checked"
    );
    let decolorizationHistory = document.querySelector(
      "input[type=radio][name=decolorizationHistory]:checked"
    );
    let abstractLocation = document.getElementById("Kakao_Address").value;

    if (skinType === null) return alert("두피형을 선택해주세요.");
    if (hairType === null) return alert("헤어 스타일을 선택해주세요.");
    if (hairThickness === null) return alert("모발 두께을 선택해주세요.");
    if (dyeingHistory === null) return alert("염색 시술 이력을 선택해주세요.");
    if (decolorizationHistory === null)
      return alert("탈색 시술 이력을 선택해주세요.");
    if (abstractLocation === "") return alert("관심 지역을 선택해주세요.");

    setLoading(true);

    let body = {
      skinType: Number(skinType.value),
      hairType: Number(hairType.value),
      hairThickness: Number(hairThickness.value),
      dyeingHistory: Number(dyeingHistory.value),
      decolorizationHistory: Number(decolorizationHistory.value),
      abstractLocation: abstractLocation,
    };

    axios
      .put(API + "/user/profile", body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          alert("프로필 변경 완료!");
          props.setReload(!props.reload);
        } else alert("프로필 변경에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("프로필 변경에 실패했습니다.");
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    if (!document.getElementById("Kakao_Address")) return;
    if (document.getElementById("Kakao_Address").value !== "") return;
    document.getElementById("Kakao_Address").value =
      props.profileInfo.abstractLocation;
  });

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={customerSubmitHandler}>
      <div>
        <label
          htmlFor="skinType"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          두피형 <span className="text-red-600 font-bold">*</span>
        </label>
        <ul className="flex flex-row justify-between w-full gap-2">
          <li className="w-full">
            <input
              type="radio"
              id="skinType_0"
              name="skinType"
              value="0"
              className="hidden peer"
              defaultChecked={props.profileInfo.skinType === 0}
            />
            <label
              htmlFor="skinType_0"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">건성</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="skinType_1"
              name="skinType"
              value="1"
              className="hidden peer"
              defaultChecked={props.profileInfo.skinType === 1}
            />
            <label
              htmlFor="skinType_1"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">중성</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="skinType_2"
              name="skinType"
              value="2"
              className="hidden peer"
              defaultChecked={props.profileInfo.skinType === 2}
            />
            <label
              htmlFor="skinType_2"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">지성</div>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <label
          htmlFor="hairtype"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          헤어 스타일 <span className="text-red-600 font-bold">*</span>
        </label>
        <ul className="flex flex-row justify-between w-full gap-2">
          <li className="w-full">
            <input
              type="radio"
              id="hairType_0"
              name="hairType"
              value="0"
              className="hidden peer"
              defaultChecked={props.profileInfo.hairType === 0}
            />
            <label
              htmlFor="hairType_0"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">곱슬</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="hairType_1"
              name="hairType"
              value="1"
              className="hidden peer"
              defaultChecked={props.profileInfo.hairType === 1}
            />
            <label
              htmlFor="hairType_1"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">반곱슬</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="hairType_2"
              name="hairType"
              value="2"
              className="hidden peer"
              defaultChecked={props.profileInfo.hairType === 2}
            />
            <label
              htmlFor="hairType_2"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">직모</div>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <label
          htmlFor="hairThickness"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          모발 두께 <span className="text-red-600 font-bold">*</span>
        </label>
        <ul className="flex flex-row justify-between w-full gap-2">
          <li className="w-full">
            <input
              type="radio"
              id="hairThickness_0"
              name="hairThickness"
              value="0"
              className="hidden peer"
              defaultChecked={props.profileInfo.hairThickness === 0}
            />
            <label
              htmlFor="hairThickness_0"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">얇음</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="hairThickness_1"
              name="hairThickness"
              value="1"
              className="hidden peer"
              defaultChecked={props.profileInfo.hairThickness === 1}
            />
            <label
              htmlFor="hairThickness_1"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">중간</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="hairThickness_2"
              name="hairThickness"
              value="2"
              className="hidden peer"
              defaultChecked={props.profileInfo.hairThickness === 2}
            />
            <label
              htmlFor="hairThickness_2"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">두꺼움</div>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <label
          htmlFor="dyeingHistory"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          염색 시술 이력 <span className="text-red-600 font-bold">*</span>
        </label>
        <ul className="flex flex-row justify-between w-full gap-2">
          <li className="w-full">
            <input
              type="radio"
              id="dyeinghistory_0"
              name="dyeingHistory"
              value="0"
              className="hidden peer"
              defaultChecked={props.profileInfo.dyeingHistory === 0}
            />
            <label
              htmlFor="dyeinghistory_0"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">0번</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="dyeinghistory_1"
              name="dyeingHistory"
              value="1"
              className="hidden peer"
              defaultChecked={props.profileInfo.dyeingHistory === 1}
            />
            <label
              htmlFor="dyeinghistory_1"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">1 ~ 2번</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="dyeinghistory_2"
              name="dyeingHistory"
              value="2"
              className="hidden peer"
              defaultChecked={props.profileInfo.dyeingHistory === 2}
            />
            <label
              htmlFor="dyeinghistory_2"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">3번 이상</div>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <label
          htmlFor="decolorizationHistory"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          탈색 시술 이력 <span className="text-red-600 font-bold">*</span>
        </label>
        <ul className="flex flex-row justify-between w-full gap-2">
          <li className="w-full">
            <input
              type="radio"
              id="decolorizationHistory_0"
              name="decolorizationHistory"
              value="0"
              className="hidden peer"
              defaultChecked={props.profileInfo.decolorizationHistory === 0}
            />
            <label
              htmlFor="decolorizationHistory_0"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">0번</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="decolorizationHistory_1"
              name="decolorizationHistory"
              value="1"
              className="hidden peer"
              defaultChecked={props.profileInfo.decolorizationHistory === 1}
            />
            <label
              htmlFor="decolorizationHistory_1"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">1 ~ 2번</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="decolorizationHistory_2"
              name="decolorizationHistory"
              value="2"
              className="hidden peer"
              defaultChecked={props.profileInfo.decolorizationHistory === 2}
            />
            <label
              htmlFor="decolorizationHistory_2"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">3번 이상</div>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          관심 지역 <span className="text-red-600 font-bold">*</span>
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
          변경하기
        </button>
      )}
    </form>
  );
}

export default CustomerForm;
