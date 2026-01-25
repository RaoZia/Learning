import React from "react";
import { UseCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, UpdateCartQty, Total } = UseCart();
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div>No items in Cart</div>
      ) : (
        <div>
          <table className="table ">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <input
                      min="1"
                      type="number"
                      value={item.qty}
                      onChange={(e) =>
                        UpdateCartQty(item.id, Number(e.target.value))
                      }
                      className="w-full text-center"
                    />
                  </td>
                  <td>${item.price * item.qty} </td>
                  <td>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-blue-300 py-1 px-1 text-white hover:cursor-pointer"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>Total: ${Total.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
