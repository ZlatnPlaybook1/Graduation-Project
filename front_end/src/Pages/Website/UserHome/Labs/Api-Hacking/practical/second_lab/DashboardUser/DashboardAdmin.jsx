import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "./DashboardAdmin.css";
import GOBack from "../../../../../GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../../../ShowHint_Btn/ShowHint_Btn";

export default function DashboardAdmin() {
  const { id: userId } = useParams();
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const hintMessage = `<p>Add Something</p>`;

  // Fetch wallpapers for a specific user
  useEffect(() => {
    const fetchWallpapersByUserId = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8080/api/wallpapers/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch wallpapers");
        }
        const data = await response.json();
        setWallpapers(data.data);
      } catch (error) {
        console.error("Error fetching wallpapers:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchWallpapersByUserId();
    }
  }, [userId]);

  // Delete a specific wallpaper
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/api/wallpapers/${userId}/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Error deleting wallpaper");
      }
      setWallpapers((prevWallpapers) =>
        prevWallpapers.filter((wallpaper) => wallpaper.id !== id)
      );
    } catch (error) {
      console.error("Error deleting wallpaper:", error);
    }
  };

  if (loading) {
    return <p>Loading wallpapers...</p>;
  }

  return (
    <>
      <GOBack />
      <ShowHint hintText={hintMessage} />
      <div className="dashboard-container">
        <h2 className="dashboard-title">Wallpaper Details</h2>
        {wallpapers.length > 0 ? (
          wallpapers.map((wallpaper) => (
            <div className="wallpaper-card" key={wallpaper.id}>
              <img
                src={`http://127.0.0.1:8080/${wallpaper.path}`}
                alt={wallpaper.name}
                className="wallpaper-image"
              />
              <div className="wallpaper-actions">
                <p className="wallpaper-title">{wallpaper.name}</p>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(wallpaper.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No wallpapers found for the given user.</p>
        )}
      </div>
    </>
  );
}
