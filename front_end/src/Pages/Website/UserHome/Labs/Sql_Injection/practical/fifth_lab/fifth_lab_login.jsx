import { useEffect } from "react";
import styles from"./fifth_lab_login.module.css";
import axios from "axios";
import React, { useState } from "react";
import Loading from "../../../../../../../Components/Loading/Loading";
// import Cookie from "cookie-universal";
// import { useNavigate } from "react-router-dom";

export default function Login_page() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // //  Navigate
  // const navigate = useNavigate();
  // // Cookies
  // const cookie = Cookie();
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
      const res = await axios.post(
        "http://127.0.0.1:8080/api/SQL_fifth_login",
        form
      );
      setLoading(false);
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

  // Effect to monitor changes in the 'role' state and redirect accordingly
  useEffect(() => {});
  return (
    <>
      {loading && <Loading />}
      <div className={styles["login-page"]}>
        <div className={styles.container}>
          <div className={styles["login-form"]}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div className={styles["form-group"]}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Email.."
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="password">Password</label>
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
              </div>
              <div className={styles["form-group"]}>
                <button type="submit" className={styles.btn}>
                  Login
                </button>
              </div>
              {err !== "" && <span className={styles.error}>{err}</span>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
