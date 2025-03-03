import React from "react";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import background from "../../../assets/img/ACV/background.png";
import courseImage from "../../../assets/img/ACV/courseImage.png";
import UseFaqSection from "../../../Components/UseFaqSection/UseFaqSection.jsx";
import Banner from "../../../Components/Banner/Banner.jsx";
import CourseLanding from "../../../Components/CourseLanding/CourseLanding.jsx";
import Go2TopBtn from "../../../Components/Go2Top_Btn/Go2Top_Btn.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ThemeSwitcher from "../../../Components/ThemeSwitcher/ThemeSwitcher.jsx";
export default function AC_Vuln() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Banner />
      <Header />
      <ThemeSwitcher />
      {/* <Landing /> */}
      {/* Start Landing */}
      <CourseLanding
        background={background}
        backgroundStyle={{ objectFit: "cover", height: "100%", width: "100%" }}
        courseImage={courseImage}
        courseTitle="Penetration Tester"
        courseDescription="Learn how to identify and exploit vulnerabilities in systems to secure them."
        difficulty="Intermediate"
        duration="20 min"
        onSaveRoom={() => console.log("Room Saved!")}
        onLike={() => console.log("Liked!")}
        onDislike={() => console.log("Disliked!")}
      />
      {/* End Landing */}
      {/* Start Course */}

  <div className="Content ">
  <div className="secure-container" ref={faqSectionRef}>
    <div className="content-row">
      <div className="content-section">
        <dl className="topics-text">
          {/* Intro */}
          <dt className="fadeInUp faq-header">
            <span>Intro </span> Introduction to Penetration Tester Career
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <h3 className="content__title">What is a Penetration Tester?</h3>
            <p>
              A Penetration Tester (often called an ethical hacker) simulates cyberattacks on computer systems, networks, and web applications. Their mission is to identify vulnerabilities before malicious actors do, ensuring that organizations can remediate risks effectively.
            </p>
         
            <p>
              Working as a Penetration Tester requires a blend of technical acumen, creativity, and a deep understanding of both offensive and defensive security techniques.
            </p>
            <h3 className="content__title">Key Areas in a Penetration Tester Career</h3>
            <ol>
              <li>
                <b className="content__subtitle">Methodologies & Processes:</b> &nbsp;
                Adhering to structured testing methodologies to uncover security weaknesses.
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> Example: Following frameworks such as PTES or the OWASP Testing Guide.
                  </li>
                </ul>
              </li>
              <li>
                <b className="content__subtitle">Tools & Techniques:</b> &nbsp;
                Mastering a wide range of tools and manual techniques for in-depth assessments.
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> Example: Using Nmap, Metasploit, Burp Suite, and Wireshark.
                  </li>
                </ul>
              </li>
              <li>
                <b className="content__subtitle">Vulnerability Assessment:</b> &nbsp;
                Combining automated scans with manual testing to reveal hidden vulnerabilities.
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> Example: Detecting both common vulnerabilities and unique zero-day issues.
                  </li>
                </ul>
              </li>
              <li>
                <b className="content__subtitle">Reporting & Communication:</b> &nbsp;
                Translating technical findings into clear, actionable reports for various stakeholders.
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> Example: Crafting executive summaries and detailed technical documentation.
                  </li>
                </ul>
              </li>
            </ol>
          </dd>
          {/* Topic 1 */}
          <dt className="fadeInUp faq-header">
            <span>Topic 1</span> Penetration Testing Methodologies
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <h3 className="content__subtitle">Testing Methodologies:</h3>
            <p>
              Penetration Testing involves a systematic process to simulate real-world attacks. The key stages include:
            </p>
            <ul>
              <li>
                <b>Reconnaissance:</b> Gathering intelligence about the target using both passive and active techniques.
              </li>
              <li>
                <b>Scanning & Enumeration:</b> Identifying open ports, services, and potential vulnerabilities.
              </li>
              <li>
                <b>Exploitation:</b> Using discovered vulnerabilities to gain unauthorized access.
              </li>
              <li>
                <b>Post-Exploitation:</b> Assessing the impact of the breach and potential lateral movement.
              </li>
              <li>
                <b>Reporting:</b> Documenting findings, impact, and remediation strategies.
              </li>
            </ul>
            
          </dd>
          {/* Topic 2 */}
          <dt className="fadeInUp faq-header">
            <span>Topic 2</span> Tools & Techniques
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <h3 className="content__subtitle">Essential Tools & Techniques:</h3>
            <p>
              A Penetration Tester’s toolkit is diverse. Some critical tools include:
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> <b>Nmap:</b> For network scanning and host discovery.
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> <b>Metasploit:</b> For exploit development and execution.
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> <b>Burp Suite:</b> For comprehensive web application testing.
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> <b>Wireshark:</b> For in-depth network traffic analysis.
              </li>
            </ul>
            <p>
              In addition to these, custom scripts and manual testing techniques are often employed to uncover advanced vulnerabilities.
            </p>
            
          </dd>
          {/* Topic 3 */}
          <dt className="fadeInUp faq-header">
            <span>Topic 3</span> Vulnerability Assessment & Exploit Development
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <h3 className="content__subtitle">Vulnerability Assessment:</h3>
            <p>
              This phase combines automated scanning with rigorous manual analysis to uncover both known and hidden vulnerabilities.
            </p>
            <h3 className="content__subtitle">Exploit Development:</h3>
            <p>
              Developing proof-of-concept exploits is essential to verify the risk level of a discovered vulnerability.
            </p>
            <ul>
              <li>
                <b>Custom Exploit Writing:</b> Tailoring exploits to target specific vulnerabilities.
              </li>
              <li>
                <b>Framework Utilization:</b> Leveraging established tools like Metasploit to expedite testing.
              </li>
            </ul>
            
          </dd>
          {/* Topic 4 */}
          <dt className="fadeInUp faq-header">
            <span>Topic 4</span> Reporting & Communication
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <h3 className="content__subtitle">Effective Reporting:</h3>
            <p>
              Clear and concise reporting is critical. Penetration Testers must translate technical vulnerabilities into actionable insights for both technical teams and executive leadership.
            </p>
            <ul>
              <li>
                <b>Executive Summaries:</b> Providing high-level overviews that emphasize business impact.
              </li>
              <li>
                <b>Technical Documentation:</b> Detailed reports outlining methodology, vulnerabilities, and remediation steps.
              </li>
              <li>
                <b>Remediation Guidance:</b> Offering concrete recommendations to improve security posture.
              </li>
            </ul>
           
          </dd>
          {/* Topic 5 */}
          <dt className="fadeInUp faq-header">
            <span>Topic 5</span> Career Path & Certifications
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <h3 className="content__title">Career Path and Professional Growth:</h3>
            <p>
              Advancing as a Penetration Tester requires continuous learning and hands-on experience. Key aspects include:
            </p>
            <ul>
              <li>
                <b>Certifications:</b> Gaining credentials such as OSCP, CEH, GPEN, or eCPPT to validate your skills.
              </li>
              <li>
                <b>Practical Experience:</b> Regularly practicing in labs and participating in Capture The Flag (CTF) competitions.
              </li>
              <li>
                <b>Community Engagement:</b> Networking with other professionals through forums, conferences, and cybersecurity groups.
              </li>
              <li>
                <b>Advanced Training:</b> Enrolling in specialized courses to keep up with emerging threats and advanced exploitation techniques.
              </li>
            </ul>
            <div className="note">
              Read more from this link 👉🏻 
              <a href="https://www.example.com/penetration-tester-career" className="border-0 bg-transparent link-primary text-decoration-underline">
                Penetration Tester Career Resources
              </a>
            </div>
          </dd>
          {/* Topic 6 */}
          <dt className="fadeInUp faq-header">
            <span>Topic 6</span> Hands-On Labs & Continuous Learning
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <h3 className="content__title">Practical Experience:</h3>
            <p>
              Hands-on labs and real-world exercises are crucial for refining your testing skills. Engaging in practical scenarios helps bridge the gap between theory and practice.
            </p>
            <ul>
              <li>
                <b>Lab Environments:</b> Use simulated networks and vulnerable applications to test your techniques.
              </li>
              <li>
                <b>CTF Competitions:</b> Participate in challenges that simulate real attack scenarios.
              </li>
              <li>
                <b>Workshops & Bootcamps:</b> Attend intensive training sessions that focus on the latest tools and methodologies.
              </li>
            </ul>
            
          </dd>
        </dl>
      </div>
      <div className="go-to-section">
        <button onClick={() => handleGoToLab("/penetration-tester/labs")} className="go-to">
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
