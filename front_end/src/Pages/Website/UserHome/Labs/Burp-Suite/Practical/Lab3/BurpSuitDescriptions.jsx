import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GOBack from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../../ShowHint_Btn/ShowHint_Btn";

export default function BurpSuitDescriptions() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [wallpaper, setWallpaper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWallpaperDetails = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8080/api/burpsuitelab3/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch wallpaper details");
        }
        const data = await response.json();
        setWallpaper(data);
      } catch (error) {
        console.error("Error fetching wallpaper details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWallpaperDetails();
  }, [id]);

  if (loading) return <p>Loading wallpaper details...</p>;

  if (!wallpaper) return <p>Wallpaper not found.</p>;

  return (
    <>
      <GOBack />
      <ShowHint hintText="<p>Click image to go back</p>" />

      <div className="selected-wallpaper">
        <img
          src={`http://127.0.0.1:8080/${wallpaper.path}`}
          alt={wallpaper.name}
          className="wallpaper-fullsize"
          onClick={() => navigate("/Burp_Suit/Burp_Suit_Labs/lab3")}
        />
        <h3>{wallpaper.name}</h3>
        <p>{wallpaper.description || "No description available"}</p>
      </div>
    </>
  );
}
