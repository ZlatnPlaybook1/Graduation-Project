import React, { useState, useEffect } from "react";
import GoBackBtn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../ShowHint_Btn/ShowHint_Btn";
import "./Second_Lab.css";
import products from "./data.json"; // Your local JSON file with stock data
import axios from "axios"; // You need to import axios to make the API request

export default function SSTI_store() {
  const [outOfStockMessage, setOutOfStockMessage] = useState("");

  const hintMessage = `
    <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
      <li>1. Use Burp Suite to intercept and modify the request that sets the product category filter.</li>
      <li>2. Modify the <mark><code>category </code></mark> parameter, giving it the value <mark><code>'+OR+1=1--</code></mark></li>
      <li>3. Submit the request, and verify that the response now contains one or more unreleased products.</li>
    </ul>
  `;

  const checkStock = async (product) => {
    let message = "";

    if (product.stock <= 0) {
      message = `out of stock.`;
    } else {
      message = `in stock!`;
    }

    // Send the message and product details to the API
    try {
      const response = await axios.post("http://127.0.0.1:8080/api/check-stock", {
        productId: product.id,  // Send product ID
        stockMessage: message,   // Send the stock status message
      });

      // Handle the response from the API (you can modify this based on your API response structure)
      setOutOfStockMessage(response.data.message || message);

      // Update the URL with the message
      window.history.pushState({}, "", `?message=${encodeURIComponent(response.data.message || message)}`);
    } catch (error) {
      console.error("Error sending stock check request:", error);
      setOutOfStockMessage("Error checking stock status.");
    }
  };

  // This effect runs once when the component is mounted
  useEffect(() => {
    // Retrieve the message from the URL query parameter 'message'
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message'); // Get the 'message' parameter
    if (message) {
      setOutOfStockMessage(message); // Set the message to the state
    }
  }, []);

  return (
    <div className="container-ssti3">
      <GoBackBtn />
      <ShowHintBtn hintText={hintMessage} />

      {/* Display out-of-stock message if available */}
      {outOfStockMessage && (
        <div className="out-of-stock-message" style={{ color: "red", textAlign: "center", marginBottom: "20px", marginTop: "20px" }}>
          <h2>{outOfStockMessage}</h2>
        </div>
      )}

      <div className="course-store-ssti">
        <div className="container-store">
          <h1 style={{ textAlign: "center", marginBottom: 60 }}>Featured Products</h1>
          <div className="row-practice">
            {products.map((product) => (
              <div className="card-store" key={product.id}>
                <div className="functions">
                  <i className="fa-solid fa-cart-plus"></i>
                  <i className="fa-regular fa-heart"></i>
                </div>
                <img src={product.image} alt={product.title} />
                <div className="card-text-store">
                  <button onClick={() => checkStock(product)} className="text-black bg-transparent">{product.title}</button>
                  <p className="price">${product.price}</p>
                  {/* Add the Check Stock link */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
