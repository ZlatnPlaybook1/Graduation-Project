import React from "react";
import "../Page_Styles/Lab.css";
import Header from "../../Header/Header";
import image from "../../assets//img/JWT attacks/card_image.png";
import Footer from "../../Footer/Footer";
import { Card } from "../../Components/Card/Card";

export default function JWTAttacks_lab() {
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
          <h2>Obfuscation Lab</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            <Card
              link={"/jwtattacks/jwtattacks_lab/lab1"}
              image={image}
              title={"JWT Unverified Signature"}
              brief={"This lab uses a JWT-based mechanism for handling sessions. Due to implementation flaws, the server doesn't verify the signature of any JWTs that it receives."}
              difficulty={"Easy"}
            />
            <Card
              link={"/jwtattacks/jwtattacks_lab/lab2"}
              image={image}
              title={"JWT  Flawed Signature Verification"}
              brief={"This lab uses a JWT-based mechanism for handling sessions. The server is insecurely configured to accept unsigned JWTs."}
              difficulty={"Intermediate"}
            />
            <Card
              link={"/jwtattacks/jwtattacks_lab/lab3"}
              image={image}
              title={"JWT  Weak Signing Key"}
              brief={"This lab uses a JWT-based mechanism for handling sessions. It uses an extremely weak secret key to both sign and verify tokens. This can be easily brute-forced using a wordlist of common secrets."}
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
