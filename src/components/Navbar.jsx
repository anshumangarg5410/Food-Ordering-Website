import React from "react";
import logo from "../assets/logorr.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Navbar() {
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
      className="header h-[13vh] w-screen flex justify-center items-center fixed z-[99999999]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="container w-full h-[60%] rounded-xl backdrop-blur-lg bg-black/40 border-gray-400 border-double border-[1px] flex justify-evenly items-center px-4">
        {/* Logo */}
        <div
          className="logo bg-center bg-cover bg-no-repeat h-full w-[6%]"
          style={logoimage}
        ></div>

        {/* Nav Links */}
        <div className="main h-full w-[70%] flex justify-center items-center">
          <ul className="flex justify-evenly items-center h-full w-full text-white font-sans">
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

        {/* Auth */}
        <div className="menubars h-[60%] w-[22%] flex justify-center items-center border-l border-gray-400">
          <ul className="flex justify-evenly items-center h-full w-full text-white font-sans">
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
      </div>
    </motion.div>
  );
}

export default Navbar;
