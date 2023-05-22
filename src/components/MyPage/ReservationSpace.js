import React, { useState } from "react";
import ReservationCategory from "./ReservationCategory";
import { useSelector } from "react-redux";
import ReservationUser from "./ReservationUser";
import ReservationDesigner from "./ReservationDesigner";

function ReservationSpace() {
  const user = useSelector((state) => state.user);
  const [type, setType] = useState(true);

  return (
    <div>
      <ReservationCategory type={type} setType={setType} />
      {user.role === "ROLE_USER" ? (
        <ReservationUser type={type} />
      ) : (
        <ReservationDesigner type={type} />
      )}
    </div>
  );
}

export default ReservationSpace;
