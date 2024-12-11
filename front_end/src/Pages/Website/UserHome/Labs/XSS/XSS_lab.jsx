import React from "react";
import "./XSS_lab.css";
import Header from "../../Header/Header";
import lab_Cover from "../../assets/img/Cross_Site_Scripting/labs_cover.jpg";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function XSS_lab() {
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <div class="landing-XSS">
        <div class="container-XSS">
          <div class="course-info-XSS">
            <div class="course-text-XSS">
              <h1>Practice</h1>
              <p class="brief-XSS">
                <i class="fa-solid fa-bullseye lab-XSS"></i> Reinforce what
                you're learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div class="course-icon-XSS">
              <div class="border-XSS">
                <div class="content-XSS">
                  <i class="fas fa-book-open lab-XSS"></i>
                  <p>Practice</p>
                  <i class="fas fa-bullseye lab-XSS"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing  */}
      {/* Start Courses  */}
      <div class="course-XSS">
        <div class="container-XSS">
          <h2>XSS Labs</h2>
          <p class="section-p-XSS">Test Your Hacking skills</p>
          <div class="row-XSS">
            {/* lab1 */}
            <Link to="/xss/xss_lab/first_lab" class="course-card-XSS">
              <div class="course-image-XSS">
                <img src={lab_Cover} alt="" />
              </div>
              <div class="course-text-XSS">
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
                <ul class="circled-order-XSS">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div class="easy-XSS">
                <i class="fa-solid fa-signal lab-XSS"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab2 */}
            <Link to="/XSS/xss_lab/second_lab" class="course-card-XSS">
              <div class="course-image-XSS">
                <img src={lab_Cover} alt="" />
              </div>
              <div class="course-text-XSS">
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
                <ul class="circled-order-XSS">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div class="easy-XSS">
                <i class="fa-solid fa-signal lab-XSS"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab3 */}
            <Link to="/XSS/xss_lab/third_lab" class="course-card-XSS">
              <div class="course-image-XSS">
                <img src={lab_Cover} alt="" />
              </div>
              <div class="course-text-XSS">
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
                <ul class="circled-order-XSS">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div class="easy-XSS">
                <i class="fa-solid fa-signal lab-XSS"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab4 */}
            <Link to="/XSS/xss_lab/fourth_lab" class="course-card-XSS">
              <div class="course-image-XSS">
                <img src={lab_Cover} alt="" />
              </div>
              <div class="course-text-XSS">
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
                <ul class="circled-order-XSS">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div class="easy-XSS">
                <i class="fa-solid fa-signal lab-XSS"></i>
                <p>Easy</p>
              </div>
            </Link>

            {/* lab7 */}
            {/* <Link to="/xss/xss_lab/seven_lab" class="course-card-XSS">
              <div class="course-image-XSS">
                <img src={lab_Cover} alt="" />
              </div>
              <div class="course-text-XSS">
                <h3>DOM XSS inside Selected Element</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul class="circled-order-XSS">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div class="easy-XSS">
                <i class="fa-solid fa-signal lab-XSS"></i>
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
