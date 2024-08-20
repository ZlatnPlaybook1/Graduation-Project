import React, { useEffect } from "react";
import { baseUrl, USERS } from "../../Api/Api";
import axios from "axios";
import Cookie from "cookie-universal";

export default function Users() {
  const cookie = Cookie();
  const token = cookie.get("CuberWeb");
  useEffect(() => {
    axios
      .get(`${baseUrl}/${USERS}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <h1>Users Page</h1>
    </>
  );
}
