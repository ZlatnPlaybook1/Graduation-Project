import React, { useContext } from "react";
import "./bars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faGear,
  faHouse,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Menu } from "../../Context/MenuContext";
import { WindowSizeContext } from "../../Context/WindowContext";

export default function Sidebar() {
  const { isOpen } = useContext(Menu); // Destructure isOpen from Menu context
  const { windowSize } = useContext(WindowSizeContext); // Correctly destructuring windowSize

  return (
    <div className="full-cont">
      <div
        className="sidebar"
        style={{
          left: windowSize < 768 ? (isOpen ? 0 : "-100%") : 0, // Removed quotes from 768 to treat it as a number
          width: isOpen ? "220px" : "60px",
        }}
      >
        <NavLink to="/" className="navlink active side-bar-link">
          <FontAwesomeIcon
            icon={faHouse}
            style={{ padding: isOpen ? "10px 8px 10px 15px" : "0" }}
          />
          <p
            className="text"
            style={{
              display: isOpen ? "block" : "none",
            }}
          >
            Home
          </p>
        </NavLink>
        <NavLink to="/dashboard/users" className="navlink active side-bar-link">
          <FontAwesomeIcon
            icon={faUsers}
            style={{ padding: isOpen ? "10px 8px 10px 15px" : "0 0" }}
          />
          <p
            className="text"
            style={{
              display: isOpen ? "block" : "none",
            }}
          >
            Users
          </p>
        </NavLink>
        <NavLink to="/settings" className="navlink active side-bar-link">
          <FontAwesomeIcon
            icon={faGear}
            style={{ padding: isOpen ? "10px 8px 10px 15px" : "0 0" }}
          />
          <p
            className="text"
            style={{
              display: isOpen ? "block" : "none",
            }}
          >
            Settings
          </p>
        </NavLink>
        <NavLink to="/about" className="navlink active side-bar-link">
          <FontAwesomeIcon
            icon={faFaceSmile}
            style={{ padding: isOpen ? "10px 8px 10px 15px" : "0 0" }}
          />
          <p
            className="text"
            style={{
              display: isOpen ? "block" : "none",
            }}
          >
            About Us
          </p>
        </NavLink>
      </div>
    </div>
  );
}
