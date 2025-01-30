import React from "react";
import Header from "../../Header/Header";
import background from "../../assets/img/background.png";
import imagecourse from "../../assets/img/course_image.png";
import Footer from "../../Footer/Footer";
import "./CommandInjection.css";
import UseFaqSection from "../../UseFaqSection/UseFaqSection.jsx";
import LandingLab from "../../LandingLab/LandingLab.jsx";
export default function CommandInjection() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingLab
        background={background}
        imagecourse={imagecourse}
        courseTitle=" Command Injection"
        courseDescription="Discover how attackers exploit Command Injection vulnerabilities to execute arbitrary system commands, gain unauthorized access, and manipulate application behavior. Learn how security professionals detect and mitigate these attacks through input validation, parameterized commands, and least privilege enforcement. Master techniques to prevent command injection by sanitizing user inputs, restricting system calls, and implementing secure coding practices to protect applications from exploitation."
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
                  <span>Task 1</span>Description
                </dt>
                <dd className="fadeInUp Auth-faq-body">
                  <ul className="auth-issues-list">
                    <li className="auth-issue-item">
                      <span className="special-highlight">
                        Broken authentication
                      </span>{" "}
                      occurs when an application’s authentication mechanism is
                      improperly designed or implemented, allowing attackers to
                      bypass authentication or impersonate users. Common causes
                      include:
                    </li>
                    <li className="auth-issue-item">
                      <ul className="auth-causes-list">
                        <li className="auth-cause-item">
                          <span className="special-highlight">
                            Failure to enforce strong password policies.
                          </span>
                        </li>
                        <li className="auth-cause-item">
                          Session management flaws (e.g., session IDs exposed or
                          not invalidated after logout).
                        </li>
                        <li className="auth-cause-item">
                          Lack of multi-factor authentication (MFA).
                        </li>
                        <li className="auth-cause-item">
                          Insecure storage or transmission of credentials.
                        </li>
                        <li className="auth-cause-item">
                          Poor defense against automated attacks, like
                          credential stuffing or brute-force attacks.
                        </li>
                      </ul>
                    </li>
                    <li className="auth-issue-item">
                      These weaknesses can result in unauthorized access,
                      leading to account compromise, data theft, and
                      unauthorized actions.
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() =>
                  handleGoToLab("/Command_Injection/Command_Injection_labs")
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
