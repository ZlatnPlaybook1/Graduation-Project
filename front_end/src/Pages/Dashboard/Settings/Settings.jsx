import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookie from "cookie-universal";
import "./Settings.css";
import Preloader from "../../Website/Preloader/Preloader";
export default function Settings() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [token, setToken] = useState("");
  useEffect(() => {
    const cookie = Cookie();
    const retrievedToken = cookie.get("CuberWeb");
    setToken(retrievedToken);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingPage(true);

    if (newPassword !== confirmPassword) {
      setErrorMessage("New passwords do not match!");
      return;
    }
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    setShowSuccessMessage(false);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/reset-password",
        {
          oldPassword,
          newPassword,
          confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response?.data?.msg) {
        setSuccessMessage(response.data.msg);
        setShowSuccessMessage(true);
      } else {
        setErrorMessage("Unexpected response from server.");
      }
    } catch (error) {
      console.error("API Error:", error.response?.data);
      setErrorMessage(
        error.response?.data?.message ||
          "Failed to reset password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loadingPage && <Preloader loading={loadingPage} />}
      <div className="settings-container">
        <form className="reset-password-form" onSubmit={handleSubmit}>
          <h2>Reset Password</h2>
          {showSuccessMessage && (
            <div className="success-message-box show">
              <p>{successMessage}</p>
              <button onClick={() => setShowSuccessMessage(false)}>
                Dismiss
              </button>
            </div>
          )}
          {errorMessage && (
            <p className="error-message-settings">{errorMessage}</p>
          )}
          <div className="form-group">
            <label>Old Password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="reset-button" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </>
  );
}
