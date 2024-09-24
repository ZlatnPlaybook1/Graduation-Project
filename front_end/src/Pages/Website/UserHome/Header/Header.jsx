import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../assets/img/logo.png";
import profile from "../assets/img/profile.png";
import axios from "axios";
import Cookie from "cookie-universal";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [profileListVisible, setProfileListVisible] = useState(false);

  const cookie = Cookie();
  const token = cookie.get("CuberWeb");
  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  const toggleProfileList = () => {
    setProfileListVisible(!profileListVisible);
  };

  async function handleLogout() {
    try {
      await axios.post(
        "http://127.0.0.1:8000/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      cookie.remove("CuberWeb");
      window.location.pathname = "/";
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="header-home">
      <div className="container-home">
        <div className="row-home">
          {/* Sidebar toggle button */}
          <i className="fa-solid fa-bars" onClick={showSidebar}></i>
          {/* Sidebar */}
          <div
            className={`sidebarr ${sidebarVisible ? "visible" : ""}`}
            style={{ left: sidebarVisible ? 0 : "-100%" }}
          >
            <div className="sidebar_links">
              {/* Close button */}
              <i className="fa-solid fa-xmark" onClick={hideSidebar}></i>
              <NavLink to="/">
                <img src={logo} alt="Logo" />
              </NavLink>
              <NavLink to="/home">
                <i className="fa-solid fa-window-maximize"></i>Home
              </NavLink>
              <NavLink to="/learn">
                <i className="fa-solid fa-book-open"></i>Learn
              </NavLink>
            </div>
          </div>

          {/* Logo and navigation links */}
          <div className="logo_links">
            <NavLink to="/">
              <img src={logo} alt="Logo" />
            </NavLink>
            <NavLink to="/home">
              <i className="fa-solid fa-window-maximize"></i>Home
            </NavLink>
            <NavLink to="/learn">
              <i className="fa-solid fa-book-open"></i>Learn
            </NavLink>
          </div>

          {/* Profile section */}
          <div className="profile_links">
            <i className="fa-solid fa-magnifying-glass"></i>
            <div className="profile-section">
              <button className="profile" onClick={toggleProfileList}>
                <img src={profile} alt="Profile" />
              </button>

              {/* Profile list dropdown */}
              <div
                className="profile_list"
                style={{ display: profileListVisible ? "block" : "none" }}
              >
                <ul>
                  <li>
                    <NavLink to="/dashboard">
                      <i className="fas fa-user"></i> View Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard">
                      <i className="fas fa-gear"></i> Manage Account
                    </NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink onClick={handleLogout}>
                      <i className="fas fa-right-from-bracket"></i> Log Out
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
