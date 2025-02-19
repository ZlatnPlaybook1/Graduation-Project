import React from "react";
import "../Page_Styles/Lab.css";
import Header from "../../Header/Header";
import image from "../../assets//img/Captcha Bypass/card_image.png";
import Footer from "../../Footer/Footer";
import { Card } from "../../Components/Card/Card";

export default function CaptchaBypass_lab() {
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
                <i className="fa-solid fa-bullseye"></i> Reinforce what you're
                learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon">
              <div className="border-icon">
                <div className="content">
                  <i className="fas fa-book-open"></i>
                  <p>Practice</p>
                  <i className="fas fa-bullseye"></i>
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
          <h2>Captcha Bypass Lab</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            <Card
              link={"/captchabypass/captchabypass_lab/lab1"}
              image={image}
              title={"Captcha Bypass"}
              brief={
                "Get rid of CAPTCHA with the help of ROBOTS! Remember, CAPTCHA is constantly being refreshed."
              }
              difficulty={"Easy"}
            />

            <Card
              link={"/captchabypass/captchabypass_lab/lab2"}
              image={image}
              title={"Broken Captcha"}
              brief={"Bypass captcha like a hacker, not manually."}
              difficulty={"Intermediate"}
            />

            <Card
              link={"/captchabypass/captchabypass_lab/lab3"}
              image={image}
              title={"Bypass reCAPTCHA v2"}
              brief={"Bypass captcha like a hacker"}
              difficulty={"Intermediate"}
            />
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
