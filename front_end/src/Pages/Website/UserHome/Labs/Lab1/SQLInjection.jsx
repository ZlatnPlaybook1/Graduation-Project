import React from "react";
import Header from "../../Header/Header";
import "./SQLInjection.css";
import imagecourse from "../../assets/img/course_image_home.png";
import { Link } from "react-router-dom";
import Footer from "../../../Footer/Footer";
export default function SQLInjection() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <div className="landing-sql-injection">
        <div className="container-sql-injection">
          <div className="course-info-sql-injection">
            <div className="course-text-sql-injection">
              <h1>Practice</h1>
              <p className="brief-sql-injection">
                <i className="fa-solid fa-bullseye lab-sql-injection"></i>
                Reinforce what you're learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon-sql-injection">
              <div className="border-sql-injection">
                <div className="content-sql-injection">
                  <i className="fas fa-book-open lab-sql-injection"></i>
                  <p>Practice</p>
                  <i className="fas fa-bullseye lab-sql-injection"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing */}
      {/* Start Course */}
      <div className="course-sql-injection">
        <div className="container-sql-injection">
          <h2>SQL Injection Lab</h2>
          <p className="section-p-sql-injection">Test Your Hacking Skills</p>
          <div className="row-sql-injection">
            <Link
              to="/lab1/SqlInjectionLab/login"
              className="course-card-sql-injection"
            >
              <div className="course-image-sql-injection">
                <img src={imagecourse} alt="" />
              </div>
              <div className="course-text-sql-injection">
                <h3>Pre Security</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order-sql-injection">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy-sql-injection">
                <i className="fa-solid fa-signal lab-sql-injection"></i>
                <p>Easy</p>
              </div>
            </Link>

            <Link to="#" className="course-card-sql-injection">
              <div className="course-image-sql-injection">
                <img src={imagecourse} alt="" />
              </div>
              <div className="course-text-sql-injection">
                <h3>Pre Security</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order-sql-injection">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy-sql-injection">
                <i className="fa-solid fa-signal lab-sql-injection"></i>
                <p>Easy</p>
              </div>
            </Link>

            <Link to="#" className="course-card-sql-injection">
              <div className="course-image-sql-injection">
                <img src={imagecourse} alt="" />
              </div>
              <div className="course-text-sql-injection">
                <h3>Pre Security</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order-sql-injection">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy-sql-injection">
                <i className="fa-solid fa-signal lab-sql-injection"></i>
                <p>Easy</p>
              </div>
            </Link>

            <Link to="#" className="course-card-sql-injection">
              <div className="course-image-sql-injection">
                <img src={imagecourse} alt="" />
              </div>
              <div className="course-text-sql-injection">
                <h3>Pre Security</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order-sql-injection">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy-sql-injection">
                <i className="fa-solid fa-signal lab-sql-injection"></i>
                <p>Easy</p>
              </div>
            </Link>

            <Link to="#" className="course-card-sql-injection">
              <div className="course-image-sql-injection">
                <img src={imagecourse} alt="" />
              </div>
              <div className="course-text-sql-injection">
                <h3>Pre Security</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order-sql-injection">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy-sql-injection">
                <i className="fa-solid fa-signal lab-sql-injection"></i>
                <p>Easy</p>
              </div>
            </Link>

            <Link to="#" className="course-card-sql-injection">
              <div className="course-image-sql-injection">
                <img src={imagecourse} alt="" />
              </div>
              <div className="course-text-sql-injection">
                <h3>Pre Security</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order-sql-injection">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy-sql-injection">
                <i className="fa-solid fa-signal lab-sql-injection"></i>
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
