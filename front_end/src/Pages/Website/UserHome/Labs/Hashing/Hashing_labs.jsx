import React from "react";
import Header from "../../Header/Header";
import "../Page_Styles/Lab.css";

import labImg from "../../assets/img/Hashing/Generator.jpg";

import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
export default function Hashing_labs() {
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
                <i className="fa-solid fa-bullseye"></i> Reinforce what you're
                learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon">
              <div className="border-icon">
                <div className="content">
                  <i className="fas fa-book-open"></i>
                  <p>Practice</p>
                  <i className="fas fa-bullseye"></i>
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
          <h2>Hashing</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {/* lab1 */}
            <Link to="/Hashing/Hashing_labs/lab1" className="course-card">
              <div className="course-image">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text">
                <h3>Hashing Tools</h3>
                <p>
                  Generate, compare, and crack hashes, and see how salting adds
                  security to password hashing.
                </p>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal lab"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab2 */}
            <Link to="/Hashing/Hashing_labs/lab2" className="course-card">
              <div className="course-image">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text">
                <h3>Hashing Task</h3>
                <p>
                  This task helps you understand: How hashing works ,Differences
                  between MD5, SHA-1, and SHA-256,and other.
                </p>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal lab"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* Lab3 */}
          </div>
        </div>
      </div>
      {/* End Course */}
      <Footer />
    </>
  );
}
