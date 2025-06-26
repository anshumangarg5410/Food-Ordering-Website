import React from 'react';
import { motion } from 'framer-motion';

function OrderPlaces() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={`fixed top-0 left-0 h-[100vh] w-[100vw] flex justify-center items-center  z-[999999999]`}
    >
      <div className="h-[33%] w-[80%] md:w-[50%] text-[25px] p-4 font-bold flex flex-col justify-center items-center gap-6 shadow-2xl bg-[rgb(255,255,255)] text-black rounded-lg text-center">
        <div>Your Order has been Placed!</div>
        <div className="text-[20px] font-medium">
          Sit back and relax while we prepare your order and deliver it to your home
        </div>
        <div className="text-[22px] font-bold text-green-700">Estimated Delivery time: 30 Mins</div>
      </div>
    </motion.div>
  );
}

export default OrderPlaces;