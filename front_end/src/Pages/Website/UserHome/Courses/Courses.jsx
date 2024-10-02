import React from "react";
import "./Courses.css";
import imagecourse from "../assets/img/course_image_home.png";
import imagecourse2 from "../assets/img/Lab2.jpg";
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
            <a href="/sql_Injection" className="course-card">
              <div className="course-image">
                <img src={imagecourse} alt="Course" />
              </div>
              <div className="course-text">
                <h3>1. SQL Injection</h3>
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
            <a href="/xss" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>2. Cross-Site Scripting</h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/cookies" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>3. Cookies</h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab1" className="course-card">
              <div className="course-image">
                <img src={imagecourse} alt="Course" />
              </div>
              <div className="course-text">
                <h3>4. </h3>
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
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>5. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab3" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>6. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab1" className="course-card">
              <div className="course-image">
                <img src={imagecourse} alt="Course" />
              </div>
              <div className="course-text">
                <h3>7. </h3>
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
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>8. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab3" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>9. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab1" className="course-card">
              <div className="course-image">
                <img src={imagecourse} alt="Course" />
              </div>
              <div className="course-text">
                <h3>10. </h3>
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
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>11. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab3" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>12. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab1" className="course-card">
              <div className="course-image">
                <img src={imagecourse} alt="Course" />
              </div>
              <div className="course-text">
                <h3>13. </h3>
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
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>14. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab3" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>15. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab1" className="course-card">
              <div className="course-image">
                <img src={imagecourse} alt="Course" />
              </div>
              <div className="course-text">
                <h3>16. </h3>
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
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>17. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab3" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>18. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab1" className="course-card">
              <div className="course-image">
                <img src={imagecourse} alt="Course" />
              </div>
              <div className="course-text">
                <h3>19. </h3>
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
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>20. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab3" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>21. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab1" className="course-card">
              <div className="course-image">
                <img src={imagecourse} alt="Course" />
              </div>
              <div className="course-text">
                <h3>22. </h3>
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
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>23. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab3" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>24. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab1" className="course-card">
              <div className="course-image">
                <img src={imagecourse} alt="Course" />
              </div>
              <div className="course-text">
                <h3>25. </h3>
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
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>26. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab3" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>27. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab1" className="course-card">
              <div className="course-image">
                <img src={imagecourse} alt="Course" />
              </div>
              <div className="course-text">
                <h3>28. </h3>
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
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>29. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab3" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              <div className="course-text">
                <h3>30. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
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
