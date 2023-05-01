import React from "react";
import CategoryItem from "./CategoryItem";
import { CATEGORY } from "../../global/Constants";

function ArticleCategory() {
  return (
    <ul className="w-full mb-6 gap-2 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {CATEGORY.map((item) => (
        <CategoryItem
          key={"filter_" + item.id}
          id={"filter_" + item.id}
          value={item.value}
          name={"filter_category"}
        />
      ))}
    </ul>
  );
}

export default ArticleCategory;
