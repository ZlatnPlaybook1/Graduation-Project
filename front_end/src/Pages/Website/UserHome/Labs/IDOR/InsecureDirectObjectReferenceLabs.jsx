import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Idor_cover from "../../assets/img/IDOR/IDOR_Cover.jpg";
import { Card } from "../../Components/Card/Card";
export default function InsecureDirectObjectReferenceLabs() {
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
      {/* Start Courses */}
      <div className="course">
        <div className="container">
          <h2>Insecure Direct Object Reference (IDOR) Labs</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            {/* lab1 */}
            <Card
              link={
                "/Insecure_Direct_Object_Reference(IDOR)/Insecure_Direct_Object_Reference(IDOR)Labs/lab1"
              }
              image={Idor_cover}
              title={"Invoices"}
              brief={"Gain unauthorized access to other users' invoices"}
              difficulty={"Easy"}
            />
            {/* lab2 */}
            <Card
              link={
                "/Insecure_Direct_Object_Reference(IDOR)/Insecure_Direct_Object_Reference(IDOR)Labs/lab2"
              }
              image={Idor_cover}
              title={"Ticket Sales"}
              brief={"Buy tickets for less than the regular price"}
              difficulty={"Easy"}
            />
            {/* lab3 */}
            <Card
              link={
                "/Insecure_Direct_Object_Reference(IDOR)/Insecure_Direct_Object_Reference(IDOR)Labs/lab3"
              }
              image={Idor_cover}
              title={"Money Transfer"}
              brief={
                "Transfer money from another user's account to your own account without any permission"
              }
              difficulty={"Easy"}
            />
          </div>
        </div>
      </div>

      {/* End Courses */}
      <Footer />
    </>
  );
}
