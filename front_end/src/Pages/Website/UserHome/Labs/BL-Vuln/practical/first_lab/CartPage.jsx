import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Inline Navigation component
const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(isLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    setLoggedIn(false);
    // Optionally, you can add a redirect here
  };

  return (
    <nav className="custom-nav">
      <ul className="custom-nav__list">
        <li className="custom-nav__item">
          <Link to="/BL-Vuln/BL_Vuln_labs/first_lab/cart">Cart</Link>
        </li>
        <li className="custom-nav__item">
          <Link to="/BL-Vuln/BL_Vuln_labs/first_lab">Shopping</Link>
        </li>
        <li className="custom-nav__item">
          <Link to="/BL-Vuln/BL_Vuln_labs/first_lab/myaccount">MyAcc</Link>
        </li>
        {loggedIn ? (
          <li className="custom-nav__item">
            <button onClick={handleLogout} className="btn btn-link">
              Logout
            </button>
          </li>
        ) : (
          <li className="custom-nav__item">
            <Link to="/BL-Vuln/BL_Vuln_labs/first_lab/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

const CartPage = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Update quantity of a given cart item
  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove an item from the cart
  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Checkout functionality with API call
  const handleCheckout = async () => {
    // Prepare order data: each item includes id, price, and quantity.
    const orderItems = cart.map((item) => ({
      id: item.id,
      price: item.price,
      quantity: item.quantity,
    }));

    try {
      const response = await fetch("https://example.com/api/buy", {
        // Replace with your actual API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderItems),
      });
      if (!response.ok) {
        throw new Error("Failed to place order");
      }
      const data = await response.json();
      alert("Order placed successfully!");
      setCart([]);
      localStorage.removeItem("cart");
    } catch (error) {
      alert("Error placing order: " + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <Navigation />
      <h2>
        Your Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)}{" "}
        {cart.reduce((acc, item) => acc + item.quantity, 0) === 1
          ? "item"
          : "items"}
        )
      </h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th> {/* New column for delete functionality */}
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    updateQuantity(index, parseInt(e.target.value, 10) || 1)
                  }
                  style={{ width: "60px" }}
                />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  onClick={() => removeItem(index)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="text-end">
        Grand Total: $
        {cart
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2)}
      </h4>
      <div className="text-end">
        <button onClick={handleCheckout} className="btn btn-success">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CartPage;
