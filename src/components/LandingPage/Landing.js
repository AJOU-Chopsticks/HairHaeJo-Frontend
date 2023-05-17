import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section className="bg-center bg-no-repeat bg-[url('https://img.freepik.com/free-vector/flat-composition-with-hair-salon-interior-hairdressers-and-barber-working-with-clients-vector-illustration_1284-71554.jpg?w=1800&t=st=1684339492~exp=1684340092~hmac=00296d1a01a61f3f5f138783a908dddda0e314b2c0cd58e0474cc0245191a0b3')] bg-gray-500 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          헤어해죠에 오신 것을 환영합니다!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          헤어해죠는 월 5000만원 이하의 소상 디자이너들에게 고객 유치의 기회를
          제공하고 고객들에게는 원하는 헤어스타일과 디자이너를 찾아 연결해 주는
          소통의 창구 역할을 합니다!
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            to="/login"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            시작해볼까요?
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Landing;
