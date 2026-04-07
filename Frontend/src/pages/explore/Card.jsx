import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { IoStarSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increaseqnt, decreaseqnt, deleteitem } from '../cart/CartSlice';
import { IoIosAddCircle } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

// const { name, singleprice, quantity } = action.payload;

function Card({ title, desc, price, rating, image, index }) {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const [qnt, setqnt] = useState(0);

  useEffect(() => {
    const existingItem = cart.find((item) => item.name === title);
    if (existingItem) {
      setqnt(existingItem.quantity);
    }
  }, [cart, title]);

const addtocart = () => {
  const it = cart.find((item) => item.name === title);

  if (it) {
    dispatch(increaseqnt({ id: it.id }));
    setqnt(it.quantity + 1);
    console.log("inc")
  } else {
    dispatch(
      addItem({
        name: title,
        singleprice: parseInt(price.toString().replace("₹", "")),
        quantity: 1,
        image,
      })
    );
    setqnt(1);
    console.log("aded")
  }
};

const removefromcart = () => {
  const it = cart.find((item) => item.name === title);

  if (it && it.quantity > 1) {
    dispatch(decreaseqnt({ id: it.id }));
    setqnt(it.quantity - 1);
    console.log("dec")
  } 
  else if (it && it.quantity == 1) {
    dispatch(deleteitem(it.id))
    setqnt(0);
  }
};

  return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="min-w-[260px] max-w-[280px] bg-white rounded-xl shadow-md flex-shrink-0 overflow-hidden"
              >
                <div
                  className="h-[150px] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="p-4 flex flex-col justify-between h-[200px]">
                  <div className="text-lg font-bold flex justify-between items-center text-gray-800">
                    <p>{title}</p>
                    <p className='text-green-700'>{qnt}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 mb-2">{desc}</p>

                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(rating)].map((_, i) => (
                      <IoStarSharp key={i} />
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-auto h-[40px]">
                    <span className="text-green-700 font-semibold">{price}</span>
                    <button   className="bg-green-600 flex text-white px-3 py-1 rounded-md hover:bg-green-700 transition">
                    <div onClick={removefromcart}  className=' h-[25px] flex justify-center items-center w-[22px] mr-[10px] text-[18px] hover:scale-125 transition-all ease-out hover:text-red-400'><GrSubtractCircle /></div>     
                      Add
                      <div onClick={addtocart} className=' h-[25px] flex justify-center items-center w-[22px] ml-[10px] text-[20px] hover:scale-125 transition-all ease-out hover:text-green-400'><IoIosAddCircle /></div>
                    </button>
                    
                  </div>
                </div>
              </motion.div>
  )
}

export default Card
