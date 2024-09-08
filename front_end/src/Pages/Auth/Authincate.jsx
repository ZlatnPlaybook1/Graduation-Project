import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AUTH, baseUrl } from "../../Api/Api";
import "./Auth.css";

export default function Authincate() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use the AUTH constant in the API request .
      const response = await axios.post(`${baseUrl}/${AUTH}`, {
        email,
        number,
      });
      if (response.status === 200) {
        navigate("/dashboard/users");
      }
    } catch (error) {
      setError("Invalid number or email");
    }
  };

  return (
    <div className="container">
      <div className="rows hh-100">
        <form className="form" onSubmit={handleSubmit}>
          <div className="custom-form">
            <h1 className="textcenter">Authenticate</h1>
            <div className="formcontrol">
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
              />
              <label htmlFor="email">Email:</label>
            </div>
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
  );
}
