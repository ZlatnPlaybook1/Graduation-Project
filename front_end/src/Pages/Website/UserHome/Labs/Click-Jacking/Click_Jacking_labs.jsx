import React from "react";
import Header from "../../Header/Header";
import "./Click_Jacking.css";
import labImg from "../../assets/img/ACV/lab.jpeg";

import Footer from "../../Footer/Footer";
import { Card } from "../../Card/Card";
export default function Click_Jacking_Labs() {
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
          <h2>Api Hacking</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {/* lab1 */}
            <Card
              link={"/Click_Jacking/Click_Jacking_labs/lab1"}
              image={labImg}
              title={"vulnerability allowing login bypass"}
              brief={
                "This lab has an unprotected admin panel. Solve the lab by deleting the user carlos."
              }
              difficulty={"Easy"}
            />
            {/* lab2 */}
            <Card
            link={"/Click_Jacking/Click_Jacking_labs/lab2"}
            image={labImg}
            title={"Unprotected admin functionality with unpredictable URL"}
            brief={
              "This lab has an unprotected admin panel. It's located at an unpredictable location, but the location is disclosed somewhere in the application. Solve the lab by accessing the admin panel, and using it to delete the user Carlos."
            }
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
