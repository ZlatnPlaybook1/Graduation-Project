import React from "react";
import "../Page_Styles/Lab.css";
import Header from "../../Header/Header";
import image from "../../assets/img/Cryptography/card_image.png";
import Footer from "../../Footer/Footer";
import { Card } from "../../Card/Card";

export default function CryptoGraphy_lab() {
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
          <h2>CryptoGraphy Lab</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            <Card
              link={"/cryptography/cryptography_lab/top-secret"}
              image={image}
              title={"Top Secret"}
              brief={
                "cryptography, a crucial skill for securing data and understanding encryption techniques in cybersecurity environments. 🚀"
              }
              difficulty={"Easy"}
              />
              <Card
                  link={"/cryptography/cryptography_lab/decode-the-image"}
                  image={image}
                  title={"Decode the Image"}
                  brief={
                    "cryptography, a crucial skill for securing data and understanding encryption techniques in cybersecurity environments. 🚀"
                  }
                  difficulty={"Easy"}
              />
              <Card
                  link={"/cryptography/cryptography_lab/corrupted"}
                  image={image}
                  title={"Corrupted"}
                  brief={
                    "cryptography, a crucial skill for securing data and understanding encryption techniques in cybersecurity environments. 🚀"
                  }
                  difficulty={"Easy"}
              />
              <Card
                  link={"/cryptography/cryptography_lab/hash-crack"}
                  image={image}
                  title={"Hash Crack"}
                  brief={
                    "cryptography, a crucial skill for securing data and understanding encryption techniques in cybersecurity environments. 🚀"
                  }
                  difficulty={"Easy"}
              />
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
