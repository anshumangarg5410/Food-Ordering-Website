import React from "react";
import bg from "../assets/foody.jpg";
import { motion } from "motion/react";

function Cards() {
  const datarray = [
    {
      title: "Wide selection of restaurants",
      description:
        "Just ask for it and here we go all the way searching over the world just to get your favourate food fetched from the restaurant...",
      delay: 0.1,
    },
    {
      title: "Easy Ordering Process",
      description:
        "In just few click of button, your food reaches your doorstep!",
      delay: 0.2,
    },
    {
      title: "Minimum Wait Time",
      description:
        "Our delivery agents are specially trained to deliver the food as fast as speed of light",
      delay: 0.3,
    },
  ];

  return (
    <div
      className="section3 w-full min-h-[600px] flex flex-col md:flex-row justify-center items-center bg-cover bg-no-repeat bg-center px-4 md:px-16 py-10 gap-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {datarray.map(({ title, description, delay }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full md:w-[30%] h-[300px] backdrop-blur-lg shadow-2xl rounded-xl flex flex-col justify-start p-6 bg-black/40 text-white"
        >
          <div className="text-[24px] font-bold font-sans mb-2">{title}</div>
          <p className="text-[14px] font-mono">{description}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Cards;