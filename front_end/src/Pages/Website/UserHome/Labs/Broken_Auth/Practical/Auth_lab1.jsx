import React, { useState } from "react";
import "./auth_lab.css";
import GOBack from "../../../GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../ShowHint_Btn/ShowHint_Btn";

export default function AuthLab() {
  const hintMessage = `
  <p>Add Something</p>
  `;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., authentication API call
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
      <GOBack />
      <ShowHint hintText={hintMessage} />
      <div className="lab1-login-container">
        <div className="lab1-login-card">
          <h3 className="lab1-login-title">Login</h3>

          <form onSubmit={handleSubmit} className="lab1-login-form">
            <div className="lab1-input-section">
              <label htmlFor="username" className="lab1-input-label">
                Username
              </label>
              <input
                type="text"
                className="lab1-input-field lab1-username-input"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="lab1-input-section">
              <label htmlFor="password" className="lab1-input-label">
                Password
              </label>
              <input
                type="password"
                className="lab1-input-field lab1-password-input"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="lab1-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
