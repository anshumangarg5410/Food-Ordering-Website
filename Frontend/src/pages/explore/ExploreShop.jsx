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
  const filters = ["All", "Veg Only", "Bestsellers", "Spicy", "New Arrivals"];
  const [activeFilter, setActiveFilter] = React.useState("All");

  return (
    <div className="pt-32 pb-24 w-full min-h-screen px-4 sm:px-6 lg:px-12 bg-gray-50 flex flex-col space-y-12 max-w-[1600px] mx-auto">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4 mt-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 tracking-tight">
            Explore Menu
          </h1>
          <p className="text-gray-500 mt-2 text-lg">Find the best food curated just for you.</p>
        </div>

        <div className="flex gap-3 overflow-x-auto hide-scrollbar w-full md:w-auto pb-2">
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                activeFilter === filter 
                  ? 'bg-gray-900 text-white border-gray-900 shadow-md' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {sections.map(({ title, items }, idx) => (
        <div key={idx} className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">
              {title}
            </h2>
            <button className="text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors">
              View All
            </button>
          </div>

          <div className="flex gap-6 overflow-x-auto hide-scrollbar py-4 px-1 snap-x snap-mandatory">
            {items.map(({ title, desc, price, rating, image }, index) => (
              <div className="snap-start" key={`${title}-${index}`}>
                <Card title={title} desc={desc} price={price} rating={rating} image={image} index={index}/>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopExplore;