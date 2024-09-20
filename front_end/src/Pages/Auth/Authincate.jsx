import React, { useState } from "react";
import axios from "axios";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import "./Auth.css";

export default function Authincate() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Cookies
  const cookie = Cookie();
  // Loading state
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // Use the AUTH constant in the API request
      const response = await axios.post(
        "http://127.0.0.1:8080/api/authincate",
        { number }
      );
      setLoading(false);
      const token = response.data.token;
      cookie.set("CuberWeb", token);
      if (response.status === 201) {
        navigate("/dashboard/users");
      }
    } catch (error) {
      setLoading(false);
      setError("Invalid number");
    }
  };

  return (
    <body className="login-register-body">
      {loading && <Loading />}
      <div className="container">
        <div className="rows hh-100">
          <form className="form" onSubmit={handleSubmit}>
            <div className="custom-form">
              <h1 className="textcenter">Authenticate</h1>
              <div className="formcontrol">
                <input
                  type="text"
                  id="number"
                  value={number}
                  onChange={handleChange}
                  placeholder="Enter 6-digit number"
                  required
                  maxLength="6"
                />
                <label htmlFor="number">6-Digit Number:</label>
              </div>
              <button type="submit" className="botton botton-primary">
                Submit
              </button>
              {error && <span className="error">{error}</span>}
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}
