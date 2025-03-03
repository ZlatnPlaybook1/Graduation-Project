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
           Topic 1 <span>  Who is an Incident Responder? What do they do?</span>
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <p>
             Incident responders are cybersecurity professionals who detect,
          investigate, and respond to security incidents. Their primary goal is
          to minimize damage and restore normal operations as quickly as
          possible.
            </p>
          </dd>
          <dt className="fadeInUp faq-header">
          Topic 1  <span>  Incident Responder Responsibilities and Duties</span>
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <ul>
              <li><b>Monitoring security events:</b>Continuously analyzing
            logs and alerts for potential security breaches.</li>
              <li><strong>Investigating security incidents:</strong> Conducting
            forensic analysis to determine the root cause and scope of attacks.</li>
              <li><strong>Containing and mitigating threats:</strong> Implementing
            immediate response strategies to prevent further damage.</li>
              <li>  <strong>Developing incident response plans:</strong> Creating
            protocols to ensure a quick and efficient reaction to security
            threats.</li>
              <li><strong>Collaborating with cybersecurity teams:</strong> Working
            with security engineers, analysts, and management to improve
            defenses.</li>
            </ul>
          </dd>
          <dt className="fadeInUp faq-header">
           Topic 1 <span> Skills Needed to Become an Incident Responder</span>
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <ul>
              <li>Threat Intelligence</li>
              <li >Digital Forensics</li>
          <li >Network Security</li>
          <li >Malware Analysis</li>
          <li >Intrusion Detection</li>
          <li >Incident Handling</li>
          <li >
            Soft skills: Communication, Problem-Solving, Attention to Detail
          </li>
            </ul>
          </dd>
          <dt className="fadeInUp faq-header">
            Topic 1 <span>Salary of an Incident Responder</span>
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <p>
             Incident responders earn competitive salaries, with the average annual
          wage in the U.S. being <strong>$95,000+</strong>. Other reports
          indicate:
            </p>
            <ul>
              <li className="list-group-item">
            ZipRecruiter: <strong>$100,000</strong> annually (2023)
          </li>
          <li className="list-group-item">
            Glassdoor: <strong>$90,000</strong> annually (2023)
          </li>
            </ul>
          </dd>
          <dt className="fadeInUp faq-header">
           Topic 1 <span>Incident Responder Certifications</span>
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <ul>
              <li className="list-group-item">
            Certified Incident Handler (GCIH) by GIAC
          </li>
          <li className="list-group-item">
            Certified Information Systems Security Professional (CISSP)
          </li>
          <li className="list-group-item">Certified Ethical Hacker (CEH)</li>
          <li className="list-group-item">
            CompTIA Cybersecurity Analyst (CySA+)
          </li>
            </ul>
          </dd>
          <dt className="fadeInUp faq-header">
           Topic 1 <span>Summing up the Incident Responder Role</span>
          </dt>
          <dd className="fadeInUp faq-body open-sans" id="border-left">
            <p>
             Incident responders are critical in detecting and mitigating cyber
          threats. Their expertise helps businesses:
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
