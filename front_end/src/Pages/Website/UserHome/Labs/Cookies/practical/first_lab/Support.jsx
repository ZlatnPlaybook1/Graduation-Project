import React from "react";
import { useEffect } from "react";
import "./Support.css";
import support from "../../../../assets/img/support.png";
import {  useNavigate } from "react-router-dom";
import  { useState } from "react";
import Cookie from "cookie-universal";

export default function Support() {
  // Cookies
  const navigate = useNavigate();
  const cookie = Cookie();
  // Loading state
  const [role, setRole] = useState(cookie.get("role") || "");
  // Effect to monitor changes in the 'role' state and redirect accordingly
  useEffect(() => {
    if (role === "admin") {
      navigate(`/cookies/cookies_lab/first/admin`);
      } else if (role === "support") {
      navigate(`/cookies/cookies_lab/first/support`);
    }
  }, [role]);
  return (
    <>
      <div class="container-support">
        <div class="row-support">
            <h1>We're Support, How Can I Help You?</h1>
            <img src={support} alt="" />
        </div>
    </div>
    </>
  );
}
