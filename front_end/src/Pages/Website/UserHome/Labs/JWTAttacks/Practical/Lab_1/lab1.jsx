import React from "react";
import JWTLogin from "../Components/JWTLogin";

const SomeParentComponent = () => {
  const apiEndpoint = "http://127.0.0.1:8080/api/JWT1Login";

  return (
    <div>
      <JWTLogin apiEndpoint={apiEndpoint} />
    </div>
  );
};

export default SomeParentComponent;
