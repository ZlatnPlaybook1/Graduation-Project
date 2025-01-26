import React from "react";
import Header from "../../Header/Header";
import "./Path_Traversal.css";
import labImg from "../../assets/img/Path_Traversal/lab.jpeg";

import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
export default function AC_Vuln_labs() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <div className="landing-ac-vuln">
        <div className="container-ac-vuln">
          <div className="course-info-ac-vuln">
            <div className="course-text-ac-vuln">
              <h1>Practice</h1>
              <p className="brief-ac-vuln">
                <i className="fa-solid fa-bullseye lab-ac-vuln"></i>
                Reinforce what you're learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon-ac-vuln">
              <div className="border-ac-vuln">
                <div className="content-ac-vuln">
                  <i className="fas fa-book-open lab-ac-vuln"></i>
                  <p>Practice</p>
                  <i className="fas fa-bullseye lab-ac-vuln"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing */}

      {/* Start Course */}
      <div className="course-ac-vuln">
        <div className="container-ac-vuln">
          <h2>Api Hacking</h2>
          <p className="section-p-ac-vuln">Test Your Hacking Skills</p>
          <div className="row-ac-vuln">
            {/* lab1 */}
            <Link
              to="/Path_Traversal/Path_Traversal_labs/lab1"
              className="course-card-ac-vuln"
            >
              <div className="course-image-ac-vuln">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-ac-vuln">
                <h3>MCQ Question Review</h3>
                <p>
                  These are multiple choice questions that are designed to be a
                  review for the exam.
                </p>
              </div>
              <div className="easy-ac-vuln">
                <i className="fa-solid fa-signal lab-ac-vuln"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab2 */}
            <Link
              to="/Path_Traversal/Path_Traversal_labs/lab2"
              className="course-card-ac-vuln"
            >
              <div className="course-image-ac-vuln">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-ac-vuln">
                <h3>Unprotected admin functionality with unpredictable URL</h3>
                <p>
                  This lab has an unprotected admin panel. It's located at an
                  unpredictable location, but the location is disclosed
                  somewhere in the application. Solve the lab by accessing the
                  admin panel, and using it to delete the user
                  <mark>Carlos</mark>.
                </p>
              </div>
              <div className="easy-ac-vuln">
                <i className="fa-solid fa-signal lab-ac-vuln"></i>
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
