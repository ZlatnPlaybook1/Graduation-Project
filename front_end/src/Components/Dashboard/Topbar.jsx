import React, { useContext, useEffect, useState } from "react";
import "./bars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../../Context/MenuContext";
import { LOGOUT } from "../../Api/Api";
import { Link, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Axios } from "../../Api/axios";
import axios from "axios";

export default function Topbar() {
  const { setIsOpen } = useContext(Menu);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const cookie = Cookie();
  const token = cookie.get("CuberWeb");

  useEffect(() => {
    if (token) {
      axios
        .get("http://127.0.0.1:8080/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((data) => setName(data.name))
        .catch(() => navigate("/login", { replace: true }));
    } else {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  async function handleLogout() {
    try {
      await Axios.get(`/${LOGOUT}`);
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
        <Link to={"/home"} target="_self" className="Home-link">
          Cyber Labs
        </Link>
      </div>
      <div className="mb-0">
        <DropdownButton id="dropdown-basic-button" title={name}>
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}
