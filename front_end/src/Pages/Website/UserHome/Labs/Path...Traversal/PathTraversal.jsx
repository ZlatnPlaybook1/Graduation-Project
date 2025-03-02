import React from "react";
import Header from "../../Header/Header";
import background from "../../assets/img/Path__Traversal/what-is-path-traversal-attack.png";
import courseImage from "../../assets/img/Path__Traversal/Directory_Traversal.png";
import Footer from "../../Footer/Footer";
import "../../Components/Topics CSS/topics.css";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import CourseLanding from "../../Components/CourseLanding/CourseLanding.jsx";
export default function PathTraversal() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Header />
      {/* Start Landing */}
      <CourseLanding
        background={background}
        courseImage={courseImage}
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
                {/* Single FAQ Area - Decoder */}
                <dt className="fadeInUp faq-header">
                  <span className="topic-number"> Topic 1</span> Testing for directory traversal
                </dt>
                <dd className="fadeInUp faq-body">
                  <div className="faq-content">
                    <p>
                      Directory traversal vulnerabilities (also known as file path vulnerabilities) allow an attacker to read arbitrary files on the server that is running an application. This might include application code and data, credentials for back-end systems, and sensitive operating system files.
                    </p><p>
                      You can use Burp to test for these vulnerabilities:
                    </p><ul>
                      <li><label class="label-edition is-professional">Professional</label> Use Burp Scanner to automatically flag potential directory traversal vulnerabilities.</li>
                      <li>Use Burp Intruder to insert a list of directory traversal fuzz strings into a request. The strings may enable you to read arbitrary files on the server.</li>
                    </ul><h2 id="steps">Steps</h2><p>
                      You can follow this process using the <a href="http://localhost:3000/Path__Traversal/Path_Traversal_Labs/lab1">File path traversal, traversal sequences stripped with superfluous
                        URL-decode</a> lab from our Web Security Academy.
                    </p><h3 id="scanning-for-directory-traversal-vulnerabilities">Scanning for directory traversal vulnerabilities</h3><p>
                      If you're using Burp Suite Professional, you can use Burp Scanner to test for directory traversal vulnerabilities:
                    </p><ol>
                      <li>In <strong>Proxy &gt; HTTP history</strong>, identify a request that you want to investigate.</li>
                      <li>Right-click the request and select <strong>Do active scan</strong>. Burp Scanner audits the request.</li>
                      <li>Review the <strong>Issues</strong> list on the <strong>Dashboard</strong> to identify any directory traversal issues that Burp Scanner flags.</li>
                    </ol><h3 id="fuzzing-for-directory-traversal-vulnerabilities">Fuzzing for directory traversal vulnerabilities</h3><p>
                      You can alternatively use Burp Intruder to test for directory traversal vulnerabilities. This process also enables you to closely investigate any issues that Burp Scanner has identified:
                    </p>
                      <li>In <strong>Proxy &gt; HTTP history</strong> identify a request you want to investigate.</li>
                      <li>Right-click the request and select <strong>Send to Intruder</strong>.</li>
                      <li>Go to <strong>Intruder</strong>.</li>
                      <li>Highlight the parameter that you want to test and click <strong>Add §</strong> to mark it as a payload position.</li>
                      <li>
                        <p>In the <strong>Payloads</strong> side panel, under <strong>Payload configuration</strong>, add a list of directory traversal fuzz strings:</p>
                        <ol>
                          <li>If you're using Burp Suite Professional, select the built-in <strong>Fuzzing - path traversal</strong> wordlist.</li>
                          <li>If you're using Burp Suite Community Edition, manually add a list.</li>
                        </ol>
                      </li>
                      <li>Click <strong><span class="icon-play-circle-outline"></span> Start attack</strong>. The attack starts running in a new dialog. Intruder sends a request for each fuzz string on the list.</li>
                      <li>When the attack is finished, study the responses to look for any noteworthy behavior. For example, look for responses with a longer length. These may contain data that has been returned from the requested file.</li>
                  </div>
                </dd>
                
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 2</span>Prevention
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
