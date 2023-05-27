import axios from "axios";
import React, { useState } from "react";
import { API } from "../../global/Constants";
import Loading from "../Layout/Loading";
import { useSelector } from "react-redux";

function MemoForm(props) {
  const user = useSelector((state) => state.user);
  const [memo, setMemo] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    if (memo === "") return alert("메모를 작성해주세요.");

    setLoading(true);

    axios
      .post(
        API + "/crm/customer/memo/" + props.clientId,
        { DesignerID: user.userId, UserID: props.clientId, memo: memo },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          setMemo("");
          props.setReload(!props.reload);
        } else alert("메모 등록에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("메모 등록에 실패했습니다.");
      })
      .then(() => setLoading(false));
  };

  return (
    <div className="mt-10">
      <form onSubmit={submitHandler}>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <textarea
              rows="4"
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="새로운 메모를 작성해주세요."
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center justify-center px-3 py-2 border-t dark:border-gray-600">
            {loading ? (
              <Loading />
            ) : (
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                등록하기
              </button>
            )}
          </div>
        </div>
      </form>
      <p className="ml-auto text-xs text-gray-500 dark:text-gray-400">
        고객에 대한 메모를 등록해주세요.
      </p>
    </div>
  );
}

export default MemoForm;
