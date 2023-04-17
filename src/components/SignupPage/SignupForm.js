import React, { useState } from "react";
import MainIcon from "../../images/MainIcon.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API, DEFAULT_PROFILE_IMAGE } from "../../global/Constants";

function SignupForm() {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [profileImage, setProfileImage] = useState(DEFAULT_PROFILE_IMAGE);
  const [agree, setAgree] = useState(false);

  const emailHandler = (event) => setEmail(event.target.value);
  const codeHandler = (event) => setCode(event.target.value);
  const passwordHandler = (event) => setPassword(event.target.value);
  const confirmPasswordHandler = (event) =>
    setConfirmPassword(event.target.value);
  const nameHandler = (event) => setName(event.target.value);
  const phoneNumberHandler = (event) => setPhoneNumber(event.target.value);
  const ageHandler = (event) => setAge(event.target.value);
  const imageHandler = () => {
    let imageFile = document.getElementById("profileImage_input").files[0];
    if (imageFile !== undefined) {
      setProfileImage(URL.createObjectURL(imageFile));
    } else {
      setProfileImage(DEFAULT_PROFILE_IMAGE);
    }
  };
  const agreeHandler = () => setAgree(!agree);

  const submitHander = (event) => {
    event.preventDefault();

    if (email === "") return alert("이메일을 입력해주세요.");
    if (code === "") return alert("인증 번호를 다시 확인해주세요.");
    if (password === "") return alert("비밀번호를 입력해주세요.");
    if (confirmPassword === "" || password !== confirmPassword)
      return alert("비밀번호를 다시 확인해주세요.");
    if (name === "") return alert("이름을 입력해주세요.");
    if (event.target.gender.value === "") return alert("성별을 선택해주세요.");
    if (phoneNumber === "") return alert("전화번호를 입력해주세요.");
    if (age === "") return alert("나이를 입력해주세요.");
    if (profileImage === DEFAULT_PROFILE_IMAGE)
      return alert("프로필 사진을 등록해주세요.");
    if (!agree) return alert("회원가입에 동의해주세요.");

    let userInfo = {
      email: email,
      password: password,
      name: name,
      phoneNumber: phoneNumber,
      gender: Number(event.target.gender.value),
      age: Number(age),
    };
    const formData = new FormData();
    formData.append("jsonList", JSON.stringify(userInfo));

    var photoFile = document.getElementById("profileImage_input");
    formData.append("profileImage", photoFile.files[0]);

    axios
      .post(API + "/user/signup", formData, {
        headers: {
          "Contest-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert("회원가입이 완료되었습니다!");
        navigation("/login", { replace: true });
      })
      .catch((err) => alert("회원가입에 실패했습니다."));
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
            <form className="space-y-4 md:space-y-6" onSubmit={submitHander}>
              <div>
                <label
                  htmlFor="signupEmail"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  이메일
                </label>
                <div className="flex flex-row justify-between">
                  <input
                    type="email"
                    id="signupEmail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="name@gmail.com"
                    value={email}
                    onChange={emailHandler}
                  />
                  <button className="w-20 ml-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    확인
                  </button>
                </div>
              </div>
              <div>
                <label
                  htmlFor="emailCode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  인증 번호
                </label>
                <div className="flex flex-row justify-between">
                  <input
                    type="text"
                    id="emailCode"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="0000"
                    value={code}
                    onChange={codeHandler}
                  />
                  <button className="w-20 ml-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    확인
                  </button>
                </div>
              </div>
              <div>
                <label
                  htmlFor="signupPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  비밀번호
                </label>
                <input
                  type="password"
                  id="signupPassword"
                  placeholder="••••••••"
                  className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={password}
                  onChange={passwordHandler}
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  비밀번호 확인
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={confirmPassword}
                  onChange={confirmPasswordHandler}
                />
              </div>
              <div className="flex flex-row">
                <div className="w-3/5 mr-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="김아주"
                    className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={name}
                    onChange={nameHandler}
                  />
                </div>
                <div className="w-2/5 ml-2">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    성별
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
                    전화번호
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    placeholder="01012345678"
                    className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={phoneNumber}
                    onChange={phoneNumberHandler}
                  />
                </div>
                <div className="w-2/5 ml-2">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    나이
                  </label>
                  <input
                    type="text"
                    id="age"
                    placeholder="20"
                    className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={age}
                    onChange={ageHandler}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="shrink-0">
                  <img
                    className="h-16 w-16 object-cover rounded-full"
                    src={profileImage}
                    alt="Profile_Image"
                  />
                </div>
                <label className="block">
                  <label
                    htmlFor="profileImage_input"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    프로필 사진
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
                    checked={agree}
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
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                회원가입
              </button>
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupForm;
