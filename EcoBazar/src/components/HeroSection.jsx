import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const HeroSection = () => {
  return (
    <div>
      <div className="header-container">
        <div className="hero-section-left flex flex-col justify-between items-center  mt-6 lg:flex-row   ">
          <div className="bg-[#00B207] flex flex-col   max-w-220 w-full  rounded-xl relative md:flex-row ">
            <div className=" ml-15 text-white max-w-100 my-30 text-center sm:text-start">
              <h1 className="text-5xl">Fresh & Healthy Organic Food</h1>
              <div className=" mt-7">
                <h1>
                  Sale up to
                  <span className="bg-[#FF8A00] px-3 rounded-sm text-xl">
                    30% OFF
                  </span>
                </h1>
                <p className="mt-2">Free shipping on all your order.</p>
              </div>
              <div className="flex items-center max-w-45 mt-5 mx-auto cursor-pointer  bg-white text-[#00B207] font-semibold py-4 px-10 rounded-4xl sm:mx-0">
                <button className="cursor-pointer">Shop Now</button>
                <IoIosArrowRoundForward />
              </div>
            </div>
            <div className="md:absolute md:left-122 md:top-21">
              <img src="/public/bnar.png" alt="" className="" />
            </div>
          </div>
          <div className="max-w-104 w-full flex flex-col  gap-5 mt-5 lg:mt-0">
            <div className="bg-amber-200  rounded-xl relative">
              <div className="mt-8 ml-8 mb-20">
                <h1 className="text-sm">Summer Sale</h1>
                <h2 className="text-3xl mt-2">75% OFF</h2>
                <p className="text-sm text-[#666666] mt-3">
                  Only Fruit & Vegetable
                </p>
                <button className="text-[#00B207] mt-2 cursor-pointer">
                  Shop Now
                </button>
              </div>
              <div className="absolute top-5 right-0">
                <img src="/public/Bannar2.png" alt="" />
              </div>
            </div>
            <div className="bg-amber-200  rounded-xl relative">
              <div className="mt-8 ml-8 mb-20">
                <h1 className="text-sm">Summer Sale</h1>
                <h2 className="text-3xl mt-2">75% OFF</h2>
                <p className="text-sm text-[#666666] mt-3">
                  Only Fruit & Vegetable
                </p>
                <button className="text-[#00B207] mt-2 cursor-pointer">
                  Shop Now
                </button>
              </div>
              <div className="absolute top-5 right-0">
                <img src="/public/Bannar2.png" alt="" />
              </div>
            </div>
            {/* <div className="rounded-xl relative text-white">
              <div className="mt-8 text-center max-w-87 w-full mx-auto">
                <h1 className="text-sm">BEST DEAL</h1>
                <h2 className="text-3xl mt-2">
                  Special Products Deal of the Month
                </h2>
                <button className="text-[#00B207] mt-2">Shop Now</button>
              </div>
              <div className="absolute top-0 right-0 -z-10">
                <img
                  src="/public/hero-img2.png"
                  alt=""
                  className="rounded-md"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
