import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API, DEFAULT_PROFILE_IMAGE } from "../../global/Constants";
import NoImage from "../../images/noImage.jpg";
import Loading from "../Layout/Loading";
import KakaoMap from "../../global/KakaoMap";

function ChangeForm() {
  const navigation = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [emailDisable, setEmailDisable] = useState(false);
  const [codeDisable, setCodeDisable] = useState(true);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [authCode, setAuthCode] = useState("");
  const [token, setToken] = useState("");
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
  const [designerInfo, setDesignerInfo] = useState({
    introduction: "",
    hairSalonName: "",
    hairSalonNumber: "",
    hairSalonAddress: "",
    licenseImage: NoImage,
  });

  const introductionHandler = (event) =>
    setDesignerInfo({ ...designerInfo, introduction: event.target.value });
  const hairSalonNameHandler = (event) =>
    setDesignerInfo({ ...designerInfo, hairSalonName: event.target.value });
  const hairSalonNumberHandler = (event) =>
    setDesignerInfo({ ...designerInfo, hairSalonNumber: event.target.value });
  const licenseImageHandler = (event) => {
    let imageFile = document.getElementById("licenseImage").files[0];
    if (imageFile !== undefined) {
      setDesignerInfo({
        ...designerInfo,
        licenseImage: URL.createObjectURL(imageFile),
      });
    } else {
      setDesignerInfo({ ...designerInfo, licenseImage: NoImage });
    }
  };

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
          setToken(response.data.data);
          setStep(3);
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else alert("프로필 변경에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("프로필 변경에 실패했습니다.");
      })
      .then(() => setLoading(false));
  };

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
      .post(API + "/user/profile", body, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        if (!response.data.success)
          return alert(response.data.message || "서버 오류");
        alert("프로필 변경이 정상적으로 완료되었습니다.");
        navigation("/login", { replace: true });
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("프로필 설정에 실패했습니다.");
      })
      .then(() => setLoading(false));
  };

  const designerSubmitHandler = (event) => {
    event.preventDefault();

    let introduction = designerInfo.introduction;
    let hairSalonName = designerInfo.hairSalonName;
    let hairSalonNumber = designerInfo.hairSalonNumber;
    let hairSalonAddress = document.getElementById("Kakao_Address").value;

    if (introduction === "") return alert("간단한 자기소개를 입력해주세요.");
    if (hairSalonName === "") return alert("미용실 이름을 입력해주세요.");
    if (hairSalonNumber === "") return alert("미용실 전화번호를 입력해주세요.");
    if (hairSalonAddress === "") return alert("미용실 위치를 등록해주세요.");
    if (designerInfo.licenseImage === NoImage)
      return alert("사업자 등록증을 등록해주세요.");

    setLoading(true);

    let body = {
      introduction: introduction,
      hairSalonName: hairSalonName,
      hairSalonAddress: hairSalonAddress,
      hairSalonNumber: hairSalonNumber,
    };
    const formData = new FormData();
    let photoFile = document.getElementById("licenseImage");
    formData.append("licenseImage", photoFile.files[0]);

    axios
      .post(API + "/designer/profile", body, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        if (!response.data.success)
          return alert(response.data.message || "서버 오류");

        axios
          .post(API + "/user/license", formData, {
            headers: {
              "Contest-Type": "multipart/form-data",
              Authorization: token,
            },
          })
          .then((response) => {
            if (!response.data.success)
              return alert("사업자 등록증 업로드에 실패했습니다.");
            alert("프로필 변경이 정상적으로 완료되었습니다.");
            navigation("/login", { replace: true });
          })
          .catch((err) => {
            if (err.response.data.message) alert(err.response.data.message);
            else alert("사업자 등록증 업로드에 실패했습니다.");
          })
          .then(() => setLoading(false));
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("프로필 변경이 실패했습니다.");
        setLoading(false);
      });
  };

  return (
    <div className="p-4 mb-8 md:ml-64">
      <div className="w-96">
        <button
          aria-current="hovertrue"
          type="button"
          className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-left text-primary-600"
        >
          비밀번호 변경
        </button>
        <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="signupPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              새 비밀번호 <span className="text-red-600 font-bold">*</span>
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
              비밀번호 확인 <span className="text-red-600 font-bold">*</span>
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
        </form>
        <br></br>
        <button
          aria-current="hovertrue"
          type="button"
          className="transition block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-left text-primary-600"
        >
          이메일 변경
        </button>
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
        </form>
        <br></br>
        <button
          aria-current="hovertrue"
          type="button"
          className="transition block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-left text-primary-600"
        >
          인적 사항 변경
        </button>
        <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
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
                프로필 사진 <span className="text-red-600 font-bold">*</span>
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
        </form>
        <br></br>
        <button
          aria-current="hovertrue"
          type="button"
          className="transition block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-left text-primary-600"
        >
          고객 정보 변경
        </button>
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={customerSubmitHandler}
        >
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
        </form>
        <br></br>
        <button
          aria-current="hovertrue"
          type="button"
          className="transition block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-left text-primary-600"
        >
          디자이너 정보 변경
        </button>
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={designerSubmitHandler}
        >
          <div>
            <label
              htmlFor="introduction"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              간단한 자기소개 <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="text"
              id="introduction"
              placeholder="경력 20년차 베테랑"
              className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              value={designerInfo.introduction}
              onChange={introductionHandler}
            />
          </div>
          <div>
            <label
              htmlFor="hairSalonName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              미용실 이름 <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="text"
              id="hairSalonName"
              placeholder="리안헤어"
              className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              value={designerInfo.hairSalonName}
              onChange={hairSalonNameHandler}
            />
          </div>
          <div>
            <label
              htmlFor="hairSalonNumber"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              미용실 전화번호 <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="text"
              id="hairSalonNumber"
              placeholder="0313335555"
              className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              value={designerInfo.hairSalonNumber}
              onChange={hairSalonNumberHandler}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              미용실 위치 <span className="text-red-600 font-bold">*</span>
            </label>
            <KakaoMap />
          </div>
          <div className="flex items-center space-x-6">
            <div className="shrink-0">
              <img
                className="h-16 w-16 object-cover rounded-lg"
                src={designerInfo.licenseImage}
                alt="licenseImage"
              />
            </div>
            <label className="block w-full">
              <label
                htmlFor="licenseImage"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                사업자 등록증 <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="licenseImage"
                type="file"
                accept="image/*"
                onChange={() => licenseImageHandler("licenseImage")}
              />
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                이미지 파일을 선택해주세요.
              </p>
            </label>
          </div>
        </form>
        <br></br>
      </div>
      <button
        type="save"
        onClick={() => navigation("/")}
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        save
      </button>
      <button
        type="cancel"
        onClick={() => navigation("/")}
        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 float-right"
      >
        cancel
      </button>
    </div>
  );
}

export default ChangeForm;
