import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Your Cart ({cart.length} items)</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>1</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="text-end">
        Grand Total: $
        {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
      </h4>
    </div>
  );
};

export default CartPage;
