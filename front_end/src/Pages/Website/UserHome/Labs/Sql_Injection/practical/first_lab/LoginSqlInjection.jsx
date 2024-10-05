import React, { useState } from "react";
import axios from "axios";
import "./LoginSqlInjection.css";
import { useNavigate } from "react-router-dom";

export default function LoginSqlInjection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { username, password };
    axios
      .post("http://127.0.0.1:8080/api/Loginsqlinjection", data)
      .then((response) => {
        navigate(`/Sql_Injection/sql_Injection_lab/Welcome`);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          // if (error.response.status === 401) {
          //   setErr("Wrong Email or Password");
          // } else {
          //   setErr("Internal server error");
          // }
          setErr(error.response.data);
          console.error(error.response.data);
        } else {
          setErr("Network Error");
          console.error(error);
        }
      });
  };

  return (
    <div className="sqlcolor">
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
            {err !== "" && <span className="error">{err}</span>}

          </form>
        </div>
      </div>
    </div>
  );
}
