import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const CatagoriesList = [
  {
    image: "/public/categories/fruit.png",
    title: "Fresh Fruit",
  },
  {
    image: "/public/categories/veg.png",
    title: "Fresh Vegetables",
  },
  {
    image: "/public/categories/meat.png",
    title: "Meat & Fish",
  },
  {
    image: "/public/categories/snacks.png",
    title: "Snacks",
  },
  {
    image: "/public/categories/beverages.png",
    title: "Beverages",
  },
  {
    image: "/public/categories/Beauty.png",
    title: "Beauty & Health",
  },
  {
    image: "/public/categories/Bread.png",
    title: "Bread & Bakery",
  },
  {
    image: "/public/categories/Baking.png",
    title: "Baking Needs",
  },
  {
    image: "/public/categories/Cooking.png",
    title: "Cooking",
  },
  {
    image: "/public/categories/Diabetic.png",
    title: "Diabetic Food",
  },
  {
    image: "/public/categories/Dish detergents.png",
    title: "Dish Detergents",
  },
  {
    image: "/public/categories/Oil.png",
    title: "Oil",
  },
];
const Categories = () => {
  return (
    <div>
      <div className="header-container">
        <div className="popular-categories mt-10">
          <div className="categories-head">
            <div className="categories-heading">
              <h1>Popular Catagories</h1>
            </div>
            <div className="categories-btn">
              <button>View All</button>
              <IoIosArrowRoundForward />
            </div>
          </div>

          <div className="categories-items mt-8">
            <div className="items-cards flex flex-wrap gap-5 justify-center">
              {CatagoriesList.map((items) => {
                return (
                  <div className="item-card">
                    <img src={items.image} alt="" />
                    <h1 className="">{items.title}</h1>
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

export default Categories;
