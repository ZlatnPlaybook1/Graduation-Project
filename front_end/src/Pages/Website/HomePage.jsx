import React, { useEffect, useState } from "react";
import "./homepage.css";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="light-version">
      {/* Preloader */}
      {loading && (
        <div id="preloader">
          <div className="preload-content">
            <div id="loader-load"></div>
          </div>
        </div>
      )}

      {/* Header Area Start */}
      {!loading && (
        <nav
          className="navbar navbar-expand-lg navbar-white fixed-top"
          id="banner"
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              <span>
                <img
                  src={require("./assets/img/core-img/logo.png")}
                  alt="logo"
                />
              </span>{" "}
              Yaraty
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbardrop"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about-us.html">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="services.html">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact-us.html">
                    Contact
                  </a>
                </li>
                <li className="lh-55px">
                  <a href="#" className="btn login-btn ml-50">
                    Login!
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
