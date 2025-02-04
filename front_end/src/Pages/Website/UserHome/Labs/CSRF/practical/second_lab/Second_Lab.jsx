import { useState } from "react";
import axios from "axios";

const Second_Lab = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/lab2/login",
        {
          username,
          password,
        }
      );

      if (response.data.success) {
        localStorage.setItem("authority", username);
        window.location.href = "/"; // Redirect to the homepage
      } else {
        setStatus("unsuccess");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setStatus("unsuccess");
    }
  };

  return (
    <div className="container">
      <div className="container-wrapper">
        <div className="row pt-4 mt-5 mb-3">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1>Login Page</h1>
            <a href="/reset">
              <button type="button" className="btn btn-secondary btn-sm">
                Reset Password
              </button>
            </a>
          </div>
          <div className="col-md-3"></div>
        </div>

        <div className="row pt-2">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            {status === "unsuccess" && (
              <div className="alert alert-danger mt-2" role="alert">
                Login unsuccessful. Please try again.
              </div>
            )}

            <h3 className="mb-3">Please log in</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />

                <label className="form-label mt-2">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary mb-5" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Second_Lab;
