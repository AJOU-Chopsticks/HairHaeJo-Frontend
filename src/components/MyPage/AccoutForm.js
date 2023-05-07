import React, { useState } from "react";
import Loading from "../Layout/Loading";
import { DEFAULT_PROFILE_IMAGE } from "../../global/Constants";

function AccoutForm() {
  const [loading, setLoading] = useState(false);

  const [accoutInfo, setAccoutInfo] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    profileImage: DEFAULT_PROFILE_IMAGE,
  });

  const nameHandler = (event) =>
    setAccoutInfo({ ...accoutInfo, name: event.target.value });
  const phoneNumberHandler = (event) =>
    setAccoutInfo({ ...accoutInfo, phoneNumber: event.target.value });
  const ageHandler = (event) =>
    setAccoutInfo({ ...accoutInfo, age: event.target.value });
  const imageHandler = () => {
    let imageFile = document.getElementById("profileImage_input").files[0];
    if (imageFile !== undefined) {
      setAccoutInfo({
        ...accoutInfo,
        profileImage: URL.createObjectURL(imageFile),
      });
    } else {
      setAccoutInfo({ ...accoutInfo, profileImage: DEFAULT_PROFILE_IMAGE });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setLoading(true);

    console.log(accoutInfo.name);
    console.log(event.target.gender.value);
    console.log(accoutInfo.phoneNumber);
    console.log(accoutInfo.age);
    console.log(accoutInfo.profileImage);

    setTimeout(() => setLoading(false), 1000);
  };
  return (
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
            value={accoutInfo.name}
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
            value={accoutInfo.phoneNumber}
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
            value={accoutInfo.age}
            onChange={ageHandler}
          />
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="shrink-0">
          <img
            className="h-16 w-16 object-cover rounded-full"
            src={accoutInfo.profileImage}
            alt="Profile_Image"
          />
        </div>
        <label className="block w-full">
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

export default AccoutForm;
