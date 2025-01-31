import React from "react";
import "../Page_Styles/Lab.css";
import Header from "../../Header/Header";
import image from "../../assets//img/Obfuscation/card_image.png";
import Footer from "../../Footer/Footer";
import { Card } from "../../Card/Card";

export default function WireShark_lab() {
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
          <h2>Wire Shark Lab</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            <Card
            link={"/wireshark/wireshark_lab/arp-trick"}
            image={image}
            title={"ARP Trick"}
            brief={"Master the basics of obfuscation, a powerful technique for securing code and protecting intellectual property in cybersecurity environments"}
            difficulty={"Easy"}
            />
            <Card
            link={"/wireshark/wireshark_lab/tcp-intrusion"}
            image={image}
            title={"TCP Intrusion"}
            brief={"Master the basics of obfuscation, a powerful technique for securing code and protecting intellectual property in cybersecurity environments"}
            difficulty={"Intermediate"}
            />
            <Card
            link={"/wireshark/wireshark_lab/stolen-flag"}
            image={image}
            title={"Stolen Flag"}
            brief={"Master the basics of obfuscation, a powerful technique for securing code and protecting intellectual property in cybersecurity environments"}
            difficulty={"Hard"}
            />
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
