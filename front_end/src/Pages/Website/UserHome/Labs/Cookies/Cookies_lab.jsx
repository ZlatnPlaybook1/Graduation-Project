import React from "react";
import "../Page_Styles/Lab.css";
import Header from "../../Header/Header";
import image from "../../assets/img/cookies/Cookies_logo.png";
import Footer from "../../Footer/Footer";
import { Card } from "../../Components/Card/Card";
import LandingPractice from "../../Components/PracticeLanding/PracticeLanding";


export default function Cookies_lab() {
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <LandingPractice/>
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className="course">
        <div className="container">
          <h2>Cookies Lab</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            <Card
              link="/cookies/cookies_lab/first/login"
              image={image}
              title="Admin has the power"
              brief="try to login as admin"
              difficulty="Easy"
            />
            <Card
              link="/cookies/cookies_lab/second/login"
              image={image}
              title="Hashing"
              brief="try to login as admin"
              difficulty="Easy"
            />
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
