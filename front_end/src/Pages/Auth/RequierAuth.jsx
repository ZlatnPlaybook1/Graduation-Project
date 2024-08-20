// ->> This page if the user login and there is a token in the
//  Cookies go to dashboard and if there is no token for the user
//  navigate to login page to signin

import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import axios from "axios";
import { baseUrl, USER } from "../../Api/Api";
import Loading from "../../Components/Loading/Loading";

export default function RequierAuth() {
  // user
  const [user, setUser] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${baseUrl}/${USER}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => setUser(data.data))
      .catch(() => Navigate("/login", { replace: true }));
  });
  // cookie & token
  const cookie = Cookie();
  const token = cookie.get("CuberWeb");

  // if there is no token go to directly to login
  // if there is no user dawnload loading
  //  else go to outlet
  return token ? (
    user === "" ? (
      <Loading />
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to={"/login"} replace={true} />
  );
}
