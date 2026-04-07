import React from "react";
import Home from '../components/Home';
import Explore from "../components/Explore";
import Cards from "../components/Cards";
import Special_burg from "../components/Special_burg";
import Androidiox from "../components/Androidiox";

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
