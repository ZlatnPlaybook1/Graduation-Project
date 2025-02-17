import React, { useState } from "react";
import { useEffect } from "react";
import "../Support.css";
import support from "../../../../assets/img/support.png";
import {  useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";


export default function Support() {
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
      <div class="container-support">
        <div class="row-support">
            <h1>We're Support, How Can I Help You?</h1>
            <img src={support} alt="" />
        </div>
    </div>
    </>
  );
}
