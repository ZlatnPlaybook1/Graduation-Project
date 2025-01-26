import React from "react";
import "./XSS.css";
import Header from "../../Header/Header";
import lab_Cover from "../../assets/img/Cross_Site_Scripting/labs_cover.jpg";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function XSS_lab() {
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <div class="landing">
        <div class="container">
          <div class="course-info">
            <div class="course-text">
              <h1>Practice</h1>
              <p class="brief">
                <i class="fa-solid fa-bullseye lab"></i> Reinforce what you're
                learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div class="course-icon">
              <div class="border">
                <div class="content">
                  <i class="fas fa-book-open lab"></i>
                  <p>Practice</p>
                  <i class="fas fa-bullseye lab"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing  */}
      {/* Start Courses  */}
      <div class="course">
        <div class="container">
          <h2>XSS Labs</h2>
          <p class="section-p">Test Your Hacking skills</p>
          <div class="row">
            {/* lab1 */}
            <Link to="/xss/xss_lab/first_lab" class="course-card">
              <div class="course-image">
                <img src={lab_Cover} alt="" />
              </div>
              <div class="course-text">
                <h3>Reflected XSS into HTML context</h3>
                <p>
                  This lab contains a{" "}
                  <span class="highlight">
                    simple reflected cross-site scripting vulnerability
                  </span>{" "}
                  in the search functionality. To solve the lab, perform a
                  cross-site scripting attack that calls the{" "}
                  <span class="highlight">alert function</span>.
                </p>
                <ul class="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div class="easy">
                <i class="fa-solid fa-signal lab"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab2 */}
            <Link to="/XSS/xss_lab/second_lab" class="course-card">
              <div class="course-image">
                <img src={lab_Cover} alt="" />
              </div>
              <div class="course-text">
                <h3>Stored XSS into HTML context</h3>
                <p>
                  This lab contains a{" "}
                  <span class="highlight">
                    stored cross-site scripting vulnerability
                  </span>{" "}
                  in the comment functionality. To solve this lab, submit a
                  comment that calls the{" "}
                  <span class="highlight">alert function</span> when the blog
                  post is viewed.
                </p>
                <ul class="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div class="easy">
                <i class="fa-solid fa-signal lab"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab3 */}
            <Link to="/XSS/xss_lab/third_lab" class="course-card">
              <div class="course-image">
                <img src={lab_Cover} alt="" />
              </div>
              <div class="course-text">
                <h3>DOM XSS</h3>
                <p>
                  This lab contains a{" "}
                  <span class="highlight">
                    DOM-based cross-site scripting vulnerability
                  </span>{" "}
                  in the search query tracking functionality. It uses the
                  JavaScript <span class="highlight">document.write</span>{" "}
                  function, which writes data out to the page. The{" "}
                  <span class="highlight">document.write</span> function is
                  called with data from{" "}
                  <span class="highlight">location.search</span>, which you can
                  control using the website URL. To solve this lab, perform a
                  cross-site scripting attack that calls the{" "}
                  <span class="highlight">alert function</span>.
                </p>
                <ul class="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div class="easy">
                <i class="fa-solid fa-signal lab"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab4 */}
            <Link to="/XSS/xss_lab/fourth_lab" class="course-card">
              <div class="course-image">
                <img src={lab_Cover} alt="" />
              </div>
              <div class="course-text">
                <h3>
                  Stored XSS in anchor <q>href</q>
                </h3>
                <p>
                  This lab contains a{" "}
                  <span class="highlight">
                    stored cross-site scripting vulnerability
                  </span>{" "}
                  in the comment functionality. To solve this lab, submit a
                  comment that calls the{" "}
                  <span class="highlight">alert function</span> when the comment
                  author name is clicked.
                </p>
                <ul class="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div class="easy">
                <i class="fa-solid fa-signal lab"></i>
                <p>Easy</p>
              </div>
            </Link>

            {/* lab7 */}
            {/* <Link to="/xss/xss_lab/seven_lab" class="course-card">
              <div class="course-image">
                <img src={lab_Cover} alt="" />
              </div>
              <div class="course-text">
                <h3>DOM XSS inside Selected Element</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul class="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div class="easy">
                <i class="fa-solid fa-signal lab"></i>
                <p>Easy</p>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
