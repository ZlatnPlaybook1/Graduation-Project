import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Auth_Photo from "../../assets/img/Burp_Suit/Labs-Burp-Suit.jpg";
import { Card } from "../../Card/Card";
export default function BurpSuitLabs() {
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
          <h2>Burp Suit Labs</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            {/* lab1 */}
            <Card
              link={"/Burp_Suit/Burp_Suit_Labs/lab1"}
              image={Auth_Photo}
              title={"Bake Your Own Cookies"}
              brief={
                "When ‘user’ isn’t enough—forge the cookie and become admin"
              }
              difficulty={"Easy"}
            />
            {/* lab2 */}
            <Card
              link={"/Burp_Suit/Burp_Suit_Labs/lab2"}
              image={Auth_Photo}
              title={"Cookie Cracking Cascade"}
              brief={
                "A lab where cookies aren’t snacks… they’re keys to admin power."
              }
              difficulty={"Easy"}
            />
            {/* lab3 */}
            <Card
              link={"/Burp_Suit/Burp_Suit_Labs/lab3"}
              image={Auth_Photo}
              title={"Cookie Cracking Cascade"}
              brief={
                "A lab where cookies aren’t snacks… they’re keys to admin power."
              }
              difficulty={"Easy"}
            />
            {/* lab4 */}
            <Card
              link={"/Burp_Suit/Burp_Suit_Labs/lab4"}
              image={Auth_Photo}
              title={"Cookie Cracking Cascade"}
              brief={
                "A lab where cookies aren’t snacks… they’re keys to admin power."
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
