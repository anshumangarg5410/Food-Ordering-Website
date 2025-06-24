import React from "react";
import bg from "../assets/bgwhite.jpg";
import { CiHeart } from "react-icons/ci";
import { RiHandHeartFill } from "react-icons/ri";
import { IoStarSharp } from "react-icons/io5";
import burger1 from '../assets/burgers/1.webp'
import Burger from "./Burger";

function Special_burg() {

  const bgg = { backgroundImage: `url(${bg})` };
  const burger1image = { backgroundImage: `url(${burger1})` };

  return (
    <div
      className="section2 w-full h-[150vh] flex flex-col justify-start items-center bg-cover bg-no-repeat"
      style={bgg}
    >
        <div className="main h-[15%] w-full flex flex-col justify-center items-center ">
            <p className="font-bold text-[50px] font-mono text-red-700 ">OUR CRAZY BURGERS</p>
            <p className="font-bold text-[15px] font-mono text-gray-400">A list of our super special burgers with fully customizable option..</p>
            <p className="font-bold text-[15px] font-mono text-gray-400">Super Healthy and Tasty!</p>
        </div>

        <div className="burgers w-full h-[85%] flex flex-col justify-center items-center py-5">
            <div className="row1 h-[50%] w-full flex justify-evenly items-center">

                <Burger burger1image={burger1image} burgername={"Mota krne wala burger "} burgersubtext={"Khao isse healthy samaj ke and ho jayo mote bhais ke jaise Hehehe"}/>
                <Burger burger1image={burger1image} burgername={"Mota krne wala burger "} burgersubtext={"Khao isse healthy samaj ke and ho jayo mote bhais ke jaise Hehehe"}/>
                <Burger burger1image={burger1image} burgername={"Mota krne wala burger "} burgersubtext={"Khao isse healthy samaj ke and ho jayo mote bhais ke jaise Hehehe"}/>
   
            </div>

            <div className="row1 h-[50%] w-full flex justify-evenly items-center">

                <Burger burger1image={burger1image} burgername={"Mota krne wala burger "} burgersubtext={"Khao isse healthy samaj ke and ho jayo mote bhais ke jaise Hehehe"}/>
                <Burger burger1image={burger1image} burgername={"Mota krne wala burger "} burgersubtext={"Khao isse healthy samaj ke and ho jayo mote bhais ke jaise Hehehe"}/>
                <Burger burger1image={burger1image} burgername={"Mota krne wala burger "} burgersubtext={"Khao isse healthy samaj ke and ho jayo mote bhais ke jaise Hehehe"}/>

            </div>

        </div>

    </div>
  );
}

export default Special_burg;
