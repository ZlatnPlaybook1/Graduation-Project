import axios from "axios";
import React, { useState } from "react";
import Cookie from "cookie-universal";
import { baseUrl, REGISTER } from "../../Api/Api";
import Loading from "../../Components/Loading/Loading";
import { replace, useNavigate } from "react-router-dom";

export default function Register() {
  // Handle States
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  //  Navigate
  const navigate = useNavigate();
  // Cookies
  const cookie = Cookie();
  // Loading state
  const [loading, setLoading] = useState(false);
  // Error state
  const [err, setErr] = useState("");

  // Handle Form Change
  function handleChange(e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle Form Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${baseUrl}/${REGISTER}`, form);
      setLoading(false);
      const token = res.data.token;
      cookie.set("CuberWeb", token);
      navigate("/dashboard/users", { replace: true });
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 422) {
        setErr("Email has already been taken.");
      } else {
        setErr("Internal server error");
      }
    }
  }

  return (
    <>
      {loading && <Loading />}
      <div className="container">
        <div className="row h-100">
          <form className="form" onSubmit={handleSubmit}>
            <div className="custom-form">
              <h1 className="text-center">Register Now</h1>
              <div className="form-control">
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  name="name"
                  onChange={handleChange}
                  placeholder="Enter Your Name.."
                  required
                />
                <label htmlFor="name">Name:</label>
              </div>
              <div className="form-control">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Email.."
                />
                <label htmlFor="email">Email:</label>
              </div>
              <div className="form-control">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  placeholder="Enter Your Password.."
                />
                <label htmlFor="password">Password:</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              {err !== "" && <span className="error">{err}</span>}
              <div className="login-link">
                <p>
                  Have an account? <a href="/login">Login</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
