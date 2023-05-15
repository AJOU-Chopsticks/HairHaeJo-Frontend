import React, { useEffect, useState } from "react";
import Stepper from "../components/ReservationPage/Stepper";
import MenuList from "../components/ReservationPage/MenuList";
import DesignerProfile from "../components/ReservationPage/DesignerProfile";
import DateList from "../components/ReservationPage/DateList";
import BottomInfo from "../components/ReservationPage/BottomInfo";
import Payment from "../components/ReservationPage/Payment";
import axios from "axios";
import { API } from "../global/Constants";
import { useParams } from "react-router-dom";

function ReservationPage() {
  // const user = useSelector((state) => state.user);
  const { designerId } = useParams();
  const [designerInfo, setDesignerInfo] = useState({});
  const [agree, setAgree] = useState(false);
  const [step, setStep] = useState(1);
  const [menu, setMenu] = useState({});
  const [when, setWhen] = useState({
    date: "",
    time: "",
  });

  useEffect(() => {
    axios
      .get(API + "/user/info?userId=" + designerId, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          setDesignerInfo({ ...designerInfo, ...response.data.data });
          axios
            .get(API + "/designer/profile/" + designerId, {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            })
            .then((response) => {
              if (response.data.success) {
                setDesignerInfo({ ...designerInfo, ...response.data.data });
              } else alert("프로필 정보 조회에 실패했습니다.");
            })
            .catch((err) => {
              if (err.response.data.message) alert(err.response.data.message);
              else alert("프로필 정보 조회에 실패했습니다.");
            });
        } else alert("유저 정보 조회에 실패했습니다.");
      })
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("유저 정보 조회에 실패했습니다.");
      });
  }, []);

  return (
    <div className="container mx-auto pt-16 min-h-screen">
      <Stepper step={step} />
      <div className="flex flex-row gap-4">
        <DesignerProfile designerInfo={designerInfo} />
        {step === 1 ? (
          <MenuList menu={menu} setMenu={setMenu} />
        ) : step === 2 ? (
          <DateList when={when} setWhen={setWhen} />
        ) : (
          <Payment agree={agree} setAgree={setAgree} />
        )}
      </div>
      <BottomInfo
        step={step}
        setStep={setStep}
        menu={menu}
        when={when}
        agree={agree}
      />
    </div>
  );
}

export default ReservationPage;
