import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookie from "cookie-universal";
import "../../../../HackerLoginForm/HackerLoginForm.css";
import ShowHintBtn from "../../../../ShowHint_Btn/ShowHint_Btn";
import GoBackBtn from "../../../../GoBack_Btn/GoBack_Btn";
import { Link } from "react-router-dom";

const JWTCheck = ({ apiEndpoint, lab }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [loggedusername, setLoggedUsername] = useState("");
  const [loadingDelete, setLoadingDelete] = useState(false); // For delete user button
  const [loadingCreateUser, setLoadingCreateUser] = useState(false); // For creating user "Ali"
  const url = `/jwtattacks/jwtattacks_lab/${lab}`;

  const cookie = Cookie();

  // Handle login request
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { username, password };

    // Make an API call to backend to authenticate user and get the token
    axios
      .post(`${apiEndpoint}/login`, data) // Replace with your login endpoint
      .then((response) => {
        const token = response.data.data.token; // Assuming the token is in the 'token' field
        cookie.set("Token", token);
        const decodedToken = jwtDecode(token); // Decode the JWT token to get the user's role
        setLoggedUsername(decodedToken.username); // Set the user role based on the decoded token
        console.log("Login successful", decodedToken);
        setLoading(false); // Stop loading once the role is determined

        // Create the user "Ali" if the logged-in user is an admin
        if (decodedToken.username === "admin") {
          createUserAli();
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          setErr(error.response.data.message || "Invalid credentials.");
        } else {
          setErr("Network Error");
        }
      });
  };

  // Handle creating user "Ali"
  const createUserAli = () => {
    setLoadingCreateUser(true);
    axios
      .post(`${apiEndpoint}/createuser`, {
        username: "Ali",
        password: "somepassword",
      }) // Create user endpoint
      .then((response) => {
        console.log("User Ali created successfully", response);
        setLoadingCreateUser(false);
      })
      .catch((error) => {
        setErr("Error creating user Ali.");
        setLoadingCreateUser(false);
        console.error("Error creating user Ali", error);
      });
  };

  // Handle deleting user "Ali"
  const handleDeleteUser = () => {
    setLoadingDelete(true);
    axios
      .delete(`${apiEndpoint}/deleteuser`, { data: { username: "Ali" } }) // Delete user endpoint
      .then((response) => {
        console.log("User Ali deleted successfully", response);
        setLoadingDelete(false);
      })
      .catch((error) => {
        setErr("Error deleting user Ali.");
        setLoadingDelete(false);
        console.error("Error deleting user Ali", error);
      });
  };
  console.log(username);
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

        {/* Show Login Form if UserRole is null (not logged in yet) */}
        <div className="hackerLogin-signin">
          <div className="hackerLogin-content">
            {loggedusername === "admin" ? (
              <>
                <h2>Admin Dashboard</h2>
                <button onClick={handleDeleteUser} disabled={loadingDelete}>
                  {loadingDelete ? "Deleting..." : "Delete User Ali"}
                </button>
              </>
            ) : loggedusername !== "admin" && loggedusername !== "" ? (
              <>
                <h2>Access Denied</h2>
                <p>Only Admins Can Access This Page</p>
              </>
            ) : (
              <>
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
                    <Link>Forgot Password?</Link>
                    <Link>Sign Up</Link>
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
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default JWTCheck;
