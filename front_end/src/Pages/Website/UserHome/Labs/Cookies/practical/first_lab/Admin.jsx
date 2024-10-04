import React from "react";
import  { useEffect } from "react";
import "./Admin.css";
import admin from "../../../../assets/img/admin.png";
import  { useState } from "react";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";

export default function Admin() {
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
      <div class="container-admin">
        <div class="row-admin">
            <h1>Admin, Please Leave Me</h1>
            <img src={admin} alt=""/>
        </div>
    </div>
    </>
  );
}
