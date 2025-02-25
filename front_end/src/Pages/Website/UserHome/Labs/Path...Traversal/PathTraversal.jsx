import React from "react";
import Header from "../../Header/Header";
import background from "../../assets/img/Path__Traversal/what-is-path-traversal-attack.png";
import imagecourse from "../../assets/img/Path__Traversal/Directory_Traversal.png";
import Footer from "../../Footer/Footer";
import "../../Components/Topics CSS/topics.css";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import LandingLab from "../../Components/LandingLab/LandingLab.jsx";
export default function PathTraversal() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingLab
        background={background}
        imagecourse={imagecourse}
        courseTitle="Path Traversal"
        courseDescription="Learn how attackers exploit path traversal vulnerabilities to access restricted files and directories. Understand the risks, detection techniques, and mitigation strategies, including input validation, secure file handling, and access controls to prevent unauthorized access."
        difficulty="Intermediate"
        duration="30 min"
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
                <dd className="fadeInUp faq-body">
                  <ul className="security-vuln-list">
                    <li className="security-vuln-item">
                      <span className="highlighted-text">
                        Path traversal (or directory traversal)
                      </span>
                      is a security vulnerability that occurs when an attacker
                      manipulates file paths in a web application. This
                      manipulation allows the attacker to access files and
                      directories outside the intended directory. For example,
                      by using sequences like <code>../</code> (dot-dot-slash),
                      an attacker might navigate to sensitive areas of the
                      server's file system.
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Task 2</span>Cause
                </dt>
                <dd className="fadeInUp faq-body">
                  <div className="path-traversal-info">
                    <p className="path-traversal-text">
                      This vulnerability typically occurs because of
                      <span className="highlight-word">
                        improper input validation
                      </span>
                      . When a web application accepts user input (such as a{" "}
                      <span className="highlight-word">file name</span> or a{" "}
                      <span className="highlight-word">path</span>) without
                      properly checking or sanitizing it, an attacker can
                      include
                      <span className="danger-word">
                        malicious characters
                      </span>{" "}
                      or sequences. These sequences trick the application into
                      navigating to{" "}
                      <span className="highlight-word">
                        unauthorized directories
                      </span>
                      . Failing to use{" "}
                      <span className="danger-word">secure functions</span> that
                      correctly handle file paths increases this risk.
                    </p>
                  </div>
                </dd>
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Task 3</span>Impact
                </dt>
                <dd className="fadeInUp faq-body">
                  <div className="vulnerability-details">
                    <p className="vulnerability-text">
                      This vulnerability typically occurs because of
                      <span className="highlight">
                        improper input validation
                      </span>
                      . When a web application accepts user input (such as a{" "}
                      <span className="highlight">file name</span> or a{" "}
                      <span className="highlight">path</span>) without properly
                      checking or sanitizing it, an attacker can inject
                      <span className="danger">malicious characters</span> or
                      sequences. These sequences trick the application into
                      navigating to{" "}
                      <span className="highlight">
                        unauthorized directories
                      </span>
                      , exposing <span className="danger">sensitive files</span>
                      . Failing to use{" "}
                      <span className="important">secure functions</span>
                      that correctly handle file paths significantly increases
                      this risk.
                    </p>
                  </div>
                </dd>
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Task 4</span>Prevention
                </dt>
                <dd className="fadeInUp faq-body">
                  <div className="security-section">
                    <h2 className="security-heading">
                      Preventing Path Traversal Vulnerabilities
                    </h2>
                    <ul className="security-list">
                      <li className="security-item">
                        <span className="security-highlight">
                          Validate and sanitize all user inputs:
                        </span>
                        Ensure inputs do not contain unexpected characters or
                        patterns.
                        <span className="security-important">
                          Regular expressions
                        </span>{" "}
                        or built-in validation libraries can help.
                      </li>
                      <li className="security-item">
                        <span className="security-highlight">
                          Use secure functions for file path management:
                        </span>
                        Many programming languages offer functions to safely
                        handle and normalize file paths. These functions can
                        resolve{" "}
                        <span className="security-danger">relative paths</span>{" "}
                        and prevent traversal beyond allowed directories.
                      </li>
                      <li className="security-item">
                        <span className="security-highlight">
                          Implement access controls:
                        </span>
                        Even if a path is manipulated, proper access control
                        mechanisms prevent
                        <span className="security-danger">
                          unauthorized file access
                        </span>
                        .
                      </li>
                      <li className="security-item">
                        <span className="security-highlight">
                          Maintain a whitelist:
                        </span>
                        Instead of allowing any file path provided by the user,
                        use a predefined{" "}
                        <span className="security-important">
                          list of allowable file names
                        </span>{" "}
                        or directories.
                      </li>
                    </ul>
                  </div>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() =>
                  handleGoToLab("/Path__Traversal/Path_Traversal_Labs")
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
