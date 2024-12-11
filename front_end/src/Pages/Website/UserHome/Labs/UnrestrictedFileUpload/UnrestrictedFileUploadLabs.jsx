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
      <div className="landing-XSS">
        <div className="container-XSS">
          <div className="course-info-XSS">
            <div className="course-text-XSS">
              <h1>Practice</h1>
              <p className="brief-XSS">
                <i className="fa-solid fa-bullseye lab-XSS"></i> Reinforce what
                you're learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon-XSS">
              <div className="border-XSS">
                <div className="content-XSS">
                  <i className="fas fa-book-open lab-XSS"></i>
                  <p>Practice</p>
                  <i className="fas fa-bullseye lab-XSS"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing */}
      {/* Start Courses */}
      <div className="course-XSS">
        <div className="container-XSS">
          <h2>Unrestricted File Upload Labs</h2>
          <p className="section-p-XSS">Test Your Hacking skills</p>
          <div className="row-XSS">
            {/* lab1 */}
            <Link
              to="/Unrestricted File Upload/lab_Unrestricted_File_Uplode/first_lab"
              className="course-card-XSS"
            >
              <div className="course-image-XSS">
                <img src={lab_Cover} alt="Lab Cover" />
              </div>
              <div className="course-text-XSS">
                <h3>Unrestricted:</h3>
                <p>Upload disallowed file type.</p>
                <ul className="circled-order-XSS">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy-XSS">
                <i className="fa-solid fa-signal lab-XSS"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab2 */}
            <Link
              to="/Unrestricted File Upload/lab_Unrestricted_File_Uplode/second_lab"
              className="course-card-XSS"
            >
              <div className="course-image-XSS">
                <img src={lab_Cover} alt="Lab Cover" />
              </div>
              <div className="course-text-XSS">
                <h3>MIME Type:</h3>
                <p>
                  Upload disallowed file type, bypassing MIME type checking.
                </p>
                <ul className="circled-order-XSS">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy-XSS">
                <i className="fa-solid fa-signal lab-XSS"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab3 */}
            <Link
              to="/Unrestricted File Upload/lab_Unrestricted_File_Uplode/third_lab"
              className="course-card-XSS"
            >
              <div className="course-image-XSS">
                <img src={lab_Cover} alt="Lab Cover" />
              </div>
              <div className="course-text-XSS">
                <h3>Blacklist :</h3>
                <p>
                  Upload disallowed file type, bypassing the blacklist check.
                </p>
                <ul className="circled-order-XSS">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy-XSS">
                <i className="fa-solid fa-signal lab-XSS"></i>
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
