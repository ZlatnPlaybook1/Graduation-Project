import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Idor_cover from "../../assets/img/IDOR/IDOR_Cover.jpg";
import { Card } from "../../Components/Card/Card";
import LandingPractice from "../../Components/PracticeLanding/PracticeLanding";

export default function InsecureDirectObjectReferenceLabs() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingPractice />
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
