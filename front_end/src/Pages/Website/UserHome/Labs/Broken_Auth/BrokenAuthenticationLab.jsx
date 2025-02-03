import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Auth_Photo from "../../assets/img/Broken Authentication/Auth_Icon.png";
import { Card } from "../../Card/Card";
export default function BrokenAuthenticationLab() {
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
          <h2>Broken Authentication Labs</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            {/* lab1 */}
            <Card
              link={"/broken-auth/Broken_Authentication_Lab/lab1"}
              image={Auth_Photo}
              title={"Brute Force 1"}
              brief={"Find the password of the admin"}
              difficulty={"Easy"}
            />
            {/* lab2 */}
            <Card
              link={"/broken-auth/Broken_Authentication_Lab/lab2"}
              image={Auth_Photo}
              title={"Brute Force 2"}
              brief={
                "Developers forgot to add exit function when redirecting. Good luck!"
              }
              difficulty={"Easy"}
            />
            {/* lab3 */}
            <Card
              link={"/broken-auth/Broken_Authentication_Lab/lab3"}
              image={Auth_Photo}
              title={"No Redirect"}
              brief={
                "Developers forgot to add exit function when redirecting. Good luck!"
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
