import React from "react";
import JWTAdmin from "../Components/JWTAdmin";
import { jwtDecode } from "jwt-decode";
import Cookie from "cookie-universal";

export default function JWTAttacks_lab1() {
  const tokenName = "jwtToken_1";
  const cookie = Cookie();
const token = jwtDecode(cookie.get(tokenName));
const username = token.username;
  const apiEndpoint = "http://127.0.0.1:8080/api/lab1jwt";
  // const tokenPath = "jwtToken_1";
  const hint = "lab1";
  const lab = "lab1";
  const condition = username==="admin";
  return (
    <div>
      <JWTAdmin
        apiEndpoint={apiEndpoint}
        lab={lab}
        tokenName={tokenName}
        condition={condition}
      />
    </div>
  );
}
