import React, { useState } from "react";
import { AddressToSimple } from "../../global/Functions";
import { useSelector } from "react-redux";
import AdvertisementModify from "./AdvertisementModify";
import AdvertisementDelete from "./AdvertisementDelete";

function AdvertisementItem(props) {
  const user = useSelector((state) => state.user);
  const [showModifyModal, setShowModifyModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  if (props.data.state === 0) return null;

  return (
    <>
      <div className="p-4 rounded-lg border border-primary-300 bg-primary-50 dark:bg-primary-900 dark:border-primary-800">
        <div className="flex items-center mb-3">
          <span className="bg-red-100 text-red-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
            {props.data.state === 1
              ? "결제 완료"
              : props.data.state === 2
              ? "승인 완료"
              : "취소/거절"}
          </span>
        </div>
        <div className="p-2 text-primary-800 border border-primary-300 rounded-lg bg-primary-50 dark:bg-gray-800 dark:text-primary-400 dark:border-primary-800">
          <div className="font-bold text-center">{props.data.title}</div>
        </div>
        <div className="flex items-center space-x-3 my-3">
          <img
            className="rounded-full w-9 h-9"
            src={user.profileImage}
            alt="Advertiser_Image"
          />
          <div className="space-y-0.5 text-sm font-medium dark:text-white text-left">
            <div>{user.name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {AddressToSimple(props.data.location)}
            </div>
          </div>
        </div>
        <figure>
          <img
            className="h-auto max-w-full rounded-lg"
            src={props.data.image}
            alt="Advertisement_Image"
          />
          <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {props.data.text}
          </figcaption>
        </figure>
        <div className="mt-8">
          <div className="text-center text-xs text-black-500 dark:text-gray-400">
            {props.data.startDate + " ~ " + props.data.endDate}
          </div>
          <button
            className="w-full mt-4 px-4 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={() => setShowModifyModal(true)}
          >
            수정
          </button>
          <button
            className="w-full mt-4 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
            onClick={() => setShowDeleteModal(true)}
          >
            취소 및 환불
          </button>
        </div>
      </div>
      <AdvertisementModify
        showModal={showModifyModal}
        setShowModal={setShowModifyModal}
        data={props.data}
        reload={props.reload}
        setReload={props.setReload}
      />
      <AdvertisementDelete
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        data={props.data}
        reload={props.reload}
        setReload={props.setReload}
      />
    </>
  );
}

export default AdvertisementItem;
