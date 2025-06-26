import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

//burgers
import Cheese_Veg_Burger from "../../assets/burgers/Crispy_Veg_Burger.avif"; 
import Crispy_Veg_Double_Tikki from "../../assets/burgers/Crispy_veg_double_tikki.avif"; 
import Double_burger from "../../assets/burgers/Double_burger.webp"; 
import Korean_Spicy_Paneer_Burger_Meal from "../../assets/burgers/Korean_Spicy_Paneer_Burger_Meal.avif"; 
import Korean_Spicy_Paneer_Burger from "../../assets/burgers/Korean_Spicy_Panner_Burger.avif"; 
import Original_Veg_Whooper from "../../assets/burgers/Original_Veg_Whooper.avif"; 

//paranthas
import Aloo_Parantha from "../../assets/paranthas/Aloo_Parantha.avif"; 
import Gobi_Parantha from "../../assets/paranthas/Gobi_Parantha.avif"; 
import Mix_Parantha from "../../assets/paranthas/Mix_Parantha.avif"; 
import Paneer_Parantha from "../../assets/paranthas/Paneer_Parantha.avif"; 
import Tandorri_Mix_Parantha from "../../assets/paranthas/Tandorri_Mix_Parantha.avif"
import Plain_Tawa_Parantha from "../../assets/paranthas/Plain_Tawa_Parantha.avif"
import Besan_Tawa_Parantha from "../../assets/paranthas/Besan_Tawa_Parantha.avif"

//pizzas
import Big_6in1_Pizza from "../../assets/burgers/Pizza/Big_6in1_Pizza.avif"
import FarmHouse_Pizza from "../../assets/burgers/Pizza/FarmHouse_Pizza.avif"
import Fiery_Jalapeno_Paprika from "../../assets/burgers/Pizza/Fiery_Jalapeno_Paprika.avif"
import Indi_Tandoori_Paneer_Cheese_Birst from "../../assets/burgers/Pizza/Indi_Tandoori_Paneer_Cheese_Birst.avif"
import Margherita_Cheese_Burst from "../../assets/burgers/Pizza/Margherita_Cheese_Burst.avif"
import Peppy_Panner_Cheese_Burst from "../../assets/burgers/Pizza/Peppy_Panner_Cheese_Burst.avif"
import Veg_Extravaganza_Pizza from "../../assets/burgers/Pizza/Veg_Extravaganza_Pizza.avif"

const sections = [
  {
    title: "Paranthas",
    items: [
      {
        title: "Aloo Parantha",
        desc: "Chilled and creamy mocha coffee",
        rating: 4,
        price: "₹60",
        image: Aloo_Parantha,
      },
      {
        title: "Gobi Parantha",
        desc: "Refreshing with desi twist",
        rating: 5,
        price: "₹40",
        image: Gobi_Parantha,
      },
      {
        title: "Mix Parantha",
        desc: "Refreshing with desi twist",
        rating: 5,
        price: "₹40",
        image: Mix_Parantha,
      },
      {
        title: "Tandorri Mix Parantha",
        desc: "Refreshing with desi twist",
        rating: 5,
        price: "₹40",
        image: Tandorri_Mix_Parantha,
      },
      {
        title: "Plain Tawa Parantha",
        desc: "Refreshing with desi twist",
        rating: 5,
        price: "₹40",
        image: Plain_Tawa_Parantha,
      },
      {
        title: "Paneer_Parantha",
        desc: "Refreshing with desi twist",
        rating: 5,
        price: "₹40",
        image: Paneer_Parantha,
      },
      {
        title: "Besan Tawa Parantha",
        desc: "Refreshing with desi twist",
        rating: 5,
        price: "₹40",
        image: Besan_Tawa_Parantha,
      },
    ],
  },
 {
  title: "Pizzas",
  items: [
    {
      title: "Big 6in1 Pizza",
      desc: "Loaded with capsicum, onions, corn",
      rating: 5,
      price: "₹180",
      image: Big_6in1_Pizza,
    },
    {
      title: "FarmHouse Pizza",
      desc: "Paneer chunks & spicy tandoori sauce",
      rating: 4,
      price: "₹190",
      image: FarmHouse_Pizza,
    },
    {
      title: "Fiery Jalapeno Paprika",
      desc: "Fiery jalapenos with paprika and cheesy goodness",
      rating: 4,
      price: "₹200",
      image: Fiery_Jalapeno_Paprika,
    },
    {
      title: "Indi Tandoori Paneer Cheese Burst",
      desc: "Tandoori paneer, red paprika, and spicy cheese burst",
      rating: 5,
      price: "₹220",
      image: Indi_Tandoori_Paneer_Cheese_Birst,
    },
    {
      title: "Margherita Cheese Burst",
      desc: "Classic cheese burst with rich tomato sauce",
      rating: 4,
      price: "₹160",
      image: Margherita_Cheese_Burst,
    },
    {
      title: "Peppy Paneer Cheese Burst",
      desc: "Spicy paneer with crunchy capsicum and cheese burst",
      rating: 5,
      price: "₹210",
      image: Peppy_Panner_Cheese_Burst,
    },
    {
      title: "Veg Extravaganza Pizza",
      desc: "Loaded with veggies, olives, jalapenos & more",
      rating: 5,
      price: "₹230",
      image: Veg_Extravaganza_Pizza,
    },
  ],
},  
{
    title: "Burgers",
    items: [
      {
        title: "Double burger",
        desc: "Fresh veggies, crispy patty & mayo",
        rating: 5,
        price: "₹210",
        image: Double_burger,
      },
      {
        title: "Korean Spicy Paneer Burger Meal",
        desc: "Fresh veggies, crispy patty & mayo",
        rating: 5,
        price: "₹310",
        image: Korean_Spicy_Paneer_Burger_Meal,
      },

      {
        title: "Korean Spicy Paneer Burger",
        desc: "Fresh veggies, crispy patty & mayo",
        rating: 5,
        price: "400",
        image: Korean_Spicy_Paneer_Burger,
      },
          {
        title: "Original Veg Whooper",
        desc: "Fresh veggies, crispy patty & mayo",
        rating: 5,
        price: "₹240",
        image: Original_Veg_Whooper,
      },
      {
        title: "Cheese Veg Burger",
        desc: "Loaded with triple cheese & sauces",
        rating: 4,
        price: "₹150",
        image: Cheese_Veg_Burger,
      },
      {
        title: "Crispy Veg Double Tikki",
        desc: "Fresh veggies, crispy patty & mayo",
        rating: 5,
        price: "₹110",
        image: Crispy_Veg_Double_Tikki,
      }

    ],
  }
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