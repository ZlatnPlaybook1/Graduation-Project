import React from "react";
import  { useEffect } from "react";
import "./Welcome.css";
import welcome from "../../../../assets/img/welcome.png";
import  { useState } from "react";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  // const navigate = useNavigate();

  // const cookie = Cookie();
  // Loading state
  // const [role, setRole] = useState(cookie.get("role") || "");


  // Effect to monitor changes in the 'role' state and redirect accordingly
  // useEffect(() => {
  //   if (role === "admin") {
  //     navigate(`/cookies/cookies_lab/first/admin`);
  //   } else if (role === "support") {
  //     navigate(`/cookies/cookies_lab/first/support`);
  //   }
  //   else  {
  //     navigate(`/cookies/cookies_lab/first/login`);
  //   }
  // }, [role]);

  
  
  return (
    <>
      <div class="container-admin">
        <div class="row-admin">
            <h1>Welcome To Our Page</h1>
            <img src={welcome} alt=""/>
        </div>
    </div>
    </>
  );
}
