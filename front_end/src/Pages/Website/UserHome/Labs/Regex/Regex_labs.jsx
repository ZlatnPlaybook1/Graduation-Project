import React from "react";
import Header from "../../Header/Header";
import labImg from "../../assets/img/Regex/lab.jpg";
import Footer from "../../Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import { Card } from "../../Components/Card/Card";
import Go2TopBtn from "../../Components/Go2Top_Btn/Go2Top_Btn";
import LandingPractice from "../../Components/PracticeLanding/PracticeLanding";
export default function Regex_labs() {
  return (
    <>
      <Banner />
      <Header />
      {/* Start Landing */}
      <LandingPractice />
      {/* End Landing */}

      {/* Start Course */}
      <div className="course">
        <div className="container">
          <h2>Regular Expressions Labs</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {/* Lab1 */}
            <Card
              link={"/Regex/Regex_labs/MCQReview"}
              image={labImg}
              title={"MCQ Question Review"}
              brief={
                "These are multiple choice questions that are designed to be a review for the exam."
              }
              difficulty={"Easy"}
            />

            {/* Lab2 */}
            <Card
              link={"/Regex/Regex_labs/CompleteReview"}
              image={labImg}
              title={"Complete Question Review"}
              brief={
                "These are Complete questions that are designed to be a review for the exam."
              }
              difficulty={"Easy"}
            />
          </div>
        </div>
      </div>
      {/* End Course */}
      <Go2TopBtn />
      <Footer />
    </>
  );
}
