import React from "react";
import JWTCheck from "../Components/JWTCheck";

export default function JWTAttacks_lab1() {
  const apiEndpoint = "http://127.0.0.1:8080/api/lab1jwt";
  const tokenName = "jwtToken_1";
  const tokenPath = "jwtToken_1";
  const hint = "lab1";
  return (
    <div>
      <JWTCheck
        apiEndpoint={apiEndpoint}
        hint={hint}
        tokenName={tokenName}
        tokenPath={tokenPath}
      />
    </div>
  );
}
