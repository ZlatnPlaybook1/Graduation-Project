import React, { useContext } from "react";
import "./bars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../../Context/MenuContext";

export default function Topbar() {
  const { setIsOpen } = useContext(Menu); // Destructure setIsOpen from Menu context

  return (
    <div className="topbar d-flex">
      <div className="top-menu">
        <FontAwesomeIcon
          onClick={() => setIsOpen((prev) => !prev)}
          icon={faBars}
          className="fabars-size"
        />
        <a href="/" target="_self" className="Home-link">
          Cyber Labs
        </a>
      </div>
    </div>
  );
}
