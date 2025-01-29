import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Auth_Photo from "../../assets/img/Broken Authentication/Auth_Icon.png";
export default function CommandInjectionLabs() {
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
                <i className="fa-solid fa-bullseye lab"></i> Reinforce what
                you're learning
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
      <div className="course">
        <div className="container">
          <h2>Command Injection</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            {/* lab1 */}
            <Link
              to="/Command_Injection/Command_Injection_labs/lab1"
              className="course-card"
            >
              <div className="course-image">
                <img src={Auth_Photo} alt="Lab Cover" />
              </div>
              <div className="course-text">
                <h3>Path Traversal Blacklist</h3>
                <p className="modern-p">Find the password of the admin</p>
                <ul className="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal lab"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab2 */}
            <Link
              to="/Command_Injection/Command_Injection_labs/lab2"
              className="course-card"
            >
              <div className="course-image">
                <img src={Auth_Photo} alt="Lab Cover" />
              </div>
              <div className="course-text">
                <h3>Path Traversal Blacklist</h3>
                <p className="modern-p">Find the password of the admin</p>
                <ul className="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal lab"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab3 */}
            <Link
              to="/Command_Injection/Command_Injection_labs/lab3"
              className="course-card"
            >
              <div className="course-image">
                <img src={Auth_Photo} alt="Lab Cover" />
              </div>
              <div className="course-text">
                <h3>Path Traversal Blacklist</h3>
                <p className="modern-p">Find the password of the admin</p>
                <ul className="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal lab"></i>
                <p>Easy</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
