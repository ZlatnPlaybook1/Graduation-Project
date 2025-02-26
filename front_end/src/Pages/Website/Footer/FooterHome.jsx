import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import logo from "../assets/img/core-img/logo.png";

export default function FooterHome() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="row">
            {/* Logo & About */}
            <div className="col-md-3">
              <div className="d-flex align-items-center logo">
                <img src={logo} alt="Cyber Labs Logo" />
                <h2>Cyber Labs</h2>
              </div>
              <p>
                Your trusted partner in cybersecurity education. We empower
                individuals with the knowledge and skills to combat cyber threats
                and secure the digital landscape.
              </p>
              <div className="d-flex justify-content-center social-links">
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>

            {/* Privacy & TOS */}
            <div className="col-md-3">
              <h5>Privacy & TOS</h5>
              <ul className="list-unstyled">
                <li><Link to="#">Privacy Policy</Link></li>
                <li><Link to="#">Terms of Service</Link></li>
                <li><Link to="#">Acceptable Use Policy</Link></li>
                <li><Link to="#">Data Protection Policy</Link></li>
                <li><Link to="#">Cookies Policy</Link></li>
              </ul>
            </div>

            {/* Explore */}
            <div className="col-md-3">
              <h5>Explore</h5>
              <ul className="list-unstyled">
                <li><Link to="#">Courses</Link></li>
                <li><Link to="#">Resources</Link></li>
                <li><Link to="#">Blog</Link></li>
                <li><Link to="#">Webinars</Link></li>
                <li><Link to="#">Community</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-3 contact">
              <h5>Contact Us</h5>
              <p>Faculty of Electronic Engineering</p>
              <p>Menouf City, Menofia Governorate</p>
              <p>📞 +201000000000</p>
              <p>📧 support@cyberlabs.com</p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom text-center">
            <p>© {new Date().getFullYear()} Cyber Labs. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
