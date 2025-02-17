import React, { useState } from "react";
import { useEffect } from "react";
import "../Admin.css";
import admin from "../../../../assets/img/admin.png";
import Cookie from "cookie-universal";

import {  useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  const cookie = Cookie();
  // Loading state
  const [userId,setUserId] = useState(cookie.get("userId") || "");


  // Effect to monitor changes in the 'userId' state and redirect accordingly
  useEffect(() => {
    if (userId === "MQ==") {
      navigate(`/cookies/cookies_lab/second/admin`);
    } else if (userId === "OQ==") {
      navigate(`/cookies/cookies_lab/second/support`);
    }else {
      navigate(`/cookies/cookies_lab/second/login`);
    }
  }, [userId,navigate]);
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
