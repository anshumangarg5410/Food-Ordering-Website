import React from "react";
import logo from '../assets/logorr.png';

const logoimage = {
  backgroundImage: `url(${logo})`,
};

function Footer() {
  return (
    <div className="footer w-full bg-gray-900 flex flex-col md:flex-row justify-evenly items-center text-gray-100 py-10 px-6">
      <div className="left h-32 w-full md:w-[23%] flex justify-center items-center mb-6 md:mb-0">
        <div
          className="logo bg-center bg-contain bg-no-repeat h-[100%] w-[80%]"
          style={logoimage}
        ></div>
      </div>

      <div className="mid w-full md:w-[73%] flex flex-col md:flex-row justify-evenly items-start gap-8">
        {/* First Column */}
        <div className="first flex flex-col justify-center gap-2">
          <p className="font-sans text-lg font-bold">Get to Know Us</p>
          <ul className="font-sans font-semibold text-sm flex flex-col gap-1">
            <li>About Us</li>
            <li>Our Story</li>
            <li>Features</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="second flex flex-col justify-center gap-2">
          <p className="font-sans text-lg font-bold">Connect With Us</p>
          <ul className="font-sans font-semibold text-sm flex flex-col gap-1">
            <li>Contact Support</li>
            <li>Follow on Instagram</li>
            <li>Join Our Discord</li>
            <li>Feedback & Suggestions</li>
          </ul>
        </div>

        <div className="third flex flex-col justify-center gap-2">
          <p className="font-sans text-lg font-bold">Opportunities</p>
          <ul className="font-sans font-semibold text-sm flex flex-col gap-1">
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