import React, { useState, useEffect } from "react";
import "./Go2Top_Btn.css";

export default function Go2TopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position and show/hide button
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`go-to-top-btn ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <i className="fas fa-arrow-up go-to-top-btn-icon"></i>
    </button>
  );
}
