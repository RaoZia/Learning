import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
const ProductsList = [
  {
    sale: "Sale 50%",
    image: "/public/products/Apple.png",
    title: "Green Apple",
    price: "$14.99",
    disPrice: "$20.99",
    rating: "/public/products/Rating.png",
  },
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
    image: "/public/products/Green capsicum.png",
    title: "Green Capsicum",
    price: "$9.00",
    disPrice: "$20.99",
    rating: "/public/products/Rating.png",
  },
  {
    image: "/public/products/Green Chli.png",
    title: "Green Chili",
    price: "$34.00",
    rating: "/public/products/Rating.png",
  },
];
const Products = () => {
  return (
    <div>
      <div className="header-container">
        <div className="popular-products mt-10">
          <div className="products-head">
            <div className="products-heading">
              <h1>Popular Products</h1>
            </div>
            <div className="products-btn">
              <button className="cursor-pointer">View All</button>
              <IoIosArrowRoundForward />
            </div>
          </div>

          <div className="products-items mt-8">
            <div className="products-items-cards  grid! justify-center gap-5 grid-cols-1 md:gap-0 sm:grid-cols-3 lg:grid-cols-5">
              {ProductsList.map((items) => {
                return (
                  <div className="products-item-card  flex flex-col sm:flex-none">
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

export default Products;
