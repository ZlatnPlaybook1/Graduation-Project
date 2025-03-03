import React from "react";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import background from "../../../assets/img/ACV/background.png";
import courseImage from "../../../assets/img/ACV/courseImage.png";
import UseFaqSection from "../../../Components/UseFaqSection/UseFaqSection.jsx";
import Banner from "../../../Components/Banner/Banner.jsx";
import CourseLanding from "../../../Components/CourseLanding/CourseLanding.jsx";
import Go2TopBtn from "../../../Components/Go2Top_Btn/Go2Top_Btn.jsx";
import IntroImage from "../../../assets/img/ACV/topic2.png"
import DacImage from "../../../assets/img/ACV/DAC.png"
import MacImage from "../../../assets/img/ACV/MAC.png"
import RbacImage from "../../../assets/img/ACV/RBAC.png"
import AbacImage from "../../../assets/img/ACV/ABAC.png"
import ACVImage from "../../../assets/img/ACV/access-control.svg"
import BrokenAccImage from "../../../assets/img/ACV/BrokeAcc.png"
import IdorImage from "../../../assets/img/ACV/IDOR.png"
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
          <dt className="fadeInUp faq-header">
            <span>Who is a Security Analyst? What do they do?</span>
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <p>
              Security analysts are experts who identify and fix problems within security systems by analyzing risks, vulnerabilities, threats, and incidents. They perform in-depth security assessments to recommend solutions for preventing cyberattacks.
            </p>
          </dd>
          <dt className="fadeInUp faq-header">
            <span>Security Analyst Responsibilities and Duties</span>
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <ul>
              <li>Securing the company’s assets: Protecting sensitive data, including customer and employee information.</li>
              <li>Overseeing the systems: Monitoring and ensuring systems are up to date with the latest security patches.</li>
              <li>Performing security assessments: Conducting vulnerability tests and risk analysis to detect weaknesses.</li>
              <li>Analyzing data breaches: Investigating incidents to determine the cause and strengthen security controls.</li>
              <li>Collaborating with third-party vendors: Ensuring compliance with security standards.</li>
            </ul>
          </dd>
          <dt className="fadeInUp faq-header">
            <span>Skills Needed to Become a Security Analyst</span>
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <ul>
              <li>Ethical hacking</li>
              <li>Data scripting (Python, PowerShell)</li>
              <li>Intrusion prevention and monitoring</li>
              <li>Incident response and management</li>
              <li>Computer forensics</li>
              <li>Reverse engineering and malware analysis</li>
              <li>Soft skills: Analytical thinking, problem-solving, communication</li>
            </ul>
          </dd>
          <dt className="fadeInUp faq-header">
            <span>Salary of a Security Analyst</span>
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <p>
              The median annual wage for Information Security Analysts was $102,600 in May 2021. Other reports indicate:
            </p>
            <ul>
              <li>ZipRecruiter: $93,645 annually (April 2023)</li>
              <li>Glassdoor: $78,213 annually (April 2023)</li>
            </ul>
          </dd>
          <dt className="fadeInUp faq-header">
            <span>Security Analyst Certifications</span>
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <ul>
              <li>CompTIA Cybersecurity Analyst (CySA+)</li>
              <li>CCIE Security by Cisco</li>
              <li>CISSP by ISC2</li>
              <li>GIAC Information Security Fundamentals (GISF)</li>
            </ul>
          </dd>
          <dt className="fadeInUp faq-header">
            <span>Summing up the Security Analyst Role</span>
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <p>
              Companies should hire security analysts to protect their sensitive information and prevent cyberattacks. With the increasing frequency of cyber threats, having dedicated security analysts ensures the organization’s ability to:
            </p>
            <ul>
              <li>Identify vulnerabilities in systems and applications.</li>
              <li>Detect and respond to security incidents efficiently.</li>
              <li>Stay ahead of emerging cybersecurity threats.</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div className="go-to-section">
        <button
          onClick={() => handleGoToLab("/AC-Vuln/AC_Vuln_labs")}
          className="go-to"
        ></button>
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
