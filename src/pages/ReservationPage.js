import React, { useEffect, useState } from "react";
import Stepper from "../components/ReservationPage/Stepper";
import MenuList from "../components/ReservationPage/MenuList";
import DesignerProfile from "../components/ReservationPage/DesignerProfile";
import DateList from "../components/ReservationPage/DateList";
import BottomInfo from "../components/ReservationPage/BottomInfo";
import Payment from "../components/ReservationPage/Payment";
import axios from "axios";
import { API } from "../global/Constants";
import { useParams, useSearchParams } from "react-router-dom";
import Result from "../components/ReservationPage/Result";

function ReservationPage() {
  const { designerId } = useParams();
  const [searchParams] = useSearchParams();
  const [result, setResult] = useState(true);
  const [designerInfo, setDesignerInfo] = useState({});
  const [designerProfileInfo, setDesignerProfileInfo] = useState({});
  const [agree, setAgree] = useState(false);
  const [step, setStep] = useState(1);
  const [menu, setMenu] = useState({});
  const [when, setWhen] = useState({
    date: "",
    time: "",
  });

  useEffect(() => {
    if (designerId === "result") {
      setResult(true);
      localStorage.setItem("pg_token", searchParams.get("pg_token"));
      window.close();
    } else {
      setResult(false);
      axios
        .get(API + "/user/info?userId=" + designerId, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.success) {
            setDesignerInfo(response.data.data);
            axios
              .get(API + "/designer/profile/" + designerId, {
                headers: {
                  Authorization: localStorage.getItem("token"),
                },
              })
              .then((response) => {
                if (response.data.success) {
                  setDesignerProfileInfo(response.data.data);
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
    }
  }, [designerId, searchParams]);

  return (
    <div className="container mx-auto pt-16 min-h-screen">
      {result ? (
        <>결제 완료</>
      ) : (
        <>
          <Stepper step={step} />
          <div className="flex flex-row gap-4">
            <DesignerProfile
              designerInfo={designerInfo}
              designerProfileInfo={designerProfileInfo}
            />
            {step === 1 ? (
              <MenuList menu={menu} setMenu={setMenu} />
            ) : step === 2 ? (
              <DateList when={when} setWhen={setWhen} />
            ) : step === 3 ? (
              <Payment
                agree={agree}
                setAgree={setAgree}
                menu={menu}
                when={when}
                designerInfo={designerInfo}
                designerProfileInfo={designerProfileInfo}
              />
            ) : (
              <Result />
            )}
          </div>
          <BottomInfo
            step={step}
            setStep={setStep}
            menu={menu}
            when={when}
            agree={agree}
          />
        </>
      )}
    </div>
  );
}

export default ReservationPage;
