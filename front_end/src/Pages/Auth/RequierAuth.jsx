// ->> This page if the user loginController and there is a token in the
//  Cookies go to dashboard and if there is no token for the user
//  navigate to loginController page to signin

import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { USER } from "../../Api/Api";
import Loading from "../../Components/Loading/Loading";
import Error403 from "./403";
import { Axios } from "../../Api/axios";

export default function RequierAuth({ allowedRole }) {
  // user
  const [user, setUser] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    Axios.get(`/${USER}`)
      .then((data) => setUser(data.data))
      .catch(() => Navigate("/loginController", { replace: true }));
  }, []);
  // cookie & token
  const cookie = Cookie();
  const token = cookie.get("CuberWeb");

  // if there is no token go to directly to loginController
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
    <Navigate to={"/loginController"} replace={true} />
  );
}
