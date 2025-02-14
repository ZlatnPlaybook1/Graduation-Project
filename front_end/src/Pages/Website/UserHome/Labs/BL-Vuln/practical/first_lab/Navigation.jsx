import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductsPage.css";
const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(isLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    setLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/BL-Vuln/BL_Vuln_labs">
          ShopZone
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="/BL-Vuln/BL_Vuln_labs/first_lab/cart"
              >
                Cart 🛒
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="/BL-Vuln/BL_Vuln_labs/first_lab"
              >
                Shopping
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="/BL-Vuln/BL_Vuln_labs/first_lab/myaccount"
              >
                My Account
              </Link>
            </li>
            {loggedIn ? (
              <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-danger  ms-2">
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  className=" btn btn-success px-3 ms-2 py-2"
                  to="/BL-Vuln/BL_Vuln_labs/first_lab/login"
                >
                  🔑 Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
