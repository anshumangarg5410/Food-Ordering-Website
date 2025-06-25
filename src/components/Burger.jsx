import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoStarSharp } from "react-icons/io5";
import { motion } from "motion/react";

function Burger({ burger1image, burgername, burgersubtext }) {
  const [heart, setHeartYes] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="card1 flex-shrink-0 w-[250px] sm:w-[280px] md:w-[300px] h-[380px] bg-white/5 backdrop-blur-md border border-gray-400 rounded-lg text-white"
    >
      <div
        className="image h-[55%] bg-cover bg-center rounded-t-lg"
        style={burger1image}
      ></div>

      <div className="px-3 py-2">
        <div className="rating flex justify-between items-center mb-1">
          <div className="stars flex gap-1 text-yellow-300">
            {[...Array(4)].map((_, i) => (
              <IoStarSharp key={i} className="text-[18px]" />
            ))}
          </div>
          <div className="heart">
            {heart ? (
              <FaHeart
                className="text-[18px] text-pink-400 cursor-pointer"
                onClick={() => setHeartYes(!heart)}
              />
            ) : (
              <CiHeart
                className="text-[18px] cursor-pointer"
                onClick={() => setHeartYes(!heart)}
              />
            )}
          </div>
        </div>

        <div className="header font-semibold text-[16px] md:text-[18px] mb-1">
          {burgername}
        </div>
        <div className="subheader text-sm text-gray-300 mb-3 font-mono">
          {burgersubtext}
        </div>

        <div className="flex justify-between items-center">
          <div className="price bg-yellow-800 px-4 py-1 rounded text-yellow-100 text-sm font-bold">
            Free
          </div>
          <div className="addtocart bg-yellow-500 px-4 py-1 rounded text-black font-bold text-sm cursor-pointer hover:bg-yellow-600">
            Add to Cart
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Burger;