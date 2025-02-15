import React from "react";
import { useNavigate } from "react-router-dom";
import "./Affirmation.css"; // Optional custom styling

function Affirmation() {
  const navigate = useNavigate();

  // Prevent back navigation by replacing history if needed (optional)
  React.useEffect(() => {
    window.history.replaceState(null, "", "/affirmation");
  }, []);

  return (
    <div className="affirmation-container">
      <h1>Lab Finished</h1>
      <p>Your account has been deleted. Please log in again to continue.</p>
      <button onClick={() => navigate("/login")} className="login-btn">
        Go to Login Page
      </button>
    </div>
  );
}

export default Affirmation;
