import React from "react";
import Matching from "../../images/Matching.png";
import Testing from "../../images/Testing.png";
import Coupon from "../../images/Coupon.png";
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel });

function Body() {
  return (
    <div
      id="carouselCaptions"
      className="relative"
      data-te-carousel-init
      data-te-carousel-slide
    >
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        <button
          type="button"
          data-te-target="#carouselCaptions"
          data-te-slide-to="0"
          data-te-carousel-active
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-te-target="#carouselCaptions"
          data-te-slide-to="1"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-te-target="#carouselCaptions"
          data-te-slide-to="2"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none backface-visibility: hidden"
          data-te-carousel-active
          data-te-carousel-item
        >
          <img
            src={Matching}
            className="block w-full h-[600px]"
            alt="Matching"
          />
          <div className="absolute inset-x-[5%] bottom-60 hidden py-5 text-green-800 md:block">
            <h5 className="text-xl lg:text-5xl  max-w-[70%] text-left">
              급하시면 <span className="text-red-600">빠른</span> 매칭!
            </h5>
            <br></br>
            <h5 className="text-xl lg:text-5xl  max-w-[60%] text-left">
              장기적으로 안전하게 하고 싶다면{" "}
              <span className="text-red-600">일반 </span>매칭!
            </h5>
            <br></br>
            <p className="text-xl">
              선택은 스스로가 처한 상황에 따라 결정하시면 됩니다.
            </p>
          </div>
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none backface-visibility: hidden"
          data-te-carousel-item
        >
          <img src={Testing} className="block w-full h-[600px]" alt="Testing" />
          <div className="absolute inset-x-[5%] bottom-40 hidden py-5 text-center text-white md:block">
            <h5 className="text-xl lg:text-5xl  max-w-[70%] text-left">
              헤어해죠 ~ 마케팅 플랫폼
            </h5>
            <br></br>
            <h5 className="text-xl lg:text-5xl  max-w-[60%] text-left">
              <span className="text-green-800">베타테스터 </span>모집!
            </h5>
            <br></br>
            <h5 className="text-xl text-left">
              <button
                type="button"
                className="focus:outline-none text-white bg-primary-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-big px-5 py-2.5 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-purple-900"
              >
                신청날짜
              </button>
              <span> 2023년 6월 28일 ~ 2023년 7월 15일</span>
            </h5>
            <h5 className="text-xl text-left">
              <button
                type="button"
                className="focus:outline-none text-white bg-primary-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-big px-5 py-2.5 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-purple-900"
              >
                모집대상
              </button>
              <span>
                {" "}
                국내에 있는 고객들, 월 5000만원 이하의 돈을 버는 디자이너들
              </span>
            </h5>
            <h5 className="text-xl text-left">
              <button
                type="button"
                className="focus:outline-none text-white bg-primary-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-big px-5 py-2.5 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-purple-900"
              >
                신청방법
              </button>
              <span> 'help@hairhaejo.net'으로 이메일을 보내주시면 됩니다.</span>
            </h5>
            <h5 className="text-xl text-left">
              <button
                type="button"
                className="focus:outline-none text-white bg-primary-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-big px-5 py-2.5 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-purple-900"
              >
                혜택
              </button>
              <span>
                {" "}
                베타테스트를 성실히 마친 분들께는 어떤 종류든 상관없이{" "}
                <span className="text-green-800">시술 3번은 무료</span>로
                제공됩니다!
              </span>
            </h5>
            <p className="text-left">
              참고사항: 고객 30명, 디자이너 30명 제한으로 선착순입니다!
            </p>
          </div>
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none backface-visibility: hidden"
          data-te-carousel-item
        >
          <img src={Coupon} className="block w-full h-[600px]" alt="Coupon" />
          <div className="absolute inset-x-[20%] bottom-80 right-10 hidden py-5 text-right text-white md:block">
            <h5 className="text-xl lg:text-5xl text-right">
              헤어해죠 전용 쿠폰
            </h5>
            <br></br>
            <h5 className="text-xl">
              시술 완료 후 결제까지 모두 끝나면<br></br> 온라인 상으로 쿠폰이
              1개씩 적립됩니다.
            </h5>
            <br></br>
            <h5 className="text-xl">
              쿠폰에 있는 10개를 모두 다 채운다면 <br></br>아메리카노 기프티콘을
              이메일로 보내드립니다!
            </h5>
          </div>
        </div>
      </div>
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselCaptions"
        data-te-slide="prev"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselCaptions"
        data-te-slide="next"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
}

export default Body;
