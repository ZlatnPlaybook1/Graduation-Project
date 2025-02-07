import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BurpSuitLab3.css";
import GOBack from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../../ShowHint_Btn/ShowHint_Btn";

export default function BurpSuitLab3() {
  const navigate = useNavigate();
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hintMessage = `<p>Click an image to see details.</p>`;

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8080/api/burpsuitelab3`);
        if (!response.ok) {
          throw new Error("Failed to fetch wallpapers");
        }
        const data = await response.json();

        if (!data || !Array.isArray(data.data)) {
          throw new Error("Invalid API response format");
        }

        setWallpapers(data.data); // Store the array of wallpapers
      } catch (error) {
        setError("Failed to load wallpapers.");
      } finally {
        setLoading(false);
      }
    };

    fetchWallpapers();
  }, []);

  const handleImageClick = (id) => {
    navigate(`/Burp_Suit/Burp_Suit_Labs/lab3/${id}`);
  };

  if (loading) {
    return <p className="text-center mt-4">Loading wallpapers...</p>;
  }

  if (error) {
    return <p className="text-center text-danger mt-4">{error}</p>;
  }

  return (
    <>
      <GOBack />
      <ShowHint hintText={hintMessage} />

      <div className="items-section">
        <h2 className="items-title">Item Details</h2>

        {wallpapers.length > 0 ? (
          <div className="items-wrapper">
            {wallpapers
              .filter((item) => [3, 6, 9].includes(Number(item.id)))
              .map((item) => (
                <div
                  key={item.id}
                  className="item-card"
                  onClick={() => handleImageClick(item.id)}
                >
                  <img
                    src={`http://127.0.0.1:8080/${item.path}`}
                    alt={item.name}
                    className="item-image"
                  />
                  <div className="item-info">
                    <h5 className="item-name">{item.name}</h5>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <p className="items-empty">No items found.</p>
        )}
      </div>
    </>
  );
}
