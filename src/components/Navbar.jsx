import React, { useState } from "react";
import logo from "../assets/logorr.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const logoimage = {
    backgroundImage: `url(${logo})`,
  };

  const navItems = [
    { label: "Home", path: "/landingpage" },
    { label: "Explore", path: "/explore" },
    { label: "Cart", path: "/cart" },
    { label: "Account", path: "/account" },
    { label: "Contact Us", path: "/contactus" },
    { label: "About Us", path: "/aboutus" },
  ];

  const authItems = [
    { label: "Log In", path: "/login" },
    { label: "Sign Up", path: "/signin" },
  ];

  return (
    <motion.div
      className="header h-[13vh] w-screen flex justify-center items-center fixed top-0 z-[99999999]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="container w-full h-[60%] rounded-xl backdrop-blur-lg bg-black/40 border border-gray-400 flex justify-between items-center px-4 md:px-8">
        <div
          className="logo bg-center bg-cover bg-no-repeat h-full w-[12%] sm:w-[8%] md:w-[6%]"
          style={logoimage}
        ></div>

        <div className="hidden md:flex h-full w-[65%] justify-center items-center">
          <ul className="flex justify-evenly items-center h-full w-full text-white font-sans text-sm md:text-base">
            {navItems.map(({ label, path }) => (
              <li key={path} className="relative cursor-pointer">
                <NavLink to={path}>
                  {({ isActive }) => (
                    <div className="flex flex-col items-center">
                      <span
                        className={isActive ? "text-gray-200" : "text-white"}
                      >
                        {label}
                      </span>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? "100%" : 0 }}
                        transition={{ duration: 0.4 }}
                        className="h-[2px] bg-white"
                      />
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex h-[60%] w-[25%] justify-center items-center border-l border-gray-400">
          <ul className="flex justify-evenly items-center h-full w-full text-white font-sans text-sm md:text-base">
            {authItems.map(({ label, path }) => (
              <li key={path} className="relative cursor-pointer">
                <NavLink to={path}>
                  {({ isActive }) => (
                    <div className="flex flex-col items-center">
                      <span
                        className={isActive ? "text-gray-200" : "text-white"}
                      >
                        {label}
                      </span>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? "100%" : 0 }}
                        transition={{ duration: 0.4 }}
                        className="h-[2px] bg-white"
                      />
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden text-white text-2xl cursor-pointer">
          {menuOpen ? (
            <FiX onClick={() => setMenuOpen(false)} />
          ) : (
            <FiMenu onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-[13vh] left-0 w-full bg-black/90 text-white flex flex-col items-center px-6 py-4 gap-4 md:hidden z-[9999]">
          {[...navItems, ...authItems].map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className="text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default Navbar;