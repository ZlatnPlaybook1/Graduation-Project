import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaMoneyBillWave, FaLock } from "react-icons/fa"; // Icons for account details

export default function CSRF_FIRST_LAB() {
  const [account, setAccount] = useState(null);
  const [newPass, setNewPass] = useState("");
  const [message, setMessage] = useState("");
  const [updatedId, setUpdatedId] = useState(null);

  // Fetch account details by ID (if provided) or first account
  const fetchAccount = async (id = null) => {
    try {
      const url = id
        ? `http://127.0.0.1:8080/api/account/${id}`
        : "http://127.0.0.1:8080/api/account";
      const res = await fetch(url);
      const data = await res.json();

      if (data.account) {
        setAccount(data.account);
      } else {
        setAccount(null);
      }
    } catch (error) {
      console.error("Error fetching account:", error);
      setAccount(null);
    }
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  // Update password and fetch updated account info
  const updatePassword = async () => {
    if (!account) return;

    try {
      const response = await fetch(
        "http://127.0.0.1:8080/api/update-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: account.id, newPass }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setMessage("Password Updated Successfully");

        if (result.account) {
          setUpdatedId(result.account.id);
          setAccount(result.account); // Immediately update UI
        }
      } else {
        setMessage("Error updating password");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      setMessage("Error updating password");
    }
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      style={{ background: "linear-gradient(135deg, #6f42c1, #00bcd4)" }}
    >
      <div
        className="card shadow-lg rounded-lg border-0 p-4"
        style={{ width: "400px", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)" }}
      >
        <h2 className="text-center text-white mb-4">Account Information</h2>

        {message && (
          <div
            className={`alert ${
              message === "Password Updated Successfully"
                ? "alert-success"
                : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}

        {account ? (
          <div className="mb-4">
            <h3 className="text-info mb-3">Account Details</h3>
            <div className="d-flex align-items-center mb-3">
              <FaUser className="text-primary me-2" />
              <p className="mb-0">
                <strong>Account No:</strong> {account.accountNo}
              </p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FaMoneyBillWave className="text-success me-2" />
              <p className="mb-0">
                <strong>Balance:</strong> ${account.accountBalance}
              </p>
            </div>
            <div className="d-flex align-items-center mb-4">
              <FaUser className="text-info me-2" />
              <p className="mb-0">
                <strong>Name:</strong> {account.accountName}
              </p>
            </div>

            <h4 className="text-info mb-3">Update Password</h4>
            <div className="d-flex mb-3">
              <input
                type="password"
                className="form-control me-2 border-0 shadow-sm"
                placeholder="Enter new password"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                style={{ borderRadius: "30px" }}
              />
              <button
                className="btn btn-warning px-4 shadow-sm"
                style={{
                  borderRadius: "30px",
                  transition: "all 0.3s ease",
                }}
                onClick={updatePassword}
              >
                <FaLock /> Update Password
              </button>
            </div>
          </div>
        ) : (
          <p className="text-danger text-center">No account found.</p>
        )}
      </div>
    </div>
  );
}
