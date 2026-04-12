import React from "react";
import { motion } from "framer-motion";
import backg from "../assets/bg9.jpg";
import { NavLink } from "react-router-dom";
import { FiMapPin, FiArrowRight } from "react-icons/fi";

function Home() {
  return (
    <div className="relative w-full min-h-screen pt-24 pb-12 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 xl:px-24 bg-brand-50 overflow-hidden">
      
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10 pt-10 lg:pt-0"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <FiMapPin className="text-brand-500" />
          <span className="text-sm font-medium text-gray-600">Delivering to <span className="text-gray-900 font-bold">New Delhi, India</span></span>
        </motion.div>

        <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-[1.1] tracking-tight mb-6">
          Premium food, <br className="hidden lg:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-yellow-500">
            delivered fast.
          </span>
        </h1>
        
        <p className="font-sans text-lg md:text-xl text-gray-600 mb-10 max-w-lg">
          Discover the best food & drinks in your city. Perfectly curated menus, delivered right to your doorstep.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <NavLink to="/explore">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-14 px-8 bg-brand-500 hover:bg-brand-600 text-white text-lg font-semibold rounded-full flex justify-center items-center shadow-[0_8px_20px_rgba(249,115,22,0.3)] transition-colors group cursor-pointer gap-2"
            >
              Order Now
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </NavLink>

          <NavLink to="/explore">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-14 px-8 bg-white text-gray-800 border border-gray-200 text-lg font-semibold rounded-full flex justify-center items-center shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              View Menu
            </motion.div>
          </NavLink>
        </div>
        
        <div className="flex gap-8 mt-12 pt-8 border-t border-gray-200/60 w-full max-w-md justify-center lg:justify-start">
          <div>
            <p className="text-3xl font-display font-bold text-gray-900">500+</p>
            <p className="text-sm text-gray-500 font-medium mt-1">Restaurants</p>
          </div>
          <div className="w-px h-12 bg-gray-200"></div>
          <div>
            <p className="text-3xl font-display font-bold text-gray-900">10k+</p>
            <p className="text-sm text-gray-500 font-medium mt-1">Daily Orders</p>
          </div>
          <div className="w-px h-12 bg-gray-200"></div>
          <div>
            <p className="text-3xl font-display font-bold text-gray-900">4.8</p>
            <p className="text-sm text-gray-500 font-medium mt-1">User Rating</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="relative w-full max-w-[550px] aspect-square">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-brand-400 to-yellow-300 rounded-[3rem] rotate-3 opacity-20"
            animate={{ rotate: [3, 5, 3] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          ></motion.div>
          
          <img 
            src={backg} 
            alt="Delicious Food" 
            className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-2xl"
          />
          
          <motion.div 
            className="absolute -bottom-6 -left-6 lg:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl font-bold">
              ✓
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Delivery usually in</p>
              <p className="text-lg font-bold text-gray-900">30 minutes</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;