import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const SummerSection = () => {
  return (
    <div>
      <div className="header-container">
        <div className="summer-section relative">
          <img
            src="/public/summer-section.jpg"
            alt=""
            className="max-h-90 h-full w-full rounded-md "
          />
          <div className="summer-content absolute right-0 top-5  sm:right-15 sm:top-15 text-white max-w-110 w-full  ">
            <p>SUMMER SALE</p>
            <h1 className="text-5xl mt-3 ">
              <span className="text-[#FF8A00]">37% </span> OFF
            </h1>
            <p className="text-[16px] mt-4 ">
              Free on all your order, Free Shipping and 30 days money-back
              guarantee
            </p>
            <div className="summer-shop-btn cursor-pointer bg-[#00B207] rounded-3xl flex items-center justify-center max-w-40 text-lg py-1 mt-7">
              <button className="cursor-pointer">Shop Now</button>
              <IoIosArrowRoundForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerSection;
