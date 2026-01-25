import React from "react";
import { UseCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = UseCart();
  return (
    <div>
      <div className="">
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <button className="btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
