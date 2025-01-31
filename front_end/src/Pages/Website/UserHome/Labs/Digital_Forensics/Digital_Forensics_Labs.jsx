import React from "react";
import Header from "../../Header/Header";
import "./Digital_Forensics.css";
import mcqData from "./MCQCards";
import labImg from "../../assets/img/DigitalForensics/Email.jpg";
import Footer from "../../Footer/Footer";
import { Card } from "../../Card/Card";
export default function Digital_Forensics_labs() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <div className="landing">
        <div className="container">
          <div className="course-info">
            <div className="course-text">
              <h1>Practice</h1>
              <p className="brief">
                <i className="fa-solid fa-bullseye lab"></i>
                Reinforce what you're learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon">
              <div className="border">
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
      {/* End Landing */}

      {/* Start Course */}
      <div className="course">
        <div className="container">
          <h2>Digital Forensics</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {/* lab1 */}
            <Card
              link={"/Digital_Forensics/Digital_Forensics_labs/lab1"}
              image={labImg}
              title={"Audio Forensics"}
              brief={
                "Analyze audio files to extract information and solve the case."
              }
              difficulty={"Easy"}
            />

            {mcqData.map((mcq) => (
              <Card
                link={mcq.link}
                image={mcq.image}
                alt={mcq.title}
                title={mcq.title}
                brief={mcq.description}
                difficulty={mcq.difficulty}
              />
            ))}
          </div>
        </div>
      </div>
      {/* End Course */}
      <Footer />
    </>
  );
}
