import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../assets/img/core-img/logo.png";

export default function Footer() {
  return (
    <div id="contact" className="footer section">
      <div className="container">
        <div className="footer-row">
          <div className="col-1">
            <div className="logo">
              <img src={logo} alt="Cyber Labs Logo" />
              <h2>Cyber Labs</h2>
            </div>
            <p>
              Your trusted partner in cybersecurity education. We empower individuals with the knowledge and skills to combat cyber threats and secure the digital landscape.
            </p>
            <ul className="links">
              <li>
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h2 className="footer-header">Privacy & TOS</h2>
            <div className="privacy-links">
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms of Service</Link>
              <Link to="#">Acceptable Use Policy</Link>
              <Link to="#">Data Protection Policy</Link>
              <Link to="#">Cookies Policy</Link>
            </div>
          </div>
          <div className="col-2">
            <h2 className="footer-header">Explore</h2>
            <div className="navigate-links">
              <Link to="#">Courses</Link>
              <Link to="#">Resources</Link>
              <Link to="#">Blog</Link>
              <Link to="#">Webinars</Link>
              <Link to="#">Community</Link>
            </div>
          </div>
          <div className="col-2">
            <h2 className="footer-header">Contact Us</h2>
            <p>Faculty of Electronic Engineering</p>
            <p>Menouf City Menofia Governorate</p>
            <p>+201000000000</p>
            <p>support@cyberlabs.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
