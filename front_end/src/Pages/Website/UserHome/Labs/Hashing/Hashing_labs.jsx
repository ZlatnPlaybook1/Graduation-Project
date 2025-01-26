import React from "react";
import Header from "../../Header/Header";
import "./Hashing.css";
import labImg from "../../assets/img/InfoDisc/lab1.jpeg";

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
          <h2>Api Hacking</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {/* lab1 */}
            <Link to="/Hashing/Hashing_labs/lab1" className="course-card">
              <div className="course-image">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text">
                <h3>MCQ Question Review</h3>
                <p>
                  These are multiple choice questions that are designed to be a
                  review for the exam.
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
          </div>
        </div>
      </div>
      {/* End Course */}
      <Footer />
    </>
  );
}
