import React from "react";
import KakaoMap from "../../global/KakaoMap";

function SettingCustomerForm() {
  return (
    <form>
      <br></br>
      <div className="w-2/5 ml-2">
        <label
          htmlFor="skinType"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          두피형 <span className="text-red-600 font-bold"></span>
        </label>
        <div className="relative mb-3" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-neutral-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:bg-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput5"
            placeholder="Disabled input"
            aria-label="Disabled input example"
            disabled
          />
          <label
            for="exampleFormControlInput5"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            건성/중성/지성
          </label>
        </div>
      </div>
      <br></br>
      <div className="w-2/5 ml-2">
        <label
          htmlFor="skinType"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          헤어 스타일 <span className="text-red-600 font-bold"></span>
        </label>
        <div className="relative mb-3" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-neutral-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:bg-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput5"
            placeholder="Disabled input"
            aria-label="Disabled input example"
            disabled
          />
          <label
            for="exampleFormControlInput5"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            곱슬/반곱슬/직모
          </label>
        </div>
      </div>
      <br></br>
      <div className="w-2/5 ml-2">
        <label
          htmlFor="skinType"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          모발 두께 <span className="text-red-600 font-bold"></span>
        </label>
        <div className="relative mb-3" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-neutral-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:bg-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput5"
            placeholder="Disabled input"
            aria-label="Disabled input example"
            disabled
          />
          <label
            for="exampleFormControlInput5"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            얇음/중간/두꺼움
          </label>
        </div>
      </div>

      <div className="w-2/5 ml-2">
        <label
          htmlFor="skinType"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          염색 시술 이력 <span className="text-red-600 font-bold"></span>
        </label>
        <div className="relative mb-3" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-neutral-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:bg-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput5"
            placeholder="Disabled input"
            aria-label="Disabled input example"
            disabled
          />
          <label
            for="exampleFormControlInput5"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            0번/1~2번/3번 이상
          </label>
        </div>
      </div>
      <br></br>
      <div className="w-2/5 ml-2">
        <label
          htmlFor="skinType"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          탈색 시술 이력 <span className="text-red-600 font-bold"></span>
        </label>
        <div className="relative mb-3" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-neutral-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:bg-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput5"
            placeholder="Disabled input"
            aria-label="Disabled input example"
            disabled
          />
          <label
            for="exampleFormControlInput5"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            0번/1~2번/3번 이상
          </label>
        </div>
      </div>
      <br></br>
      <div className="w-2/5 ml-2">
        <label
          htmlFor="skinType"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          관심 지역 <span className="text-red-600 font-bold"></span>
        </label>
        <div className="relative mb-3" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-neutral-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:bg-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput5"
            placeholder="Disabled input"
            aria-label="Disabled input example"
            disabled
          />
          <label
            for="exampleFormControlInput5"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            경기도 수원시 장안구 정자2동
          </label>
        </div>
      </div>
    </form>
  );
}

export default SettingCustomerForm;
