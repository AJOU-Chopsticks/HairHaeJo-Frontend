import React, { useState } from "react";
import SettingDesignerForm from "../SettingDesignerprofilePage/SettingDesignerForm";

function SettingCustomerForm() {
  const [type, setType] = useState(true);
  type === true ? <SettingCustomerForm /> : <SettingDesignerForm />;
  return (
    <form>
      <div className="w-2/5 ml-2">
        <label
          htmlFor="usertype"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          사용자 유형 <span className="text-red-600 font-bold">*</span>
        </label>
        <ul className="flex flex-row justify-between w-full gap-2">
          <li className="w-full">
            <input
              type="radio"
              id="customer"
              name="user"
              value="0"
              className="hidden peer"
              onClick={() => setType(true)}
            />
            <label
              htmlFor="customer"
              onClick={() => setType(true)}
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">고객</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="designer"
              name="user"
              value="1"
              className="hidden peer"
              onClick={() => setType(false)}
            />
            <label
              htmlFor="designer"
              onClick={() => setType(false)}
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">디자이너</div>
            </label>
          </li>
        </ul>
      </div>
      <br></br>
      <div className="w-2/5 ml-2">
        <label
          htmlFor="skinType"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          피부형 <span className="text-red-600 font-bold">*</span>
        </label>
        <ul className="flex flex-row justify-between w-full gap-2">
          <li className="w-full">
            <input
              type="radio"
              id="kun"
              name="skinType"
              value="0"
              className="hidden peer"
            />
            <label
              htmlFor="kun"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">건성</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="jung"
              name="skinType"
              value="1"
              className="hidden peer"
            />
            <label
              htmlFor="jung"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">중성</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="ji"
              name="skinType"
              value="2"
              className="hidden peer"
            />
            <label
              htmlFor="ji"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">지성</div>
            </label>
          </li>
        </ul>
      </div>
      <br></br>
      <div className="w-2/5 ml-2">
        <label
          htmlFor="hairtype"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          헤어스타일 <span className="text-red-600 font-bold">*</span>
        </label>
        <ul className="flex flex-row justify-between w-full gap-2">
          <li className="w-full">
            <input
              type="radio"
              id="gop"
              name="hairType"
              value="0"
              className="hidden peer"
            />
            <label
              htmlFor="gop"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">곱슬</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="bangop"
              name="hairType"
              value="1"
              className="hidden peer"
            />
            <label
              htmlFor="bangop"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">반곱슬</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="jik"
              name="hairType"
              value="2"
              className="hidden peer"
            />
            <label
              htmlFor="jik"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">직모</div>
            </label>
          </li>
        </ul>
      </div>
      <br></br>
      <div className="w-2/5 ml-2">
        <label
          htmlFor="hairthick"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          모발두께 <span className="text-red-600 font-bold">*</span>
        </label>
        <ul className="flex flex-row justify-between w-full gap-2">
          <li className="w-full">
            <input
              type="radio"
              id="thin"
              name="hairthick"
              value="0"
              className="hidden peer"
            />
            <label
              htmlFor="thin"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">얇음</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="du"
              name="hairthick"
              value="1"
              className="hidden peer"
            />
            <label
              htmlFor="du"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">두꺼움</div>
            </label>
          </li>
        </ul>
      </div>
      <br></br>
      <div className="w-2/5 ml-2">
        <label
          htmlFor="dyeinghistory"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          염색시술이력 <span className="text-red-600 font-bold">*</span>
        </label>
        <ul className="flex flex-row justify-between w-full gap-2">
          <li className="w-full">
            <input
              type="radio"
              id="0"
              name="dyeinghistory"
              value="0"
              className="hidden peer"
            />
            <label
              htmlFor="0"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">0번</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="1"
              name="dyeinghistory"
              value="1"
              className="hidden peer"
            />
            <label
              htmlFor="1"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">1~2번</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="2"
              name="dyeinghistory"
              value="2"
              className="hidden peer"
            />
            <label
              htmlFor="2"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">3번 이상</div>
            </label>
          </li>
        </ul>
      </div>
      <br></br>
      <div className="w-2/5 ml-2">
        <label
          htmlFor="decolorhistory"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          탈색시술이력 <span className="text-red-600 font-bold">*</span>
        </label>
        <ul className="flex flex-row justify-between w-full gap-2">
          <li className="w-full">
            <input
              type="radio"
              id="zero"
              name="decolorhistory"
              value="0"
              className="hidden peer"
            />
            <label
              htmlFor="zero"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">0번</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="one"
              name="decolorhistory"
              value="1"
              className="hidden peer"
            />
            <label
              htmlFor="one"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">1~2번</div>
            </label>
          </li>
          <li className="w-full">
            <input
              type="radio"
              id="two"
              name="decolorhistory"
              value="2"
              className="hidden peer"
            />
            <label
              htmlFor="two"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-full text-md text-center">3번 이상</div>
            </label>
          </li>
        </ul>
      </div>
      <br></br>
      <div class="mb-3">
        <label
          htmlFor="abstractlocation"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          관심지역 <span className="text-red-600 font-bold">*</span>
        </label>
        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="경기도 수원시 장안구 정자2동"
            aria-label="Search"
            aria-describedby="button-addon1"
          />

          <button
            class="relative z-[2] flex items-center rounded-r bg-primary-700 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <br></br>
      <button
        type="save"
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        save
      </button>
      <button
        type="cancel"
        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 float-right"
      >
        cancel
      </button>
    </form>
  );
}

export default SettingCustomerForm;
