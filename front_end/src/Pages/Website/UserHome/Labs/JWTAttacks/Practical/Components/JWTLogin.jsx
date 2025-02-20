import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../../Components/HackerLoginForm/HackerLoginForm.css";
import { Link } from "react-router-dom";
import Cookie from "cookie-universal";
import ShowHintBtn from "../../../../Components/ShowHint_Btn/ShowHint_Btn";
import GoBackBtn from "../../../../Components/GoBack_Btn/GoBack_Btn";
import { jwtDecode } from "jwt-decode";

const JWTLogin = ({ apiEndpoint, hint, tokenName, lab }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [decodedToken, setDecodedToken] = useState("null");
  const [loading, setLoading] = useState(false);
  const [loadingCreateUser, setLoadingCreateUser] = useState(false);
  const [login, setLogin] = useState(false);
  const [err, setErr] = useState("");
  const cookie = Cookie();
  const navigate = useNavigate();
  const staticExpireTime = 900000; // Token expiration time (15 minutes)
  const adminurl = `/jwtattacks/jwtattacks_lab/${lab}/admin`;
  const userurl = `/jwtattacks/jwtattacks_lab/${lab}/user`;
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { username, password };

    axios
      .post(`${apiEndpoint}/login`, data)
      .then((response) => {
        const token = response.data.data.token;
        console.log(data);
        // Set the token cookie with specific name and path, and static expiration time
        const expiresIn = new Date(Date.now() + staticExpireTime);
        if (token) {
          cookie.set(tokenName, token, { expires: expiresIn });
          setLogin(true);
          try {
            setDecodedToken(jwtDecode(token)); // Decode only if token is valid
          } catch (e) {
            console.error("Failed to decode token:", e);
          }
        }

        setLoading(false);
        if (decodedToken.username === "admin") {
          createUserAli();
          navigate(adminurl); // Redirect to admin page
        } else if (decodedToken.username !== "admin" && login === true) {
          navigate(userurl); // Redirect to user page
        }
      })
      .catch((error) => {
        setLoading(false);
        setErr(error.response?.data?.message || "Invalid credentials.");
      });
  };

  // Function to create a user "Ali" (can be triggered if the logged-in user is admin)
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

  // UseEffect to handle token on page load (for example, when refreshing the page)
  React.useEffect(() => {
    const token = cookie.get(tokenName);
    if (token) {
      try {
        const decodedToken = jwtDecode(token); // Decode token only if it exists
        // Token is valid, handle decoded token here (if needed)
      } catch (e) {
        // If decoding the token fails, delete the invalid token from cookies
        cookie.remove(tokenName);
        console.error("Invalid token:", e);
        // You may want to redirect or show a message for invalid token
        navigate(userurl); // Redirect to user page (or another appropriate page)
      }
    } else {
      console.log("No token found.");
    }
  }, [tokenName, cookie, navigate]);

  const spanCount = 400;
  const hintMessage = hint;

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
