import React from "react";
import Header from "../../Header/Header";
import "./AC_Vuln.css";
import labImg from "../../assets/img/ACV/lab.jpeg";

import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
export default function AC_Vuln_labs() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <div className="landing">
        <div className="container">
          <div className="course-info">
            <div className="course-text">
              <h1>Practice</h1>
              <p className="brief">
                <i className="fa-solid fa-bullseye lab"></i>
                Reinforce what you're learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon">
              <div className="border">
                <div className="content">
                  <i className="fas fa-book-open lab"></i>
                  <p>Practice</p>
                  <i className="fas fa-bullseye lab"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing */}

      {/* Start Course */}
      <div className="course">
        <div className="container">
          <h2>Access control vulnerability Labs</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {/* lab1 */}
            <Link to="/AC-Vuln/AC_Vuln_labs/first_lab" className="course-card">
              <div className="course-image">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text">
                <h3>vulnerability allowing login bypass</h3>
                <p>
                  This lab has an unprotected admin panel. Solve the lab by
                  deleting the user <mark>carlos</mark>.
                </p>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal lab"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab2 */}
            <Link to="/AC-Vuln/AC_Vuln_labs/second_lab" className="course-card">
              <div className="course-image">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text">
                <h3>Unprotected admin functionality with unpredictable URL</h3>
                <p>
                  This lab has an unprotected admin panel. It's located at an
                  unpredictable location, but the location is disclosed
                  somewhere in the application. Solve the lab by accessing the
                  admin panel, and using it to delete the user
                  <mark>Carlos</mark>.
                </p>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal lab"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* Lab3 */}
            <Link to="/AC-Vuln/AC_Vuln_labs/third_lab" className="course-card">
              <div className="course-image">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text">
                <h3>
                  vulnerability in WHERE clause allowing retrieval of hidden
                  data
                </h3>
                <p>
                  This lab has an admin panel at /admin, which identifies
                  administrators using a forgeable cookie. Solve the lab by
                  accessing the admin panel and using it to delete the user
                  carlos. You can log in to your own account using the following
                  credentials: <code>wiener:peter</code>
                </p>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal lab"></i>
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
