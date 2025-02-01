import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InsecureDeserializationLab1.css";

export default function InsecureDeserializationLab1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Serialize a PHP-like object and Base64 encode it
    const serializedData = `O:4:"User":2:{s:8:"username";s:${username.length}:"${username}";s:8:"password";s:${password.length}:"${password}";}`;
    const encodedCookies = btoa(serializedData);

    // Set the cookie in the browser
    document.cookie = `session=${encodedCookies}; path=/; max-age=3600; SameSite=Lax`;

    try {
      // Send the username and password to the backend
      const response = await fetch("http://127.0.0.1:8080/api/insecureDeserializationLab1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Ensure cookies are sent with the request
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Success:", data);

      // Redirect based on the username
      if (data.data.username === "admin") {
        navigate("/AdminDashboard");
      } else if (data.data.username === "test") {
        navigate("/testPage");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
