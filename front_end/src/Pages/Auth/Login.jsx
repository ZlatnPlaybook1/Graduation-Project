import axios from "axios";
import React, { useState } from "react";
import Cookie from "cookie-universal";
import Loading from "../../Components/Loading/Loading";
//import { useNavigate } from "react-router-dom";

export default function Login() {
  // Handle States
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
    try {
      const res = await axios.post("http://127.0.0.1:8080/api/login", form);
      console.log(res);
      setLoading(false);
      const token = res.data.token;
      const role = res.data.user.role;
      console.log(role);
      //       const go = role === "admin" ? "users" : "writer";
      cookie.set("CuberWeb", token);
      window.location.pathname = `/home`;
      //navigate(`/dashboard/${go}`);
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 401) {
        setErr("Wrong Email or Password");
      } else {
        setErr("Internal server error");
      }
    }
  }

  return (
    <body className="login-register-body">
      {loading && <Loading />}
      <div className="container">
        <div className="rows hh-100">
          <form className="form" onSubmit={handleSubmit}>
            <div className="custom-form">
              <h1 className="textcenter">Login Now</h1>
              <div className="formcontrol">
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
              <div className="formcontrol">
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
              <div className="social-icons">
                <a href="{}" className="icon">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="{}" className="icon">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="{}" className="icon">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="{}" className="icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <button type="submit" className="botton botton-primary">
                Login
              </button>
              {err !== "" && <span className="error">{err}</span>}
              <div className="register-link">
                <p>
                  Not account yet? <a href="/register">Register</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}
