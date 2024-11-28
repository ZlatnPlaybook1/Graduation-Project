import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoBack_Btn.css";
export default function GoBack_Btn() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <button className="go-back-btn" onClick={handleGoBack}>
      <i className="fas fa-arrow-left go-back-btn-arrow"></i>
      Go Back
    </button>
  );
}
