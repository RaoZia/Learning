import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import { Outlet } from "react-router";
// import { CartProvider } from "../context/CartContext";
// import Cart from "./Cart";
const Home = () => {
  return (
    <div>
      {/* <CartProvider> */}
      <Navbar />
      <h2 className="text-2xl font-bold font-sans my-5">Shop Products</h2>
      <Outlet />
      {/* <ProductList /> */}
      {/* <Cart /> */}
      {/* </CartProvider> */}
    </div>
  );
};

export default Home;
