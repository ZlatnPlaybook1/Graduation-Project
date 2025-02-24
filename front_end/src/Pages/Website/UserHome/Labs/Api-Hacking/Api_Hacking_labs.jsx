import React from "react";
import Header from "../../Header/Header";
import labImg from "../../assets/img/Api_Hacking/lab.jpg";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Footer/Footer";
import { Card } from "../../Components/Card/Card";
import Go2TopBtn from "../../Components/Go2Top_Btn/Go2Top_Btn";
import LandingPractice from "../../Components/PracticeLanding/PracticeLanding";
export default function AC_Vuln_labs() {
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
          <h2>Api Hacking</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {/* lab1 */}
            <Card
              link={"/Api_Hacking/Api_Hacking_labs/lab1"}
              image={labImg}
              title={"MCQ Question Review"}
              brief={
                "These are multiple choice questions that are designed to be a review for the exam."
              }
              difficulty={"Easy"}
            />
            {/* lab2 */}
            <Card
              link={"/Api_Hacking/Api_Hacking_labs/lab2"}
              image={labImg}
              title={"Unprotected admin functionality with unpredictable URL"}
              brief={[
                "This lab has an unprotected admin panel. It's located at an unpredictable location, but the location is disclosed somewhere in the application. Solve the lab by accessing the admin panel, and using it to delete the user ",
                <mark>Carlos</mark>,
                ".",
              ]}
              difficulty={"Easy"}
            />
            {/* Lab3 */}
          </div>
        </div>
      </div>
      {/* End Course */}
      <Go2TopBtn />
      <Footer />
    </>
  );
}
