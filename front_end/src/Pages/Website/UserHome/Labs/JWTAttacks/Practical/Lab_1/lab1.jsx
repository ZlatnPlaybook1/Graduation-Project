import React from "react";
import JWTCheck from "../Components/JWTCheck";

const SomeParentComponent = () => {
  const apiEndpoint = "http://127.0.0.1:8080/api/lab1jwt";
  const lab = "lab1";

  return (
    <div>
      <JWTCheck apiEndpoint={apiEndpoint} lab={lab} />
    </div>
  );
};

export default SomeParentComponent;
