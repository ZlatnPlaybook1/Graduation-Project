import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MyAccountPage = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    balance: 0,
  });

  useEffect(() => {
    // Check if the user is logged in
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    if (!loggedIn) {
      // Redirect to login if not logged in
      window.location.href = "/BL-Vuln/BL_Vuln_labs/first_lab/login";
    } else {
      // Retrieve user details from localStorage
      const email = localStorage.getItem("userEmail") || "";
      const name = localStorage.getItem("userName") || "";
      const balance = parseFloat(localStorage.getItem("userBalance") || "0");
      setUser({ email, name, balance });
    }
  }, []);

  return (
    <div className="container mt-5">
      <h2>My Account</h2>
      <div className="card">
        <div className="card-body">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Balance:</strong> ${user.balance.toFixed(2)}
          </p>
        </div>
      </div>
      <Link
        to="/BL-Vuln/BL_Vuln_labs/first_lab"
        className="btn btn-primary mt-3"
      >
        Back to Shopping
      </Link>
    </div>
  );
};

export default MyAccountPage;
