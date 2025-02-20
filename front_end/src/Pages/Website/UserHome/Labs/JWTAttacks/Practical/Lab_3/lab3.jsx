import React from "react";
import JWTCheck from "../Components/JWTCheck";

export default function JWTAttacks_lab3() {
  const apiEndpoint = "http://127.0.0.1:8080/api/lab3jwt";
  const tokenName = "jwtToken_3";
  const tokenPath = "jwtToken_3";
  const hint = "lab3";
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
