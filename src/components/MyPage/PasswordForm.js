import React, { useState } from "react";
import Loading from "../Layout/Loading";
import axios from "axios";
import { API } from "../../global/Constants";

function PasswordForm(props) {
  const [loading, setLoading] = useState(false);
  const [exPassword, setExPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (newPassword !== newConfirmPassword)
      return alert("새로운 비밀번호를 다시 확인해주세요.");

    setLoading(true);

    axios
      .put(
        API + "/user/password",
        { exPassword: exPassword, newPassword: newPassword },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          alert("비밀번호 변경 완료!");

          setExPassword("");
          setNewPassword("");
          setNewConfirmPassword("");
          props.setTarget(0);
        } else alert("비밀번호 변경에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("비밀번호 변경에 실패했습니다.");
      })
      .then(() => setLoading(false));
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
      <div>
        <label
          htmlFor="exPassword"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          기존 비밀번호 <span className="text-red-600 font-bold">*</span>
        </label>
        <input
          type="password"
          id="exPassword"
          placeholder="••••••••"
          className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={exPassword}
          onChange={(e) => setExPassword(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="newPassword"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          새로운 비밀번호 <span className="text-red-600 font-bold">*</span>
        </label>
        <input
          type="password"
          id="newPassword"
          placeholder="••••••••"
          className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="newConfirmPassword"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          새로운 비밀번호 확인 <span className="text-red-600 font-bold">*</span>
        </label>
        <input
          type="password"
          id="newConfirmPassword"
          placeholder="••••••••"
          className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={newConfirmPassword}
          onChange={(e) => setNewConfirmPassword(e.target.value)}
        />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <button
          type="submit"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          변경하기
        </button>
      )}
    </form>
  );
}

export default PasswordForm;
