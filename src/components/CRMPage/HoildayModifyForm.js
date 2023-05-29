import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../global/Constants";
import Loading from "../Layout/Loading";

function HolidayModifyForm(props) {
  const [Holiday, setHoliday] = useState("");
  const [loading, setLoading] = useState(false);

  const holidayHandler = (event) => setHoliday(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    if (Holiday === "") return alert("휴일을 입력해주세요.");

    setLoading(true);

    let holidayInfo = {
      Holiday: Holiday,
    };

    const formData = new FormData();
    formData.append("jsonlist", JSON.stringify(holidayInfo));

    axios
      .put(API + "/crm/holiday", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          alert("수정 완료!");

          document.body.classList.remove("overflow-hidden");
          props.setShowModal(false);
          props.setReload(!props.reload);
        } else alert("휴일 수정에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("휴일 수정에 실패했습니다.");
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    if (props.modifyData) {
      setHoliday(props.modifyData.Holiday || "");
    }
  }, [props.modifyData]);

  return (
    <div
      className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 ${
        props.showModal ? "active" : "hidden"
      }`}
    >
      {props.showModal && (
        <div className="relative w-full max-w-xl min-h-full mx-auto md:mt-10 mb-24">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => {
                document.body.classList.remove("overflow-hidden");
                props.setShowModal(false);
              }}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                휴일 추가
              </h3>
              <form className="space-y-6" onSubmit={submitHandler}>
                <div>
                  <label
                    htmlFor="Holiday"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    휴일 <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="Holiday"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="휴일"
                    value={Holiday}
                    onChange={holidayHandler}
                  />
                </div>
                {loading ? (
                  <Loading />
                ) : (
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    등록하기
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HolidayModifyForm;
