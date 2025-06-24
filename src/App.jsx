import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import backg from "./assets/bg9.jpg";
import { motion } from "motion/react";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import Cards from "./components/Cards";

function App() {
  const bg = {
    backgroundImage: `url(${backg})`,
  };
  return (
    <>
      <div
        className="helo bg-center bg-cover bg-no-repeat w-screen h-screen"
        style={bg}
      >
        <motion.div
          className="navv absolut"
          initial={{
            y: -100,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          <Navbar />
        </motion.div>

        <Home />
      </div>
      <div className="divider h-[80px] mt-[-40px] absolute w-full flex justify-center items-center">
        <div className="circle h-[80px] w-[80px] rounded-full bg-[url('./assets/down_arrow.png')] bg-center bg-no-repeat bg-contain overflow-hidden  bg-yellow-300 "></div>
      </div>
      <Explore />
   <div className="divider h-[80px] mt-[-40px] absolute w-full flex justify-center items-center">
        <div className="circle h-[80px] w-[80px] rounded-full bg-[url('./assets/down_arrow.png')] bg-center bg-no-repeat bg-contain overflow-hidden  bg-yellow-300 "></div>
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default App;
