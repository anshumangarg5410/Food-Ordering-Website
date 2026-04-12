import React from "react";
import Home from '../components/Home';
import Explore from "../components/Explore";
import Cards from "../components/Cards";
import Special_burg from "../components/Special_burg";
import Androidiox from "../components/Androidiox";

function LandingPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-brand-50 pb-20 space-y-12 md:space-y-24">
      <Home />
      <Explore />
      <Cards />
      <Special_burg />
      <Androidiox />
    </div>
  );
}

export default LandingPage;
