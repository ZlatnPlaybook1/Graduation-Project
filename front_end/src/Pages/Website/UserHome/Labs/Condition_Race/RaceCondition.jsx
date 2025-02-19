import React from "react";
import Header from "../../Header/Header";
import background from "../../assets/img/Condition_Race/Race Condition back.jpg";
import imagecourse from "../../assets/img/Condition_Race/race condition icon.jpg";
import Footer from "../../Footer/Footer";
import "./RaceCondition.css";
import UseFaqSection from "../../UseFaqSection/UseFaqSection.jsx";
import LandingLab from "../../Components/LandingLab/LandingLab.jsx";
import GoTop from "../../Components/Go2Top_Btn/Go2Top_Btn";

export default function RaceCondition() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingLab
        background={background}
        imagecourse={imagecourse}
        courseTitle="Race Condition"
        courseDescription="In this course, you’ll learn about Insecure Deserialization, a vulnerability where untrusted data is deserialized without proper validation, allowing attackers to manipulate data or execute harmful actions. The course covers the risks, how deserialization works, common attack techniques, and best practices for preventing these security issues."
        difficulty="Intermediate"
        duration="45 min"
        onSaveRoom={() => console.log("Room Saved!")}
        onLike={() => console.log("Liked!")}
        onDislike={() => console.log("Disliked!")}
      />
      {/* End Landing */}
      <div className="SecureUploadContent">
        <div className="secure-container" ref={faqSectionRef}>
          <div className="secure-row">
            <div className="secure-faq-section">
              <dl className="secure-section-text">
                {/* Single FAQ Area */}
                <dt className="secure-wave fadeInUp secure-faq-header">
                  <span>Task 1</span>Definition
                </dt>
                <dd className="fadeInUp Auth-faq-body"></dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() =>
                  handleGoToLab("/Race_Condition/Race_Condition_Labs")
                }
                className="go-to"
              >
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      <GoTop />
      <Footer />
    </>
  );
}
