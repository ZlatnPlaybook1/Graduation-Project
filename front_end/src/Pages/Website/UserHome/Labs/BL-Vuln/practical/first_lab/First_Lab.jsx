import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const CyberLabsChecker = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue === "cyberLabs") {
      setMessage("successfully");
    } else {
      navigate("/BL-Vuln/BL_Vuln_labs/second_lab"); // Navigate on success
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <div
        className="card p-4 shadow-lg text-center"
        style={{ width: "350px" }}
      >
        <h2 className="mb-3">Enter "cyberLabs"</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Type here..."
        />
        <button className="btn btn-primary w-100" onClick={handleSubmit}>
          Submit
        </button>
        {message && <p className="fw-bold mt-3 text-danger">{message}</p>}
      </div>
    </div>
  );
};

export default CyberLabsChecker;
