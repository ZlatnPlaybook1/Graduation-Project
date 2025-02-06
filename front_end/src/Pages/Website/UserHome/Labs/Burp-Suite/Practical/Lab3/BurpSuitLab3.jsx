import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BurpSuitLab3.css";
import GOBack from "../../../../../GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../../../ShowHint_Btn/ShowHint_Btn";

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

        // Filter wallpapers by specific IDs (3, 6, 9)
        const filteredWallpapers = data.data.filter((wp) =>
          [3, 6, 9].includes(wp.id)
        );

        setWallpapers(filteredWallpapers);
      } catch (error) {
        console.error("Error fetching wallpapers:", error);
        setError("Failed to load wallpapers.");
      } finally {
        setLoading(false);
      }
    };

    fetchWallpapers();
  }, []);

  const handleImageClick = (wallpaper) => {
    navigate(`/Burp_Suit/Burp_Suit_Labs/lab3/${wallpaper.id}`);
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

      <div className="container">
        <h2 className="text-center mt-4">Products Details</h2>

        {wallpapers.length > 0 ? (
          <div className="row justify-content-center">
            {wallpapers.map((wallpaper) => (
              <div
                key={wallpaper.id}
                className="col-md-4 col-sm-6 mb-4 text-center"
              >
                <div
                  className="card wallpaper-card"
                  onClick={() => handleImageClick(wallpaper)}
                >
                  <img
                    src={`http://127.0.0.1:8080/${wallpaper.path}`}
                    alt={wallpaper.name}
                    className="card-img-top wallpaper-thumbnail"
                  />
                  <div className="card-body">
                    <p className="card-text wallpaper-name">{wallpaper.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center mt-4">No wallpapers found.</p>
        )}
      </div>
    </>
  );
}
