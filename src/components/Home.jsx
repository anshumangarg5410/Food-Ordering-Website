import React from "react";
import { motion } from "framer-motion";
import backg from "../assets/bg9.jpg";
import { NavLink } from "react-router-dom";

function Home() {
  const bg = {
    backgroundImage: `url(${backg})`,
  };

  return (
    <div
      className="w-screen min-h-screen flex flex-col md:flex-row justify-evenly items-center bg-center bg-no-repeat bg-cover px-6 md:px-20"
      style={bg}
    >
      {/* Left Text Content */}
      <motion.div
        className="w-full md:w-[50%] text-center md:text-left flex flex-col justify-center items-center md:items-start"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-extrabold text-[48px] md:text-[100px] text-white leading-tight drop-shadow-xl">
          Order Your
        </p>
        <p className="font-bold text-[36px] md:text-[70px] text-orange-200 leading-tight drop-shadow-md">
          Fav Food!!
        </p>
        <p className="font-semibold text-[28px] md:text-[50px] text-white drop-shadow">
          Anywhere, Anytime.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 w-full md:w-[80%] justify-center md:justify-start mt-10">
          <NavLink to="/ordernow" className="w-1/2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-[60px] w-full bg-yellow-500 hover:bg-yellow-600 text-white text-xl md:text-2xl font-bold font-mono rounded-xl flex justify-center items-center shadow-lg"
            >
              Order Now
            </motion.div>
          </NavLink>

          <NavLink to="/login" className="w-1/2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-[60px] w-full bg-orange-500 hover:bg-orange-600 text-white text-xl md:text-2xl font-bold font-mono rounded-xl flex justify-center items-center shadow-lg"
            >
              Log In
            </motion.div>
          </NavLink>
        </div>
      </motion.div>

      {/* Optional Right Image / Illustration */}
      <motion.div
        className="hidden md:block w-[40%] h-[80%] bg-no-repeat bg-center bg-contain"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {/* You can add a burger/chef SVG here or a mascot */}
      </motion.div>
    </div>
  );
}

export default Home;