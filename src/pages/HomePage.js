import React from "react";
import { useSelector } from "react-redux";

function HomePage() {
  const user = useSelector((state) => state.user);

  return (
    <div className="container mx-auto pt-16 h-screen">
      <div className="text-black dark:text-white">헤어해죠</div>
      <TestButton />
      {user.auth ? (
        <div>
          유저 정보 (로그인 O)
          <br />
          이름 : {user.name}
          <br />
          이메일 : {user.email}
          <br />
          전화번호 : {user.phoneNumber}
        </div>
      ) : (
        <div>유저 정보 (로그인 X)</div>
      )}
    </div>
  );
}

export default HomePage;
