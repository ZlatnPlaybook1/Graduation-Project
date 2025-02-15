import React from "react";
import  "../Page_Styles/Lab.css";
import Header from "../../Header/Header";
import image from "../../assets//img/Server Side Template Injection/card_image.png";
import Footer from "../../Footer/Footer";
import { Card } from "../../Card/Card";

export default function SSTI_lab() {
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
          <h2>SSTI Lab</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            
          <Card
            link={"/SSTI/SSTI_lab2/store"}
            image={image}
            title={"SSTI Store Vulnerability"}
            brief={"This lab is vulnerable to server-side template injection due to the unsafe construction of an ERB template."}
            difficulty={"Intermediate"}
            />




            <Card
            link={"/SSTI/SSTI_lab/blog"}
            image={image}
            title={"Basic server-side template injection"}
            brief={"This lab is vulnerable to server-side template injection due to the way it unsafely uses a Tornado template."}
            difficulty={"Easy"}
            />
        
            
            {/* <Card
            link={""}
            image={image}
            title={"Vulnerable Flask Application"}
            brief={"Understanding Server-Side Template Injection (SSTI) in Flask/Jinja2 Applications"}
            difficulty={"Hard"}
            /> */}
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
