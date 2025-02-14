import React from "react";
import Header from "../../Header/Header";
import "./BL_Vuln.css";
import labImg from "../../assets/img/BLV/lab1.jpeg";

import Footer from "../../Footer/Footer";
import { Card } from "../../Card/Card";
export default function BL_Vuln_labs() {
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
          <h2>Business logic vulnerabilities Labs</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {/* lab1 */}
            <Card
              link={"/BL-Vuln/BL_Vuln_labs/first_lab"}
              image={labImg}
              title={"Excessive trust in client-side controls"}
              brief={[
                "This lab has an issue with its client-side controls that allows you to change the price of items in the store. To solve the lab, buy a 'Lightweight l33t leather jacket'. You can log in to your own account using the following credentials: ",
              ]}
              difficulty={"Easy"}
            />

            {/* lab2 */}
            <Card
              link={"/BL-Vuln/BL_Vuln_labs/second_lab"}
              image={labImg}
              title={"High-level logic vulnerability"}
              brief={[
                "This lab has a logic flaw in its purchasing workflow that allows you to buy items for free. To solve the lab, buy a 'Lightweight l33t leather jacket'. You can log in to your own account using the following credentials: ",
              ]}
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
