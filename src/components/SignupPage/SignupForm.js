import React, { useEffect, useState } from "react";
import MainIcon from "../../images/MainIcon.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API, DEFAULT_PROFILE_IMAGE } from "../../global/Constants";
import Loading from "../Layout/Loading";

function SignupForm() {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const [emailDisable, setEmailDisable] = useState(false);
  const [codeDisable, setCodeDisable] = useState(true);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [authCode, setAuthCode] = useState("");
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    code: "",
    password: "",
    confirmPassword: "",
    name: "",
    phoneNumber: "",
    age: "",
    profileImage: DEFAULT_PROFILE_IMAGE,
    agree: false,
  });

  const emailHandler = (event) =>
    setRegisterInfo({ ...registerInfo, email: event.target.value });
  const codeHandler = (event) =>
    setRegisterInfo({ ...registerInfo, code: event.target.value });
  const passwordHandler = (event) =>
    setRegisterInfo({ ...registerInfo, password: event.target.value });
  const confirmPasswordHandler = (event) =>
    setRegisterInfo({ ...registerInfo, confirmPassword: event.target.value });
  const nameHandler = (event) =>
    setRegisterInfo({ ...registerInfo, name: event.target.value });
  const phoneNumberHandler = (event) =>
    setRegisterInfo({ ...registerInfo, phoneNumber: event.target.value });
  const ageHandler = (event) =>
    setRegisterInfo({ ...registerInfo, age: event.target.value });
  const imageHandler = () => {
    let imageFile = document.getElementById("profileImage_input").files[0];
    if (imageFile !== undefined) {
      setRegisterInfo({
        ...registerInfo,
        profileImage: URL.createObjectURL(imageFile),
      });
    } else {
      setRegisterInfo({ ...registerInfo, profileImage: DEFAULT_PROFILE_IMAGE });
    }
  };
  const agreeHandler = () =>
    setRegisterInfo({ ...registerInfo, agree: !registerInfo.agree });

  const sendEmailCode = () => {
    if (registerInfo.email === "") return alert("이메일을 입력해주세요.");

    setCodeDisable(true);
    setLoadingEmail(true);
    axios
      .post(API + "/user/email?email=" + registerInfo.email)
      .then((response) => {
        if (!response.data.success) {
          return alert("다시 시도해주세요.");
        }

        alert("입력하신 이메일로 인증 코드가 전송되었습니다.");
        setAuthCode(response.data.data);
        setCodeDisable(false);
        setLoadingEmail(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (codeDisable === false) document.getElementById("emailCode").focus();
  }, [codeDisable]);

  const confirmCode = () => {
    if (registerInfo.code === authCode) {
      setEmailDisable(true);
      setCodeDisable(true);
      alert("인증되었습니다.");
      document.getElementById("signupPassword").focus();
    } else {
      alert("인증 코드를 다시 확인해주세요.");
      document.getElementById("emailCode").focus();
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (registerInfo.email === "") return alert("이메일을 입력해주세요.");
    if (registerInfo.code === "")
      return alert("인증 코드를 다시 확인해주세요.");
    if (registerInfo.password === "") return alert("비밀번호를 입력해주세요.");
    if (
      registerInfo.confirmPassword === "" ||
      registerInfo.password !== registerInfo.confirmPassword
    )
      return alert("비밀번호를 다시 확인해주세요.");
    if (registerInfo.name === "") return alert("이름을 입력해주세요.");
    if (event.target.gender.value === "") return alert("성별을 선택해주세요.");
    if (registerInfo.phoneNumber === "")
      return alert("전화번호를 입력해주세요.");
    if (registerInfo.age === "") return alert("나이를 입력해주세요.");
    if (registerInfo.profileImage === DEFAULT_PROFILE_IMAGE)
      return alert("프로필 사진을 등록해주세요.");
    if (!registerInfo.agree) return alert("회원가입에 동의해주세요.");

    setLoading(true);

    let userInfo = {
      email: registerInfo.email,
      password: registerInfo.password,
      name: registerInfo.name,
      phoneNumber: registerInfo.phoneNumber,
      gender: Number(event.target.gender.value),
      age: Number(registerInfo.age),
    };
    const formData = new FormData();
    formData.append("jsonList", JSON.stringify(userInfo));

    let photoFile = document.getElementById("profileImage_input");
    formData.append("profileImage", photoFile.files[0]);

    axios
      .post(API + "/user/signup", formData, {
        headers: {
          "Contest-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success) {
          alert("회원가입이 완료되었습니다!");
          navigation("/login", { replace: true });
        } else alert("회원가입에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("회원가입에 실패했습니다.");
      })
      .then(() => setLoading(false));
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
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
              회원가입
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
              <div>
                <label
                  htmlFor="signupEmail"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  이메일 <span className="text-red-600 font-bold">*</span>
                </label>
                <div className="flex flex-row justify-between">
                  <input
                    type="email"
                    id="signupEmail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="name@gmail.com"
                    value={registerInfo.email}
                    onChange={emailHandler}
                    disabled={emailDisable}
                  />
                  {loadingEmail ? (
                    <div className="w-20 ml-4">
                      <Loading />
                    </div>
                  ) : (
                    <button
                      type="button"
                      className={`${
                        emailDisable
                          ? "cursor-not-allowed bg-primary-400 dark:bg-primary-400"
                          : "bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
                      } w-20 ml-2 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800`}
                      disabled={emailDisable}
                      onClick={sendEmailCode}
                    >
                      확인
                    </button>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="emailCode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  인증 코드 <span className="text-red-600 font-bold">*</span>
                </label>
                <div className="flex flex-row justify-between">
                  <input
                    type="text"
                    id="emailCode"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="0000"
                    value={registerInfo.code}
                    onChange={codeHandler}
                    disabled={codeDisable}
                  />
                  <button
                    type="button"
                    className={`${
                      codeDisable
                        ? "cursor-not-allowed bg-primary-400 dark:bg-primary-400"
                        : "bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
                    } w-20 ml-2 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800`}
                    disabled={codeDisable}
                    onClick={confirmCode}
                  >
                    확인
                  </button>
                </div>
              </div>
              <div>
                <label
                  htmlFor="signupPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  비밀번호 <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="password"
                  id="signupPassword"
                  placeholder="••••••••"
                  className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={registerInfo.password}
                  onChange={passwordHandler}
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  비밀번호 확인{" "}
                  <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={registerInfo.confirmPassword}
                  onChange={confirmPasswordHandler}
                />
              </div>
              <div className="flex flex-row">
                <div className="w-3/5 mr-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    이름 <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="김아주"
                    className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={registerInfo.name}
                    onChange={nameHandler}
                  />
                </div>
                <div className="w-2/5 ml-2">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    성별 <span className="text-red-600 font-bold">*</span>
                  </label>
                  <ul className="flex flex-row justify-between w-full gap-2">
                    <li className="w-full">
                      <input
                        type="radio"
                        id="MALE"
                        name="gender"
                        value="0"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="MALE"
                        className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <div className="w-full text-md text-center">남</div>
                      </label>
                    </li>
                    <li className="w-full">
                      <input
                        type="radio"
                        id="FEMALE"
                        name="gender"
                        value="1"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="FEMALE"
                        className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <div className="w-full text-md text-center">여</div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-3/5 mr-2">
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    전화번호 <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    placeholder="01012345678"
                    className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={registerInfo.phoneNumber}
                    onChange={phoneNumberHandler}
                  />
                </div>
                <div className="w-2/5 ml-2">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    나이 <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="age"
                    placeholder="20"
                    className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={registerInfo.age}
                    onChange={ageHandler}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="shrink-0">
                  <img
                    className="h-16 w-16 object-cover rounded-full"
                    src={registerInfo.profileImage}
                    alt="Profile_Image"
                  />
                </div>
                <label className="block">
                  <label
                    htmlFor="profileImage_input"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    프로필 사진{" "}
                    <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="profileImage_input"
                    type="file"
                    accept="image/*"
                    onChange={imageHandler}
                  />
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                    이미지 파일을 선택해주세요.
                  </p>
                </label>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="signupAgree"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 text-primary-600"
                    checked={registerInfo.agree}
                    onChange={agreeHandler}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="signupAgree"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    회원가입에 동의합니다.
                  </label>
                </div>
              </div>
              {loading ? (
                <Loading />
              ) : (
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  회원가입
                </button>
              )}
            </form>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              {"이미 계정이 있으신가요? "}
              <button
                onClick={() => {
                  navigation("/login", { replace: true });
                }}
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                로그인
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupForm;
