import React from "react";
import { motion } from "motion/react"
import backg from "../assets/bg9.jpg";
import { NavLink } from "react-router-dom";

function Home() {

  const bg = {
    backgroundImage: `url(${backg})`,
  };

  return (
    <div className="w-screen h-[100vh] flex justify-evenly items-center bg-center bg-no-repeat bg-cover" style={bg}>
      <motion.div className="header h-[100%] w-[50%] flex flex-col justify-center items-center"
        initial={{
            x:-1000
        }}
        animate={{
            x:0
        }}
        transition={{
            delay: 0.2,
        }}
      >
        <p className="font-bold text-[120px] font-sans text-white ">
          Order Your{" "}
        </p>
        <p className="font-bold text-[90px] font-sans text-gray-200 ">
          Fav Food!!
        </p>
        <p className="font-bold text-[60px] font-sans text-white ">
          Anywhere Anytime!!{" "}
        </p>
        <div className="h-[100px] w-[80%] flex justify-evenly items-center">
          <NavLink to="/ordernow" className={`w-[50%]`}>
          <div className="h-[60px] w-full cursor-pointer hover:brightness-50 transition-all ease-in-out bg-yellow-600 mt-10 rounded-l-lg flex justify-center items-center text-[30px] font-bold font-mono ">
            <p>Order Now</p>
          </div>
          </NavLink>
          <NavLink to="/login" className={`w-[50%]`}>
          <div className="h-[60px] w-full cursor-pointer hover:brightness-50 transition-all ease-in-out bg-orange-500 mt-10 rounded-r-lg flex justify-center items-center text-[30px] font-bold font-mono ">
            <p>Log In</p>
          </div>
          </NavLink>
        </div>
      </motion.div>
      <div className="pic h-[80%] w-[40%]"></div>
    </div>
  );
}

export default Home;
