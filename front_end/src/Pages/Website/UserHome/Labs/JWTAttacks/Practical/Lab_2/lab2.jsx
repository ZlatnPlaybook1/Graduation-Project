import React from "react";
import JWTCheck from "../Components/JWTCheck";

export default function JWTAttacks_lab2() {
  const apiEndpoint = "http://127.0.0.1:8080/api/lab2jwt";
  const tokenName = "jwtToken_2";
  const tokenPath = "jwtToken_2";
  const hint = "lab2";

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
