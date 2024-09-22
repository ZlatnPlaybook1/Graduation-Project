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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              ducimus voluptatibus neque illo id repellat quisquam? Autem
              expedita earum quae laborum ipsum ad.
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
              <Link to="#">Advertiser Agreement</Link>
              <Link to="#">Acceptable Use Policy</Link>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Technology Privacy</Link>
              <Link to="#">Developer Agreement</Link>
            </div>
          </div>
          <div className="col-2">
            <h2 className="footer-header">Navigate</h2>
            <div className="navigate-links">
              <Link to="#">Advertisers</Link>
              <Link to="#">Developers</Link>
              <Link to="#">Resources</Link>
              <Link to="#">Company</Link>
              <Link to="#">Connect</Link>
            </div>
          </div>
          <div className="col-2">
            <h2 className="footer-header">Contact Us</h2>
            <p>Mailing Address:xx00 E. Union Ave</p>
            <p>Suite 1100. Denver, CO 80237</p>
            <p>+999 90932 627</p>
            <p>support@yourdomain.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
