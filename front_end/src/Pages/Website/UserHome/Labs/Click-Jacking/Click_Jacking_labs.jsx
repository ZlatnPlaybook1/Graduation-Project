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
          <h2>Click Jacking</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {/* lab1 */}
            <Card
              link={"/Click_Jacking/Click_Jacking_labs/lab1"}
              image={labImg}
              title={"Basic clickjacking with CSRF token protection"}
              brief={
                "This lab contains login functionality and a delete account button that is protected by a CSRF token. A user will click on elements that display the word 'click' on a decoy website.To solve the lab, craft some HTML that frames the account page and fools the user into deleting their account. The lab is solved when the account is deleted.You can log in to your own account using the following credentials: <mark>wiener:peter</mark>"
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
