import React from "react";
import logo from '../assets/logorr.png'

    const logoimage = {
        backgroundImage: `url(${logo})`
    }

function Footer() {
  return (
    <div className="footer w-screen h-[200px] bg-gray-900 flex justify-evenly items-center text-gray-100">
      <div className="left h-full w-[23%] flex justify-center items-center">
        <div
          className="logo bg-center bg-contain bg-no-repeat h-[100%] w-[100%] "
          style={logoimage}
        ></div>
      </div>
      <div className="mid h-full  w-[73%] flex justify-evenly items-center">
        <div className="first h-full w-[30%] flex flex-col justify-center p-10 gap-3">
          <p className="font-sans text-lg font-bold">Get to Know Us</p>
          <ul className="font-sans font-semibold text-[14px] flex flex-col gap-1">
            <li>About Us</li>
            <li>Our Story</li>
            <li>Features</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="second h-full w-[30%] flex flex-col justify-center p-10 gap-3">
          <p className="font-sans text-lg font-bold">Connect With Us</p>
          <ul className="font-sans font-semibold text-[14px] flex flex-col gap-1">
            <li>Contact Support</li>
            <li>Follow on Instagram</li>
            <li>Join Our Discord</li>
            <li>Feedback & Suggestions</li>
          </ul>
        </div>
        <div className="third h-full w-[30%] flex flex-col justify-center p-10 gap-3">
          <p className="font-sans text-lg font-bold">Opportunities</p>
          <ul className="font-sans font-semibold text-[14px] flex flex-col gap-1">
            <li>Affiliate Program</li>
            <li>Partner With Us</li>
            <li>Become a Contributor</li>
            <li>Collaborate on Projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
