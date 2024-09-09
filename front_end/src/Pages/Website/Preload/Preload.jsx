import React from "react";
import { useEffect, useState } from "react";
import "./preload.css";
export default function Preload() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="light-version">
      {/* Preloader */}
      {loading && (
        <div id="preloader">
          <div className="preload-content">
            <div id="loader-load"></div>
          </div>
        </div>
      )}
    </div>
  );
}
