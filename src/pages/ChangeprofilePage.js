import React from "react";
import ChangeForm from "../components/ChangeprofilePage/ChangeForm";
import ProfileSidebar from "../components/LookupprofilePage/ProfileSidebar";

function ChangeprofilePage() {
  return (
    <div className="container mx-auto pt-16 h-screen">
      <ProfileSidebar />
      <ChangeForm />
    </div>
  );
}

export default ChangeprofilePage;
