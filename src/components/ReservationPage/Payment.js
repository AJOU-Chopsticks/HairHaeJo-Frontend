import React, { useState } from "react";
import KakaoPayImage from "../../images/KakaoPay.png";

const checkIcon = (
  <svg
    className="flex-shrink-0 mb-auto w-5 h-5 text-primary-500 dark:text-primary-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);

function Payment(props) {
  const [checkKakaoPay, setCheckKakaoPay] = useState(true);

  return (
    <div className="w-5/6 sm:w-2/3 xl:w-3/4 mx-auto sm:mx-0 mb-40">
      <div className="text-lg">예약 정보</div>
      <hr className="my-2" />
      <div className="flex text-gray-500 dark:text-white bg-white shadow-md justify-start rounded-lg flex-wrap mx-auto py-4 px-2 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex mx-5 flex-row w-full">
          <div className="w-32">날짜/시간</div>
          <div>
            2023년 5월 25일 목요일
            <br />
            오후 01:00
          </div>
        </div>
        <div className="flex mx-5 flex-row w-full my-4">
          <div className="w-32">매장/담당</div>
          <div>
            리안헤어 아주대점
            <br />
            디자이너
          </div>
        </div>
        <div className="flex mx-5 flex-row w-full">
          <div className="w-32">선택 메뉴</div>
          <div>메뉴 이름1</div>
        </div>
      </div>

      <div className="text-lg mt-10">결제 정보</div>
      <hr className="my-2" />
      <div className="flex text-gray-500 dark:text-white bg-white shadow-md justify-start rounded-lg flex-wrap mx-auto py-4 px-2 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex mx-5 flex-row w-full mb-4 justify-between">
          <div className="w-32">메뉴 가격</div>
          <div className="text-black text-xl">55000원</div>
        </div>
        <div className="flex mx-5 flex-row w-full mb-4 justify-between">
          <div className="w-32">할인</div>
          <div className="text-black text-xl">0원</div>
        </div>
        <div className="flex mx-5 flex-row w-full mb-8 justify-between">
          <div className="w-32">총 결제 금액</div>
          <div className="text-black text-2xl">55000원</div>
        </div>

        <ul className="mb-8 mx-5 space-y-4 text-left text-gray-500 dark:text-gray-400">
          <li className="flex items-center space-x-3">
            {checkIcon}
            <span className="text-sm">
              고객님의 헤어 상태에 따라 선택한 시술이 불가능하거나 추가 비용이
              발생할 수 있습니다.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            {checkIcon}
            <span className="text-sm">
              <span className="text-red-500">
                시술 예약 시간 2시간 전까지 취소시 100% 취소/환불
              </span>
              이 가능하며, 이후 취소하거나 미방문일 경우, 10%의 페널티가
              부과되어 90% 취소/환불 됩니다.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            {checkIcon}
            <span className="text-sm">
              <span className="text-red-500">
                시술 예약 시간 2시간 전까지 '날짜 및 시간' 변경 가능
              </span>
              합니다.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            {checkIcon}
            <span className="text-sm">
              <span className="text-red-500">
                시술 예약 변경은 예약당 3회까지 가능
              </span>
              합니다.
            </span>
          </li>
        </ul>
        <div className="w-full border-t border-t-2 pt-8">
          <div className="flex items-center mb-10 mx-5">
            <input
              id="kakao_pay"
              type="checkbox"
              className="w-4 h-4 mt-1 mb-auto text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={checkKakaoPay}
              onChange={() => setCheckKakaoPay(true)}
              disabled
            />
            <label
              htmlFor="kakao_pay"
              className="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300"
            >
              카카오페이
              <img
                src={KakaoPayImage}
                alt="KakaoPay"
                className="w-1/2 rounded-lg mr-3 mt-3"
              />
            </label>
          </div>
          <div className="flex items-center mx-5">
            <input
              id="agree"
              type="checkbox"
              className="w-4 h-4 mt-1 mb-auto text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={props.agree}
              onChange={() => props.setAgree(!props.agree)}
            />
            <label
              htmlFor="agree"
              className="w-full ml-2 text-xl font-medium text-gray-900 dark:text-gray-300"
            >
              전체 동의하기
              <div className="text-base my-2">
                [필수] 개인정보수집 동의
                <div className="bg-gray-100 text-sm p-2 text-gray-400">
                  <div className="flex flex-row w-full">
                    <div className="w-24 min-[450px]:w-40 text-black">목적</div>
                    <div className="w-full">시술예약</div>
                  </div>
                  <div className="flex flex-row w-full">
                    <div className="w-24 min-[450px]:w-40 text-black">항목</div>
                    <div className="w-full">
                      예약자 이름, 예약자 휴대폰 번호
                    </div>
                  </div>
                  <div className="flex flex-row w-full">
                    <div className="w-24 min-[450px]:w-40 text-black">
                      이용 및 보관 기간
                    </div>
                    <div className="w-full">회원탈퇴 또는 동의 철회 시</div>
                  </div>
                </div>
              </div>
              <div className="text-base my-2">
                [필수] 제3자 정보 제공 동의
                <div className="bg-gray-100 text-sm p-2 text-gray-400">
                  예약 서비스 및 커뮤니케이션을 위해 개인 정보를 제공받는 대상 :
                  리안헤어
                </div>
              </div>
              <div className="text-base my-2">
                [필수] 취소/변경/환불 수수료 동의
                <div className="bg-gray-100 text-sm p-2 text-gray-400">
                  위 명시된 취소/변경/환불 수수료 및 기한을 확인하였음을
                  동의합니다.
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
