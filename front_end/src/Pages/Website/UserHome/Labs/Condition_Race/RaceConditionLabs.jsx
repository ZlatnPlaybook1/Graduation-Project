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
              title={"Race Attack: Multi-Accounts, One Email"}
              brief={
                "Exploit a race condition to create multiple accounts using the same email. Bypass validation, break logic, and understand why timing is critical in security."
              }
              difficulty={"Easy"}
            />
            {/* lab2 */}
            <Card
              link={"/Race_Condition/Race_Condition_Labs/Lab2"}
              image={Auth_Photo}
              title={"Race Attack: One Coupon, Infinite Uses"}
              brief={
                "Exploit a race condition to reuse a single coupon multiple times. Break payment logic, drain resources, and understand why atomicity is crucial."
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
