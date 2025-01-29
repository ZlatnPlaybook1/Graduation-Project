import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "./DashboardAdmin.css";
import GOBack from "../../../../../GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../../../ShowHint_Btn/ShowHint_Btn";

export default function Dashboard1() {
  const { id: userId } = useParams();
  const [wallpaper, setWallpaper] = useState(null);
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

        console.log("Fetched Data:", data);
        if (data.data && data.data.length > 0) {
          setWallpaper(data.data[0]);
        } else {
          setWallpaper(null);
        }
      } catch (error) {
        console.error("Error fetching wallpaper:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchWallpapersByUserId();
    }
  }, [userId]);

  // Delete a specific wallpaper
  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:8080/api/wallpapers/${userId}/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error deleting wallpaper");
        }
        setWallpaper(null);
      })
      .catch((error) => console.error("Error deleting wallpaper:", error));
  };

  if (loading) {
    return <p>Loading wallpaper...</p>;
  }

  return (
    <>
      <GOBack />
      <ShowHint hintText={hintMessage} />
      <div className="dashboard-container">
        <h2 className="dashboard-title">Wallpaper Details</h2>
        {wallpaper ? (
          <div className="wallpaper-card">
            {wallpaper.path ? (
              <img
                src={
                  wallpaper.path.startsWith("http")
                    ? wallpaper.path
                    : `http://127.0.0.1:8080/${wallpaper.path}`
                }
                alt={wallpaper.name}
                className="wallpaper-image"
              />
            ) : (
              <p>Image path is not available.</p>
            )}
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
        ) : (
          <p>No wallpaper found for the given ID.</p>
        )}
      </div>
    </>
  );
}
