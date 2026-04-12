import React, { useState, useEffect } from "react";
import logo from "../assets/logorr.png";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.cart);
  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/landingpage" },
    { label: "Explore", path: "/explore" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-[999] transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-12">
          
          <div className="flex items-center gap-8">
            <NavLink to="/landingpage" className="flex items-center gap-2">
              <img src={logo} alt="Mama's Kitchen" className="h-10 w-10 object-contain" />
              <span className={`font-display font-bold text-xl hidden sm:block ${scrolled ? 'text-gray-900' : 'text-gray-900 drop-shadow-sm'}`}>Mama's Kitchen</span>
            </NavLink>

            <ul className="hidden md:flex items-center gap-6">
              {navItems.map(({ label, path }) => (
                <li key={path} className="relative group">
                  <NavLink to={path} className="font-medium text-gray-700 hover:text-brand-600 transition-colors py-2">
                    {({ isActive }) => (
                      <>
                        <span className={isActive ? "text-brand-600" : ""}>{label}</span>
                        {isActive && (
                          <motion.div
                            layoutId="navbar-indicator"
                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-500 rounded-full"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex flex-1 max-w-md mx-6">
            <div className={`relative w-full flex items-center transition-all duration-300 ${searchFocused ? 'ring-2 ring-brand-500 rounded-full' : ''}`}>
              <div className="absolute left-3 text-gray-400">
                <FiSearch size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Search for restaurant, cuisine or a dish" 
                className="w-full bg-gray-100 text-gray-800 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:bg-white transition-colors border border-transparent focus:border-transparent text-sm"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            
            <NavLink to="/cart" className="relative text-gray-700 hover:text-brand-600 transition-colors p-2">
              <FiShoppingCart size={22} />
              <AnimatePresence>
                {totalCartItems > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-0 right-0 inline-flex items-center justify-center min-w-[20px] h-[20px] text-xs font-bold text-white bg-brand-500 border-2 border-white rounded-full -translate-y-1 translate-x-1"
                  >
                    {totalCartItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>

            <div className="hidden sm:flex items-center gap-3 border-l border-gray-200 pl-6">
              <NavLink to="/login" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                Log in
              </NavLink>
              <NavLink to="/signin" className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors shadow-sm cursor-pointer whitespace-nowrap">
                Sign Up
              </NavLink>
            </div>

            <button 
              className="md:hidden text-gray-700 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[998] bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-lg">
              <div className="relative w-full">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-gray-100 rounded-lg py-3 pl-10 pr-4 outline-none"
                />
              </div>
              
              <NavLink to="/landingpage" onClick={() => setMenuOpen(false)} className="font-semibold text-gray-800 border-b border-gray-100 pb-4">Home</NavLink>
              <NavLink to="/explore" onClick={() => setMenuOpen(false)} className="font-semibold text-gray-800 border-b border-gray-100 pb-4">Explore Menu</NavLink>
              <NavLink to="/account" onClick={() => setMenuOpen(false)} className="font-semibold text-gray-800 border-b border-gray-100 pb-4">My Account</NavLink>
              
              <div className="flex flex-col gap-3 mt-4">
                <NavLink to="/login" onClick={() => setMenuOpen(false)} className="w-full py-3 text-center rounded-lg border border-gray-300 font-medium">Log in</NavLink>
                <NavLink to="/signin" onClick={() => setMenuOpen(false)} className="w-full py-3 text-center rounded-lg bg-brand-500 text-white font-medium">Sign up</NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;