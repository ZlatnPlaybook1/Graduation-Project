import React, { useEffect } from "react";
import { baseUrl, USERS } from "../../Api/Api";
import axios from "axios";
import Cookie from "cookie-universal"; // Importing cookie-universal
import Logout from "../Auth/Logout";

export default function Users() {
  const cookie = Cookie(); // Initialize cookie-universal

  useEffect(() => {
    axios
      .get(`${baseUrl}/${USERS}`, {
        headers: {
          Authorization: "Bearer " + cookie.get("CuberWeb"), // Use the get method from cookie-universal
        },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {""}
      <h1>Users pages</h1>
      <Logout />
    </>
  );
}
