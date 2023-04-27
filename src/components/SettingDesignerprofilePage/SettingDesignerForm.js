import React, { useState } from "react";

function SettingDesignerForm() {
  const [type, setType] = useState(true);
  return (
    <form>
      <div class="mb-3">
        <label
          htmlFor="introduction"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          자기소개(간략히!) <span className="text-red-600 font-bold">*</span>
        </label>
        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="가족이 모두 미용사 집안이라 어릴 때부터 헤어신공으로 불렸어요!"
            aria-label="Search"
            aria-describedby="button-addon1"
          />
        </div>
      </div>
      <br></br>
      <div class="mb-3">
        <label
          htmlFor="hairsalonname"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          미용실명 <span className="text-red-600 font-bold">*</span>
        </label>
        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="리안헤어"
            aria-label="Search"
            aria-describedby="button-addon1"
          />
        </div>
      </div>
      <br></br>
      <div class="mb-3">
        <label
          htmlFor="hairsalonaddress"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          미용실 위치 <span className="text-red-600 font-bold">*</span>
        </label>
        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="경기도 수원시 장안구 천천동 527-10번지 2층 201호 수원시 경기도 KR"
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
      <div class="mb-3">
        <label
          htmlFor="hairsalonnumber"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          미용실 전화번호 <span className="text-red-600 font-bold">*</span>
        </label>
        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="0311234567"
            aria-label="Search"
            aria-describedby="button-addon1"
          />
        </div>
      </div>
      <br></br>
      <div class="mb-3">
        <label
          htmlFor="registration"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          사업자 등록증 <span className="text-red-600 font-bold">*</span>
        </label>
        <div class="mb-3">
          <input
            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            id="formFileLg"
            type="file"
          />
        </div>
      </div>
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

export default SettingDesignerForm;
