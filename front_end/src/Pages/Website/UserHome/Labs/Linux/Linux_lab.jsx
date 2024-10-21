import React, { useEffect } from "react";
import "./Linux_lab.css";
import Header from "../../Header/Header";
import image from "../../assets/img/card_image.png";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function Linux_lab() {
  useEffect(() => {
    document.title = "Linux Lab";
  }, []);
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <div className="landing-Linux-lab">
        <div className="container-Linux-lab">
          <div className="course-info-Linux-lab">
            <div className="course-text-Linux-lab">
              <h1>Practice</h1>
              <p className="brief-Linux-lab">
                <i className="fa-solid fa-bullseye lab-Linux-lab"></i> Reinforce
                what you're learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon-Linux-lab">
              <div className="border-Linux-lab">
                <div className="content-Linux-lab">
                  <i className="fas fa-book-open lab-Linux-lab"></i>
                  <p>Practice</p>
                  <i className="fas fa-bullseye lab-Linux-lab"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className="course-Linux-lab">
        <div className="container-Linux-lab">
          <h2>Linux Lab</h2>
          <p className="section-p-Linux-lab">Test Your Hacking skills</p>
          <div className="row-Linux-lab">
            <Link
              to="/linux/linux_lab/patient"
              className="course-card-Linux-lab"
            >
              <div className="course-image-Linux-lab">
                <img src={image} alt="" />
              </div>
              <div className="course-text-Linux-lab">
                <h3>Patient</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order-Linux-lab">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux-lab OS</li>
                </ul>
              </div>
              <div className="easy-Linux-lab">
                <i className="fa-solid fa-signal lab-Linux-lab"></i>
                <p>Easy</p>
              </div>
            </Link>
            <Link
              to="/linux/linux_lab/power-of-command"
              className="course-card-Linux-lab"
            >
              <div className="course-image-Linux-lab">
                <img src={image} alt="" />
              </div>
              <div className="course-text-Linux-lab">
                <h3>Power Of Command</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order-Linux-lab">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux-lab OS</li>
                </ul>
              </div>
              <div className="easy-Linux-lab">
                <i className="fa-solid fa-signal lab-Linux-lab"></i>
                <p>Easy</p>
              </div>
            </Link>
            <Link
              to="/linux/linux_lab/welcome"
              className="course-card-Linux-lab"
            >
              <div className="course-image-Linux-lab">
                <img src={image} alt="" />
              </div>
              <div className="course-text-Linux-lab">
                <h3>Welcome</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order-Linux-lab">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux-lab OS</li>
                </ul>
              </div>
              <div className="easy-Linux-lab">
                <i className="fa-solid fa-signal lab-Linux-lab"></i>
                <p>Easy</p>
              </div>
            </Link>
            <Link
              to="/linux/linux_lab/test-yourself"
              className="course-card-Linux-lab"
            >
              <div className="course-image-Linux-lab">
                <img src={image} alt="" />
              </div>
              <div className="course-text-Linux-lab">
                <h3>Test YourSelf</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order-Linux-lab">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux-lab OS</li>
                </ul>
              </div>
              <div className="easy-Linux-lab">
                <i className="fa-solid fa-signal lab-Linux-lab"></i>
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
