import React from "react";
import Home from "./Home";
import Explore from "./Explore";
import Cards from "./Cards";
import Special_burg from "./Special_burg";
import Androidiox from "./androidiox";

function LandingPage() {
  return (
    <>
      <Home />

      <div className="divider h-[80px] mt-[-40px] absolute w-full flex justify-center items-center">
        <div className="circle h-[80px] w-[80px] rounded-full bg-[url('./assets/down_arrow.png')] bg-center bg-no-repeat bg-contain overflow-hidden  bg-yellow-300 "></div>
      </div>

      <Explore />

      <div className="divider h-[80px] mt-[-40px] absolute w-full flex justify-center items-center">
        <div className="circle h-[80px] w-[80px] rounded-full bg-[url('./assets/down_arrow.png')] bg-center bg-no-repeat bg-contain overflow-hidden  bg-yellow-300 "></div>
      </div>

      <Cards />

      <div className="divider h-[80px] mt-[-40px] absolute w-full flex justify-center items-center">
        <div className="circle h-[80px] w-[80px] rounded-full bg-[url('./assets/down_arrow.png')] bg-center bg-no-repeat bg-contain overflow-hidden  bg-yellow-300 "></div>
      </div>

      <Special_burg />

      <div className="divider h-[80px] mt-[-40px] absolute w-full flex justify-center items-center">
        <div className="circle h-[80px] w-[80px] rounded-full bg-[url('./assets/down_arrow.png')] bg-center bg-no-repeat bg-contain overflow-hidden  bg-yellow-300 "></div>
      </div>

      <Androidiox />

      <div className="divider h-[80px] mt-[-40px] absolute w-full flex justify-center items-center">
        <div className="circle h-[80px] w-[80px] rounded-full bg-[url('./assets/thumbsup.png')] bg-center bg-no-repeat bg-contain overflow-hidden  bg-yellow-300 "></div>
      </div>
    </>
  );
}

export default LandingPage;
