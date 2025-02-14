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
  // Base URL for backend API
  const BASE_URL = "http://localhost:8080/api";

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = async () => {
    if (localStorage.getItem("loggedIn") !== "true") {
      alert("Please log in to checkout");
      return;
    }

    const userBalance = parseFloat(localStorage.getItem("userBalance")) || 0;
    const items = cart.map((item) => ({
      id: item.id,
      price: item.price,
      quantity: item.quantity,
    }));
    const totalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const payload = {
      items,
      totalPrice,
      userBalance,
    };

    try {
      const userId = localStorage.getItem("userId");
      const response = await fetch(
        `${BASE_URL}/bLVuln-cart/checkout/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Checkout failed");
      }
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
            <th>Remove</th>
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
