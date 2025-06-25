import React from "react";
import { motion } from "motion/react";
import cyclepic from "../assets/cycle.png";
import bg from "../assets/2121.jpg";
import { NavLink } from "react-router-dom";

function Explore() {
  const cycleimage = { backgroundImage: `url(${cyclepic})` };
  const bgg = { backgroundImage: `url(${bg})` };

  return (
    <div
      className="section2 w-full min-h-[80vh] flex flex-col md:flex-row justify-center items-center bg-cover bg-no-repeat bg-center px-4 md:px-10 py-10 gap-10"
      style={bgg}
    >
      <div className="text_heading flex flex-col w-full md:w-[50%] justify-start items-start">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="font-mono text-[32px] md:text-[45px] font-bold text-green-700"
        >
          Explore your favourite city food.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="black_to_white font-mono text-[14px] md:text-[16px] mt-4 font-semibold text-green-700"
        >
          Maximum of the restaurants available here, let it be cuisines,
          beverages, Chinese, Japanese etc...
        </motion.p>
<NavLink to="/explore">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="explorebuttonn hover:bg-green-900 transition-all ease-in-out cursor-pointer h-[50px] w-[160px] mt-8 flex justify-center items-center rounded-xl text-white font-bold bg-green-700"
        >
          
          <button className="text-[18px] md:text-[22px]">
            Explore <i className="fa-solid fa-arrow-right"></i>
          </button>
          
        </motion.div>
        </NavLink>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
        className="cycle_asset w-full md:w-[40%] h-[300px] md:h-[400px] bg-contain bg-no-repeat bg-center"
        style={cycleimage}
      ></motion.div>
    </div>
  );
}

export default Explore;