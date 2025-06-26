import React from "react";
import bg from "../assets/bgwb.jpg";
import burger1 from "../assets/burgers/Crispy_Veg_Burger.avif";
import Burger from "./Burger";

function Special_burg() {
  const bgg = { backgroundImage: `url(${bg})` };
  const burger1image = { backgroundImage: `url(${burger1})` };

  const burgers = [
    {
      burgerimage: burger1image,
      title: "Mota krne wala burger",
      descp: "Khao isse healthy samaj ke and ho jayo mote bhais ke jaise Hehehe",
    },
    {
      burgerimage: burger1image,
      title: "Burger Bomb",
      descp: "Explode your taste buds with cheesy madness!",
    },
    {
      burgerimage: burger1image,
      title: "Bhai ka Burger",
      descp: "Pura bhai style — zyada spicy, zyada crispy!",
    },
  ];

  return (
    <div
      className="section2 w-full min-h-screen flex flex-col justify-start items-center bg-cover bg-no-repeat px-4 py-12"
      style={bgg}
    >
      <div className="main text-center mb-8">
        <p className="font-bold text-[40px] md:text-[50px] font-mono text-red-700">
          OUR CRAZY BURGERS
        </p>
        <p className="font-mono text-gray-400 text-sm md:text-base">
          A list of our super special burgers with fully customizable option..
        </p>
        <p className="font-mono text-gray-400 text-sm md:text-base">
          Super Healthy and Tasty!
        </p>
      </div>

      <div className="burgers w-full flex flex-col gap-10">
        {[burgers, burgers].map((row, i) => (
          <div
            key={i}
            className="row overflow-x-auto flex gap-6 px-2 py-4 md:justify-center"
          >
            {row.map(({ burgerimage, title, descp }, index) => (
              <Burger
                key={index}
                burger1image={burgerimage}
                burgername={title}
                burgersubtext={descp}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Special_burg;