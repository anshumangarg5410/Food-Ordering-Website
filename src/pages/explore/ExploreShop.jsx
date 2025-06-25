import React from "react";
import { motion } from "framer-motion";
import burgerImg from "../../assets/burger.png"; 
import drinkImg from "../../assets/burger.png"; 
import pizzaImg from "../../assets/burger.png"; 
import Card from "./Card";

const sections = [
  {
    title: "🍔 Burgers",
    items: [
      {
        title: "Cheese Burst Burger",
        desc: "Loaded with triple cheese & sauces",
        rating: 4,
        price: "₹120",
        image: burgerImg,
      },
      {
        title: "Veggie Crunch",
        desc: "Fresh veggies, crispy patty & mayo",
        rating: 5,
        price: "₹110",
        image: burgerImg,
      },

    ],
  },
  {
    title: "🧋 Beverages",
    items: [
      {
        title: "Cold Coffee",
        desc: "Chilled and creamy mocha coffee",
        rating: 4,
        price: "₹60",
        image: drinkImg,
      },
      {
        title: "Masala Lemonade",
        desc: "Refreshing with desi twist",
        rating: 5,
        price: "₹40",
        image: drinkImg,
      },
    ],
  },
  {
    title: "🍕 Pizzas",
    items: [
      {
        title: "Farmhouse Pizza",
        desc: "Loaded with capsicum, onions, corn",
        rating: 5,
        price: "₹180",
        image: pizzaImg,
      },
      {
        title: "Paneer Tikka Pizza",
        desc: "Paneer chunks & spicy tandoori sauce",
        rating: 4,
        price: "₹190",
        image: pizzaImg,
      },
    ],
  },
];

function ShopExplore() {
  return (
    <div className="mt-[80px] w-full min-h-screen px-4 md:px-10 py-10 bg-[#f9f9f9] space-y-16">
      <h1 className="text-[36px] md:text-[48px] font-bold font-mono text-green-700 text-center">
        Explore Shop Categories
      </h1>

      {sections.map(({ title, items }, idx) => (
        <div key={idx} className="space-y-6">
          <h2 className="text-[26px] md:text-[32px] font-bold font-mono text-gray-800">
            {title}
          </h2>

          <div className="flex gap-6 overflow-x-auto scroll-smooth pb-2">
            {items.map(({ title, desc, price, rating, image }, index) => (
                <Card title={title} key={`${title}-${index}`}  desc={desc} price={price} rating={rating} image={image} index={index}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopExplore;