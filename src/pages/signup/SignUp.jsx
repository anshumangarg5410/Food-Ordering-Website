import React from "react";
import { motion } from "framer-motion";

function SignUp() {
  return (
    <div className="min-h-screen pt-[20vh] pb-16 px-6 md:px-20 bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-100">
      <motion.div
        className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-yellow-700 text-center mb-6">
          Create Your Account
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all"
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default SignUp;