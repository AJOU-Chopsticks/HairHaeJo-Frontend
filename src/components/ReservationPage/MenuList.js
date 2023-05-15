import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";
import { API } from "../../global/Constants";
import axios from "axios";

function MenuList(props) {
  const { designerId } = useParams();
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    axios
      .get(API + "/menu/list?designerId=" + designerId, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setMenuList(response.data.data);
        } else alert("메뉴 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("메뉴 조회에 실패했습니다.");
      });
  }, [designerId]);

  return (
    <div className="w-5/6 sm:w-2/3 xl:w-3/4 mx-auto sm:mx-0">
      <ul className="space-y-2 mb-40">
        {menuList.map((item) => (
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
