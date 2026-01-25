import React from "react";
import { Link } from "react-router";
import { UseCart } from "../context/CartContext";
const Navbar = () => {
  const { cart } = UseCart();
  return (
    <div>
      <nav className="NavBar">
        <Link className="navlink">MyShop</Link>
        <div className="leftNav">
          <Link className="navlink ">Home</Link>
          <Link to={"/cart"} className="navlink ">
            Cart({cart.length})
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
