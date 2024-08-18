import React from "react";
import "./bars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`side-bar ${isOpen ? "open" : ""}`}>
      <FontAwesomeIcon icon={faTimes} className="close-btn" onClick={onClose} />
      <NavLink to={"/users"} activeClassName="active">
        <FontAwesomeIcon icon={faUsers} className="icon" />
        <p>Users</p>
      </NavLink>
      {/* Add more links as needed */}
    </div>
  );
}
