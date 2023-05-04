import React from "react";

function Article(props) {
  return (
    <figure
      className="flex flex-col items-center justify-center p-8 text-center bg-white border-2 border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-sm hover:cursor-pointer hover:bg-gray-50 hover:border-primary-700 dark:hover:cursor-pointer dark:hover:border-primary-700"
      onClick={() => {
        document.body.classList.add("overflow-hidden");
        props.setDetailTarget(props.data.articleId);
        props.setShowDetail(true);
      }}
    >
      <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {props.data.articleTitle}
        </h3>
        <p className="my-4">{`${props.data.gender} / ${props.data.category} / ${props.data.tag}`}</p>
      </blockquote>
      <figcaption className="flex items-center justify-center space-x-3">
        <img
          className="rounded-full w-9 h-9"
          src={props.data.profileImage}
          alt="Profile_Image"
        />
        <div className="space-y-0.5 font-medium dark:text-white text-left">
          <div>{props.data.userName}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {props.data.region}
            {/* {props.data.region.split(" ")[1]} */}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export default Article;
