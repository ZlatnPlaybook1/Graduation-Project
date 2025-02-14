import React from "react";
import Header from "../../Header/Header";
import "./Api_Hacking.css";
import labImg from "../../assets/img/Api_Hacking/lab.jpg";
import Banner from "../../Banner/Banner";
import Footer from "../../Footer/Footer";
import { Card } from "../../Card/Card";
export default function AC_Vuln_labs() {
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
          <h2>Api Hacking</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {/* lab1 */}
            <Card
              link={"/Api_Hacking/Api_Hacking_labs/lab1"}
              image={labImg}
              title={"MCQ Question Review"}
              brief={
                "These are multiple choice questions that are designed to be a review for the exam."
              }
              difficulty={"Easy"}
            />
            {/* lab2 */}
            <Card
              link={"/Api_Hacking/Api_Hacking_labs/lab2"}
              image={labImg}
              title={"Unprotected admin functionality with unpredictable URL"}
              brief={[
                "This lab has an unprotected admin panel. It's located at an unpredictable location, but the location is disclosed somewhere in the application. Solve the lab by accessing the admin panel, and using it to delete the user ",
                <mark>Carlos</mark>,
                ".",
              ]}
              difficulty={"Easy"}
            />
            {/* Lab3 */}
          </div>
        </div>
      </div>
      {/* End Course */}
      <Footer />
    </>
  );
}
