// ->> This page if the user login and there is a token in the
//  Cookies go to dashboard and if there is no token for the user
//  navigate to login page to signin

import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import Loading from "../../Components/Loading/Loading";
import Error403 from "./403";
import axios from "axios";

export default function RequierAuth({ allowedRole }) {
  //  State to store user data
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  // cookie & token
  const cookie = Cookie();
  const token = cookie.get("CuberWeb");

  useEffect(() => {
    if (token) {
      // Fetch user data if token exists
      axios
        .get("http://127.0.0.1:8080/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((data) => setUser(data.data))
        .catch(() => navigate("/login", { replace: true }));
    } else {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  // if there is no token go to directly to login
  // if there is no user dawnload loading
  //  else go to outlet
  return token ? (
    user === "" ? (
      <Loading />
    ) : allowedRole.includes(user.role) ? (
      <Outlet />
    ) : (
      <Error403 role={user.role} />
    )
  ) : (
    <Navigate to={"/login"} replace={true} />
  );
}
