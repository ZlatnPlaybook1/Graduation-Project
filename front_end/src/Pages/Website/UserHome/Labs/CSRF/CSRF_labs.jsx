import React from "react";
import Header from "../../Header/Header";
import "./CSRF.css";
import labImg from "../../assets/img/CSRF/lab1.jpeg";

import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
export default function CSRF_labs() {
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
          <h2>Cross-Site Request Forgery (CSRF)</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {/* Lab1 */}
            <Link to="/CSRF/CSRF_labs/first_lab" className="course-card">
              <div className="course-image">
                <img src={labImg} alt="Lab 1 Image" />
              </div>
              <div className="course-text">
                <h3>Exploiting CSRF Vulnerability for Login Bypass</h3>
                <p>
                  Explore how attackers can bypass login mechanisms using CSRF
                  vulnerabilities. In this lab, you will:
                  <br />- Learn to exploit unprotected paths like{" "}
                  <code>/robots.txt</code> to find sensitive areas.
                  <br />- Understand how manipulating URLs, such as replacing{" "}
                  <code>/robots.txt</code> with{" "}
                  <code>/administrator-panel</code>, grants unauthorized access.
                  <br />- Practice logging in as an admin and performing
                  malicious actions, like deleting user accounts.
                </p>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal lab"></i>
                <p>Easy</p>
              </div>
            </Link>

            {/* Lab2 */}
            <Link to="/CSRF/CSRF_labs/second_lab" className="course-card">
              <div className="course-image">
                <img src={labImg} alt="Lab 2 Image" />
              </div>
              <div className="course-text">
                <h3>CSRF Exploiting SQL Injection via WHERE Clause</h3>
                <p>
                  Learn how attackers can exploit poorly implemented SQL queries
                  through CSRF attacks. This lab covers:
                  <br />- Crafting input to manipulate SQL queries and retrieve
                  hidden data.
                  <br />- Understanding how CSRF tokens help secure sensitive
                  actions.
                  <br />- Implementing input validation and protection
                  mechanisms to prevent unauthorized data access.
                </p>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal lab"></i>
                <p>Easy</p>
              </div>
            </Link>

            {/* Lab3 */}
            <Link to="/CSRF/CSRF_labs/third_lab" className="course-card">
              <div className="course-image">
                <img src={labImg} alt="Lab 3 Image" />
              </div>
              <div className="course-text">
                <h3>Preventing CSRF Attacks on Sensitive Actions</h3>
                <p>
                  Investigate how CSRF attacks can target authenticated users to
                  perform malicious actions. In this lab, you will:
                  <br />- Analyze the injection of malicious forms that exploit
                  CSRF vulnerabilities.
                  <br />- Implement anti tokens to prevent unauthorized requests
                  from being executed.
                  <br />- Apply the SameSite cookie attribute for additional
                  protection against cross-site request forgery.
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
