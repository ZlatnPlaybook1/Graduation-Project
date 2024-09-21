import React from "react";
import "./Courses.css";
import imagecourse from "../assets/img/course_image_home.png";

const Courses = () => {
  return (
    <div className="course">
      <div className="container">
        <h2>Learning Paths</h2>
        <p className="section-p">
          Work your way through a structured learning path
        </p>
        <div className="row-center">
          <div className="row-course">
            <a href="/lab1" className="course-card">
              <div className="course-image">
                <img src={imagecourse} alt="Course" />
              </div>
              <div className="course-text">
                <h3>Pre Security</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>

          <div className="row-course">
            <a href="/lab2" className="course-card">
              <div className="course-image">
                <img src={imagecourse} alt="Course" />
              </div>
              <div className="course-text">
                <h3>Pre Security</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
