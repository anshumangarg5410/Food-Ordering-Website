import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { IoStarSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increaseqnt, decreaseqnt, deleteitem } from '../cart/CartSlice';
import { FiPlus, FiMinus } from "react-icons/fi";

function Card({ title, desc, price, rating, image, index }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [qnt, setqnt] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const existingItem = cart.find((item) => item.name === title);
    if (existingItem) {
      setqnt(existingItem.quantity);
    } else {
      setqnt(0);
    }
  }, [cart, title]);

  const addtocart = () => {
    const it = cart.find((item) => item.name === title);

    if (it) {
      dispatch(increaseqnt({ id: it.id }));
    } else {
      dispatch(
        addItem({
          name: title,
          singleprice: parseInt(price.toString().replace("₹", "")),
          quantity: 1,
          image,
        })
      );
    }
  };

  const removefromcart = () => {
    const it = cart.find((item) => item.name === title);

    if (it && it.quantity > 1) {
      dispatch(decreaseqnt({ id: it.id }));
    } 
    else if (it && it.quantity === 1) {
      dispatch(deleteitem(it.id));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
      className="group w-full max-w-[280px] bg-white rounded-2xl shadow-card hover:shadow-card-hover border border-gray-100 flex-shrink-0 flex flex-col overflow-hidden transition-all duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-[shimmer_1.5s_infinite] bg-[length:200%_100%]"></div>
        )}
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm flex items-center gap-1">
          <IoStarSharp className="text-yellow-500 text-sm" />
          <span className="text-xs font-bold text-gray-800">{rating}.0</span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 leading-tight truncate" title={title}>
          {title}
        </h3>
        
        <p className="text-sm text-gray-500 mt-1 line-clamp-2 min-h-[40px]">
          {desc}
        </p>

        <div className="flex justify-between items-end mt-4 pt-4 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Price</span>
            <span className="text-lg font-bold text-gray-900">{price}</span>
          </div>

          <div className="h-10 relative w-24">
            <AnimatePresence initial={false} mode="wait">
              {qnt === 0 ? (
                <motion.button
                  key="add-btn"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  onClick={addtocart}
                  className="absolute inset-0 w-full h-full bg-white border-2 border-brand-100 text-brand-600 font-bold rounded-lg shadow-sm hover:bg-brand-50 hover:border-brand-200 transition-colors flex justify-center items-center"
                >
                  ADD
                </motion.button>
              ) : (
                <motion.div
                  key="qnt-control"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-0 w-full h-full bg-brand-500 text-white rounded-lg shadow-md flex justify-between items-center px-1"
                >
                  <button 
                    onClick={removefromcart} 
                    className="p-1 hover:bg-brand-600 rounded-md transition-colors h-full flex items-center justify-center flex-1"
                  >
                    <FiMinus strokeWidth={3} />
                  </button>
                  <span className="font-bold w-6 text-center text-sm">{qnt}</span>
                  <button 
                    onClick={addtocart} 
                    className="p-1 hover:bg-brand-600 rounded-md transition-colors h-full flex items-center justify-center flex-1"
                  >
                    <FiPlus strokeWidth={3} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
