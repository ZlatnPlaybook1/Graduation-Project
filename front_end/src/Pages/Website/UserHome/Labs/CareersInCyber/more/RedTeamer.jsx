import React from "react";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import background from "../../../assets/img/ACV/background.png";
import courseImage from "../../../assets/img/ACV/courseImage.png";
import UseFaqSection from "../../../Components/UseFaqSection/UseFaqSection.jsx";
import Banner from "../../../Components/Banner/Banner.jsx";
import CourseLanding from "../../../Components/CourseLanding/CourseLanding.jsx";
import Go2TopBtn from "../../../Components/Go2Top_Btn/Go2Top_Btn.jsx";
import SocialEngImage from "../../../assets/img/ACV/topic2.png"
import VulnExploitImage from "../../../assets/img/ACV/DAC.png"
import MacImage from "../../../assets/img/ACV/MAC.png"
import RbacImage from "../../../assets/img/ACV/RBAC.png"
import CareerPathImage from "../../../assets/img/ACV/ABAC.png"
import PenTestImage from "../../../assets/img/ACV/access-control.svg"
import RedTeamIntroImage from "../../../assets/img/ACV/BrokeAcc.png"
import RealWorldImage from "../../../assets/img/ACV/IDOR.png"
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
        courseTitle="Red Teamer"
        courseDescription="Learn the skills you need to become a Red Teamer"
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
        <dl className="topics-text ">
          {/* Task 1 */}
          <dt className="fadeInUp faq-header">
            <span>Intro </span> Introduction to Red Teamer Cyber Career
          </dt>
          <dd className="fadeInUp faq-body open-sans open-sans" id="border-left">
            <h3 className="content__title">What is a Red Teamer?</h3>
            <p>
              A Red Teamer is a cybersecurity professional who simulates adversarial attacks to identify vulnerabilities before malicious actors can exploit them. They adopt an offensive mindset to assess, challenge, and improve an organization’s security posture.
            </p>
            <img src={RedTeamIntroImage} alt="Red Team Introduction" className="img-fluid w-50 mx-auto d-block" />
            <hr />
            <p>
              A career in Red Teaming involves a mix of technical skills, creative problem-solving, and continuous learning. Red Teamers work across areas such as penetration testing, social engineering, vulnerability assessments, and exploit development.
            </p>
            <h3 className="content__title">Key Areas in a Red Teamer Career</h3>
            <ol>
              <li>
                <b className="content__subtitle">Penetration Testing:</b> &nbsp;
                Simulating realistic attack scenarios to uncover system weaknesses.
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> Example: Using both automated tools and manual techniques to mimic hacker tactics.
                  </li>
                </ul>
              </li>
              <li>
                <b className="content__subtitle">Social Engineering:</b> &nbsp;
                Testing the human element of security by simulating deception-based attacks.
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> Example: Crafting phishing emails or impersonation scenarios.
                  </li>
                </ul>
              </li>
              <li>
                <b className="content__subtitle">Vulnerability Assessment & Exploit Development:</b> &nbsp;
                Identifying and validating security weaknesses, often leading to proof-of-concept exploits.
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> Example: Combining automated scans with deep manual analysis to develop targeted exploits.
                  </li>
                </ul>
              </li>
              <li>
                <b className="content__subtitle">Career Growth & Continuous Learning:</b> &nbsp;
                Staying updated with the latest cyber threats, tools, and techniques.
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> Example: Participating in hackathons, conferences, and obtaining certifications.
                  </li>
                </ul>
              </li>
            </ol>
          </dd>
          {/* Topic 1 */}
          <dt className="fadeInUp faq-header">
            <span>Topic 1</span> Penetration Testing in Red Teaming
          </dt>
          <dd className="fadeInUp faq-body open-sans open-sans" id="border-left">
            <h3 className="content__subtitle">Penetration Testing:</h3>
            <p>
              This core skill involves simulating cyberattacks to uncover vulnerabilities. A comprehensive penetration test includes:
            </p>
            <ul>
              <li>
                <b>Reconnaissance:</b> Gathering information on the target through passive and active methods.
              </li>
              <li>
                <b>Scanning:</b> Using tools to identify open ports, services, and potential entry points.
              </li>
              <li>
                <b>Exploitation:</b> Crafting or using known exploits to gain access.
              </li>
              <li>
                <b>Post-Exploitation:</b> Assessing the impact and determining further lateral movements.
              </li>
            </ul>
            <p>
              These stages help organizations understand their security weaknesses and implement better defenses.
            </p>
            <img src={PenTestImage} alt="Penetration Testing" className="img-fluid w-50 mx-auto d-block" />
            <hr />
          </dd>
          {/* Topic 2 */}
          <dt className="fadeInUp faq-header">
            <span>Topic 2</span> Social Engineering Techniques
          </dt>
          <dd className="fadeInUp faq-body open-sans open-sans" id="border-left">
            <h3 className="content__subtitle">Social Engineering:</h3>
            <p>
              Red Teamers also evaluate the human factor of security. Common techniques include:
            </p>
            <ul>
              <li>
                <b>Phishing:</b> Sending deceptive emails to extract confidential information.
              </li>
              <li>
                <b>Pretexting:</b> Creating a fabricated scenario to build trust and obtain sensitive data.
              </li>
              <li>
                <b>Baiting:</b> Offering something enticing (like free software) to lure victims.
              </li>
              <li>
                <b>Tailgating:</b> Gaining physical access by following authorized personnel.
              </li>
            </ul>
            <p>
              These techniques are designed to test and improve an organization’s awareness and resilience to social attacks.
            </p>
            <img src={SocialEngImage} alt="Social Engineering" className="img-fluid w-50 mx-auto d-block" />
            <hr />
          </dd>
          {/* Topic 3 */}
          <dt className="fadeInUp faq-header">
            <span>Topic 3</span> Vulnerability Assessment & Exploit Development
          </dt>
          <dd className="fadeInUp faq-body open-sans open-sans" id="border-left">
            <h3 className="content__subtitle">Vulnerability Assessment:</h3>
            <p>
              This involves a systematic process of identifying, analyzing, and prioritizing vulnerabilities in a system. Red Teamers use both automated scanners and manual techniques to detect weaknesses.
            </p>
            <h3 className="content__subtitle">Exploit Development:</h3>
            <p>
              Once a vulnerability is found, the next step is to develop an exploit—a proof-of-concept code or method—to demonstrate the potential impact. This may include:
            </p>
            <ul>
              <li>
                <b>Custom Exploit Writing:</b> Creating tailored exploits for unique vulnerabilities.
              </li>
              <li>
                <b>Using Existing Frameworks:</b> Leveraging tools such as Metasploit for rapid testing.
              </li>
              <li>
                <b>Research and Development:</b> Keeping abreast of new techniques and zero-day vulnerabilities.
              </li>
            </ul>
            <img src={VulnExploitImage} alt="Vulnerability and Exploit" className="img-fluid w-75 mx-auto d-block" />
            <hr />
          </dd>
          {/* Topic 4 */}
          <dt className="fadeInUp faq-header">
            <span>Topic 4</span> Career Path and Skill Development
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <h3 className="content__subtitle">Career Path:</h3>
            <p>
              Red Teaming is a dynamic field that offers many paths, from specialized penetration testing roles to broad security consulting. Key steps in career development include:
            </p>
            <ul>
              <li>
                <b>Certifications:</b> Earning industry-recognized certifications like OSCP, CEH, and CRTP.
              </li>
              <li>
                <b>Hands-On Labs:</b> Regular practice in controlled lab environments.
              </li>
              <li>
                <b>Workshops & Conferences:</b> Engaging with the community and staying updated with the latest threats.
              </li>
              <li>
                <b>Mentorship:</b> Learning from experienced professionals in the field.
              </li>
            </ul>
            <img src={CareerPathImage} alt="Career Path" className="img-fluid w-75 mx-auto d-block" />
            <hr />
            <p>
              Continuous learning and practical experience are vital to advance your career in this rapidly evolving field.
            </p>
          </dd>
          {/* Topic 5 */}
          <dt className="fadeInUp faq-header">
            <span>Topic 5</span> Red Teaming Tools and Technologies
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <h3 className="content__title">Key Tools in Red Teaming:</h3>
            <p>
              A variety of tools empower Red Teamers to conduct in-depth security assessments. Some of the essential tools include:
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> <b>Metasploit Framework:</b> For developing and executing exploit code.
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> <b>Nmap & Wireshark:</b> For network mapping and traffic analysis.
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> <b>Burp Suite:</b> For web application security testing.
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> <b>Cobalt Strike:</b> For advanced threat emulation and post-exploitation.
              </li>
            </ul>
            <p>
              These tools are complemented by custom scripts and open-source utilities, giving Red Teamers the flexibility to adapt to different scenarios.
            </p>
            <div className="note">
              Labs: If you're eager to practice these techniques, explore our dedicated Red Teaming labs.
              <button onClick={() => handleGoToLab("/red-teamer/labs")} className="border-0 bg-transparent link-primary text-decoration-underline">
                Go To Labs
              </button>
            </div>
            <hr />
          </dd>
          {/* Topic 6 */}
          <dt className="fadeInUp faq-header">
            <span>Topic 6</span> Real World Experience and Challenges
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <h3 className="content__title">Real World Challenges:</h3>
            <p>
              In the field, Red Teamers must adapt to complex environments where systems, networks, and human factors intersect. Key challenges include:
            </p>
            <ul>
              <li>
                <b>Dynamic Environments:</b> Adapting to constantly changing networks and configurations.
              </li>
              <li>
                <b>Coordinated Simulations:</b> Working alongside Blue Teams to test detection and response strategies.
              </li>
              <li>
                <b>Limited Time Windows:</b> Conducting assessments under strict time constraints while still ensuring thorough analysis.
              </li>
              <li>
                <b>Legal & Ethical Boundaries:</b> Navigating the complexities of authorization and compliance.
              </li>
            </ul>
            <p>
              These real-world scenarios not only test technical skills but also the ability to communicate findings and suggest practical improvements.
            </p>
            <img src={RealWorldImage} alt="Real World Challenges" className="img-fluid w-75 mx-auto d-block" />
            <hr />
          </dd>
          {/* Topic 7 */}
          <dt className="fadeInUp faq-header">
            <span>Topic 7</span> Advancing Your Red Teaming Career
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <h3 className="content__title">Next Steps and Professional Growth:</h3>
            <p>
              To excel as a Red Teamer, continuous learning is essential. Consider the following strategies for advancing your career:
            </p>
            <ul>
              <li>
                <b>Advanced Certifications:</b> Pursue certifications like OSCE, GPEN, or Offensive Security Expert.
              </li>
              <li>
                <b>Community Engagement:</b> Join cybersecurity forums, attend conferences, and contribute to open-source projects.
              </li>
              <li>
                <b>Bug Bounties & Research:</b> Participate in bug bounty programs and vulnerability research to gain hands-on experience.
              </li>
              <li>
                <b>Specialized Training:</b> Enroll in courses that focus on advanced exploit development or threat emulation.
              </li>
            </ul>
            <p>
              Embracing a mindset of lifelong learning and proactive skill development will help you stay ahead of emerging threats and further your career.
            </p>
            <div className="note">
              Read more from this link 👉🏻 
              <a href="https://www.example.com/red-teaming-career" className="border-0 bg-transparent link-primary text-decoration-underline">
                Red Teamer Career Resources
              </a>
            </div>
          </dd>
        </dl>
      </div>
      <div className="go-to-section">
        <button onClick={() => handleGoToLab("/red-teamer/labs")} className="go-to">
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
