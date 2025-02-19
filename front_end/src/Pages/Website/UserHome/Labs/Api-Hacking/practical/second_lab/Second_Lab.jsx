import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Second_Lab.css";
import GOBack from "../../../../Components/GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../../Components/ShowHint_Btn/ShowHint_Btn";

export default function Second_Lab() {
  const navigate = useNavigate();
  const hintMessage = `<p>Add Something</p>`;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Username and Password are required.");
      return;
    }

    try {
      // Request to the API
      const response = await fetch("http://127.0.0.1:8080/api/ApiHackinglab2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to send data to the server");
      }

      const data = await response.json();

      if (data.message === "success") {
        setMessage("Login successful!");

        const userId = Number(data.data.id);

        // Navigate based on user ID
        if (userId === 1) {
          navigate(
            `/Api_Hacking/Api_Hacking_labs/lab2/DashboardAdmin/${userId}`
          );
        } else {
          navigate(
            `/Api_Hacking/Api_Hacking_labs/lab2/DashboardUser/${userId}`
          );
        }
      } else {
        setMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setMessage("An error occurred while sending data to the server.");
      console.error("Error:", error);
    }
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
              <p className="lab1-default-text">Username: user</p>
              <p className="lab1-default-text">Password: user</p>
            </div>

            <button type="submit" className="lab1-submit-btn">
              Submit
            </button>
          </form>

          {message && (
            <p
              className={`lab1-response-message ${
                message.includes("successful") ? "success" : "error"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>

      {/* Hidden div to inform about the data source */}
      <div className="hidden-data-source" style={{ display: "none" }}>
        <p> Read users json </p>
      </div>
    </>
  );
}
