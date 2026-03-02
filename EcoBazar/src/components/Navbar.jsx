import React from "react";
import { LuPhoneCall } from "react-icons/lu";

const Navbar = () => {
  return (
    <div>
      <div className="header-nav  bg-[#333333]">
        <div className="header-container navbar-container ">
          <div className="header-nav-links ">
            <ul className="flex flex-col gap-6 sm:flex-row">
              <li>
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="header-nav-phone flex items-center gap-2">
            <LuPhoneCall />
            <p>(219) 555-0114</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
