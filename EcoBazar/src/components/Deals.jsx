import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const Deals = () => {
  return (
    <div>
      <div className="header-container">
        <div className="deals-section mt-10 ">
          <div className="banner-1 ">
            <div className="banner-content ">
              <p className="deal-title">BEST DEALS</p>
              <h1 className="">Sale of the Month</h1>
              <div className="deal-time flex items-center justify-center gap-2  ">
                <div className="days">
                  <h1>00</h1>
                  <h2>DAYS</h2>
                </div>
                <div>
                  <p>:</p>
                </div>
                <div className="days">
                  <h1>02</h1>
                  <h2>HOURS</h2>
                </div>
                <div>
                  <p>:</p>
                </div>
                <div className="days">
                  <h1>18</h1>
                  <h2>MINS</h2>
                </div>
                <div>
                  <p>:</p>
                </div>
                <div className="days">
                  <h1>46</h1>
                  <h2>SECS</h2>
                </div>
              </div>
              <div className="deal-btn">
                <button className=" ">Shop Now</button>
                <IoIosArrowRoundForward />
              </div>
            </div>
            <img src="/public/deals/Deal-banner1.png" alt="" className="" />
          </div>
          <div className="banner-1">
            <div className="banner-content ">
              <p className="deal-title">85% Fat Free</p>
              <h1 className="">Low-Fat Meat</h1>
              <h2 className="center-line">
                Started at <span className="text-[#FF8A00]">$79.99</span>
              </h2>
              <div className="deal-btn ">
                <button className="">Shop Now</button>
                <IoIosArrowRoundForward />
              </div>
            </div>
            <img src="/public/deals/Deal-banner2.png" alt="" />
          </div>
          <div className="banner-1">
            <div className="banner-content text-black!">
              <p className="deal-title">Summer Sale</p>
              <h1 className="">100% Fresh Fruit</h1>
              <h2 className="center-line">
                Up to{" "}
                <span className="bg-[#1A1A1A] text-[#FCC900] p-1 rounded-md">
                  64% OFF
                </span>
              </h2>
              <div className="deal-btn">
                <button className=" ">Shop Now</button>
                <IoIosArrowRoundForward />
              </div>
            </div>
            <img src="/public/deals/Deal-banner3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
