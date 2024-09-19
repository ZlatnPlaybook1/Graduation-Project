import React, { useContext, useEffect, useState } from "react";
import "./bars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../../Context/MenuContext";
import { LOGOUT, USER } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Axios } from "../../Api/axios";

export default function Topbar() {
  const { setIsOpen } = useContext(Menu);
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const cookie = Cookie();

  useEffect(() => {
    Axios.get(`/${USER}`)
      .then((data) => setName(data.data.name))
      .catch(() => Navigate("/loginController", { replace: true }));
  }, []);

  async function handleLogout() {
    try {
      await Axios.get(`/${LOGOUT}`);
      cookie.remove("CuberWeb");
      window.location.pathname = "/loginController";
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
