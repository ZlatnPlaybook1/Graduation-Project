import React from "react";
import Header from "../../Header/Header";
import "./InfoDisc_labs.css";
import labImg from "../../assets/img/InfoDisc/lab2.jpeg";

import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
export default function InfoDisc_labs() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <div className="landing-infoDisc">
        <div className="container-infoDisc">
          <div className="course-info-infoDisc">
            <div className="course-text-infoDisc">
              <h1>Practice</h1>
              <p className="brief-infoDisc">
                <i className="fa-solid fa-bullseye lab-infoDisc"></i>
                Reinforce what you're learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon-infoDisc">
              <div className="border-infoDisc">
                <div className="content-infoDisc">
                  <i className="fas fa-book-open lab-infoDisc"></i>
                  <p>Practice</p>
                  <i className="fas fa-bullseye lab-infoDisc"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing */}

      {/* Start Course */}
      <div className="course-infoDisc">
        <div className="container-infoDisc">
          <h2>Information Disclosure Labs</h2>
          <p className="section-p-infoDisc">Test Your Hacking Skills</p>
          <div className="row-infoDisc">
            {/* lab1 */}
            <Link
              to="/infoDisc/infoDisc_labs/first_lab"
              className="course-card-infoDisc"
            >
              <div className="course-image-infoDisc">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-infoDisc">
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
              <div className="easy-infoDisc">
                <i className="fa-solid fa-signal lab-infoDisc"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab2 */}
            <Link
              to="/infoDisc/infoDisc_labs/first_lab/ProductList"
              className="course-card-infoDisc"
            >
              <div className="course-image-infoDisc">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-infoDisc">
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
              <div className="easy-infoDisc">
                <i className="fa-solid fa-signal lab-infoDisc"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* Lab3 */}
            <Link
              to="/infoDisc/infoDisc_labs/"
              className="course-card-infoDisc"
            >
              <div className="course-image-infoDisc">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-infoDisc">
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
              <div className="easy-infoDisc">
                <i className="fa-solid fa-signal lab-infoDisc"></i>
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
