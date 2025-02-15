import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./EditInfo.css"; // Custom styling

function EditInfo() {
  const [account, setAccount] = useState(null);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Fetch the account on mount
  useEffect(() => {
    async function fetchAccount() {
      try {
        const res = await fetch(
          "http://127.0.0.1:8080/api/clickJackLab1-account"
        );
        if (res.ok) {
          const data = await res.json();
          setAccount(data.account);
          setEmail(data.account.email || "");
        } else {
          console.error("Failed to fetch account data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchAccount();
  }, []);

  // Update email
  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "http://127.0.0.1:8080/api/clickJackLab1-edit-info",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            email,
            id: account ? account.id : 1,
          }),
        }
      );
      if (res.ok) {
        Swal.fire("Success", "Email updated successfully", "success");
      } else {
        Swal.fire("Error", "Failed to update email", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "An error occurred", "error");
    }
  };

  return (
    <div className="edit-info-container container">
      <h1>Edit Account Information</h1>

      {account ? (
        <div className="account-details">
          <p>
            <strong>Username:</strong> {account.username}
          </p>
          <p>
            <strong>Email:</strong> {account.email || "Not set"}
          </p>
        </div>
      ) : (
        <p>Loading account data...</p>
      )}

      <form onSubmit={handleEmailUpdate} className="update-form">
        <label>
          Update Email:
          <input
            type="email"
            placeholder="New Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Update Email</button>
      </form>

      {/* New Button to navigate to Exploit Panel */}
      <button
        className="exploit-nav-btn"
        onClick={() =>
          navigate(
            "/Click_Jacking/Click_Jacking_labs/lab1/EditInfo/ExploitPanel"
          )
        }
      >
        Go to Exploit Panel
      </button>
    </div>
  );
}

export default EditInfo;
