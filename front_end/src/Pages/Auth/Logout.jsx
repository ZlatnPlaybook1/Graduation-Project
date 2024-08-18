import axios from "axios";
import React from "react";
import Cookie from "cookie-universal"; // Importing cookie-universal
import { baseUrl, LOGOUT } from "../../Api/Api";

export default function Logout() {
  const cookie = Cookie(); // Initialize cookie-universal
  async function handleLogout() {
    try {
      const res = await axios.get(`${baseUrl}/${LOGOUT}`, {
        headers: {
          Authorization: "Bearer " + cookie.get("CuberWeb"), // Use the get method from cookie-universal
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  return <button onClick={handleLogout}>Logout</button>;
}
