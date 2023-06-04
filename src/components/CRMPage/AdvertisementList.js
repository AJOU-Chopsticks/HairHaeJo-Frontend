import React from "react";
import AdvertisementItem from "./AdvertisementItem";

function AdvertisementList() {
  return (
    <div className="p-4 mb-8 md:ml-64">
      <div className="mb-8 md:mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <AdvertisementItem />
        <AdvertisementItem />
        <AdvertisementItem />
        <AdvertisementItem />
      </div>
    </div>
  );
}

export default AdvertisementList;
