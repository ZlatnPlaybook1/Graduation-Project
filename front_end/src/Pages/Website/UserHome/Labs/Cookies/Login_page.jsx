// import React from "react";
// import { useEffect, useRef } from "react";
// import $ from "jquery";
import "./Login_page.css";
// import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import Cookie from "cookie-universal";
import Loading from "../../../../../Components/Loading/Loading";

export default function Login_page() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  //  Navigate
  //   const navigate = useNavigate();
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
    setErr("");
    try {
      const res = await axios.post("http://127.0.0.1:8080/api/cookie_login", form);
      console.log(res);
      setLoading(false);
      const token = res.data.data.token;
      cookie.set("CuberWeb", token);
      window.location.pathname = `/home`;
    } catch (error) {
      setLoading(false);
      if (error.response) {
        if (error.response.status === 401) {
          setErr("Wrong Email or Password");
        } else {
          setErr("Internal server error");
        }
        console.error(error.response.data);
      } else {
        setErr("Network Error");
        console.error(error);
      }
    }
  }

  return (
    <>
      {loading && <Loading />}
    <div className="login-page">
      <div className="container-login">
        <div className="login-form">
            <h1>Login</h1>
            <form  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Email.."/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  placeholder="Enter Your Password.."/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn-login">Login</button>
                </div>
                    {err !== "" && <span className="error">{err}</span>}
            </form>
        </div>
    </div>
    </div>
    </>
  );
}
