import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import lab_Cover from "../../assets/img/Unrestricted File Upload/file-upload-vector.jpg";
export default function UnrestrictedFileUploadLabs() {
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
              <div className="border-icon">
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
      {/* Start Courses */}
      <div className="course">
        <div className="container">
          <h2>Unrestricted File Upload Labs</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            {/* lab1 */}
            <Link
              to="/Unrestricted File Upload/lab_Unrestricted_File_Uplode/first_lab"
              className="course-card"
            >
              <div className="course-image">
                <img src={lab_Cover} alt="Lab Cover" />
              </div>
              <div className="course-text">
                <h3>Unrestricted:</h3>
                <p>Upload disallowed file type.</p>
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
              to="/Unrestricted File Upload/lab_Unrestricted_File_Uplode/second_lab"
              className="course-card"
            >
              <div className="course-image">
                <img src={lab_Cover} alt="Lab Cover" />
              </div>
              <div className="course-text">
                <h3>MIME Type:</h3>
                <p>
                  Upload disallowed file type, bypassing MIME type checking.
                </p>
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
              to="/Unrestricted File Upload/lab_Unrestricted_File_Uplode/third_lab"
              className="course-card"
            >
              <div className="course-image">
                <img src={lab_Cover} alt="Lab Cover" />
              </div>
              <div className="course-text">
                <h3>Blacklist :</h3>
                <p>
                  Upload disallowed file type, bypassing the blacklist check.
                </p>
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
      {/* End Courses */}
      <Footer />
    </>
  );
}
