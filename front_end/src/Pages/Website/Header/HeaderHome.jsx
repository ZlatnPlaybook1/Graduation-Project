import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import logo from "../assets/img/core-img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Cookie from "cookie-universal";
import axios from "axios";

const HeaderHome = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profileListVisible, setProfileListVisible] = useState(false);
  const [userImage, setUserImage] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const cookie = Cookie();
  const token = cookie.get("CuberWeb");

  const toggleProfileList = () => {
    setProfileListVisible(!profileListVisible);
  };

  const toggleNavbar = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8080/api/personalInfo", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = res.data.data;
        const imageUrl = data.image
          ? `http://127.0.0.1:8080/${data.image.path.replace("\\", "/")}`
          : "";
        setUserImage(imageUrl);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (token) fetchUserProfile();
  }, [token]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "sticky" : ""}`}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className={isScrolled ? "container" : "container-fluid"}>
          <Link className="navbar-brand header__logo" to="/">
            <img src={logo} alt="Logo" />
            <span className="header__logo-title">Cyber Labs</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="main-navbar"
            aria-expanded={isDropdownOpen}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              icon={isDropdownOpen ? faXmark : faBars}
              className="text-white"
            />
          </button>
          <div
            className={`collapse navbar-collapse ${
              isDropdownOpen ? "show" : ""
            }`}
            id="main-navbar"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {token ? (
                  <NavLink className="nav-link" to="/home">
                    Home Labs
                  </NavLink>
                ) : (
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#learningPath">
                  Learning Path
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
                {/* <a className="nav-link" href="../Contact/Contact.jsx">
                  Contact
                </a> */}
              </li>
            </ul>
            {token ? (
              <div className="header__profile">
                <button
                  className="header__profile-btn"
                  onClick={toggleProfileList}
                >
                  <img
                    src={userImage || <i class="fa-solid fa-user"></i>}
                    alt="Profile"
                    className="rounded-circle"
                    style={{ width: "65px", height: "65px" }}
                  />
                </button>
                {profileListVisible && (
                  <div className="header__profile-dropdown">
                    <ul>
                      <li>
                        <NavLink
                          to="/dashboard/personal-information"
                          className="dropdown-item"
                        >
                          View Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/settings"
                          className="dropdown-item"
                        >
                          Manage Account
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="d-flex">
                <Link to="/login" className="btn btn-secondary me-2">
                  Login
                </Link>
                <Link to="/register" className="btn btn-secondary">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderHome;
