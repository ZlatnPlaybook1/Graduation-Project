import React from "react";
import Header from "../../Header/Header";
import "./BL_Vuln_labs.css";
import labImg from "../../assets/img/BLV/lab1.jpeg";

import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
export default function BL_Vuln_labs() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <div className="landing-bl-vuln">
        <div className="container-bl-vuln">
          <div className="course-info-bl-vuln">
            <div className="course-text-bl-vuln">
              <h1>Practice</h1>
              <p className="brief-bl-vuln">
                <i className="fa-solid fa-bullseye lab-bl-vuln"></i>
                Reinforce what you're learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon-bl-vuln">
              <div className="border-bl-vuln">
                <div className="content-bl-vuln">
                  <i className="fas fa-book-open lab-bl-vuln"></i>
                  <p>Practice</p>
                  <i className="fas fa-bullseye lab-bl-vuln"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing */}

      {/* Start Course */}
      <div className="course-bl-vuln">
        <div className="container-bl-vuln">
          <h2>Business logic vulnerabilities Labs</h2>
          <p className="section-p-bl-vuln">Test Your Hacking Skills</p>
          <div className="row-bl-vuln">
            {/* lab1 */}
            <Link
              to="/BL-Vuln/BL_Vuln_labs/first_lab"
              className="course-card-bl-vuln"
            >
              <div className="course-image-bl-vuln">
                <img src={labImg} alt="Lab 1 img" />
              </div>
              <div className="course-text-bl-vuln">
                <h3>Excessive trust in client-side controls</h3>
                <p>
                  This lab doesn't adequately validate user input. You can
                  exploit a logic flaw in its purchasing workflow to buy items
                  for an unintended price. To solve the lab, buy a "Lightweight
                  l33t leather jacket". You can log in to your own account using
                  the following credentials: <code>wiener:peter</code>.
                </p>
              </div>

              <div className="easy-bl-vuln">
                <i className="fa-solid fa-signal lab-bl-vuln"></i>
                <p>Easy</p>
              </div>
            </Link>

            {/* lab2 */}
            <Link
              to="/BL-Vuln/BL_Vuln_labs/second_lab"
              className="course-card-bl-vuln"
            >
              <div className="course-image-bl-vuln">
                <img src={labImg} alt="Lab 2 img" />
              </div>
              <div className="course-text-bl-vuln">
                <h3>High-level logic vulnerability</h3>
                <p>
                  This lab doesn't adequately validate user input. You can
                  exploit a logic flaw in its purchasing workflow to buy items
                  for an unintended price. To solve the lab, buy a "Lightweight
                  l33t leather jacket". You can log in to your own account using
                  the following credentials: <code>wiener:peter</code>.
                </p>
              </div>
              <div className="easy-bl-vuln">
                <i className="fa-solid fa-signal lab-bl-vuln"></i>
                <p>Easy</p>
              </div>
            </Link>

            {/* Lab3 */}
            <Link
              to="/BL-Vuln/BL_Vuln_labs/third_lab"
              className="course-card-bl-vuln"
            >
              <div className="course-image-bl-vuln">
                <img src={labImg} alt="Lab 3 img" />
              </div>
              <div className="course-text-bl-vuln">
                <h3>Inconsistent security controls</h3>
                <p>
                  This lab's flawed logic allows arbitrary users to access
                  administrative functionality that should only be available to
                  company employees. To solve the lab, access the admin panel
                  and delete the user <code>carlos</code>.
                </p>
              </div>
              <div className="easy-bl-vuln">
                <i className="fa-solid fa-signal lab-bl-vuln"></i>
                <p>Easy</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* End Course */}
      <Footer />
    </>
  );
}
