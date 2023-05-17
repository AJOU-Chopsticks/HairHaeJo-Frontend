import React from "react";
import Iyou from "../../images/Iyou.png";
import YeonHwa from "../../images/YeonHwa.png";
import Ohyoungsu from "../../images/Ohyoungsu.png";
import Stars from "./Stars";

function Testmonial() {
  return (
    <div className="mt-10 mx-5">
      <div className="mx-auto text-center">
        <h3 className="mb-6 text-3xl font-bold text-neutral-800 dark:text-neutral-200">
          사용 후기
        </h3>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0">
          해어해죠는 디자이너들에게는 단골 고객 유치 및 일자리 창출 기회를,
          고객들에게는 맞춤형 스타일과 디자이너를 제공합니다.
          <br />
          보다 신뢰성 있는 매칭으로 진행되기 때문에 써보시면 어느 누구도
          후회하지 않을 자신이 있습니다!
        </p>
      </div>

      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={Iyou}
              className="w-32 h-32 rounded-full shadow-lg dark:shadow-black/30"
              alt="Iyou"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">아이유</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
            연예인/가수
          </h6>
          <Stars />
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24"
            >
              <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            기존에 다니던 숍에서는 시술하기 전에 미용사분께 원하는 헤어스타일을
            어느정도 얘기한 다음 시술이 들어가는데 우연히 발견한 이 어플을
            썼더니 숍 가기 전에 미리 상담을 거치고 가기 때문에 가자마자 바로
            머리를 자를 수 있어서 스케줄 시간 절약에 큰 도움이 됬습니다!
          </p>
        </div>

        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={YeonHwa}
              className="w-32 h-32 rounded-full shadow-lg dark:shadow-black/30"
              alt="YeonHwa"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">금강연화</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
            유튜버/헤어디자이너
          </h6>
          <Stars />
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24"
            >
              <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            유튜버 활동으로 머리 자르는 컨텐츠를 주로 진행중인데 매번 다른
            유튜버들과의 합방으로 미용실이 아닌 직접 가서 잘라주다 보니 지치고
            힘이 들었어요. 그런데 헤어해죠 어플을 통해 미리 고객들을 유치해서
            인지도도 쌓고 미용실 홍보도 되서 정말 고맙습니다!
          </p>
        </div>

        <div className="mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={Ohyoungsu}
              className="w-32 h-32 rounded-full shadow-lg dark:shadow-black/30"
              alt="Ohyoungsu"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">오영수</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
            오징어게임 출연자/배우
          </h6>
          <Stars />
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24"
            >
              <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            20년동안 다니던 단골 미용실이 있었는데 얼마 전에 문을 닫아버렸지
            뭐야... 안그래도 머리에 탈모도 있고 숱도 별로 없어서 훨씬 전문적인
            헤어디자이너를 구하고 싶었거든. 근데 이 어플을 사용해보니 30분도 채
            안되서 마음에 드는 디자이너를 구했지 뭐야! 서로의 정보를 미리
            공유하고 실력도 어느 정도인지 확인할 수 있어서 신뢰성이 높은 이 어플
            강력 추천하니까 모두 써봐!!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testmonial;
