import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GrContactInfo } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user);

  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-700 dark:text-gray-400 w-full mb-6 shadow-xl rounded-lg">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-2/12 px-4 lg:order-2 flex justify-center">
            <img
              alt="Profile_Image"
              src={user.profileImage}
              className="shadow-xl w-1/5 rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 min-w-[120px] max-w-[150px]"
            />
          </div>
          <div className="w-full lg:w-5/12 px-4 lg:order-1">
            <div className="flex justify-around lg:py-4 lg:pt-4 pt-16">
              <div className="mr-4 py-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  건성
                </span>
                <span className="text-sm text-blueGray-400">두피형</span>
              </div>
              <div className="mr-4 py-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  곱슬
                </span>
                <span className="text-sm text-blueGray-400">헤어 스타일</span>
              </div>
              <div className="lg:mr-4 py-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  얇음
                </span>
                <span className="text-sm text-blueGray-400">모발 두께</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 px-4 lg:order-3 lg:text-right lg:self-center">
            <div className="flex justify-around lg:py-4 lg:pt-4 pt-2">
              <div className="mr-4 py-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  0번
                </span>
                <span className="text-sm text-blueGray-400">
                  염색 시술 이력
                </span>
              </div>
              <div className="mr-4 py-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  0번
                </span>
                <span className="text-sm text-blueGray-400">
                  탈색 시술 이력
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
            이름
          </h3>
          <div className="flex flex-row justify-center my-auto text-md leading-normal font-bold">
            <GrContactInfo className="mr-2 text-xl text-blueGray-400 dark:hidden" />
            남성 / 25세
          </div>
          <div className="flex flex-row justify-center mb-2 text-blueGray-600 mt-10">
            <FaMapMarkerAlt className="mr-2 text-xl text-blueGray-400" />
            미용실 (경기도 수원시)
          </div>
          <div className="flex flex-row justify-center mb-2 text-blueGray-600">
            <HiOutlineMail className="mr-2 text-xl text-blueGray-400" />
            abcd@ajou.ac.kr
          </div>
          <div className="flex flex-row justify-center mb-2 text-blueGray-600">
            <BsFillTelephoneFill className="mr-2 text-xl text-blueGray-400" />
            01012341234
          </div>
          <div className="flex flex-row justify-center mt-8 text-blueGray-600">
            미용실 소개
          </div>
        </div>
        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
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
        </div>
      </div>
    </div>
  );
}

export default Profile;
