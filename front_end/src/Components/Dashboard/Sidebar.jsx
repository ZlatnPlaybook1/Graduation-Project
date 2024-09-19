import React, { useContext, useEffect, useState } from "react";
import "./bars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faGear,
  faHouse,
  faPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "../../Context/MenuContext";
import { WindowSizeContext } from "../../Context/WindowContext";
import { baseUrl, USER } from "../../Api/Api";
import axios from "axios";

export default function Sidebar() {
  const { isOpen } = useContext(Menu);
  const { windowSize } = useContext(WindowSizeContext);

  // user
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/${baseUrl}/${USER}`)
      .then((data) => setUser(data.data))
      .catch(() => navigate("/login", { replace: true }));
  }, []);

  return (
    <div className="full-cont">
      <div
        className="sidebar"
        style={{
          left: windowSize < 768 ? (isOpen ? 0 : "-100%") : 0,
          width: isOpen ? "220px" : "60px",
        }}
      >
        <NavLink to="/" className="navlink active side-bar-link">
          <FontAwesomeIcon
            icon={faHouse}
            style={{ padding: isOpen ? "10px 8px 10px 30px" : "0 8px" }}
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

        {user.role === "admin" ? (
          <>
            <NavLink
              to="/dashboard/users"
              className="navlink active side-bar-link"
            >
              <FontAwesomeIcon
                icon={faUsers}
                style={{ padding: isOpen ? "10px 8px 10px 30px" : "0 8px" }}
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
            <NavLink
              to="/dashboard/user/add"
              className="navlink active side-bar-link"
            >
              <FontAwesomeIcon
                icon={faPlus}
                style={{ padding: isOpen ? "10px 8px 10px 30px" : "0 8px" }}
              />
              <p
                className="text"
                style={{
                  display: isOpen ? "block" : "none",
                }}
              >
                Add User
              </p>
            </NavLink>
            <NavLink
              to="/dashboard/writer"
              className="navlink active side-bar-link"
            >
              <FontAwesomeIcon
                icon={faPlus}
                style={{ padding: isOpen ? "10px 8px 10px 30px" : "0 8px" }}
              />
              <p
                className="text"
                style={{
                  display: isOpen ? "block" : "none",
                }}
              >
                Writer
              </p>
            </NavLink>
          </>
        ) : user.role === "writer" || user.role === "admin" ? (
          <>
            <NavLink
              to="/dashboard/writer"
              className="navlink active side-bar-link"
            >
              <FontAwesomeIcon
                icon={faPlus}
                style={{ padding: isOpen ? "10px 8px 10px 30px" : "0 8px" }}
              />
              <p
                className="text"
                style={{
                  display: isOpen ? "block" : "none",
                }}
              >
                Writer
              </p>
            </NavLink>
            <NavLink to="/settings" className="navlink active side-bar-link">
              <FontAwesomeIcon
                icon={faGear}
                style={{ padding: isOpen ? "10px 8px 10px 30px" : "0 8px" }}
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
                style={{ padding: isOpen ? "10px 8px 10px 30px" : "0 8px" }}
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
          </>
        ) : null}
      </div>
    </div>
  );
}
