import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Idor_cover from "../../assets/img/IDOR/IDOR_Cover.jpg";
export default function InsecureDirectObjectReferenceLabs() {
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
              <div className="border">
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
          <h2>Insecure Direct Object Reference (IDOR) Labs</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            {/* lab1 */}
            <Link
              to="/Insecure_Direct_Object_Reference(IDOR)/Insecure_Direct_Object_Reference(IDOR)Labs/lab1"
              className="course-card"
            >
              <div className="course-image">
                <img src={Idor_cover} alt="Lab Cover" />
              </div>
              <div className="course-text">
                <h3>Invoices.</h3>
                <p className="modern-p">
                  Gain unauthorized access to other users' invoices.
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
            {/* lab2 */}
            <Link
              to="/Insecure_Direct_Object_Reference(IDOR)/Insecure_Direct_Object_Reference(IDOR)Labs/lab2"
              className="course-card"
            >
              <div className="course-image">
                <img src={Idor_cover} alt="Lab Cover" />
              </div>
              <div className="course-text">
                <h3>Ticket Sales</h3>
                <p className="modern-p">
                  Buy tickets for less than the regular price.
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
              to="/Insecure_Direct_Object_Reference(IDOR)/Insecure_Direct_Object_Reference(IDOR)Labs/lab3"
              className="course-card"
            >
              <div className="course-image">
                <img src={Idor_cover} alt="Lab Cover" />
              </div>
              <div className="course-text">
                <h3>Money Transfer</h3>
                <p className="modern-p">
                  Transfer money from another user's account to your own account
                  without any permission.
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
