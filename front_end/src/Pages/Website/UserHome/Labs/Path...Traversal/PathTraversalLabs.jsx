import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Auth_Photo from "../../assets/img/Path__Traversal/Photo_Labs_Path_Traversal.png";
import { Card } from "../../Components/Card/Card";
export default function PathTraversalLabs() {
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
                <i className="fa-solid fa-bullseye lab"></i> Reinforce what
                you're learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon">
              <div className="border-icon">
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
      <div className="course">
        <div className="container">
          <h2>Path Traversal Labs</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            {/* lab1 */}
            <Card
              link={"/Path__Traversal/Path_Traversal_Labs/lab1"}
              image={Auth_Photo}
              title={"Path to Passwd"}
              brief={"Try to reach /etc/passwd "}
              difficulty={"Easy"}
            />
            {/* lab2 */}
            <Card
              link={"/Path__Traversal/Path_Traversal_Labs/lab2"}
              image={Auth_Photo}
              title={"Path Traversal MCQ 1"}
              brief={
                "Answer the questions to test your knowledge on path traversal vulnerabilities."
              }
              difficulty={"Easy"}
            />
            {/* lab3 */}
            <Card
              link={"/Path__Traversal/Path_Traversal_Labs/lab3"}
              image={Auth_Photo}
              title={"Path Traversal MCQ 2"}
              brief={
                "Answer the questions to test your knowledge on path traversal vulnerabilities."
              }
              difficulty={"Easy"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
