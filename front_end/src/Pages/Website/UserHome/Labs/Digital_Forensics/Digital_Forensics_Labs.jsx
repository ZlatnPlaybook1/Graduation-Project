import React from "react";
import Header from "../../Header/Header";
import mcqData from "./MCQCards";
import labImg from "../../assets/img/DigitalForensics/Email.jpg";
import Footer from "../../Footer/Footer";
import Banner from "../../Banner/Banner";
import { Card } from "../../Card/Card";
import Go2TopBtn from "../../Go2Top_Btn/Go2Top_Btn";
export default function Digital_Forensics_labs() {
  return (
    <>
      <Banner />
      <Header />
      {/* Start Landing */}
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
      <Go2TopBtn />
      <Footer />
    </>
  );
}
