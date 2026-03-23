import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [isopen, setIsopen] = useState(false);
  const handleToggle = () => {
    setIsopen(!isopen);
  };
  return (
    <div>
      <header>
        <div className="header-wrapper">
          <div className="header-container ">
            <div className="ham-con max-w-120 w-full flex justify-between items-center">
              <div className="header-logo  ">
                <img src="/public/Group.png" alt="" />
                <h1>
                  <span className="italic">The</span>Box
                </h1>
              </div>
              <div className="bur-btn ">
                <div className="sm:hidden">
                  <button onClick={handleToggle}>
                    <GiHamburgerMenu />
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="header-nav hidden sm:block"> */}
            <div
              className={`header-nav ${isopen ? "hidden" : "block"} sm:block`}
            >
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#" className="text-[#F9995D]">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
