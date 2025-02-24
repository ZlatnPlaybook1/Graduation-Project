import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Auth_Photo from "../../assets/img/Condition_Race/Race Condition Background.png";
import { Card } from "../../Components/Card/Card";
import GoTop from "../../Components/Go2Top_Btn/Go2Top_Btn";
import LandingPractice from "../../Components/PracticeLanding/PracticeLanding";

export default function RaceConditionLabs() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingPractice />
      {/* End Landing */}
      {/* Start Course */}
      <div className="course">
        <div className="container">
          <h2>Race Condition Labs</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            {/* lab1 */}
            <Card
              link={"/Race_Condition/Race_Condition_Labs/Lab1"}
              image={Auth_Photo}
              title={"Race Condition in the registration form"}
              brief={
                "When ‘user’ isn’t enough—forge the cookie and become admin"
              }
              difficulty={"Easy"}
            />
            {/* lab2 */}
            <Card
              link={"/Race_Condition/Race_Condition_Labs/Lab2"}
              image={Auth_Photo}
              title={"Discount Code Aoolication in Shopping Cart"}
              brief={
                "A lab where cookies aren’t snacks… they’re keys to admin power."
              }
              difficulty={"Easy"}
            />
          </div>
        </div>
      </div>
      <GoTop />
      <Footer />
    </>
  );
}
