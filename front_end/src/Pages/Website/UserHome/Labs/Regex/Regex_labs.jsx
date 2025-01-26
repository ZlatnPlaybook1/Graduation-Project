import React from "react";
import Header from "../../Header/Header";
import "./Regex.css";
import labImg from "../../assets/img/Regex/lab1.jpeg";

import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
export default function Regex_labs() {
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
          <h2>Regular Expressions Labs</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {/* Lab1 */}
            <Link to="/Regex/Regex_labs/first_lab" className="course-card">
              <div className="course-image">
                <img src={labImg} alt="Lab 1 Image" />
              </div>
              <div className="course-text">
                <h3>Detecting Malicious Patterns</h3>
                <p>
                  Learn how to use Regular Expressions (Regex) to identify
                  harmful inputs in web applications. Explore: <br />- Crafting
                  regex patterns to detect SQL injection attempts. <br />
                  - Analyzing logs for suspicious access patterns. <br />-
                  Preventing exploitation by filtering malicious payloads.
                </p>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal lab"></i>
                <p>Easy</p>
              </div>
            </Link>

            {/* Lab2 */}
            <Link to="/Regex/Regex_labs/second_lab" className="course-card">
              <div className="course-image">
                <img src={labImg} alt="Lab 2 Image" />
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

            {/* Lab3 */}
            <Link to="/Regex/Regex_labs/third_lab" className="course-card">
              <div className="course-image">
                <img src={labImg} alt="Lab 3 Image" />
              </div>
              <div className="course-text">
                <h3>Analyzing Threat Patterns in Logs</h3>
                <p>
                  Utilize Regex to parse and analyze logs for security
                  monitoring. Practice: <br />
                  - Identifying brute-force login attempts through repeated
                  patterns. <br />
                  - Highlighting unauthorized access events in log files. <br />
                  - Building efficient Regex patterns for quick data extraction.
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
