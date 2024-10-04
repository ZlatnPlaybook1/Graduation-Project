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
              {/* topic1 */}
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
              {/* topic2 */}
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
              {/* topic3 */}
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
              {/* topic4 */}
              <div className="course-text">
                <h3>Cross-site request forgery (CSRF)</h3>
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
              {/* topic5 */}
              <div className="course-text">
                <h3>Cross-origin resource sharing (CORS)</h3>
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
              {/* topic6 */}
              <div className="course-text">
                <h3>Linux Fundamentals</h3>
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
              {/* topic 7 */}
              <div className="course-text">
                <h3>Bash Scripting</h3>
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
              {/* topic 8 */}
              <div className="course-text">
                <h3>Authentication</h3>
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
              {/* topic 9 */}
              <div className="course-text">
                <h3>Regular expressions</h3>
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
              {/* topic 10 */}
              <div className="course-text">
                <h3>Access control vulnerabilities</h3>
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
              {/* topic 11 */}
              <div className="course-text">
                <h3>Cryptography</h3>
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
              {/* topic 12 */}
              <div className="course-text">
                <h3>Obfuscation</h3>
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
              {/* topic 13 */}
              <div className="course-text">
                <h3>Business logic vulnerabilities</h3>
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
              {/* topic 14 */}
              <div className="course-text">
                <h3>XML external entity (XXE) injection</h3>
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
              {/* topic 15 */}
              <div className="course-text">
                <h3>Insecure Direct Object Reference (IDOR)</h3>
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
              {/* topic 16 */}
              <div className="course-text">
                <h3>Information disclosure</h3>
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
              {/* topic 17 */}
              <div className="course-text">
                <h3>Burp Suite </h3>
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
              {/* topic 18 */}
              <div className="course-text">
                <h3>wireshark</h3>
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
              {/* topic 19 */}
              <div className="course-text">
                <h3>Audio Forensics</h3>
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
              {/* topic 20 */}
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
              {/* topic 21 */}
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
              {/* topic 22 */}
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
              {/* topic 23 */}
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
              {/* topic 24 */}
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
              {/* topic 25 */}
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
              {/* topic 26 */}
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
              {/* topic 27 */}
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
              {/* topic 28 */}
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
              {/* topic 29 */}
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
              {/* topic 30 */}
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
