import React from 'react'
import logo from '../assets/logorr.png'

function Navbar() {

    const logoimage = {
        backgroundImage: `url(${logo})`
    }

  return (
    <>
      <div className={`header h-[13vh] w-screen flex justify-center items-center fixed z-[99999999]`}>
        <div className="container w-full h-[60%] rounded-xl backdrop-blur-lg bg-black/40 border-gray-400 border-double border-[1px] flex justify-evenly items-center">
          <div className={`logo bg-center bg-cover bg-no-repeat h-[100%] w-[6%] ml-4 `} style={logoimage}></div>
          <div className="main h-full w-[70%] flex justify-center items-center">
        
            <ul className="flex justify-evenly items-center h-full w-full text-white font-sans">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">My Gallery</li>
              <li className="cursor-pointer">Upload</li>
              <li className="cursor-pointer">Pricing</li>
              <li className="cursor-pointer">Contact</li> 
              <li className="cursor-pointer">About Us</li>
            </ul>

          </div>
          <div className="menubars h-[60%] w-[22%] flex justify-center items-center border-l border-gray-400">

            <ul className="flex justify-evenly items-center h-full w-full text-white font-sans">
              <li className="cursor-pointer">Log In</li>
              <li className="cursor-pointer">Sign Up</li>
            </ul>
        
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
