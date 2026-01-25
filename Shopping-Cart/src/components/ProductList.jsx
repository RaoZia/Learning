import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "laptop",
      price: 5000,
    },
    {
      id: 2,
      name: "HeadPhone",
      price: 800,
    },
    {
      id: 3,
      name: "Keyboard",
      price: 500,
    },
    {
      id: 4,
      name: "Mobile Phone",
      price: 3000,
    },
    {
      id: 5,
      name: "Mouse",
      price: 300,
    },
  ];
  return (
    <div className="w-full font-sans text-xl">
      <div className="grid grid-cols-4 gap-5 ">
        {products.map((val) => (
          <div className="bg-gray-300 py-4 text-center shadow-2xl">
            <ProductCard product={val} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
