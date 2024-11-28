import React from "react";
import Swal from "sweetalert2";
import "./ShowHint_Btn.css";

export default function ShowHint_Btn({ hintText }) {
  const showHint = () => {
    Swal.fire({
      icon: "info",
      title: "Here's a hint!",
      text: hintText,
    });
  };

  return (
    <button className="show-hint-btn" onClick={showHint}>
      <i className="fas fa-lightbulb show-hint-btn-icon"></i> Show Hint
    </button>
  );
}
