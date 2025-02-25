import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "../../Components/Topics CSS/topics.css";
import background from "../../assets/img/ACV/background.png";
import courseImage from "../../assets/img/ACV/courseImage.png";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import Landing from "../../Components/CourseLanding/CourseLanding.jsx";
import Go2TopBtn from "../../Components/Go2Top_Btn/Go2Top_Btn.jsx";
export default function AC_Vuln() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Banner />
      <Header />
      {/* <Landing /> */}
      {/* Start Landing */}
      <Landing
        background={background}
        backgroundStyle={{ objectFit: "cover", height: "100%", width: "100%" }}
        courseImage={courseImage}
        courseTitle="Access control vulnerability"
        courseDescription="Learn how attackers exploit access control vulnerabilities in
                web applications, gaining unauthorized access to sensitive areas
                or data, and the techniques used to detect and prevent these
                attacks."
        difficulty="Intermediate"
        duration="20 min"
        onSaveRoom={() => console.log("Room Saved!")}
        onLike={() => console.log("Liked!")}
        onDislike={() => console.log("Disliked!")}
      />
      {/* End Landing */}
      {/* Start Course */}
      <div className="Content">
        <div className="secure-container" ref={faqSectionRef}>
          <div className="content-row">
            <div className="content-section">
              <dl className="topics-text">
                {/* Task 1 */}
                <dt className="fadeInUp faq-header">
                  <span>Intro </span> Introduction to Access Control
                  Vulnerabilities
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <h3>
                    Welcome to the Access Control Vulnerability Learning Room!
                  </h3>
                  <div>
                    <h4>What is an Access Control Vulnerability?</h4>
                    <p>
                      Access control vulnerabilities occur when an application
                      fails to properly restrict what authenticated users can
                      do. These issues allow attackers to perform actions or
                      access resources beyond their intended permissions,
                      compromising sensitive data or system integrity.
                    </p>
                  </div>
                  <h4>Key Topics Covered:</h4>
                  <ol>
                    <li>
                      <b>Understanding Access Control</b>: Overview of access
                      control mechanisms and their importance.
                    </li>
                    <li>
                      <b>Types of Access Control Flaws</b>: Common
                      vulnerabilities, such as horizontal and vertical privilege
                      escalation.
                    </li>
                    <li>
                      <b>Examples of Exploits</b>: Real-world scenarios
                      showcasing access control weaknesses.
                    </li>
                    <li>
                      <b>Access Control Best Practices</b>: Strategies to
                      prevent access control vulnerabilities in applications.
                    </li>
                  </ol>
                </dd>
                {/* Topic 1 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 1</span> Understanding Access Control
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <ul>
                    <li>
                      <b>Definition:</b> Access control ensures users can only
                      perform permitted actions and access authorized resources.
                    </li>
                    <li>
                      <b>Types:</b>
                      <ol>
                        <li>
                          <b>Discretionary Access Control (DAC):</b> Resource
                          owners define access rules.
                        </li>
                        <li>
                          <b>Mandatory Access Control (MAC):</b> Predefined
                          rules control access based on classifications.
                        </li>
                        <li>
                          <b>Role-Based Access Control (RBAC):</b> Permissions
                          assigned based on roles.
                        </li>
                      </ol>
                    </li>
                  </ul>
                </dd>
                {/* Topic 2 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 2</span> Types of Access Control Flaws
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <ul>
                    <li>
                      <b>Horizontal Privilege Escalation:</b> A user accesses
                      resources belonging to another user at the same permission
                      level.
                    </li>
                    <li>
                      <b>Vertical Privilege Escalation:</b> A user performs
                      actions requiring higher privileges than they possess.
                    </li>
                    <li>
                      <b>Unauthenticated Access:</b> Resources accessible
                      without proper authentication.
                    </li>
                  </ul>
                </dd>
                {/* Topic 3 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 3</span> Examples of Exploits
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <ul>
                    <li>
                      <b>Accessing Other Users' Data:</b> Viewing or modifying
                      another user's account details.
                    </li>
                    <li>
                      <b>Admin Function Misuse:</b> Performing admin-level
                      actions, like changing roles or deleting data.
                    </li>
                    <li>
                      <b>Bypassing Login:</b> Using direct object references to
                      access restricted areas.
                    </li>
                  </ul>
                </dd>
                {/* Topic 4 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 4</span> Access Control Best Practices
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <ul>
                    <li>
                      <b>Principle of Least Privilege:</b> Grant users only the
                      access necessary for their roles.
                    </li>
                    <li>
                      <b>Regular Access Reviews:</b> Audit permissions to remove
                      unnecessary access rights.
                    </li>
                    <li>
                      <b>Use Centralized Access Controls:</b> Ensure consistent
                      access enforcement through centralized mechanisms.
                    </li>
                    <li>
                      <b>Test for Vulnerabilities:</b> Use tools and manual
                      testing to identify and address access control issues.
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() => handleGoToLab("/AC-Vuln/AC_Vuln_labs")}
                className="go-to"
              >
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Course */}
      <Go2TopBtn />
      <Footer />
    </>
  );
}
