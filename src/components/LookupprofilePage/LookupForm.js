import React from "react";
import DesignerForm from "./DesignerForm";
import CustomerForm from "./CustomerForm";
import { useNavigate } from "react-router-dom";

function LookupForm() {
  const navigation = useNavigate();
  return (
    <div className="p-4 mb-8 md:ml-64">
      <div className="w-2/5 ml-2">
        <label
          htmlFor="skinType"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          이름 <span className="text-red-600 font-bold"></span>
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
            오원석
          </label>
        </div>
        <label
          htmlFor="skinType"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          성별 <span className="text-red-600 font-bold"></span>
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
            남/여
          </label>
        </div>
        <label
          htmlFor="skinType"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          본인 전화번호 <span className="text-red-600 font-bold"></span>
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
            01035181676
          </label>
        </div>
        <label
          htmlFor="skinType"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          나이 <span className="text-red-600 font-bold"></span>
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
            24
          </label>
        </div>
      </div>
      <br></br>
      <CustomerForm />
      <DesignerForm />
      <button
        type="회원 탈퇴"
        onClick={() => navigation("/")}
        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 float-right"
      >
        회원 탈퇴
      </button>
    </div>
  );
}

export default LookupForm;
