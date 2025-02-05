import React, { useState } from "react";
import axios from "axios";

const First_Lab = () => {
  const [item, setItem] = useState({ name: "", price: 0 });
  const [message, setMessage] = useState("");

  const handleAddToCart = async () => {
    try {
      const response = await axios.post("/api/cart", {
        name: item.name,
        price: item.price,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Failed to add item to cart.");
    }
  };

  return (
    <div>
      <h1>Buy Lightweight l33t Leather Jacket</h1>
      <input
        type="text"
        placeholder="Item Name"
        value={item.name}
        onChange={(e) => setItem({ ...item, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={item.price}
        onChange={(e) => setItem({ ...item, price: parseInt(e.target.value) })}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
      <p>{message}</p>
    </div>
  );
};

export default First_Lab;
