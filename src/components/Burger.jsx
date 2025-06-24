import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoStarSharp } from "react-icons/io5";
import { motion } from "motion/react";

function Burger({ burger1image, burgername, burgersubtext }) {
  const [heart, setheartyes] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="card1 h-[90%] w-[20%] rounded-md border-[2px] border-gray-400"
    >
      <div
        className="image bg-green-500 h-[58%] w-full bg-cover bg-no-repeat bg-center"
        style={burger1image}
      ></div>

      <div className="rating h-[10%] w-full flex justify-between items-center">
        <div className="stars flex gap-[2px] px-2 text-yellow-300">
          <IoStarSharp className="text-[20px]" />
          <IoStarSharp className="text-[20px]" />
          <IoStarSharp className="text-[20px]" />
          <IoStarSharp className="text-[20px]" />
        </div>
        <div className="heart font-bold text-gray-400 px-4">
          {heart ? (
            <FaHeart
              className="text-[20px] text-pink-400 cursor-pointer"
              onClick={() => setheartyes(!heart)}
            />
          ) : (
            <CiHeart
              className="text-[20px] cursor-pointer"
              onClick={() => setheartyes(!heart)}
            />
          )}
        </div>
      </div>

      <div className="header  h-[8%] text-[20px] font-semibold font-mono flex px-2 py-1 justify-start items-center w-full">
        {burgername}
      </div>
      <div className="subheader h-[12%] text-[10px] font-sans flex justify-start px-2 py-1 items-center w-full">
        {burgersubtext}
      </div>

      <div className="sellcart px-2  h-[12%] w-full  flex justify-between items-center">
        <div className="price h-[75%] rounded-md w-[65px] bg-yellow-800 flex justify-center items-center font-mono font-bold text-yellow-600">
          Free
        </div>
        <div className="addtocart h-[75%] rounded-md w-[130px] bg-yellow-600  flex justify-center items-center font-mono font-bold text-black cursor-pointer">
          Add to Cart
        </div>
      </div>
    </motion.div>
  );
}

export default Burger;
