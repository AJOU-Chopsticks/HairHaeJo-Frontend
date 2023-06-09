import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GrContactInfo } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";

function Profile(props) {
  return (
    <div className="mx-auto px-4 mt-20">
      <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-700 dark:text-gray-400 w-full pb-20 mb-6 shadow-xl rounded-lg">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-2/12 px-4 lg:order-2 flex justify-center">
            <img
              alt="Profile_Image"
              src={props.userInfo.profileImage}
              className="w-40 h-40 mb-3 rounded-full shadow-lg absolute -m-16 -ml-16"
            />
          </div>
          <div className="w-full lg:w-5/12 px-4 lg:order-1">
            {props.userInfo.role === "ROLE_USER" && (
              <div className="flex justify-around lg:py-4 lg:pt-4 pt-24">
                <div className="mr-4 py-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {props.profileInfo.skinType === 0
                      ? "건성"
                      : props.profileInfo.skinType === 1
                      ? "중성"
                      : "지성"}
                  </span>
                  <span className="text-sm text-blueGray-400">두피형</span>
                </div>
                <div className="mr-4 py-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {props.profileInfo.hairType === 0
                      ? "곱슬"
                      : props.profileInfo.hairType === 1
                      ? "반곱슬"
                      : "직모"}
                  </span>
                  <span className="text-sm text-blueGray-400">헤어 스타일</span>
                </div>
                <div className="lg:mr-4 py-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {props.profileInfo.hairThickness === 0
                      ? "얇음"
                      : props.profileInfo.hairThickness === 1
                      ? "중간"
                      : "두꺼움"}
                  </span>
                  <span className="text-sm text-blueGray-400">모발 두께</span>
                </div>
              </div>
            )}
          </div>
          <div className="w-full lg:w-5/12 px-4 lg:order-3 lg:text-right lg:self-center">
            {props.userInfo.role === "ROLE_USER" && (
              <div className="flex justify-around lg:py-4 lg:pt-4 pt-2">
                <div className="mr-4 py-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {props.profileInfo.dyeingHistory === 0
                      ? "0번"
                      : props.profileInfo.dyeingHistory === 1
                      ? "1~2번"
                      : "3번 이상"}
                  </span>
                  <span className="text-sm text-blueGray-400">
                    염색 시술 이력
                  </span>
                </div>
                <div className="mr-4 py-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {props.profileInfo.decolorizationHistory === 0
                      ? "0번"
                      : props.profileInfo.decolorizationHistory === 1
                      ? "1~2번"
                      : "3번 이상"}
                  </span>
                  <span className="text-sm text-blueGray-400">
                    탈색 시술 이력
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`text-center ${
            props.userInfo.role === "ROLE_USER" ? "mt-8" : "mt-32"
          }`}
        >
          <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
            {props.userInfo.name}
          </h3>
          <div className="flex flex-row justify-center my-auto text-md leading-normal font-bold">
            <GrContactInfo className="mr-2 text-xl text-blueGray-400 dark:hidden" />
            {props.userInfo.gender === 0 ? "남성" : "여성"} /{" "}
            {props.userInfo.age}세
          </div>
          <div className="flex flex-row justify-center mb-2 text-blueGray-600 mt-10">
            <FaMapMarkerAlt className="mr-2 text-xl text-blueGray-400" />
            {props.userInfo.role === "ROLE_USER"
              ? props.profileInfo.abstractLocation
              : `${props.profileInfo.hairSalonName} (${props.profileInfo.hairSalonAddress})`}
          </div>
          <div className="flex flex-row justify-center mb-2 text-blueGray-600">
            <HiOutlineMail className="mr-2 text-xl text-blueGray-400" />
            {props.userInfo.email}
          </div>
          <div className="flex flex-row justify-center mb-2 text-blueGray-600">
            <BsFillTelephoneFill className="mr-2 text-xl text-blueGray-400" />
            {props.userInfo.role === "ROLE_DESIGNER"
              ? `${props.userInfo.phoneNumber} (${props.profileInfo.hairSalonNumber})`
              : `${props.userInfo.phoneNumber}`}
          </div>
          {props.userInfo.role === "ROLE_DESIGNER" && (
            <div className="flex flex-row justify-center mt-8 text-blueGray-600">
              {props.profileInfo.introduction}
            </div>
          )}
        </div>
        {/* <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-9/12 px-4">
              <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                시술 이력이 없습니다.
              </p>
              <Link to="/" className="font-normal text-primary-500">
                자세히 보기
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Profile;
