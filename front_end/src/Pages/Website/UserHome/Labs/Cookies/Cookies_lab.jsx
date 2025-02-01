import React from "react";
import "../Page_Styles/Lab.css";
import Header from "../../Header/Header";
import image from "../../assets/img/cookies/Cookies_logo.png";
import Footer from "../../Footer/Footer";
import { Card } from "../../Card/Card";

export default function Cookies_lab() {
  return (
    <>
      <Header />
      {/* Start Landing  */}
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
          <h2>Cookies Lab</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            <Card
            link="/cookies/cookies_lab/first/login"
            image={image}
            title="Admin has the power"
            brief="try to login as admin"
            difficulty="Easy"
            />
            <Card
            link="/cookies/cookies_lab/second/login"
            image={image}
            title="Hashing"
            brief="try to login as admin"
            difficulty="Easy"
            />
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
