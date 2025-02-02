import React from "react";
import Header from "../../Header/Header";
import "./Regex.css";
import labImg from "../../assets/img/Regex/lab.jpg";

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
          <h2>Regular Expressions Labs</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {/* Lab1 */}
            <Card
              link={"/Regex/Regex_labs/MCQReview"}
              image={labImg}
              title={"MCQ Question Review"}
              brief={
                "These are multiple choice questions that are designed to be a review for the exam."
              }
              difficulty={"Easy"}
            />

            {/* Lab2 */}
            <Card
              link={"/Regex/Regex_labs/CompleteReview"}
              image={labImg}
              title={"Complete Question Review"}
              brief={
                "These are Complete questions that are designed to be a review for the exam."
              }
              difficulty={"Easy"}
            />
          </div>
        </div>
      </div>
      {/* End Course */}
      <Footer />
    </>
  );
}
