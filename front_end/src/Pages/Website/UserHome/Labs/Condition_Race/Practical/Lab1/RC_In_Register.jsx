import React, { useState } from "react";
import axios from "axios";
import "./rc-register.css";
import GoBack from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../../ShowHint_Btn/ShowHint_Btn";

export default function RC_In_Register() {
  const hintMessage = ``;
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    tel: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/RaceConditionRegister",
        formData
      );
      setMessage(response.data);
    } catch (error) {
      setMessage("Registration failed.");
    }
  };

  return (
    <>
      <GoBack />
      <ShowHint hintText={hintMessage} />
      <div className="rc-container shadow-lg rounded">
        <div className="rc-content">
          {message && <div className="rc-alert">{message}</div>}
          <h2 className="rc-title">User Registration</h2>
          <form onSubmit={handleSubmit} className="rc-form">
            <div className="rc-form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.ad}
                onChange={handleChange}
                required
              />
            </div>
            <div className="rc-form-group">
              <label>Surname:</label>
              <input
                type="text"
                name="surname"
                value={formData.soyad}
                onChange={handleChange}
                required
              />
            </div>
            <div className="rc-form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="rc-form-group">
              <label>Phone:</label>
              <input
                type="number"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="rc-btn-primary">
              Register
            </button>
          </form>
          <a href="/View Registers" className="rc-btn-secondary">
            View Registers
          </a>
        </div>
      </div>
    </>
  );
}
