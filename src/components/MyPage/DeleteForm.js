import React, { useState } from "react";
import DeleteModal from "./DeleteModal";

function DeleteForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const emailHandler = (event) => setEmail(event.target.value);
  const passwordHandler = (event) => setPassword(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    setShowDeleteModal(true);
  };

  return (
    <>
      <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            이메일 <span className="text-red-600 font-bold">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="name@gmail.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={email}
            onChange={emailHandler}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            비밀번호 <span className="text-red-600 font-bold">*</span>
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={password}
            onChange={passwordHandler}
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          회원 탈퇴
        </button>
      </form>
      <DeleteModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        email={email}
        password={password}
      />
    </>
  );
}

export default DeleteForm;
