import { useState } from "react";

const CyberLabsChecker = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue === "cyberLabs") {
      setMessage("🎉 Congratulations! You entered 'cyberLabs' correctly.");
    } else {
      setMessage("❌ Error: Please enter 'cyberLabs'.");
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
        {message && (
          <p
            className={`fw-bold mt-3 ${
              message.includes("Congratulations")
                ? "text-success"
                : "text-danger"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default CyberLabsChecker;
