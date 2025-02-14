import React from "react";
import Header from "../../Header/Header";
import mcqData from "./MCQCards";
import Footer from "../../Footer/Footer";
import { Card } from "../../Card/Card";
export default function Regex_labs() {
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
          <h2>Careers in Cyber MCQ Exams</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {mcqData.map((mcq, id) => (
              <Card
                title={mcq.title}
                description={mcq.description}
                difficulty={mcq.difficulty}
                image={mcq.image}
                link={mcq.link}
                key={mcq.id}
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
