import React from "react";
import Header from "../../Header/Header";
import background from "../../assets/img/Insecure_Deserialization/Insecure_Photo_Background.jpg";
import imagecourse from "../../assets/img/Insecure_Deserialization/Icon_Insecure.png";
import Footer from "../../Footer/Footer";
import "./InsecureDeserialization.css";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import LandingLab from "../../Components/LandingLab/LandingLab.jsx";
export default function InsecureDeserialization() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingLab
        background={background}
        imagecourse={imagecourse}
        courseTitle="Insecure Deserialization"
        courseDescription="In this course, you’ll learn about Insecure Deserialization, a vulnerability where untrusted data is deserialized without proper validation, allowing attackers to manipulate data or execute harmful actions. The course covers the risks, how deserialization works, common attack techniques, and best practices for preventing these security issues."
        difficulty="Intermediate"
        duration="30 min"
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
                <dd className="fadeInUp Auth-faq-body">
                  <div className="insecure-deserialization-container">
                    <h2 className="insecure-deserialization-title">
                      Insecure Deserialization
                    </h2>
                    <p className="insecure-deserialization-description">
                      Insecure deserialization occurs when an application
                      deserializes untrusted data without proper validation,
                      allowing attackers to manipulate the serialized data to
                      execute harmful actions.
                    </p>

                    <div className="insecure-deserialization-how-it-works">
                      <h3>How It Works</h3>
                      <ul className="serialization-list">
                        <li>
                          <strong>Serialization:</strong> Converting objects
                          (e.g., user sessions, API tokens) into
                          storable/transmittable formats (JSON, XML, binary).
                        </li>
                        <li>
                          <strong>Insecure Deserialization:</strong> When an
                          application deserializes untrusted data without
                          validation, allowing attackers to:
                          <ul className="insecure-deserialization-attack-types">
                            <li>
                              Inject malicious objects (e.g., code execution
                              payloads).
                            </li>
                            <li>
                              Tamper with logic (e.g., changing user roles,
                              prices, or permissions).
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </dd>
                {/* Single FAQ Area */}
                <dt className="secure-wave fadeInUp secure-faq-header">
                  <span>Task 1</span>impact
                </dt>
                <dd className="fadeInUp Auth-faq-body">
                  <div className="react-impact-container">
                    <h4>Impact</h4>
                    <ul className="react-impact-list">
                      <li>
                        <strong>Remote Code Execution (RCE):</strong> Execute
                        arbitrary commands on the server.
                      </li>
                      <li>
                        <strong>Data Tampering:</strong> Modify serialized data
                        (e.g., change a user’s isAdmin: false to true).
                      </li>
                      <li>
                        <strong>Denial of Service (DoS):</strong> Crash the app
                        with malformed objects.
                      </li>
                      <li>
                        <strong>Authentication Bypass:</strong> Hijack sessions
                        or impersonate users.
                      </li>
                    </ul>
                  </div>
                </dd>
                {/* Single FAQ Area */}
                <dt className="secure-wave fadeInUp secure-faq-header">
                  <span>Task 1</span>Prevention
                </dt>
                <dd className="fadeInUp Auth-faq-body">
                  <div className="react-prevention-container">
                    <h4>Prevention</h4>
                    <ul className="react-prevention-list">
                      <li>
                        <strong>Use Secure Serialization Formats:</strong> Avoid
                        binary serialization and prefer JSON or XML with strict
                        validation.
                      </li>
                      <li>
                        <strong>Implement Integrity Checks:</strong> Use digital
                        signatures or hashing to verify serialized data.
                      </li>
                      <li>
                        <strong>
                          Restrict Deserialization to Trusted Sources:
                        </strong>{" "}
                        Never accept serialized objects from untrusted inputs.
                      </li>
                      <li>
                        <strong>Use Sandboxing:</strong> Limit the impact of
                        deserialized data by running it in a restricted
                        environment.
                      </li>
                      <li>
                        <strong>Disable Dangerous Features:</strong> If using
                        languages like Java or PHP, disable unsafe
                        deserialization methods.
                      </li>
                    </ul>
                  </div>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() =>
                  handleGoToLab(
                    "/Insecure_Deserialization/Insecure_Deserialization_Labs"
                  )
                }
                className="go-to"
              >
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
