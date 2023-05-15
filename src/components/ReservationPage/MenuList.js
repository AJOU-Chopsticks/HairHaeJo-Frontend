import React from "react";
import MenuItem from "./MenuItem";

const data = [
  {
    menuId: 1,
    designerId: 1,
    menuName: "메뉴 이름1",
    menuPrice: "10000",
    menuContent: "메뉴 설명입니다.",
  },
  {
    menuId: 2,
    designerId: 1,
    menuName: "메뉴 이름2",
    menuPrice: "20000",
    menuContent: "메뉴 설명입니다.",
  },
  {
    menuId: 3,
    designerId: 1,
    menuName: "메뉴 이름3",
    menuPrice: "30000",
    menuContent: "메뉴 설명입니다.",
  },
  {
    menuId: 4,
    designerId: 1,
    menuName: "메뉴 이름4",
    menuPrice: "40000",
    menuContent: "메뉴 설명입니다.",
  },
  {
    menuId: 5,
    designerId: 1,
    menuName: "메뉴 이름5",
    menuPrice: "50000",
    menuContent: "메뉴 설명입니다.",
  },
  {
    menuId: 6,
    designerId: 1,
    menuName: "메뉴 이름6",
    menuPrice: "60000",
    menuContent: "메뉴 설명입니다.",
  },
  {
    menuId: 7,
    designerId: 1,
    menuName: "메뉴 이름7",
    menuPrice: "70000",
    menuContent: "메뉴 설명입니다.",
  },
  {
    menuId: 8,
    designerId: 1,
    menuName: "메뉴 이름8",
    menuPrice: "80000",
    menuContent: "메뉴 설명입니다.",
  },
];

function MenuList(props) {
  return (
    <div className="w-5/6 sm:w-2/3 xl:w-3/4 mx-auto sm:mx-0">
      <ul className="space-y-2 mb-40">
        {data.map((item) => (
          <MenuItem
            key={item.menuId}
            data={item}
            menu={props.menu}
            setMenu={props.setMenu}
          />
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
