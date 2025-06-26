// src/pages/Account.jsx
import React from "react";
import { motion } from "framer-motion";
import { MdEmail, MdLocationOn, MdLogout } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Account() {

    const orders = useSelector((state) => state.cart.orders)
    console.log(orders)

  const user = {
    name: "Anshuman Garg",
    email: "anshumangarg5410@gmail.com",
    location: "Chandigarh, India",
    orders: orders,
  };

  return (
    <div className="min-h-screen pt-[20vh] pb-16 px-6 md:px-24 bg-gradient-to-tr from-orange-50 to-yellow-100">
      <motion.h1
        className="text-4xl font-bold text-center text-orange-700 mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        👤 My Account
      </motion.h1>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-orange-100 p-6 flex flex-col items-center gap-4">
            <div className="bg-orange-300 h-24 w-24 rounded-full flex items-center justify-center text-white text-3xl shadow-inner">
              <FaUserAlt />
            </div>
            <h2 className="text-xl font-bold text-orange-800">{user.name}</h2>
            <p className="text-gray-600 text-sm">{user.email}</p>
            <button className="mt-4 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-all duration-200">
              <MdLogout size={18} />
              Log Out
            </button>
          </div>

          <div className="md:w-2/3 p-6 space-y-6 ">
            <div className="flex items-center gap-3 text-lg text-gray-800">
              <BsFillBoxSeamFill className="text-orange-500" />
              <span className="font-medium">Total Orders:</span>
              <span>{user.orders}</span>
            </div>

            <div className="flex items-center gap-3 text-lg text-gray-800">
              <MdEmail className="text-orange-500" />
              <span className="font-medium">Email:</span>
              <span>{user.email}</span>
            </div>

            <div className="flex items-center gap-3 text-lg text-gray-800">
              <MdLocationOn className="text-orange-500" />
              <span className="font-medium">Location:</span>
              <span>{user.location}</span>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">More Features Coming Soon:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>🧾 View past orders</li>
                <li>🏠 Manage address</li>
                <li>💳 Payment options</li>
                <li>🔒 Security settings</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Account;