import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import GOBack from "../../../GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../ShowHint_Btn/ShowHint_Btn";
import "./CommandInjectionLabs.css";

// Import images from your local folder
import Image1 from "../../../assets/img/Command Injection/resim.jpg";
import Image2 from "../../../assets/img/Command Injection/resim2.jpg";
import Image3 from "../../../assets/img/Command Injection/resim3.jpg";

export default function CommandInjectionLab2() {
  const hintMessage = `<p>Add Something</p>`;
  const navigate = useNavigate();
  const location = useLocation();

  const [currentDateTime, setCurrentDateTime] = useState("");
  const [showStock, setShowStock] = useState(null); // State for tracking which card is clicked

  // Get product_id from URL
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("product_id");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDateTime(now.toString()); // Update the current date and time
    };

    // Update the date when product_id contains |date or ;date
    if (
      productId &&
      (productId.includes("|date") || productId.includes(";date"))
    ) {
      updateDateTime();
    }
  }, [productId]);

  // Generate stock message based on the selected card
  const generateStockMessage = (stockCount) => {
    // If productId contains |date or ;date, show the current date/time
    if (
      productId &&
      (productId.includes("|date") || productId.includes(";date"))
    ) {
      return `Stock: ${currentDateTime} Pieces`;
    }

    // Otherwise, show the stock count for the selected card
    return `Stock: ${stockCount} Pieces`;
  };

  const handleCardClick = (cardId) => {
    setShowStock(cardId); // Set the card ID that was clicked
    // Update the URL with the selected product_id
    navigate(`?product_id=${cardId}`);
  };

  return (
    <>
      <GOBack />
      <ShowHint hintText={hintMessage} />
      <div className="page-container">
        <div className="image-container">
          <div className="image-card" onClick={() => handleCardClick(1)}>
            <img src={Image1} alt="Product 1" className="product-image" />
            <button className="check-button">Check</button>
          </div>
          <div className="image-card" onClick={() => handleCardClick(2)}>
            <img src={Image2} alt="Product 2" className="product-image" />
            <button className="check-button">Check</button>
          </div>
          <div className="image-card" onClick={() => handleCardClick(3)}>
            <img src={Image3} alt="Product 3" className="product-image" />
            <button className="check-button">Check</button>
          </div>
        </div>

        {/* Display stock message based on the selected card */}
        {showStock !== null && (
          <div className="stock-info-container">
            <p className="stock-info">
              {generateStockMessage(
                showStock === 1 ? 13 : showStock === 2 ? 26 : 25
              )}
            </p>
          </div>
        )}

        {/* Display the date message only if |date or ;date is in the URL */}
        {productId &&
          (productId.includes("|date") || productId.includes(";date")) && (
            <div className="stock-info-container">
              <p className="stock-info">{generateStockMessage(0)}</p>
            </div>
          )}
      </div>
    </>
  );
}
