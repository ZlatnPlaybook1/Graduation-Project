import { useEffect } from "react";
import "../Login_page.css";
import axios from "axios";
import React, { useState } from "react";
import Cookie from "cookie-universal";
import Loading from "../../../../../../../Components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import GoBackBtn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../ShowHint_Btn/ShowHint_Btn";
export default function Login_page_second() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const cookie = Cookie();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [userId,setUserId] = useState(cookie.get("userId") || "");
  function handleChange(e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      const res = await axios.post(
        "http://127.0.0.1:8080/api/cookie_login_second",
        form
      );
      console.log(res);
      setLoading(false);
      const userId = res.data.userId;
      cookie.set("userId", userId);
      if (userId === "MQ==") {
        navigate(`/cookies/cookies_lab/second/admin`);
      } else if (userId === "OQ==") {
        navigate(`/cookies/cookies_lab/second/support`);
      } else {
        navigate(`/cookies/cookies_lab/second/login`);
      }
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
  useEffect(() => {
    if (userId === "MQ==") {
      navigate(`/cookies/cookies_lab/second/admin`);
    } else if (userId === "OQ==") {
      navigate(`/cookies/cookies_lab/second/support`);
    } else {
      navigate(`/cookies/cookies_lab/second/login`);
    }
  }, [userId, navigate]);

  return (
    <>
      {loading && <Loading />}
      {/* test comment */}
      <div className="login-page">
        <GoBackBtn />
        <ShowHintBtn
          hintText={"<p>click inspect and cheak cookies value</p>"}
        />
        <div className="container-login">
          <div className="login-form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
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
              <div className="form-group">
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
              <div className="form-group">
                <button type="submit" className="btn-login">
                  Login
                </button>
              </div>
              {err !== "" && <span className="error">{err}</span>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
