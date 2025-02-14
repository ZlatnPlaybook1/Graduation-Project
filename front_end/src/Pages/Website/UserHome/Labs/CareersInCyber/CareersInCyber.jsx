import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Banner from "../../Banner/Banner";
import "../Page_Styles/Content_sec.css";
import background from "../../assets/img/CareersInCyber/background.png";
import courseImage from "../../assets/img/CareersInCyber/courseImage.png";
import CareerImag from "../../assets/img/CareersInCyber/courseImage.png";
import UseFaqSection from "../../UseFaqSection/UseFaqSection.jsx";
import LandingLab from "../../LandingLab/LandingLab.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function CareersInCyber() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();

  return (
    <>
      <Banner />
      <Header />
      {/* Start Landing */}
      <LandingLab
        background={background}
        imagecourse={courseImage}
        courseTitle="Careers in Cyber"
        courseDescription="Learn about the different careers in cyber security."
        difficulty="Intermediate"
        duration="30 min"
        onSaveRoom={() => console.log("Room Saved!")}
        onLike={() => console.log("Liked!")}
        onDislike={() => console.log("Disliked!")}
      />
      {/* End Landing */}
      {/* Start Course */}
      <div className="course-labd">
        <div className="container" ref={faqSectionRef}>
          <div className="row">
            <div className="faq-section-labd">
              <dl className="section-text-labd">
                {/* Topic 1 */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 1</span> Introduction
                </dt>
                <dd className="fadeInUp faq-body-labd">
                  <div className="faq-content">
                    <div className="faq-image">
                      <img src={CareerImag} alt="Careers In Cyber" />
                      <p className="image-caption">Careers In Cyber</p>
                    </div>
                    <p>
                      Cyber security careers are becoming more in demand and
                      offer high salaries. There are many different jobs within
                      the security industry, from offensive pentesting (hacking
                      machines and reporting on vulnerabilities) to defensive
                      security (defending against and investigating
                      cyberattacks).
                    </p>
                    <p>
                      Why get a career in cyber:
                      <ol className="oList">
                        <li style={{ listStyleType: "none" }}>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2 pink-note"
                          />
                          High Pay - jobs in security have high starting
                          salaries
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2 pink-note"
                          />
                          Exciting - work can include legally hacking systems or
                          defending against cyber attacks
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2 pink-note"
                          />
                          Be in demand - there are over 3.5 million unfilled
                          cyber positions
                        </li>
                      </ol>
                    </p>

                    <p className="note">
                      This Content helps you break into cyber security by
                      providing information about various cyber security roles;
                      it also links to different learning paths that you can use
                      to start building your cyber skills.
                    </p>
                  </div>
                </dd>

                {/* Topic 2*/}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 2</span>Security Analyst
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content">
                    <div className="faq-image">
                      <img
                        src={CareerImag}
                        alt="Responsible for maintaining the security of an organisation's data"
                      />
                      <p className="image-caption">
                        Responsible for maintaining the security of an
                        organisation's data
                      </p>
                    </div>
                    <p>
                      Security analysts are integral to constructing security
                      measures across organisations to protect the company from
                      attacks. Analysts explore and evaluate company networks to
                      uncover actionable data and recommendations for engineers
                      to develop preventative measures. This job role requires
                      working with various stakeholders to gain an understanding
                      of security requirements and the security landscape.
                    </p>
                    <mark>Responsibilities</mark>
                    <p>
                      <ol className="oList">
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Working with various stakeholders to analyse the cyber
                          security throughout the company
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Compile ongoing reports about the safety of networks,
                          documenting security issues and measures taken in
                          response
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Develop security plans, incorporating research on new
                          attack tools and trends, and measures needed across
                          teams to maintain data security.
                        </li>
                      </ol>
                    </p>
                    <mark>Learning Paths</mark>
                    <p>
                      TryHackMe's learning paths will give you both the
                      fundamental technical knowledge and hands-on experience,
                      which is crucial to becoming a successful Security
                      Analyst.
                    </p>
                    <ol className="oList">
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">
                          Introduction to Cyber Security
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">
                          Pre Security
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">SOC Level 1</a>
                      </li>
                    </ol>
                    <mark>Relevant Career Guides</mark>
                    <ol className="oList">
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">
                          Becoming a Cyber Security Analyst
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">
                          How to Become a Level 1 SOC Analyst
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">
                          A Day in the Life of a SOC Analyst
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">
                          The Ultimate SOC L1 Analyst Interview Guide
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">
                          From Student to SOC Analyst: Hayden’s Success Story
                        </a>
                      </li>
                    </ol>
                  </div>
                  <div className="go-to-section">
                    <button
                      onClick={() =>
                        handleGoToLab(
                          "/CareersInCyber/CareersInCyber_labs/ShowMore1"
                        )
                      }
                      className="go-to"
                    >
                      Go To Labs
                    </button>
                  </div>
                </dd>

                {/* Topic 3 */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 3</span>Security Engineer
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content">
                    <div className="faq-image">
                      <img
                        src={CareerImag}
                        alt="Design, monitor and maintain security controls, networks, and systems to help prevent cyberattacks"
                      />
                      <p className="image-caption">
                        Design, monitor and maintain security controls,
                        networks, and systems to help prevent cyberattacks
                      </p>
                    </div>
                    <p>
                      Security engineers develop and implement security
                      solutions using threats and vulnerability data - often
                      sourced from members of the security workforce. Security
                      engineers work across circumventing a breadth of attacks,
                      including web application attacks, network threats, and
                      evolving trends and tactics. The ultimate goal is to
                      retain and adopt security measures to mitigate the risk of
                      attack and data loss.
                    </p>
                    <mark>Responsibilities</mark>
                    <p>
                      <ol className="oList">
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Testing and screening security measures across
                          software
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Monitor networks and reports to update systems and
                          mitigate vulnerabilities
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Identify and implement systems needed for optimal
                          security
                        </li>
                      </ol>
                    </p>
                    <mark>Learning Paths</mark>
                    <p>
                      TryHackMe's learning paths will give you both the
                      fundamental technical knowledge and hands-on experience,
                      which is crucial to becoming a successful Security
                      Engineer.
                    </p>
                    <ol className="oList">
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">SOC Level 1</a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">
                          JR Penetration Tester
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">
                          Offensive Pentesting
                        </a>
                      </li>
                    </ol>
                    <mark>Relevant Career Guides</mark>
                    <ol className="oList">
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">
                          Becoming a Security Engineer
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">
                          How to Become a Security Engineer
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">
                          A Day in the Life of a Security Engineer
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">
                          Preparing for a Security Engineering Interview
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">
                          Becoming a Security Engineer: Richárd’s Success Story
                        </a>
                      </li>
                    </ol>
                  </div>
                </dd>
                {/* Topic 4*/}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 4</span>Incident Responder
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content">
                    <div className="faq-image">
                      <img
                        src={CareerImag}
                        alt="Identifies and mitigates attacks whilst an attackers operations are still unfolding"
                      />
                      <p className="image-caption">
                        Identifies and mitigates attacks whilst an attackers
                        operations are still unfolding
                      </p>
                    </div>
                    <p>
                      Incident responders respond productively and efficiently
                      to security breaches. Responsibilities include creating
                      plans, policies, and protocols for organisations to enact
                      during and following incidents. This is often a highly
                      pressurised position with assessments and responses
                      required in real-time, as attacks are unfolding. Incident
                      response metrics include MTTD, MTTA, and MTTR - the
                      meantime to detect, acknowledge, and recover (from
                      attacks.) The aim is to achieve a swift and effective
                      response, retain financial standing and avoid negative
                      breach implications. Ultimately, incident responders
                      protect the company's data, reputation, and financial
                      standing from cyber attacks.
                    </p>
                    <mark>Responsibilities</mark>
                    <p>
                      <ol className="oList">
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Developing and adopting a thorough, actionable
                          incident response plan
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Maintaining strong security best practices and
                          supporting incident response measures
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Post-incident reporting and preparation for future
                          attacks, considering learnings and adaptations to take
                          from incidents
                        </li>
                      </ol>
                    </p>
                    <mark>Learning Paths</mark>
                    <p>
                      TryHackMe's learning paths will give you both the
                      fundamental technical knowledge and hands-on experience,
                      which is crucial to becoming a successful Incident
                      Responder.
                    </p>
                    <ol className="oList">
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        <a href="/LearningPaths/SecurityAnalyst">SOC Level 1</a>
                      </li>
                    </ol>
                  </div>
                </dd>
                {/* Topic 5 */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 5</span>Digital Forensics Examiner
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content">
                    <div className="faq-image">
                      <img
                        src={CareerImag}
                        alt="Responsible for using digital forensics to investigate incidents and crimes"
                      />
                      <p className="image-caption">
                        Responsible for using digital forensics to investigate
                        incidents and crimes
                      </p>
                    </div>
                    <p>
                      If you like to play detective, this might be the perfect
                      job. If you are working as part of a law-enforcement
                      department, you would be focused on collecting and
                      analysing evidence to help solve crimes: charging the
                      guilty and exonerating the innocent. On the other hand, if
                      your work falls under defending a company's network, you
                      will be using your forensic skills to analyse incidents,
                      such as policy violations.
                    </p>
                    <mark>Responsibilities</mark>
                    <p>
                      <ol className="oList">
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Collect digital evidence while observing legal
                          procedures
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Analyse digital evidence to find answers related to
                          the case
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Document your findings and report on the case
                        </li>
                      </ol>
                    </p>
                  </div>
                </dd>
                {/* Topic 6 */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 6</span>Malware Analyst
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content">
                    <div className="faq-image">
                      <img
                        src={CareerImag}
                        alt="Responsible for testing technology products for security loopholes"
                      />
                      <p className="image-caption">
                        Analyses all types of malware to learn more about how
                        they work and what they do
                      </p>
                    </div>
                    <p>
                      A malware analyst's work involves analysing suspicious
                      programs, discovering what they do and writing reports
                      about their findings. A malware analyst is sometimes
                      called a reverse-engineer as their core task revolves
                      around converting compiled programs from machine language
                      to readable code, usually in a low-level language. This
                      work requires the malware analyst to have a strong
                      programming background, especially in low-level languages
                      such as assembly language and C language. The ultimate
                      goal is to learn about all the activities that a malicious
                      program carries out, find out how to detect it and report
                      it.
                    </p>
                    <mark>Responsibilities</mark>
                    <p>
                      <ol className="oList">
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Carry out static analysis of malicious programs, which
                          entails reverse-engineering
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Conduct dynamic analysis of malware samples by
                          observing their activities in a controlled environment
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Document and report all the findings
                        </li>
                      </ol>
                    </p>
                  </div>
                </dd>
                {/* Topic 7 */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 7</span>Penetration Tester
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content">
                    <div className="faq-image">
                      <img
                        src={CareerImag}
                        alt="Responsible for testing technology products for security loopholes"
                      />
                      <p className="image-caption">
                        Responsible for testing technology products for security
                        loopholes
                      </p>
                    </div>
                    <p>
                      You may see penetration testing referred to as pentesting
                      and ethical hacking. A penetration tester's job role is to
                      test the security of the systems and software within a
                      company - this is achieved through attempts to uncover
                      flaws and vulnerabilities through systemised hacking.
                      Penetration testers exploit these vulnerabilities to
                      evaluate the risk in each instance. The company can then
                      take these insights to rectify issues to prevent a
                      real-world cyberattack.
                    </p>
                    <mark>Responsibilities</mark>
                    <p>
                      <ol className="oList">
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Conduct tests on computer systems, networks, and
                          web-based applications
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Perform security assessments, audits, and analyse
                          policies
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Evaluate and report on insights, recommending actions
                          for attack prevention
                        </li>
                      </ol>
                    </p>
                    <mark>Learning Paths</mark>
                    <p>
                      TryHackMe's learning paths will give you both the
                      fundamental technical knowledge and hands-on experience,
                      which is crucial to becoming a successful Penetration
                      Tester.
                    </p>
                    <ol className="oList">
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        JR Penetration Tester
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        Offensive Pentesting
                      </li>
                    </ol>
                    <mark>Relevant Career Guides</mark>
                    <ol className="oList">
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        Becoming a Penetration Tester
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        How to Become a Penetration Tester
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        A Day in the Life of a Penetration Tester
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        Preparing for a Penetration Testing Interview
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        Becoming a Penetration Tester: Alex’s Success Story
                      </li>
                    </ol>
                  </div>
                </dd>
                {/* Topic 8 */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 8</span>Red Teamer
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content">
                    <div className="faq-image">
                      <img
                        src={CareerImag}
                        alt="Plays the role of an adversary, attacking an organisation and providing feedback from an enemies perspective"
                      />
                      <p className="image-caption">
                        Plays the role of an adversary, attacking an
                        organisation and providing feedback from an enemies
                        perspective
                      </p>
                    </div>
                    <p>
                      Red teamers share similarities to penetration testers,
                      with a more targeted job role. Penetration testers look to
                      uncover many vulnerabilities across systems to keep
                      cyber-defence in good standing, whilst red teamers are
                      enacted to test the company's detection and response
                      capabilities. This job role requires imitating cyber
                      criminals' actions, emulating malicious attacks, retaining
                      access, and avoiding detection. Red team assessments can
                      run for up to a month, typically by a team external to the
                      company. They are often best suited to organisations with
                      mature security programs in place.
                    </p>
                    <mark>Responsibilities</mark>
                    <p>
                      <ol className="oList">
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Emulate the role of a threat actor to uncover
                          exploitable vulnerabilities, maintain access and avoid
                          detection
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Assess organisations' security controls, threat
                          intelligence, and incident response procedures
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />
                          Evaluate and report on insights, with actionable data
                          for companies to avoid real-world instances
                        </li>
                      </ol>
                    </p>
                    <mark>Learning Paths</mark>
                    <p>
                      TryHackMe's learning paths will give you both the
                      fundamental technical knowledge and hands-on experience,
                      which is crucial to becoming a successful Red Teamer.
                    </p>
                    <ol className="oList">
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        JR Penetration Tester
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        Offensive Pentesting
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        Red Teamer
                      </li>
                    </ol>
                    <mark>Relevant Career Guides</mark>
                    <ol className="oList">
                      <li>
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        Red Teaming: Job Roles, Salaries & Opportunities
                      </li>
                    </ol>
                  </div>
                </dd>
                {/* Topic 9 */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 9</span>Quiz
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content">
                    <p>
                      This room has provided you with a general overview of the
                      different careers in cyber security. Don't forget that you
                      <a href="/">
                        can leverage online training to land your dream job
                      </a>{" "}
                      in cyber security. To find out which cyber security role
                      suits you best, try our fun quiz, which you can access by
                      clicking the "View Site" button on the right.
                    </p>
                  </div>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() =>
                  handleGoToLab("/CareersInCyber/CareersInCyber_MCQ")
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
