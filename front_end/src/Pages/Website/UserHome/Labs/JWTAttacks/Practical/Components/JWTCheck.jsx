import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookie from "cookie-universal";
import "../../../../Components/HackerLoginForm/HackerLoginForm.css";
import ShowHintBtn from "../../../../Components/ShowHint_Btn/ShowHint_Btn";
import GoBackBtn from "../../../../Components/GoBack_Btn/GoBack_Btn";
import { Link } from "react-router-dom";

const JWTCheck = ({ apiEndpoint,hint }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [loggedusername, setLoggedUsername] = useState("");
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingCreateUser, setLoadingCreateUser] = useState(false);
  const cookie = Cookie();

  // Check token on page load
  useEffect(() => {
    const token = cookie.get("Token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setLoggedUsername(decodedToken.username);
      } catch (error) {
        console.error("Invalid token:", error);
        setLoggedUsername("");
      }
    }
  }, []);

  // Watch for token changes
  useEffect(() => {
    const interval = setInterval(() => {
      const token = cookie.get("Token");
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          if (decodedToken.username !== loggedusername) {
            setLoggedUsername(decodedToken.username);
          }
        } catch {
          setLoggedUsername("");
        }
      } else {
        setLoggedUsername("");
      }
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, [loggedusername]);

  // Handle login request
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { username, password };

    axios
      .post(`${apiEndpoint}/login`, data)
      .then((response) => {
        const token = response.data.data.token;
        cookie.set("Token", token);
        const decodedToken = jwtDecode(token);
        setLoggedUsername(decodedToken.username);
        setLoading(false);

        if (decodedToken.username === "admin") {
          createUserAli();
        }
      })
      .catch((error) => {
        setLoading(false);
        setErr(error.response?.data?.message || "Invalid credentials.");
      });
  };

  const createUserAli = () => {
    setLoadingCreateUser(true);
    axios
      .post(`${apiEndpoint}/createuser`, {
        username: "Ali",
        password: "somepassword",
      })
      .then(() => setLoadingCreateUser(false))
      .catch(() => {
        setErr("Error creating user Ali.");
        setLoadingCreateUser(false);
      });
  };

  const handleDeleteUser = () => {
    setLoadingDelete(true);
    axios
      .delete(`${apiEndpoint}/deleteuser`, { data: { username: "Ali" } })
      .then(() => setLoadingDelete(false))
      .catch(() => {
        setErr("Error deleting user Ali.");
        setLoadingDelete(false);
      });
  };

  const spanCount = 400;
  const hintMessage = hint;

  return (
    <div style={{ backgroundColor: "#000", position: "relative", width: "100vw", height: "100vh" }}>
      <GoBackBtn />
      <ShowHintBtn hintText={hintMessage} />
      <main className="hacker-login">
        {Array.from({ length: spanCount }).map((_, index) => (
          <span key={index} className="hackerLogin-gridSpan"></span>
        ))}

        <div className="hackerLogin-signin">
          <div className="hackerLogin-content">
            {loggedusername === "admin" ? (
              <>
                <h2>Admin Dashboard</h2>
                <button onClick={handleDeleteUser} disabled={loadingDelete}>
                  {loadingDelete ? "Deleting..." : "Delete User Ali"}
                </button>
              </>
            ) : loggedusername && loggedusername !== "admin" ? (
              <>
                <h2>Access Denied</h2>
                <p>Only Admins Can Access This Page</p>
              </>
            ) : (
              <>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit} className="hacker-form">
                  <div className="hackerLogin-inputBox">
                    <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
                    <i>Username</i>
                  </div>
                  <div className="hackerLogin-inputBox">
                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <i>Password</i>
                  </div>
                  <div className="hackerLogin-links">
                    <Link>Forgot Password?</Link>
                    <Link>Sign Up</Link>
                  </div>
                  <div className="hackerLogin-inputBox">
                    <input type="submit" value={loading ? "Logging in..." : "Login"} disabled={loading} />
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
