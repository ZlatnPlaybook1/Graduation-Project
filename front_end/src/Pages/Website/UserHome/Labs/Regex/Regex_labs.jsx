import React from "react";
import Header from "../../Header/Header";
import "./Regex_labs.css";
import labImg from "../../assets/img/ACV/lab.jpeg";

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
          <h2>Access control vulnerability Labs</h2>
          <p className="section-p-Regex">Test Your Hacking Skills</p>
          <div className="row-Regex">
            {/* lab1 */}
            <Link
              to="/Regex/Regex_labs/first_lab"
              className="course-card-Regex"
            >
              <div className="course-image-Regex">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-Regex">
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
              <div className="easy-Regex">
                <i className="fa-solid fa-signal lab-Regex"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab2 */}
            <Link
              to="/Regex/Regex_labs/first_lab/ProductList"
              className="course-card-Regex"
            >
              <div className="course-image-Regex">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-Regex">
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
              <div className="easy-Regex">
                <i className="fa-solid fa-signal lab-Regex"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* Lab3 */}
            <Link to="/Regex/Regex_labs/" className="course-card-Regex">
              <div className="course-image-Regex">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-Regex">
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
