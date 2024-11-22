import React from "react";
import Header from "../../Header/Header";
import "./Regex_labs.css";
import labImg from "../../assets/img/Regex/lab1.jpeg";

import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
export default function Regex_labs() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <div className="landing-Regex">
        <div className="container-Regex">
          <div className="course-info-Regex">
            <div className="course-text-Regex">
              <h1>Practice</h1>
              <p className="brief-Regex">
                <i className="fa-solid fa-bullseye lab-Regex"></i>
                Reinforce what you're learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon-Regex">
              <div className="border-Regex">
                <div className="content-Regex">
                  <i className="fas fa-book-open lab-Regex"></i>
                  <p>Practice</p>
                  <i className="fas fa-bullseye lab-Regex"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing */}

      {/* Start Course */}
      <div className="course-Regex">
        <div className="container-Regex">
          <h2>Regular Expressions Labs</h2>
          <p className="section-p-Regex">Test Your Hacking Skills</p>
          <div className="row-Regex">
            {/* Lab1 */}
            <Link
              to="/Regex/Regex_labs/first_lab"
              className="course-card-Regex"
            >
              <div className="course-image-Regex">
                <img src={labImg} alt="Lab 1 Image" />
              </div>
              <div className="course-text-Regex">
                <h3>Detecting Malicious Patterns</h3>
                <p>
                  Learn how to use Regular Expressions (Regex) to identify
                  harmful inputs in web applications. Explore: <br />- Crafting
                  regex patterns to detect SQL injection attempts. <br />
                  - Analyzing logs for suspicious access patterns. <br />-
                  Preventing exploitation by filtering malicious payloads.
                </p>
              </div>
              <div className="easy-Regex">
                <i className="fa-solid fa-signal lab-Regex"></i>
                <p>Easy</p>
              </div>
            </Link>

            {/* Lab2 */}
            <Link
              to="/Regex/Regex_labs/second_lab"
              className="course-card-Regex"
            >
              <div className="course-image-Regex">
                <img src={labImg} alt="Lab 2 Image" />
              </div>
              <div className="course-text-Regex">
                <h3>Securing Input Fields</h3>
                <p>
                  Understand how to use Regex for input validation to mitigate
                  security risks. Dive into: <br />
                  - Constructing patterns for secure email and password
                  validation. <br />
                  - Preventing cross-site scripting (XSS) by filtering dangerous
                  characters. <br />- Testing your Regex for edge cases and
                  vulnerabilities.
                </p>
              </div>
              <div className="easy-Regex">
                <i className="fa-solid fa-signal lab-Regex"></i>
                <p>Easy</p>
              </div>
            </Link>

            {/* Lab3 */}
            <Link
              to="/Regex/Regex_labs/third_lab"
              className="course-card-Regex"
            >
              <div className="course-image-Regex">
                <img src={labImg} alt="Lab 3 Image" />
              </div>
              <div className="course-text-Regex">
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
              <div className="easy-Regex">
                <i className="fa-solid fa-signal lab-Regex"></i>
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
