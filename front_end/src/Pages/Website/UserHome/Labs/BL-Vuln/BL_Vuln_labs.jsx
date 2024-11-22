import React from "react";
import Header from "../../Header/Header";
import "./BL_Vuln_labs.css";
import labImg from "../../assets/img/BLV/lab1.jpeg";

import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
export default function BL_Vuln_labs() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <div className="landing-bl-vuln">
        <div className="container-bl-vuln">
          <div className="course-info-bl-vuln">
            <div className="course-text-bl-vuln">
              <h1>Practice</h1>
              <p className="brief-bl-vuln">
                <i className="fa-solid fa-bullseye lab-bl-vuln"></i>
                Reinforce what you're learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon-bl-vuln">
              <div className="border-bl-vuln">
                <div className="content-bl-vuln">
                  <i className="fas fa-book-open lab-bl-vuln"></i>
                  <p>Practice</p>
                  <i className="fas fa-bullseye lab-bl-vuln"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing */}

      {/* Start Course */}
      <div className="course-bl-vuln">
        <div className="container-bl-vuln">
          <h2>Business logic vulnerabilities Labs</h2>
          <p className="section-p-bl-vuln">Test Your Hacking Skills</p>
          <div className="row-bl-vuln">
            {/* lab1 */}
            <Link
              to="/bl-vuln/BL_Vuln_labs/first_lab/ProductList"
              className="course-card-bl-vuln"
            >
              <div className="course-image-bl-vuln">
                <img src={labImg} alt="Lab 1 Image" />
              </div>
              <div className="course-text-bl-vuln">
                <h3>Business Logic Vulnerability Allowing Login Bypass</h3>
                <p>
                  Go to the lab and view <mark>robots.txt</mark> by appending{" "}
                  <code>/robots.txt</code> to the lab URL. Notice that the{" "}
                  <mark>Disallow</mark> line discloses the path to the{" "}
                  <mark>admin panel</mark>. <br />
                  In the URL bar, replace <code>/robots.txt</code> with{" "}
                  <code>/administrator-panel</code> to load the{" "}
                  <mark>admin panel</mark>. <br />
                  Once logged in, delete the user <mark>Carlos</mark>.
                </p>
              </div>
              <div className="easy-bl-vuln">
                <i className="fa-solid fa-signal lab-bl-vuln"></i>
                <p>Easy</p>
              </div>
            </Link>

            {/* lab2 */}
            <Link
              to="/bl-vuln/BL_Vuln_labs/first_lab/ProductList"
              className="course-card-bl-vuln"
            >
              <div className="course-image-bl-vuln">
                <img src={labImg} alt="Lab 2 Image" />
              </div>
              <div className="course-text-bl-vuln">
                <h3>
                  Business Logic Vulnerability in WHERE Clause Allowing
                  Retrieval of Hidden Data
                </h3>
                <p>
                  Go to the lab and view <mark>robots.txt</mark> by appending{" "}
                  <code>/robots.txt</code> to the lab URL. Notice that the{" "}
                  <mark>Disallow</mark> line discloses the path to the{" "}
                  <mark>admin panel</mark>. <br />
                  In the URL bar, replace <code>/robots.txt</code> with{" "}
                  <code>/administrator-panel</code> to load the{" "}
                  <mark>admin panel</mark>. <br />
                  Once logged in, delete the user <mark>Carlos</mark>.
                </p>
              </div>
              <div className="easy-bl-vuln">
                <i className="fa-solid fa-signal lab-bl-vuln"></i>
                <p>Easy</p>
              </div>
            </Link>

            {/* Lab3 */}
            <Link to="/bl-vuln/BL_Vuln_labs/" className="course-card-bl-vuln">
              <div className="course-image-bl-vuln">
                <img src={labImg} alt="Lab 3 Image" />
              </div>
              <div className="course-text-bl-vuln">
                <h3>
                  Business Logic Vulnerability in WHERE Clause Allowing
                  Retrieval of Hidden Data
                </h3>
                <p>
                  Go to the lab and view <mark>robots.txt</mark> by appending{" "}
                  <code>/robots.txt</code> to the lab URL. Notice that the{" "}
                  <mark>Disallow</mark> line discloses the path to the{" "}
                  <mark>admin panel</mark>. <br />
                  In the URL bar, replace <code>/robots.txt</code> with{" "}
                  <code>/administrator-panel</code> to load the{" "}
                  <mark>admin panel</mark>. <br />
                  Once logged in, delete the user <mark>Carlos</mark>.
                </p>
              </div>
              <div className="easy-bl-vuln">
                <i className="fa-solid fa-signal lab-bl-vuln"></i>
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
