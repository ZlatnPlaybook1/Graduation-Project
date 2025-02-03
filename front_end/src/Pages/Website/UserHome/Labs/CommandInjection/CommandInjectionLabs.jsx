import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Auth_Photo from "../../assets/img/Command Injection/command-injection-labs.png";
import { Card } from "../../Card/Card";
export default function CommandInjectionLabs() {
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
      {/* Start Course */}
      <div className="course">
        <div className="container">
          <h2>Command Injection Labs</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            {/* lab1 */}
            <Card
              link={"/Command_Injection/Command_Injection_labs/lab1"}
              image={Auth_Photo}
              title={"Pingject"}
              brief={"Try to execute a forbidden command."}
              difficulty={"Easy"}
            />
            {/* lab3 */}
            <Card
              link={"/Command_Injection/Command_Injection_labs/lab3"}
              image={Auth_Photo}
              title={"Blacklist Breakout"}
              brief={"Find a way to bypass the blacklist."}
              difficulty={"Easy"}
            />
            {/* lab2 */}
            <Card
              link={"/Command_Injection/Command_Injection_labs/lab2"}
              image={Auth_Photo}
              title={"URLject"}
              brief={"Hack the Address Bar"}
              difficulty={"Easy"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
