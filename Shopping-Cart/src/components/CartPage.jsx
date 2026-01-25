import React from "react";
import Cart from "./Cart";

const CartPage = () => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="container">
        <h2>Your Cart</h2>
        <Cart />
      </div>
    </div>
  );
};

export default CartPage;
