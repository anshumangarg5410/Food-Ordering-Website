import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  increaseqnt,
  decreaseqnt,
  deleteitem,
  clearCart,
  incrementorders,
} from "../cart/CartSlice";
import { IoIosAddCircle } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import OrderPlaces from "./OrderPlaces";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [qnt, setqnt] = useState(0);

  const addtocart = (item) => {
    dispatch(increaseqnt({ id: item.id }));
    setqnt(item.quantity + 1);
    console.log("inc");
  };

  const removefromcart = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseqnt({ id: item.id }));
    } else if (item.quantity === 1) {
      dispatch(deleteitem(item.id));
    }
  };

  const cartItems = useSelector((state) => state.cart.cart);

  const totalprice = () => {
    let total = 0;
    cartItems.map((item) => {
      total += item.singleprice * item.quantity;
    });
    return total;
  };
 
  const [orderplaced, setorderplaced] = useState(false)

  const orderplace = () => {
    if (cart.length > 0) {
      dispatch(clearCart())
      dispatch(incrementorders())
      setorderplaced(!orderplaced);
    }
    else alert("Bhai kuch add to krde .. khali plate ghar pe bhej du kya!!")
  }

  useEffect(() => {
    setTimeout(() => {
      setorderplaced(false)
    }, 5000);
    if (orderplaced) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; 
    }
  }, [orderplaced])

  return (
    <>
    
    {orderplaced ?
    <div className="h-screen w-screen bg-[rgb(0,0,0,0.6)] absolute z-[999999999999999]">
    <OrderPlaces/> 
        </div>
    : ""}


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
                <h2 className="text-xl font-semibold text-yellow-700">
                  {item.name}
                </h2>
                <div className="df flex justify-start items-center ">
                  <div
                    onClick={() => removefromcart(item)}
                    className=" h-[25px] flex justify-center mt-[1px] items-center w-[22px] mr-[10px] text-[14px] hover:scale-125 transition-all ease-out hover:text-red-400"
                  >
                    <GrSubtractCircle />
                  </div>
                  <p className="text-sm text-gray-600 ">Qty: {item.quantity}</p>
                  <div
                    onClick={() => addtocart(item)}
                    className=" h-[25px] flex justify-center items-center w-[22px]  ml-[10px] text-[16px] hover:scale-125 transition-all ease-out hover:text-green-400"
                  >
                    <IoIosAddCircle />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg font-bold text-orange-600">
              ₹{item.singleprice}
            </p>
          </motion.div>
        ))}

        <motion.div
          className="bg-yellow-200 rounded-xl shadow-inner p-6 flex justify-between items-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <h3 className="text-xl font-semibold">Total</h3>
          <span className="text-2xl font-bold text-orange-700">
            ₹{totalprice()}
          </span>
        </motion.div>

        <motion.button
          className="mt-6 w-full py-3 text-xl bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-xl transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => orderplace()}
        >
          Place Your Order
        </motion.button>
      </div>
    </div>
    </>
  );
}

export default Cart;
