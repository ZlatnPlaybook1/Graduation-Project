import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../../../../HackerLoginForm/HackerLoginForm.css";
import { Link } from "react-router-dom";
import ShowHintBtn from "../../../../ShowHint_Btn/ShowHint_Btn";
import GoBackBtn from "../../../../GoBack_Btn/GoBack_Btn";

const JWTLogin = ({ apiEndpoint }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { username, password };
    axios
      .post(apiEndpoint, data)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        const decodedToken = jwtDecode(token);
        if (decodedToken.role === "admin") {
          navigate(`/admin-dashboard`);
        } else {
          navigate(`/user-dashboard`);
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          setErr(error.response.data);
          console.error(error.response.data);
        } else {
          setErr("Network Error");
          console.error(error);
        }
      });
  };
  const spanCount = 400;
  const hintMessage = `
    <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
      <li>1. User is <mark><code>CyberLabs</code></mark> and you need to find the password.</li>
      <li>2. Use your SQL injection skills to bypass the login form and get the password.</li>
      <li>3. Remember How to skip the password!</li>
      <li>4. Try to search about SQL Injection and how to bypass the login form.</li>
      <li>5. Good Luck!</li>
    </ul>
  `;

  return (
    <div
      style={{
        backgroundColor: "#000",
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <GoBackBtn />
      <ShowHintBtn hintText={hintMessage} />
      <main className="hacker-login">
        {Array.from({ length: spanCount }).map((_, index) => (
          <span key={index} className="hackerLogin-gridSpan"></span>
        ))}

        {/* Sign-in form */}
        <div className="hackerLogin-signin">
          <div className="hackerLogin-content">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit} className="hacker-form">
              <div className="hackerLogin-inputBox">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <i>Username</i>
              </div>
              <div className="hackerLogin-inputBox">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i>Password</i>
              </div>
              <div className="hackerLogin-links">
                <Link to="">Forgot Password?</Link>
                <Link to="">Sign Up</Link>
              </div>
              <div className="hackerLogin-inputBox">
                <input
                  type="submit"
                  value={loading ? "Logging in..." : "Login"}
                  disabled={loading}
                />
              </div>
              {err && <span className="error">{err}</span>}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JWTLogin;
