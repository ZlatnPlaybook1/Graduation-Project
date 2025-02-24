import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import "../Preload/preload.css";
import logo from "../assets/img/core-img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Cookie from "cookie-universal";
import axios from "axios";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profileListVisible, setProfileListVisible] = useState(false);
  const [userImage, setUserImage] = useState("");

  const cookie = Cookie();
  const token = cookie.get("CuberWeb");
  const toggleProfileList = () => {
    setProfileListVisible(!profileListVisible);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Fetch the user profile data and Name
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8080/api/personalInfo", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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

    fetchUserProfile();
  }, [token]);

  return (
    <>
      {/* Start Header */}
      <header>
        <div className="navbar">
          <div className="logo">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "50px", height: "auto" }}
            />
            <h2>Cyber Labs</h2>
          </div>
          <ul className="links">
            {token ? (
              <li>
                <a className="links-style" href="/home">
                  Home Labs
                </a>
              </li>
            ) : (
              <li>
                <a className="links-style" href="/">
                  Home
                </a>
              </li>
            )}
            <li>
              <a className="links-style" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="links-style" href="#learningPath">
                Learning Path
              </a>
            </li>
            <li>
              <a className="links-style" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          {token ? (
            <div className="profile_links">
              <div className="profile-section">
                {/* <h3 className="name-profile">Welcome, {userName}</h3> */}
                <button className="profile" onClick={toggleProfileList}>
                  <img
                    src={userImage || "../assets/img/profile.png"}
                    alt="Profile"
                  />
                </button>

                {/* Profile list dropdown */}
                <div
                  className="profile_list"
                  style={{ display: profileListVisible ? "block" : "none" }}
                >
                  <ul>
                    <li>
                      <NavLink to="/dashboard/personal-information">
                        <i className="fas fa-user"></i> View Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/settings">
                        <i className="fas fa-gear"></i> Manage Account
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="log_reg">
              <Link to="/login" className="login">
                Login
              </Link>
              <Link to="/register" className="login">
                Register
              </Link>
            </div>
          )}
          {token ? (
            <div className="profile_links">
              <div className="profile-section">
                <button className="profile" onClick={toggleProfileList}>
                  <img
                    src={userImage || "../assets/img/profile.png"}
                    alt="Profile"
                  />
                </button>

                {/* Profile list dropdown */}
                {profileListVisible && (
                  <div className="profile_list">
                    <ul>
                      <li>
                        <NavLink to="/dashboard/personal-information">
                          <i className="fas fa-user"></i> View Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/dashboard/settings">
                          <i className="fas fa-gear"></i> Manage Account
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="dropdown_wrapper">
              <div className="toggle_btn" onClick={toggleDropdown}>
                <FontAwesomeIcon
                  className="icon"
                  icon={isDropdownOpen ? faXmark : faBars}
                />
              </div>
              {isDropdownOpen && (
                <div className="dropdown_menu open">
                  <ul>
                    {token ? (
                      <li>
                        <a href="/home">Home Labs</a>
                      </li>
                    ) : (
                      <li>
                        <a href="/">Home</a>
                      </li>
                    )}
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                    <li>
                      <a href="#learningPath">Learning Path</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                    <li>
                      <Link to="/login" className="login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="login">
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
