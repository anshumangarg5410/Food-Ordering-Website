import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
    <div className="min-h-screen pt-[20vh] pb-20 px-6 md:px-20 bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-100">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-yellow-700 mb-10 font-mono"
      >
        Contact Us
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 md:p-12 w-full max-w-4xl mx-auto"
      >
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2 font-sans">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2 font-sans">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2 font-sans">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full p-3 rounded-lg border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-xl font-semibold text-lg font-mono transition-all duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
    </>
  );
}

export default Contact;
