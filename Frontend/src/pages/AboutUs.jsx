import React from "react";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <div className="min-h-screen pt-[20vh] pb-20 px-6 md:px-20 bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-50">
      <motion.h1
        className="text-5xl font-bold text-center text-yellow-700 mb-10 font-serif"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Mama’s Kitchen
      </motion.h1>

      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At <span className="text-yellow-600 font-semibold">Mama’s Kitchen</span>, we believe food is not just a meal — it’s a memory.
          Born from the heart of a desi kitchen and fired up with a passion for burgers 🍔, we blend traditional warmth with bold, modern taste.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Whether you crave a spicy desi patty, a loaded cheese delight, or a classic burger combo — we’ve got you covered.
          Our secret? Love in every layer, freshness in every bite, and service that feels like home.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Thank you for being a part of our growing food family. From midnight cravings to Sunday snacks — Mama’s Kitchen is always open for you.
          And ya.. Khana khane ke liye safai jaroori, specially Mama's kitchen mein kaam krne ke liye!! ❤️
        </p>
      </motion.div>
    </div>
  );
}

export default AboutUs;