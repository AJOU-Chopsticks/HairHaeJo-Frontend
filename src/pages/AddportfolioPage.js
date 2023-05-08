import React from "react";
import ProfileSidebar from "../components/LookupprofilePage/ProfileSidebar";
import PortfolioForm from "../components/AddportfolioPage/PortfolioForm";
import PortfolioList from "../components/AddportfolioPage/PortfolioList";

function AddportfolioPage() {
  return (
    <div className="container mx-auto pt-16 h-screen">
      <ProfileSidebar />
      {/*<PortfolioList />*/}
      <PortfolioForm />
    </div>
  );
}

export default AddportfolioPage;
