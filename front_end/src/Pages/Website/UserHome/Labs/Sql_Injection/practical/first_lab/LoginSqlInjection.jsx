import React, { useState } from "react";
import axios from "axios";
import "./LoginSqlInjection.css";

export default function LoginSqlInjection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    axios
      .post("http://127.0.0.1:8080/api/Loginsqlinjection", data)
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
