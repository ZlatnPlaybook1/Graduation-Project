import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Auth_Photo from "../../assets/img/Broken Authentication/Auth_Icon.png";
export default function BrokenAuthenticationLab() {
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
      <div className="course-XSS">
        <div className="container-XSS">
          <h2>Broken Authentication Labs</h2>
          <p className="section-p-XSS">Test Your Hacking skills</p>
          <div className="row-XSS">
            {/* lab1 */}
            <Link
              to="/broken-auth/Broken_Authentication_Lab/lab1"
              className="course-card-XSS"
            >
              <div className="course-image-XSS">
                <img src={Auth_Photo} alt="Lab Cover" />
              </div>
              <div className="course-text-XSS">
                <h3>Brute Force 1</h3>
                <p className="modern-p-XSS">Find the password of the admin</p>
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
              to="/broken-auth/Broken_Authentication_Lab/lab2"
              className="course-card-XSS"
            >
              <div className="course-image-XSS">
                <img src={Auth_Photo} alt="Lab Cover" />
              </div>
              <div className="course-text-XSS">
                <h3>Brute Force </h3>
                <p className="modern-p-XSS">
                  Developers forgot to add exit function when redirecting. Good
                  luck!
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
              to="/broken-auth/Broken_Authentication_Lab/lab3"
              className="course-card-XSS"
            >
              <div className="course-image-XSS">
                <img src={Auth_Photo} alt="Lab Cover" />
              </div>
              <div className="course-text-XSS">
                <h3>No Redirect</h3>
                <p className="modern-p-XSS">
                  Developers forgot to add exit function when redirecting. Good
                  luck!
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
      <Footer />
    </>
  );
}
