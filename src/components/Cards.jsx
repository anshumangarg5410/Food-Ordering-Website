import React from "react";
import bg from "../assets/foody.jpg";
import { motion } from "motion/react";

function Cards() {
  // const bg = {
  //     backgroundImage: `url(${bg})`
  // }


  const datarray = [
    {
      title: "Wide selection of restaurants",
      description: "Just ask for it and here we go all the way searching over the world just to get your favourate food fetched from the restaurant...",
      delay: 0.1
    },
    {
      title: "Easy Ordering Process",
      description: "In just few click of button, your food reaches your doorstep!",
      delay: 0.2
    },
    {
      title: "Minimum Wait Time",
      description: "Our delivery agents are specially trained to deliver the food as fast as speed of light",
      delay: 0.3
    }
  ]


  return (
    <div
      class={`section3 w-full h-[500px] flex justify-evenly items-center bg-cover bg-no-repeat bg-center`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      {datarray.map(({title, description, delay}, index) => (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay}}
        viewport={{ once: true, amount: 0.2 }}
        class="feature1 fea w-[20%] h-[70%] backdrop-blur-lg shadow-2xl rounded-xl flex flex-col items-start p-8 justify-start"
      >
        <div class="logo_1"></div>
        <div class="header_1 black_to_white text-[30px] font-bold font-sans text-white mt-[10px]">
          {title}
        </div>
        <div class="subheader_1 text-white text-[15px] font-mono mt-4 ">
          {description}
        </div>
      </motion.div>
      ))}

    </div>
  );
}

export default Cards;


