import React, { useState, useEffect } from "react";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";
import "../Lab_Style.css";

export default function Third_Lab_LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  // Fetch token from cookies on component mount
  useEffect(() => {
    const cookie = Cookie();
    const retrievedToken = cookie.get("CuberWeb");
    if (retrievedToken) {
      setToken(retrievedToken);
      // Check token validity (optional step to verify the token)
      // Example: fetch to validate token
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const correctUsername = "wiener";
    const correctPassword = "peter";

    if (username === correctUsername && password === correctPassword) {
      // Set token in cookies
      const cookie = Cookie();
      cookie.set("CuberWeb", "valid_token", { path: "/" }); // Set a cookie for token
      setToken("valid_token"); // Store token in state
      navigate("/AC-Vuln/AC_Vuln_labs/third_lab/admin"); // Redirect to admin page
    } else {
      setError("Invalid username or password.");
    }
  };

  // If there's no token, prevent access to the admin page
  if (!token) {
    return (
      <div className="lab-container">
        <h2>Login Form</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Log in" />
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    );
  }

  return (
    <div className="lab-container">
      <h2>Access Denied</h2>
      <p>
        You are not authorized to access the admin panel. Please log in first.
      </p>
    </div>
  );
}
