import React from "react";
import Header from "../../Header/Header";
import background from "../../assets/img/Burp_Suit/Background_Burp_suit.jpg";
import imagecourse from "../../assets/img/Burp_Suit/Icon_Burp_Suit.png";
import Footer from "../../Footer/Footer";
import "../../Components/Topics CSS/topics.css";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import LandingLab from "../../Components/LandingLab/LandingLab.jsx";
import GoTop from "../../Components/Go2Top_Btn/Go2Top_Btn";

export default function BurpSuit() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingLab
        background={background}
        imagecourse={imagecourse}
        courseTitle="Burp Suit"
        courseDescription="In this course, you’ll learn about Insecure Deserialization, a vulnerability where untrusted data is deserialized without proper validation, allowing attackers to manipulate data or execute harmful actions. The course covers the risks, how deserialization works, common attack techniques, and best practices for preventing these security issues."
        difficulty="Intermediate"
        duration="45 min"
        onSaveRoom={() => console.log("Room Saved!")}
        onLike={() => console.log("Liked!")}
        onDislike={() => console.log("Disliked!")}
      />
      {/* End Landing */}
      <div className="Content">
        <div className="secure-container" ref={faqSectionRef}>
          <div className="content-row">
            <div className="content-section">
              <dl className="topics-text">
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Task 1</span>Definition
                </dt>
                <dd className="fadeInUp faq-body"></dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() => handleGoToLab("/Burp_Suit/Burp_Suit_Labs")}
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
