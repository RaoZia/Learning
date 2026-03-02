import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { SlHandbag } from "react-icons/sl";

const Header = () => {
  return (
    <div>
      <header>
        <div className="header-wrapper ">
          <div className="header-container ">
            <div className="header-top flex flex-col sm:flex-row justify-between items-center text-sm font-light ">
              <div className="header-top-address py-3 flex items-center gap-2 ">
                <CiLocationOn />
                <p className="">
                  Store Location: Lincoln- 344, Illinois, Chicago, USA
                </p>
              </div>
              <div className="header-top-links">
                <ul className="flex gap-5">
                  <li>
                    <select>
                      <option value="Eng">ENG</option>
                      <option value="Urdu">URDU</option>
                    </select>
                  </li>
                  <li>
                    <select>
                      <option value="Usd">USD</option>
                      <option value="Pkr">PKR</option>
                    </select>
                  </li>
                  <li>
                    <button>Sign In</button>
                  </li>
                  /
                  <li>
                    <button>Sign UP</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="text-gray-300" />
          <div className="header-middle header-container flex flex-col gap-5 md:flex-row justify-between items-center py-6  ">
            <div className="header-middle-logo flex items-center gap-2">
              <img src="/public/Logo.png" alt="" />
              <h1 className="text-4xl">Ecobazar</h1>
            </div>
            <div className="header-middle-search  flex items-center ">
              <div className="flex items-center bg-white py-3 border border-gray-300 rounded-md px-3">
                <CiSearch />
                <input
                  type="search"
                  placeholder="Search"
                  className="outline-none pl-2"
                />
              </div>

              <button className="bg-[#00B207] py-3 rounded-md px-6 text-white cursor-pointer">
                Search
              </button>
            </div>
            <div className="header-middle-cart  flex items-center gap-3 ">
              <div className="cart-heart">
                <GoHeart className="navigation-icons" />
              </div>
              <div className="cart-bag flex items-center gap-3 px-2 border-l border-gray-400">
                <div className="cart-bag-icon">
                  <SlHandbag className="navigation-icons" />
                </div>
                <div className="cart-shopping">
                  <p>Shopping Cart:</p>
                  <h1>$57.00</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
