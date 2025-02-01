import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InsecureDeserializationLab1.css";
import GoBack from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../../ShowHint_Btn/ShowHint_Btn";

export default function InsecureDeserializationLab1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const hintMessage = `<p>Add Something</p>`;

  const handleLogin = async (e) => {
    e.preventDefault();

    // Prepare the serialized PHP-like object
    const serializedData = `O:4:"User":2:{s:8:"username";s:4:"${username}";s:8:"password";s:4:"${password}";}`;

    // Base64 encode the serialized string
    const encodedCookies = btoa(serializedData);

    // Set the cookie in the browser
    document.cookie = `session=${encodedCookies}; path=/; max-age=3600; SameSite=None; Secure`;

    // Retrieve the cookie you just set
    const sessionCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("session="))
      ?.split("=")[1];

    // Log the cookie to see what is being sent
    console.log("Cookie sent to API:", `${sessionCookie}`);

    const payload = { username, password };
    console.log("Data sent to API:", payload);

    try {
      const response = await fetch(
        "http://127.0.0.1:8080/api/insecureDeserializationLab1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Cookie: `${sessionCookie}`, // Send the cookie manually
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      console.log("Success:", data);

      if (data.data.username === "admin") {
        navigate(
          "/Insecure_Deserialization/Insecure_Deserialization_Labs/lab1/AdminDashboard"
        );
      } else if (data.data.username === "test") {
        navigate(
          "/Insecure_Deserialization/Insecure_Deserialization_Labs/lab1/testPage"
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <GoBack />
      <ShowHint hintText={hintMessage} />
      <div className="InsecureDeserializationLab-container">
        <div className="InsecureDeserializationLab-form-wrapper">
          <h2 className="InsecureDeserializationLab-title">Welcome Back</h2>
          <p className="InsecureDeserializationLab-subtitle">
            Please enter your credentials to login
          </p>
          {errorMessage && (
            <p className="InsecureDeserializationLab-error">{errorMessage}</p>
          )}
          <form
            className="InsecureDeserializationLab-form"
            onSubmit={handleLogin}
          >
            <div className="InsecureDeserializationLab-input-group">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="InsecureDeserializationLab-input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="InsecureDeserializationLab-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
