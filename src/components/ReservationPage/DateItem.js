import React from "react";

function DateItem(props) {
  return (
    <>
      {props.when.date !== props.item.date ? (
        <div
          className="flex-shrink-0 flex group hover:bg-primary-500 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all duration-300 cursor-pointer justify-center w-16"
          onClick={() =>
            props.setWhen({ ...props.when, date: props.item.date })
          }
        >
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all dark:text-gray-400   group-hover:font-semibold duration-300">
                {props.item.day}
              </p>
              <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300 dark:text-gray-400">
                {props.item.date}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-shrink-0 flex group bg-primary-600 shadow-lg dark-shadow rounded-full mx-1 cursor-pointer justify-center relative w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className="text-gray-100 text-sm font-semibold">
                {props.item.day}
              </p>
              <p className="text-gray-100  mt-3 font-bold">{props.item.date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DateItem;
