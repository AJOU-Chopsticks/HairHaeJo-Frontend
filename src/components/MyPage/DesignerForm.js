import React, { useEffect, useState } from "react";
import Loading from "../Layout/Loading";
import KakaoMap from "../../global/KakaoMap";

function DesignerForm(props) {
  const [loading, setLoading] = useState(false);
  const [designerInfo, setDesignerInfo] = useState({
    introduction: props.profileInfo.introduction,
    hairSalonName: props.profileInfo.hairSalonName,
    hairSalonNumber: props.profileInfo.hairSalonNumber,
    hairSalonAddress: "",
  });

  const introductionHandler = (event) =>
    setDesignerInfo({ ...designerInfo, introduction: event.target.value });
  const hairSalonNameHandler = (event) =>
    setDesignerInfo({ ...designerInfo, hairSalonName: event.target.value });
  const hairSalonNumberHandler = (event) =>
    setDesignerInfo({ ...designerInfo, hairSalonNumber: event.target.value });

  const submitHandler = (event) => {
    event.preventDefault();

    let introduction = designerInfo.introduction;
    let hairSalonName = designerInfo.hairSalonName;
    let hairSalonNumber = designerInfo.hairSalonNumber;
    let hairSalonAddress = document.getElementById("Kakao_Address").value;

    if (introduction === "") return alert("간단한 자기소개를 입력해주세요.");
    if (hairSalonName === "") return alert("미용실 이름을 입력해주세요.");
    if (hairSalonNumber === "") return alert("미용실 전화번호를 입력해주세요.");
    if (hairSalonAddress === "") return alert("미용실 위치를 등록해주세요.");

    setLoading(true);

    let body = {
      introduction: introduction,
      hairSalonName: hairSalonName,
      hairSalonAddress: hairSalonAddress,
      hairSalonNumber: hairSalonNumber,
    };

    console.log(body);

    setTimeout(() => setLoading(false), 1000);

    // axios
    //   .post(API + "/designer/profile", body, {
    //     headers: {
    //       Authorization: token,
    //     },
    //   })
    //   .then((response) => {
    //     if (!response.data.success)
    //       return alert(response.data.message || "서버 오류");
    //   })
    //   .catch((err) => {
    //     if (err.response.data.message) alert(err.response.data.message);
    //     else alert("프로필 설정에 실패했습니다.");
    //     setLoading(false);
    //   });
  };

  useEffect(() => {
    if (!document.getElementById("Kakao_Address")) return;
    if (document.getElementById("Kakao_Address").value !== "") return;
    document.getElementById("Kakao_Address").value =
      props.profileInfo.hairSalonAddress;
  });

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
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
      {loading ? (
        <Loading />
      ) : (
        <button
          type="submit"
          className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          변경하기
        </button>
      )}
    </form>
  );
}

export default DesignerForm;
