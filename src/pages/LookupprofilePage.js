import React from "react";
import LookupForm from "../components/LookupprofilePage/LookupForm";
import ProfileSidebar from "../components/LookupprofilePage/ProfileSidebar";

function LookupprofilePage() {
  return (
    <div className="container mx-auto pt-16 h-screen">
      <ProfileSidebar />
      <LookupForm />
    </div>
  );
}

export default LookupprofilePage;
