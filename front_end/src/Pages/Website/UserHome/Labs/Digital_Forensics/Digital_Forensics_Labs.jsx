import React from "react";
import Header from "../../Header/Header";
import mcqData from "./MCQCards";
import labImg from "../../assets/img/DigitalForensics/Email.jpg";
import Footer from "../../Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import { Card } from "../../Components/Card/Card";
import Go2TopBtn from "../../Components/Go2Top_Btn/Go2Top_Btn";
import LandingPractice from "../../Components/LandingPractice/LandingPractice";
export default function Digital_Forensics_labs() {
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
          <h2>Digital Forensics</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {/* lab1 */}
            <Card
              link={"/Digital_Forensics/Digital_Forensics_labs/lab1"}
              image={labImg}
              title={"Audio Forensics"}
              brief={
                "Analyze audio files to extract information and solve the case."
              }
              difficulty={"Easy"}
            />

            {mcqData.map((mcq) => (
              <Card
                link={mcq.link}
                image={mcq.image}
                alt={mcq.title}
                title={mcq.title}
                brief={mcq.description}
                difficulty={mcq.difficulty}
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
