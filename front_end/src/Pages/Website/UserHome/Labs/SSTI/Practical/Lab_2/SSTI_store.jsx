import React, { useState, useEffect } from "react";
import GoBackBtn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../ShowHint_Btn/ShowHint_Btn";
import "./Second_Lab.css";
import products from "./data.json"; // Your local JSON file with stock data
import axios from "axios"; // You need to import axios to make the API request

export default function SSTI_store() {
  const [outOfStockMessage, setOutOfStockMessage] = useState(""); // State to hold the out-of-stock message
  const [resetMessage, setResetMessage] = useState("");
  const [messageFromURL, setMessageFromURL] = useState(""); // New state for URL message
  const [htmlContent, setHtmlContent] = useState("");

  const hintMessage = ` 
    <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
      <li>1. Use Burp Suite to intercept and modify the request that sets the product category filter.</li>
      <li>2. Modify the <mark><code>category </code></mark> parameter, giving it the value <mark><code>'+OR+1=1--</code></mark></li>
      <li>3. Submit the request, and verify that the response now contains one or more unreleased products.</li>
    </ul>
  `;

  // This effect runs when the component mounts to fetch the message from the URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get("message"); // Get the 'message' parameter from the URL

    if (message) {
      setMessageFromURL(decodeURIComponent(message)); // Set the message to the state
    }
  }, []); // Empty dependency array, so this effect only runs once when the component mounts.

  useEffect(() => {
    // Send the message to the backend when it changes
    if (messageFromURL) {
      sendMessageToBackend(messageFromURL);
    }
  }, [messageFromURL]); // Runs every time the messageFromURL changes

  const sendMessageToBackend = async (message) => {
    try {
      // Send the message to the backend (POST request)
      const response = await axios.post(
        "http://127.0.0.1:8080/api/SSTIlab2/submitMessage", // Change this endpoint to your API
        { message } // Sending the message in the request body
      );

      // Handle the response from the backend
      console.log("Message sent to backend:", response.data);
      setHtmlContent(response.data);
      // You can update the UI based on the backend response if needed
    } catch (error) {
      console.error("Error sending message to backend:", error);
    }
  };
  // const getMessageFromBackend = async () => {
  //   try {
  //     // Send the message to the backend (POST request)
  //     const response = await axios.get(
  //       "http://127.0.0.1:8080/api/submitMessage", // Change this endpoint to your API
  //       { message } // Sending the message in the request body
  //     );

  //     // Handle the response from the backend
  //     console.log("Message Got from backend:", response.data);
  //     // You can update the UI based on the backend response if needed
  //   } catch (error) {
  //     console.error("Error sending message to backend:", error);
  //   }
  // };

  const labreset = async () => {
    try {
      // Call the backend API to reset
      const response = await axios.get(
        "http://127.0.0.1:8080/api/SSTIlab2Reset"
      );

      // Handle the response from the backend
      if (response.status === 200) {
        setResetMessage(response.data.message); // Display the success message from the backend
      }
    } catch (error) {
      console.error("Error resetting:", error);
      setResetMessage("Error: Could not reset.");
    }
  };

  const checkStock = async (product) => {
    try {
      // Send the product ID to the backend (via POST request)
      const response = await axios.post(
        `http://127.0.0.1:8080/api/SSTIlab2/${product.id}`
      );

      // Get the message from the backend
      const message = response.data.message;

      // Update the URL with the message as a query parameter
      window.history.pushState(
        {},
        "",
        `?message=${encodeURIComponent(message)}`
      );

      // Set the message to display on the page
      setOutOfStockMessage(message);
    } catch (error) {
      console.error("Error sending stock check request:", error);
      setOutOfStockMessage("Error: Could not fetch stock information.");
    }
  };

  return (
    <div className="container-ssti3">
      <GoBackBtn />
      <ShowHintBtn hintText={hintMessage} />
      <button
        onClick={labreset}
        className="reset-btn"
        style={{
          width: "fit-content",
          marginTop: "20px",
          marginLeft: "20px",
          borderRadius: "5px",
          left: "0",
        }}
      >
        Reset
      </button>

      {/* Display out-of-stock message if available */}
      {outOfStockMessage && (
        <div
          className="out-of-stock-message"
          style={{
            color: "red",
            textAlign: "center",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <h2>{outOfStockMessage}</h2>
        </div>
      )}
      {htmlContent && (
        <div
          className="backend-response"
          dangerouslySetInnerHTML={{ __html: htmlContent }} // This will render the HTML content
        />
      )}

      <div className="course-store-ssti">
        <div className="container-store">
          <h1 style={{ textAlign: "center", marginBottom: 60 }}>
            Featured Products
          </h1>
          <div className="row-practice">
            {products.map((product) => (
              <div className="card-store" key={product.id}>
                <div className="functions">
                  <i className="fa-solid fa-cart-plus"></i>
                  <i className="fa-regular fa-heart"></i>
                </div>
                <img src={product.image} alt={product.title} />
                <div className="card-text-store">
                  <button
                    onClick={() => checkStock(product)} // When clicked, send the product ID to the backend
                    className="text-black bg-transparent"
                  >
                    {product.title}
                  </button>
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
