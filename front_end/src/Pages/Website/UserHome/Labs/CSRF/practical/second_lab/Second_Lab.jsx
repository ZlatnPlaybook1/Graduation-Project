import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState(""); // Store valid password from DB
  const [message, setMessage] = useState("");

  // Handle the login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send the HTTP request with the username and password
      const response = await axios.post("http://127.0.0.1:8080/api/CSRFLab2", {
        username,
        password,
        validPass, // Pass the current valid password (empty at the moment)
      });

      // If the response contains the valid password
      if (response.data.success) {
        setValidPass(response.data.validPassword); // Get the valid password from DB

        // SweetAlert popup to show the password for the learner to intercept
        Swal.fire({
          title: "Success!",
          text: `The valid password is: ${response.data.validPassword}`,
          icon: "success",
          confirmButtonText: "Got it",
        });

        // You can simulate password update or other actions after this
        setMessage("Login successful");
      } else {
        setMessage(response.data.message);

        Swal.fire({
          title: "Try again!",
          text: "Invalid username or password. Try intercepting the request.",
          icon: "warning",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      setMessage("Server error");
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        {message && <p className="mt-3 text-center">{message}</p>}
      </div>
    </div>
  );
}
