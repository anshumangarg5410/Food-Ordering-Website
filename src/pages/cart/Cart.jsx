import React from "react";
import { motion } from "framer-motion";

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Cheesy Mama Burger",
      price: 129,
      qty: 2,
      image: "/images/burger1.png", // adjust path as per your assets
    },
    {
      id: 2,
      name: "Spicy Fries",
      price: 89,
      qty: 1,
      image: "/images/fries.png",
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="min-h-screen pt-[20vh] pb-20 px-6 md:px-20 bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-100">
      <motion.h1
        className="text-4xl font-bold text-center text-yellow-800 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Cart
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {cartItems.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-xl shadow-md flex items-center p-4 justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: item.id * 0.1 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 object-cover rounded-md"
              />
              <div>
                <h2 className="text-xl font-semibold text-yellow-700">{item.name}</h2>
                <p className="text-sm text-gray-600">Qty: {item.qty}</p>
              </div>
            </div>
            <p className="text-lg font-bold text-orange-600">₹{item.price * item.qty}</p>
          </motion.div>
        ))}

        <motion.div
          className="bg-yellow-200 rounded-xl shadow-inner p-6 flex justify-between items-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <h3 className="text-xl font-semibold">Total</h3>
          <span className="text-2xl font-bold text-orange-700">₹{total}</span>
        </motion.div>

        <motion.button
          className="mt-6 w-full py-3 text-xl bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-xl transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Proceed to Checkout
        </motion.button>
      </div>
    </div>
  );
}

export default Cart;