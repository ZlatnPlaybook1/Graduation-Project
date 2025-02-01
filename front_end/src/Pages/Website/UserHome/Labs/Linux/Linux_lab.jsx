import React, { useEffect } from "react";
import "../Page_Styles/Lab.css";
import Header from "../../Header/Header";
import image from "../../assets/img/linux/linux_logo.png";
import Footer from "../../Footer/Footer";
import { Card } from "../../Card/Card";

export default function Linux_lab() {
  useEffect(() => {
    document.title = "Linux Lab";
  }, []);
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
          <h2>Linux Lab</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            <Card
              link="/linux/linux_lab/patient"
              image={image}
              title="be Patient"
              brief="Try to Capture the Flag"
              difficulty={"Easy"}
            />
            <Card
              link="/linux/linux_lab/power-of-command"
              image={image}
              title="Power Of Command"
              brief="Try to Capture the Flag"
              difficulty={"Easy"}
            />
            <Card
              link="/linux/linux_lab/welcome"
              image={image}
              title="Welcome"
              brief="Try to Capture the Flag"
              difficulty={"Easy"}
            />
            <Card
              link="/linux/linux_lab/test-yourself"
              image={image}
              title="Test YourSelf"
              brief="Try to Capture the Flag"
              difficulty={"Easy"}
            />
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
