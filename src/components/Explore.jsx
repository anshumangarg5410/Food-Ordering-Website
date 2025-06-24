import React from "react";
import { motion } from "motion/react";
import cyclepic from "../assets/cycle.png";
// import bg from "../assets/2323.avif";
import bg from "../assets/2121.jpg";

function Explore() {
  const cycleimage = { backgroundImage: `url(${cyclepic})` };

  const bgg = { backgroundImage: `url(${bg})` };

  return (
    <div
      className="section2 w-full h-[60vh] flex justify-center items-center bg-cover bg-no-repeat"
      style={bgg}
    >
      <div className="text_heading flex flex-col h-[80%] w-[49%] justify-start items-start">
        <p1 className="font-mono text-[50px] font-bold mt-10 text-green-700">
          Explore your favourate city food.
        </p1>
        <p2 className="black_to_white font-mono text-[15px] mt-4 font-bold text-green-700">
          Maximum of the restaurants avaliable here, let it be cuisines,
          beverages, chinese, japanese etc...
        </p2>

        <motion.div
          className="explorebuttonn cursor-pointer h-[60px] mt-10 w-[200px] flex justify-center items-center rounded-2xl text-white font-bold bg-green-700"
          whileHover={{
            scale: 1.1,
          }}
        >
          <button className="explorebutton text-[30px]">
            {" "}
            Explore <i className="fa-solid fa-arrow-right"></i>{" "}
          </button>
        </motion.div>
      </div>

      <div
        className="cycle_asset h-[80%] w-[40%] bg-contain bg-no-repeat"
        style={cycleimage}
      ></div>
    </div>
  );
}

export default Explore;
