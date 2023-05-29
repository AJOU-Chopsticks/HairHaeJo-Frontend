import React, { useState } from "react";
import DeleteModal from "./DeleteModal";

function MemoItem(props) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <div className="flex p-4 mb-4 text-primary-800 border-t-4 border-primary-300 bg-primary-50 dark:text-primary-400 dark:bg-gray-800 dark:border-primary-800">
        <div className="ml-3 text-sm font-medium">{props.data.memo}</div>
        <button
          className="ml-auto -mx-1.5 -my-1.5 bg-primary-50 text-primary-500 rounded-lg focus:ring-2 focus:ring-primary-400 p-1.5 hover:bg-primary-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-primary-400 dark:hover:bg-gray-700"
          onClick={() => setShowDeleteModal(true)}
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
      </div>
      <DeleteModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        memoId={props.data.memoId}
        reload={props.reload}
        setReload={props.setReload}
      />
    </>
  );
}

export default MemoItem;
