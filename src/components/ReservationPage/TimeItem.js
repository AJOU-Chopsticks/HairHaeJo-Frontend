import React from "react";

function TimeItem(props) {
  const checkTime = () => {
    let now = props.item.replace(":", "-");

    if (props.noTime.indexOf(now) < 0) return true;
    else return false;
  };

  return (
    <>
      {checkTime() &&
        (props.when.time === props.item ? (
          <div className="flex-shrink-0 my-2 flex group bg-primary-600 shadow-lg dark-shadow rounded-full mx-1 cursor-pointer justify-center relative">
            <div className="flex items-center px-6 my-2 py-1">
              <div className="text-center text-gray-100 text-md">
                {props.item}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="flex-shrink-0 my-2 flex group bg-gray-100 hover:bg-primary-500 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all duration-300 cursor-pointer justify-center"
            onClick={() => props.setWhen({ ...props.when, time: props.item })}
          >
            <div className="flex items-center px-6 my-2 py-1">
              <div className="text-gray-900 group-hover:text-gray-100 text-md transition-all duration-300">
                {props.item}
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default TimeItem;
