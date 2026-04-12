import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseqnt,
  decreaseqnt,
  deleteitem,
  clearCart,
  incrementorders,
} from "../cart/CartSlice";
import { FiPlus, FiMinus, FiTrash2, FiShoppingBag, FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import OrderPlaces from "./OrderPlaces";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const [orderplaced, setorderplaced] = useState(false);

  const addtocart = (item) => {
    dispatch(increaseqnt({ id: item.id }));
  };

  const removefromcart = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseqnt({ id: item.id }));
    } else if (item.quantity === 1) {
      dispatch(deleteitem(item.id));
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.singleprice * item.quantity, 0);
  const taxes = subtotal > 0 ? Math.round(subtotal * 0.05) : 0;
  const deliveryFee = subtotal > 0 ? (subtotal > 500 ? 0 : 40) : 0;
  const grandTotal = subtotal + taxes + deliveryFee;

  const orderplace = () => {
    if (cartItems.length > 0) {
      dispatch(clearCart());
      dispatch(incrementorders());
      setorderplaced(true);
    }
  };

  useEffect(() => {
    if (orderplaced) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        setorderplaced(false);
        document.body.style.overflow = "auto";
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [orderplaced]);

  return (
    <>
      {orderplaced && (
        <div className="fixed inset-0 bg-black/60 z-[99999] flex items-center justify-center backdrop-blur-sm">
          <OrderPlaces />
        </div>
      )}

      <div className="min-h-screen pt-32 pb-24 bg-gray-50 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
        
        <div className="flex items-center gap-4 mb-10">
          <NavLink to="/explore" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-700">
            <FiArrowLeft size={20} />
          </NavLink>
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 tracking-tight">
            Checkout
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 px-4 bg-white rounded-3xl shadow-sm border border-gray-100 max-w-2xl mx-auto"
          >
            <div className="w-40 h-40 bg-brand-50 rounded-full flex justify-center items-center mb-8">
              <FiShoppingBag className="text-brand-300 w-20 h-20" />
            </div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Your cart is empty!</h2>
            <p className="text-gray-500 mb-8 text-center max-w-md">Looks like you haven't added anything to your cart yet. Explore our top restaurants to find something delicious.</p>
            <NavLink to="/explore">
              <button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-md">
                Browse Restaurants
              </button>
            </NavLink>
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            <div className="w-full lg:w-2/3 flex flex-col gap-4">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                  Items Details <span className="text-gray-400 text-sm font-normal ml-2">({cartItems.length} items)</span>
                </h2>
                
                <div className="flex flex-col gap-6">
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center gap-4 py-2"
                      >
                        <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-2xl shadow-sm"
                          />
                        </div>
                        
                        <div className="flex-grow flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex flex-col max-w-[200px]">
                            <h3 className="font-bold text-gray-900 leading-tight mb-1">{item.name}</h3>
                            <span className="text-sm text-gray-500">₹{item.singleprice}</span>
                          </div>

                          <div className="flex items-center gap-6">
                            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg h-9">
                              <button 
                                onClick={() => removefromcart(item)}
                                className="w-9 h-full flex items-center justify-center text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-colors rounded-l-lg"
                              >
                                {item.quantity === 1 ? <FiTrash2 size={14} /> : <FiMinus size={14} />}
                              </button>
                              <span className="w-8 text-center text-sm font-bold text-gray-900">{item.quantity}</span>
                              <button 
                                onClick={() => addtocart(item)}
                                className="w-9 h-full flex items-center justify-center text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-colors rounded-r-lg"
                              >
                                <FiPlus size={14} />
                              </button>
                            </div>
                            
                            <div className="text-lg font-bold text-gray-900 min-w-[70px] text-right ml-auto sm:ml-0">
                              ₹{item.singleprice * item.quantity}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 sticky top-32">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col">
                <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                  Bill Details
                </h2>

                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Item Total</span>
                    <span className="font-medium text-gray-900">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Delivery Fee</span>
                    <span>
                      {deliveryFee === 0 ? (
                        <span className="text-brand-600 font-medium">Free</span>
                      ) : (
                        <span className="font-medium text-gray-900">₹{deliveryFee}</span>
                      )}
                    </span>
                  </div>
                  {deliveryFee > 0 && (
                    <p className="text-xs text-gray-400 -mt-3">Add items worth ₹{500 - subtotal + 1} more for free delivery</p>
                  )}
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Taxes & Charges</span>
                    <span className="font-medium text-gray-900">₹{taxes}</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mb-8 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">To Pay</span>
                  <span className="text-2xl font-display font-bold text-brand-600">₹{grandTotal}</span>
                </div>

                <button
                  onClick={orderplace}
                  className="w-full bg-brand-500 hover:bg-brand-600 active:scale-95 transition-all text-white py-4 rounded-2xl font-bold text-lg shadow-md flex justify-center items-center gap-2"
                >
                  Place Order <FiArrowLeft className="rotate-180" />
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
