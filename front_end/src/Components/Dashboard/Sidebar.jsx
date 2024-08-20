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

export default function Sidebar() {
  const { isOpen } = useContext(Menu); // Destructure isOpen from Menu context

  return (
    <div
      className="sidebar"
      style={{
        width: isOpen ? "240px" : "60px",
      }}
    >
      <NavLink to={"/"} className="navlink active side-bar-link">
        <FontAwesomeIcon
          icon={faHouse}
          style={{ padding: isOpen ? "10px 8px 10px 15px" : "0 0" }}
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
      <NavLink to={"users"} className="navlink active side-bar-link">
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
      <NavLink to={"settings"} className="navlink active side-bar-link">
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
      <NavLink to={"about"} className="navlink active side-bar-link">
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
  );
}
