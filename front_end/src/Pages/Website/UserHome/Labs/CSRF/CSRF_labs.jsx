import React from "react";
import Header from "../../Header/Header";
import "./CSRF_labs.css";
import labImg from "../../assets/img/ACV/lab.jpeg";

import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
export default function CSRF_labs() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <div className="landing-CSRF">
        <div className="container-CSRF">
          <div className="course-info-CSRF">
            <div className="course-text-CSRF">
              <h1>Practice</h1>
              <p className="brief-CSRF">
                <i className="fa-solid fa-bullseye lab-CSRF"></i>
                Reinforce what you're learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon-CSRF">
              <div className="border-CSRF">
                <div className="content-CSRF">
                  <i className="fas fa-book-open lab-CSRF"></i>
                  <p>Practice</p>
                  <i className="fas fa-bullseye lab-CSRF"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing */}

      {/* Start Course */}
      <div className="course-CSRF">
        <div className="container-CSRF">
          <h2>Access control vulnerability Labs</h2>
          <p className="section-p-CSRF">Test Your Hacking Skills</p>
          <div className="row-CSRF">
            {/* lab1 */}
            <Link to="/CSRF/CSRF_labs/first_lab" className="course-card-CSRF">
              <div className="course-image-CSRF">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-CSRF">
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
              <div className="easy-CSRF">
                <i className="fa-solid fa-signal lab-CSRF"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab2 */}
            <Link
              to="/CSRF/CSRF_labs/first_lab/ProductList"
              className="course-card-CSRF"
            >
              <div className="course-image-CSRF">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-CSRF">
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
              <div className="easy-CSRF">
                <i className="fa-solid fa-signal lab-CSRF"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* Lab3 */}
            <Link to="/CSRF/CSRF_labs/" className="course-card-CSRF">
              <div className="course-image-CSRF">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-CSRF">
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
              <div className="easy-CSRF">
                <i className="fa-solid fa-signal lab-CSRF"></i>
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
