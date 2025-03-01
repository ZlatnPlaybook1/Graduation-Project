import React from "react";
import Header from "../../Header/Header";
import background from "../../assets/img/Server Side Template Injection/baner_lap.png";
import imagecourse from "../../assets/img/Server Side Template Injection/course_image.png";
import Footer from "../../Footer/Footer";
import "../../Components/Topics CSS/topics.css";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import CourseLanding from "../../Components/CourseLanding/CourseLanding.jsx";

export default function SSRF() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <CourseLanding
        background={background}
        imagecourse={imagecourse}
        courseTitle="Server Side Request Forgery (SSRF)"
        courseDescription="Server Side Request Forgery (SSRF) Description."
        difficulty="Intermediate"
        duration="30 min"
        onSaveRoom={() => console.log("Room Saved!")}
        onLike={() => console.log("Liked!")}
        onDislike={() => console.log("Disliked!")}
      />
      {/* End Landing  */}
      {/* Start Course Content  */}
      <div className="Content">
        <div className="secure-container" ref={faqSectionRef}>
          <div className="content-row">
            <div className="content-section">
              <dl className="topics-text">
                {/* Single FAQ Area  */}
                <dt className="fadeInUp faq-header">
                  <span>Step 1</span> Introduction
                </dt>
                <dd className="fadeInUp faq-body" id="border-left"></dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() => handleGoToLab("/ssrf/ssrf_lab")}
                className="go-to"
              >
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
