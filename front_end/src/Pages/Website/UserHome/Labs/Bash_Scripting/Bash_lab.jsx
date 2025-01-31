import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import  "../Page_Styles/Lab.css";
import Header from "../../Header/Header";
import image from "../../assets/img/card_image.png";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function Bash_lab() {
    return (
    <>
      <Header />
      {/* Start Landing  */}
      <div className="landing">
        <div className="container">
            <div className="course-info">
                <div className="course-text">
                    <h1>Practice</h1>
                    <p className="brief"><i className="fa-solid fa-bullseye lab"></i> Reinforce what you're learning</p>
                    <p>Put your knowledge into practice with gamified cyber security challenges.</p>
                </div>
                <div className="course-icon">
                    <div className="border-icon">
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
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className="course">
        <div className="container">
            <h2>Bash Scripting Lab</h2>
            <p className="section-p">Test Your Hacking skills</p>
            <div className="row">
                <Link to="/bash-lab/bash-lab_lab/first/login" className="course-card">
                    <div className="course-image">
                        <img src={image} alt="" />
                    </div>
                    <div class="course-text">
                        <h3>Pre Security</h3>
                        <p>Before hacking something, you first need to understand the basics</p>
                        <ul class="circled-order">
                            <li>Cyber Security Basics</li>
                            <li>Networking Basics and Weaknesses</li>
                            <li>The Web And Common Attacks</li>
                            <li>Learn to Use The bash-lab OS</li>
                        </ul>
                    </div>
                    <div class="easy">
                        <i class="fa-solid fa-signal lab"></i>
                        <p>Easy</p>
                    </div>
                </Link>
                <Link to="/bash-lab/bash-lab_lab/second/login" class="course-card">
                    <div class="course-image">
                    <img src={image} alt="" />
                    </div>
                    <div class="course-text-bash-lab">
                        <h3>Pre Security</h3>
                        <p>Before hacking something, you first need to understand the basics</p>
                        <ul class="circled-order-bash-lab">
                            <li>Cyber Security Basics</li>
                            <li>Networking Basics and Weaknesses</li>
                            <li>The Web And Common Attacks</li>
                            <li>Learn to Use The bash-lab OS</li>
                        </ul>
                    </div>
                    <div class="easy-bash-lab">
                        <i class="fa-solid fa-signal lab-bash-lab"></i>
                        <p>Easy</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
