import React, { useState } from "react";
import MainIcon from "../../images/MainIcon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __asyncLogin } from "../../redux/modules/userSlice";
import SearchPassword from "./SearchPassword";

function LoginForm() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberCheck, setRememberCheck] = useState(true);
  const [validation, setValidation] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const emailHandler = (event) => setEmail(event.target.value);
  const passwordHandler = (event) => {
    if (!validation) setValidation(true);
    setPassword(event.target.value);
  };
  const rememberHander = () => setRememberCheck(!rememberCheck);
  const submitHander = (event) => {
    event.preventDefault();

    dispatch(
      __asyncLogin({
        email: email,
        password: password,
        fcmToken: localStorage.getItem("fcmToken"),
      })
    ).then((response) => {
      if (response.payload) navigation("/", { replace: true });
      else setValidation(false);
    });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img
            src={MainIcon}
            className="mr-3 h-9 hidden md:block"
            alt="Header_Icon"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden md:block">
            HairHaeJo
          </span>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              로그인
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitHander}>
              <div>
                <label
                  htmlFor="loginEmail"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  이메일
                </label>
                <input
                  type="email"
                  id="loginEmail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  value={email}
                  onChange={emailHandler}
                />
              </div>
              <div>
                <label
                  htmlFor="loginPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  비밀번호
                </label>
                <input
                  type="password"
                  id="loginPassword"
                  placeholder="••••••••"
                  className={`font-mono ${
                    validation ? "bg-gray-50" : "bg-red-50"
                  } border ${
                    validation ? "border-gray-300" : "border-red-500"
                  } ${
                    validation ? "text-gray-900" : "text-red-900"
                  } sm:text-sm rounded-lg focus:${
                    validation ? "ring-primary-600" : "ring-red-500"
                  } focus:${
                    validation ? "border-primary-600" : "border-red-500"
                  } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:${
                    validation ? "placeholder-gray-400" : "placeholder-red-500"
                  } dark:${
                    validation ? "text-white" : "text-red-500"
                  } dark:focus:ring-blue-500 dark:focus:${
                    validation ? "border-blue-500" : "border-red-500"
                  }`}
                  value={password}
                  onChange={passwordHandler}
                />
                <p
                  className={`mt-2 text-sm text-red-600 dark:text-red-500 ${
                    validation ? "hidden" : "block"
                  }`}
                >
                  <span className="font-medium">
                    비밀번호를 다시 확인해주세요!
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="loginRemember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 text-primary-600"
                      checked={rememberCheck}
                      onChange={rememberHander}
                      disabled
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="loginRemember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      로그인 상태 유지
                    </label>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  onClick={() => setShowModal(true)}
                >
                  비밀번호 찾기
                </button>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => {
                  navigation("/home");
                }}
              >
                로그인
              </button>
            </form>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              {"헤어해죠 계정이 아직 없나요? "}
              <button
                onClick={() => {
                  navigation("/signup", { replace: true });
                }}
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                회원가입
              </button>
            </p>
          </div>
        </div>
      </div>
      <SearchPassword showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
}

export default LoginForm;
