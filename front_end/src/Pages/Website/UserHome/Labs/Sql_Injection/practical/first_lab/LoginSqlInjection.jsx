import React, { useState } from "react";
import axios from "axios";
import "./LoginSqlInjection.css";

export default function LoginSqlInjection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { username, password };
    axios
      .post("http://127.0.0.1:8000/api/Loginsqlinjection", data)
      .then((response) => {
        console.log("Login Successful", response.data);
      })
      .catch((error) => {
        console.error("Login Failed", error);
      });
  };

  return (
    <body className="sqlcolor">
      <div className="container-login">
        <div className="login-sql">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn-login">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}
