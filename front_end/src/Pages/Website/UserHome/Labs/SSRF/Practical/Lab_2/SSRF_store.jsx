import React, { useState, useEffect } from "react";
import GoBackBtn from "../../../../Components/GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../Components/ShowHint_Btn/ShowHint_Btn";
import "../../SSRF_Labs.css"; 
import products from "../../data.json";
import axios from "axios";

export default function SSRF_store1() {
  const [outOfStockMessage, setOutOfStockMessage] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [messageFromURL, setMessageFromURL] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const apiUrl = "http://127.0.0.1:8080/api/SSRFLab";
  
  const hintMessage = `<span>This lab is vulnerable to SSRF due to improper validation of user-supplied input. To solve the lab, you need to provide a URL that can be exploited to access internal resources (e.g., localhost).</span>`;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get("message");
    
    if (message) {
      setMessageFromURL(decodeURIComponent(message));
    }
  }, []);

  useEffect(() => {
    if (messageFromURL) {
      sendMessageToBackend(messageFromURL);
    }
  }, [messageFromURL]);

  const sendMessageToBackend = async (message) => {
    try {
      const response = await axios.post(`${apiUrl}/submitMessage`, { message });
      console.log("Message sent to backend:", response.data);
      setHtmlContent(response.data);
    } catch (error) {
      console.error("Error sending message to backend:", error);
    }
  };

  const labreset = async () => {
    try {
      const response = await axios.get(`${apiUrl}Reset`);
      if (response.status === 200) {
        setResetMessage(response.data.message);
        window.history.replaceState({}, "", window.location.pathname);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error resetting:", error);
      setResetMessage("Error: Could not reset.");
    }
  };

  const checkStock = async (product) => {
    try {
      const response = await axios.post(`${apiUrl}/checkStock`, { productId: product.id });

      const message = response.data.message;
      window.history.pushState({}, "", `?message=${encodeURIComponent(message)}`);
      setOutOfStockMessage(message);
    } catch (error) {
      console.error("Error sending stock check request:", error);
      setOutOfStockMessage("Error: Could not fetch stock information.");
    }
  };

  return (
    <div className="container">
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
          position: "absolute",
          left: "15%",
        }}
      >
        Reset
      </button>

      {outOfStockMessage && (
        <div className="out-of-stock-message" style={{ color: "red", textAlign: "center", marginBottom: "20px", marginTop: "20px" }}>
          <h2>{outOfStockMessage}</h2>
        </div>
      )}
      
      {htmlContent && (
        <div className="backend-response" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      )}

      <div className="ssrf__course-store">
        <div className="container">
          <h1 style={{ textAlign: "center", marginBottom: 60 }}>Featured Products</h1>
          <div className="ssrf__course-store--row-practice">
            {products.map((product) => (
              <div className="ssrf__course-store--card-store" key={product.id}>
                <div className="ssrf__course-store__card-store--functions">
                  <i className="fa-solid fa-cart-plus"></i>
                  <i className="fa-regular fa-heart"></i>
                </div>
                <img src={product.image} alt={product.title} />
                <div className="ssrf__course-store__card-store--card-text-store">
                  <button
                    onClick={() => checkStock(product)}
                    className="text-black bg-transparent border-0"
                  >
                    {product.title}
                  </button>
                  <p className="price">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
