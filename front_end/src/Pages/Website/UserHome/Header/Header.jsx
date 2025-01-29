import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import axios from "axios";
import Cookie from "cookie-universal";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [profileListVisible, setProfileListVisible] = useState(false);
  const [userImage, setUserImage] = useState("");

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

  // Fetch the user profile image
  useEffect(() => {
    const fetchUserProfileImage = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8080/api/personalInfo", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = res.data.data;
        // Construct full image URL
        const imageUrl = data.image
          ? `http://127.0.0.1:8080/${data.image.path.replace("\\", "/")}`
          : "";

        setUserImage(imageUrl); // Set the profile image URL
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserProfileImage();
  }, [token]);

  async function handleLogout() {
    try {
      await axios.post(
        "http://127.0.0.1:8080/api/logout",
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
                {/* Display user profile image or default logo */}
                <img src={userImage || "../assets/img/logo.png"} alt="Logo" />
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
              {/* Display user profile image or default logo */}
              <img src={userImage || "../assets/img/logo.png"} alt="Logo" />
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
