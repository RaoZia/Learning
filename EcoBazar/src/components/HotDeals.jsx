import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { GoHeart } from "react-icons/go";
import { PiHandbag } from "react-icons/pi";
import { IoMdEye } from "react-icons/io";
const FirstProduct = [
  {
    image: "/public/products/GreenApple.png",
    title: "Green Apple",
    price: "$12.00",
    disPrice: "$24.00",
    rating: "/public/products/Rating.png",
  },
];
const ProductsList = [
  {
    image: "/public/products/Orange.png",
    title: "Fresh Indian Malta",
    price: "$20.00",
    rating: "/public/products/Rating.png",
  },
  {
    image: "/public/products/Chinese cabbage.png",
    title: "Chinese Cabbage",
    price: "$12.00",
    rating: "/public/products/Rating.png",
  },
  {
    image: "/public/products/Green Lattuce.png",
    title: "Green Lettuce",
    price: "$9.00",
    rating: "/public/products/Rating.png",
  },
];
const SecondProduct = [
  {
    image: "/public/products/Egg Plant.png",
    title: "Eggplant",
    price: "$34.00",
    rating: "/public/products/Rating.png",
  },
  {
    image: "/public/products/Patatoes.png",
    title: "Big Patatoes",
    price: "$20.00",
    rating: "/public/products/Rating.png",
  },
  {
    image: "/public/products/Green Chli.png",
    title: "Green Chili",
    price: "$20.00",
    rating: "/public/products/Rating.png",
  },
];
const ThirdProduct = [
  {
    image: "/public/products/Corn.png",
    title: "Corn",
    price: "$20.00",
    rating: "/public/products/Rating.png",
  },
  {
    image: "/public/products/Cauliflower.png",
    title: "Fresh Cauliflower",
    price: "$14.99",
    rating: "/public/products/Rating.png",
  },
  {
    image: "/public/products/red capsicum.png",
    title: "Red Capsicum",
    price: "$9.00",
    disPrice: "$20.99",
    rating: "/public/products/Rating.png",
  },
  {
    image: "/public/products/Red tomatos.png",
    title: "Red Tomatos",
    price: "$34.00",
    rating: "/public/products/Rating.png",
  },
  {
    image: "/public/products/Surja pur mango.png",
    title: "Surjapur Mango",
    price: "$34.00",
    rating: "/public/products/Rating.png",
  },
];
const HotDeals = () => {
  return (
    <div className="hot-deals-wrapper bg-[#F7F7F7]">
      <div className="header-container">
        <div className="hot-deals ">
          <div className="hot-deals-head mt-15 pt-15">
            <div className="categories-heading">
              <h1>Hot Deals</h1>
            </div>
            <div className="categories-btn">
              <button>View All</button>
              <IoIosArrowRoundForward />
            </div>
          </div>
          <div className="products-items  py-8">
            <div className="products-items-cards ">
              <div className="first-product ">
                {FirstProduct.map((item) => {
                  return (
                    <div className="products-item-card bg-white">
                      <img src={item.image} alt="" />
                      <div className="product-add-btn">
                        <div className="add-cart-icon">
                          <GoHeart />
                        </div>
                        <div className="add-cart ">
                          <button>Add Cart</button>
                          <PiHandbag />
                        </div>
                        <div className="add-cart-icon">
                          <IoMdEye />
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-desc-child mx-auto mt-2">
                          <h1 className="">{item.title}</h1>
                          <div className="flex gap-1 ">
                            <h2 className="">{item.price}</h2>
                            <h2 className="text-[#999999] line-through">
                              {item.disPrice}
                            </h2>
                          </div>
                          <img src={item.rating} alt="" className="mt-1 " />
                        </div>
                      </div>
                      <div className="offer-end mt-1">
                        <p className="text-center text-sm text-[#999999]">
                          Hurry up! Offer ends In:
                        </p>
                        <div className="offer-end-time ">
                          <div className="days">
                            <h1>01</h1>
                            <h2>DAYS</h2>
                          </div>
                          <div>
                            <p>:</p>
                          </div>
                          <div className="days">
                            <h1>23</h1>
                            <h2>HOURS</h2>
                          </div>
                          <div>
                            <p>:</p>
                          </div>
                          <div className="days">
                            <h1>34</h1>
                            <h2>MINS</h2>
                          </div>
                          <div>
                            <p>:</p>
                          </div>
                          <div className="days">
                            <h1>57</h1>
                            <h2>SECS</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="second-product">
                <div className="flex justify-center flex-wrap gap-5 lg:gap-0 md:flex-nowrap">
                  {ProductsList.map((items) => {
                    return (
                      <div className="products-item-card max-w-130 w-full flex flex-col bg-white">
                        <img src={items.image} alt="" />
                        <div className="product-desc  ">
                          <div className="product-desc-child ">
                            <h1 className="">{items.title}</h1>
                            <div className="flex gap-1">
                              <h2 className="">{items.price}</h2>
                              <h2 className="text-[#999999] line-through">
                                {items.disPrice}
                              </h2>
                            </div>
                            <img src={items.rating} alt="" className="mt-1 " />
                          </div>
                          <div className="bag-icon bg-[#F2F2F2] rounded-2xl p-2">
                            <SlHandbag />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-wrap mt-5 lg:mt-0 gap-5 lg:gap-0 md:flex-nowrap justify-center">
                  {SecondProduct.map((items) => {
                    return (
                      <div className="products-item-card max-w-130 w-full flex flex-col bg-white">
                        <img src={items.image} alt="" />
                        <div className="product-desc  ">
                          <div className="product-desc-child ">
                            <h1 className="">{items.title}</h1>
                            <div className="flex gap-1">
                              <h2 className="">{items.price}</h2>
                              <h2 className="text-[#999999] line-through">
                                {items.disPrice}
                              </h2>
                            </div>
                            <img src={items.rating} alt="" className="mt-1 " />
                          </div>
                          <div className="bag-icon bg-[#F2F2F2] rounded-2xl p-2">
                            <SlHandbag />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="second-product flex flex-wrap gap-5 mt-5 lg:mt-0 lg:gap-0 md:flex-nowrap justify-center">
              {ThirdProduct.map((items) => {
                return (
                  <div className="products-item-card max-w-130 w-full flex flex-col bg-white">
                    <img src={items.image} alt="" />
                    <div className="product-desc  ">
                      <div className="product-desc-child ">
                        <h1 className="">{items.title}</h1>
                        <div className="flex gap-1">
                          <h2 className="">{items.price}</h2>
                          <h2 className="text-[#999999] line-through">
                            {items.disPrice}
                          </h2>
                        </div>
                        <img src={items.rating} alt="" className="mt-1 " />
                      </div>
                      <div className="bag-icon bg-[#F2F2F2] rounded-2xl p-2">
                        <SlHandbag />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
