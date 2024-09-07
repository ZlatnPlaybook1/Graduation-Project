import React, { useContext, useEffect, useState } from "react";
import "./bars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../../Context/MenuContext";
import axios from "axios";
import { baseUrl, LOGOUT, USER } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function Topbar() {
  const { setIsOpen } = useContext(Menu);
  const Navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(`${baseUrl}/${USER}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => setName(data.data.name))
      .catch(() => Navigate("/login", { replace: true }));
  }, []);

  // cookie & token
  const cookie = Cookie();
  const token = cookie.get("CuberWeb");

  async function handleLogout() {
    try {
      await axios.get(`${baseUrl}/${LOGOUT}`, {
        headers: {
          Authorization: "Bearer " + cookie.get("CuberWeb"),
        },
      });
      cookie.remove("CuberWeb");
      window.location.pathname = "/login";
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="topbar d-flex justify-content-between align-items-center">
      <div className="top-menu d-flex align-items-center">
        <FontAwesomeIcon
          onClick={() => setIsOpen((prev) => !prev)}
          icon={faBars}
          className="fabars-size"
        />
        <a href="/" target="_self" className="Home-link">
          Cyber Labs
        </a>
      </div>
      <div className="mb-0">
        <DropdownButton id="dropdown-basic-button" title={name}>
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}
