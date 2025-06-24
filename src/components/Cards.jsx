import React from "react";
// import bg from '../assets/bgw.avif'
// import bg from '../assets/2323.avif'
import bg from '../assets/foody.jpg'

function Cards() {

// const bg = {
//     backgroundImage: `url(${bg})`
// }
  return (
    <div class={`section3 w-full h-[500px] flex justify-evenly items-center bg-cover bg-no-repeat bg-center`} style={{backgroundImage:`url(${bg})`}}>
      <div class="feature1 fea w-[20%] h-[70%] backdrop-blur-lg shadow-2xl rounded-xl flex flex-col items-start p-8 justify-start">
        <div class="logo_1"></div>
        <div class="header_1 black_to_white text-[30px] font-bold font-sans text-white mt-[10px]">Wide selection of restaurants</div>
        <div class="subheader_1 text-white text-[15px] font-mono mt-4 ">
          Just ask for it and here we go all the way searching over the world
          just to get your favourate food fetched from the restaurant...
        </div>
      </div>

      <div class="feature2 fea w-[20%] h-[70%] backdrop-blur-lg shadow-2xl rounded-xl flex flex-col items p-8 start justify-start">
        <div class="logo_2 "></div>
        <div class="header_2 black_to_white text-[30px] font-bold font-sans text-white mt-[10px]  ">Easy Ordering Process</div>
        <div class="subheader_2 text-white text-[15px] font-mono mt-4 ">
          In just few click of button, your food reaches your doorstep!
        </div>
      </div>

      <div class="feature3 fea w-[20%] h-[70%] backdrop-blur-lg shadow-2xl rounded-xl flex flex-col items p-8 start justify-start">
        <div class="logo_3"></div>
        <div class="header_3 black_to_white text-[30px] font-bold font-sans text-white mt-[10px]  ">Minimum Wait Time</div>
        <div class="subheader_3 text-white text-[15px] font-mono mt-4 ">
          Our delivery agents are specially trained to deliver the food as fast
          as speed of light
        </div>
      </div>
    </div>
  );
}

export default Cards;
