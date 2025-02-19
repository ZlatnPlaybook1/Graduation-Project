import React from "react";
import Header from "../../Header/Header";
import mcqData from "./MCQCards";
import Footer from "../../Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import { Card } from "../../Components/Card/Card";
import Go2TopBtn from "../../Components/GoBack_Btn/GoBack_Btn";
import LandingPractice from "../../Components/LandingPractice/LandingPractice";
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
          <h2>Careers in Cyber MCQ Exams</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {mcqData.map((mcq, id) => (
              <Card
                title={mcq.title}
                description={mcq.description}
                difficulty={mcq.difficulty}
                image={mcq.image}
                link={mcq.link}
                key={mcq.id}
              />
            ))}
          </div>
        </div>
      </div>
      {/* End Course */}
      <Go2TopBtn />
      <Footer />
    </>
  );
}
