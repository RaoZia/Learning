import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const UpdateCartQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const Total = cart.reduce((t, item) => t + item.price * item.qty, 0);
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, UpdateCartQty, Total }}
    >
      {children}
    </CartContext.Provider>
  );
};
const UseCart = () => useContext(CartContext);
export { CartContext, CartProvider, UseCart };
