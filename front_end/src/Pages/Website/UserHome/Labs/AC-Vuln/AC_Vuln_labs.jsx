import React from "react";
import Header from "../../Header/Header";
import "./AC_Vuln_labs.css";
import labImg from "../../assets/img/ACV/lab.jpeg";

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
          <h2>Access control vulnerability Labs</h2>
          <p className="section-p-ac-vuln">Test Your Hacking Skills</p>
          <div className="row-ac-vuln">
            {/* lab1 */}
            <Link
              to="/AC-Vuln/AC_Vuln_labs/first_lab/ProductList"
              className="course-card-ac-vuln"
            >
              <div className="course-image-ac-vuln">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-ac-vuln">
                <h3>vulnerability allowing login bypass</h3>
                <p>
                  Go to the lab and view <mark>robots.txt</mark> by appending{" "}
                  <code>/robots.txt</code> to the lab URL. Notice that the{" "}
                  <mark>Disallow</mark> line discloses the path to the{" "}
                  <mark>admin panel</mark>.
                  <br />
                  In the URL bar, replace <code>/robots.txt</code> with{" "}
                  <code>/administrator-panel</code> to load the{" "}
                  <mark>admin panel</mark>.
                  <br />
                  Once logged in, delete the user <mark>Carlos</mark>.
                </p>
              </div>
              <div className="easy-ac-vuln">
                <i className="fa-solid fa-signal lab-ac-vuln"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab2 */}
            <Link
              to="/AC-Vuln/AC_Vuln_labs/first_lab/ProductList"
              className="course-card-ac-vuln"
            >
              <div className="course-image-ac-vuln">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-ac-vuln">
                <h3>
                  vulnerability in WHERE clause allowing retrieval of hidden
                  data
                </h3>
                <p>
                  Go to the lab and view <mark>robots.txt</mark> by appending{" "}
                  <code>/robots.txt</code> to the lab URL. Notice that the{" "}
                  <mark>Disallow</mark> line discloses the path to the{" "}
                  <mark>admin panel</mark>.
                  <br />
                  In the URL bar, replace <code>/robots.txt</code> with{" "}
                  <code>/administrator-panel</code> to load the{" "}
                  <mark>admin panel</mark>.
                  <br />
                  Once logged in, delete the user <mark>Carlos</mark>.
                </p>
              </div>
              <div className="easy-ac-vuln">
                <i className="fa-solid fa-signal lab-ac-vuln"></i>
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
