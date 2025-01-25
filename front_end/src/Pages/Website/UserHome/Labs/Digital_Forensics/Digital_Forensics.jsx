import React, { useEffect, useRef } from "react";
import $ from "jquery";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./Digital_Forensics.css";
import background from "../../assets/img/background.png";
import imagecourse from "../../assets/img/course_image.png";
//import logicflaw from "../../assets/img/Api_Hacking/apiImg1.svg";
//import ExplainImg from "../../assets/img/Api_Hacking/apiImg2.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Digital_Forensics() {
  const faqSectionRef = useRef(null);
  const navigate = useNavigate();
  const handleGoToLab = () => {
    navigate("/Digital_Forensics/Digital_Forensics_labs");
  };
  useEffect(() => {
    const $faqSection = $(faqSectionRef.current);
    const $dt = $faqSection.find("dt");
    const $dd = $faqSection.find("dd");

    $dd.hide();
    $dt.first().addClass("active");
    $dd.first().show();

    $dt.on("click", function () {
      const $this = $(this);
      const $nextDd = $this.next("dd");

      if ($this.hasClass("active")) {
        $this.removeClass("active");
        $nextDd.slideUp(500);
      } else {
        $dt.removeClass("active");
        $dd.slideUp(500);
        $this.addClass("active");
        $nextDd.slideDown(500);
      }
    });

    return () => {
      $dt.off("click");
    };
  }, []);

  return (
    <>
      <Header />
      {/* Start Landing */}
      <div className="landing-lab1">
        <div className="banner">
          <img src={background} alt="" />
        </div>
        <div className="container-lab1">
          <div className="breadcrumb">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="">Digital Forensics</Link>
              </li>
            </ul>
          </div>
          <div className="course-info">
            <img src={imagecourse} alt="" />
            <div className="course-text">
              <h1>Digital Forensics</h1>
              <p>..</p>
              <div className="course-icons">
                <div className="diff">
                  <div className="easy">
                    <i className="fa-solid fa-signal"></i>
                    <p> Easy</p>
                  </div>
                </div>
                <div className="duration">
                  <i className="fa-solid fa-clock"></i>
                  <p className="time">20 min</p>
                </div>
              </div>
            </div>
          </div>
          <div className="options">
            <button>
              <i className="far fa-bookmark"></i>
              <p>Save Room</p>
            </button>
            <div className="like">
              <button>
                <i className="fas fa-thumbs-up"></i>
                <p></p>
              </button>
              <button>
                <i className="fas fa-thumbs-down"></i>
                <p></p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing */}
      {/* Start Course */}
      <div className="course-lab1">
        <div className="container">
          <div className="row">
            <div className="faq-section-lab1" ref={faqSectionRef}>
              <dl className="section-text-lab1">
                {/*Intro*/}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Introduction</span>Intro to Digital Forensics
                </dt>
                <dd className="fadeInUp faq-body-lab1">
                  <h3>Welcome to the Digital Forensics Learning Room!</h3>
                  {/* <img src={logicflaw} alt="logic flaw img" id="explain-img" /> */}
                  <div className="desc">
                    <p>
                      In this section, we’ll introduce the concept of digital
                      forensics, focusing on how it enables investigators to
                      retrieve, analyze, and preserve digital evidence. You’ll
                      gain insight into the methodologies, tools, and ethical
                      considerations essential to uncovering and presenting
                      digital evidence in a legally admissible manner.
                    </p>
                  </div>
                  <h4>Labs:</h4>
                  <p>
                    If you’re ready to apply your knowledge in real-world
                    scenarios, access all the labs in this topic through the
                    link below.
                  </p>
                </dd>
                {/* Topic 1 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 1:</span> What is Digital Forensics?
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <p>
                    Digital forensics is the process of identifying, preserving,
                    analyzing, and presenting digital evidence in
                    investigations. This section will cover:
                  </p>
                  <ul>
                    <li>
                      The importance of digital forensics in modern
                      investigations.
                    </li>
                    <li>
                      Core concepts like evidence preservation, chain of
                      custody, and legal compliance.
                    </li>

                    <li>
                      <b>Key Areas Covered:</b>
                      <ul>
                        <li>Forensic methodologies.</li>
                        <li>Importance of ethical and legal considerations.</li>
                      </ul>
                    </li>
                  </ul>
                </dd>
                {/* Topic 2 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 2:</span>Types of Digital Forensics
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  {/* <img src={ExplainImg} alt="logic flaw img" id="explain-img" /> */}
                  <p>
                    Digital forensics is a diverse discipline with many branches
                    specializing in different aspects of investigation. This
                    section explores both traditional and emerging types of
                    digital forensics:
                  </p>
                  <ul>
                    <li>
                      <b>Computer Forensics:</b>
                      <ul>
                        <li>
                          <b>Focus:</b>Analyzing computers, hard drives, and
                          other storage devices for evidence.
                        </li>
                        <li>
                          <b>Applications:</b> Recovering deleted files,
                          analyzing file systems, and investigating user
                          activity.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b>Mobile Forensics:</b>
                      <ul>
                        <li>
                          <b>Focus:</b>Monitoring and analyzing network traffic
                          to detect anomalies or breaches.
                        </li>
                        <li>
                          <b>Applications:</b> Investigating unauthorized
                          access, denial-of-service attacks, and data
                          exfiltration.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b>Memory Forensics:</b>
                      <ul>
                        <li>
                          <b>Focus:</b>Extracting and analyzing volatile data
                          from a system's memory (RAM).
                        </li>
                        <li>
                          <b>Applications:</b> Detecting malware, analyzing
                          running processes, and retrieving sensitive data.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b>Cloud Forensics:</b>
                      <ul>
                        <li>
                          <b>Focus:</b>Investigating cloud-based platforms,
                          virtual environments, and data stored in cloud
                          systems.
                        </li>
                        <li>
                          <b>Applications:</b> Analyzing logs, tracking data
                          movement, and investigating breaches in cloud
                          environments.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b>Database Forensics:</b>
                      <ul>
                        <li>
                          <b>Focus:</b> Analyzing database systems for evidence
                          of tampering or unauthorized access.
                        </li>
                        <li>
                          <b>Applications:</b> Investigating SQL injection
                          attacks, recovering deleted records, and tracking
                          database activity.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b>IoT Forensics:</b>
                      <ul>
                        <li>
                          <b>Focus:</b>Investigating Internet of Things (IoT)
                          devices like smart home systems, wearable tech, and
                          industrial IoT.
                        </li>
                        <li>
                          <b>Applications:</b> Analyzing sensor logs, device
                          communication, and potential exploitation of IoT
                          vulnerabilities.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b>Email Forensics:</b>
                      <ul>
                        <li>
                          <b>Focus:</b> Examining emails for evidence of
                          phishing, fraud, or other malicious activity.
                        </li>
                        <li>
                          <b>Applications:</b>Identifying spoofed email
                          addresses, analyzing email headers, and retrieving
                          deleted emails.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b>Social Media Forensics:</b>
                      <ul>
                        <li>
                          <b>Focus:</b> Analyzing activity and content on social
                          media platforms for evidence.
                        </li>
                        <li>
                          <b>Applications:</b> Investigating online harassment,
                          social engineering attacks, and posts related to
                          criminal activities.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b>Multimedia Forensics:</b>
                      <ul>
                        <li>
                          <b>Focus:</b>Analyzing digital media files such as
                          images, videos, and audio for evidence of manipulation
                          or hidden data.
                        </li>
                        <li>
                          <b>Applications:</b> Detecting deepfakes, identifying
                          steganographic content, and verifying authenticity.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b>Vehicle Forensics:</b>
                      <ul>
                        <li>
                          <b>Focus:</b>Retrieving data from modern vehicles
                          equipped with digital systems.
                        </li>
                        <li>
                          <b>Applications:</b> Analyzing GPS data, crash logs,
                          and onboard diagnostics for investigation purposes.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b>Drone Forensics:</b>
                      <ul>
                        <li>
                          <b>Focus:</b>Investigating drones for evidence of
                          misuse or criminal activity.
                        </li>
                        <li>
                          <b>Applications:</b> Analyzing flight logs, onboard
                          cameras, and communication systems.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b>Malware Forensics:</b>
                      <ul>
                        <li>
                          <b>Focus:</b>Analyzing malicious software to
                          understand its behavior and origin.
                        </li>
                        <li>
                          <b>Applications:</b> Identifying malware capabilities,
                          tracing its source, and mitigating future attacks.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b>Gaming Forensics:</b>
                      <ul>
                        <li>
                          <b>Focus:</b>Investigating gaming consoles and
                          platforms for digital evidence.
                        </li>
                        <li>
                          <b>Applications:</b> Analyzing communication,
                          transactions, and other gaming activities.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b>Blockchain and Cryptocurrency Forensics:</b>
                      <ul>
                        <li>
                          <b>Focus:</b>Tracing and analyzing blockchain
                          transactions and cryptocurrency wallets.
                        </li>
                        <li>
                          <b>Applications:</b> Investigating financial fraud,
                          money laundering, and illegal transactions.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    <i>
                      In this section, you'll learn how to identify these
                      elements and understand how they impact API behavior
                      during testing.
                    </i>
                  </p>
                </dd>
                {/* Topic 3 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 3</span>Discovering API Documentation
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <p>
                    API documentation provides developers with the information
                    needed to interact with the API. This documentation can be
                    human-readable (for developers) or machine-readable (for
                    automated tasks). Even if API documentation is not publicly
                    available, you can use tools to uncover hidden documentation
                    by crawling through the application.
                  </p>
                  <ul>
                    <b>Where to Look:</b>
                    <li>
                      Endpoints like <code>/api</code>,{" "}
                      <code>/swagger/index.html</code>, or{" "}
                      <code>/openapi.json</code>
                      often provide documentation.
                    </li>
                    <li>
                      Burp Suite and other tools can help in identifying hidden
                      endpoints.
                    </li>
                  </ul>
                  <p>
                    <i>
                      By discovering the documentation, you can start
                      constructing test cases and simulate realistic API
                      requests.
                    </i>
                  </p>
                </dd>
                {/* Topic 4 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 4</span> Common API Vulnerabilities
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <p>
                    APIs can be vulnerable to a variety of attacks if not
                    properly tested. These include:
                  </p>
                  <ul>
                    <li>
                      <b>SQL Injection: </b> Attacks that exploit input
                      validation flaws to manipulate database queries.
                    </li>
                    <li>
                      <b>Parameter Pollution: </b> When attackers introduce
                      additional parameters that the server doesn't expect,
                      leading to unintended behaviors.
                    </li>
                    <li>
                      <b>Authentication Flaws:</b> If authentication mechanisms
                      (like API keys or tokens) are improperly configured, they
                      can be bypassed by attackers.
                    </li>
                  </ul>
                  <p>
                    <i>
                      In this section, we'll walk you through common API
                      vulnerabilities and how to test for them.
                    </i>
                  </p>
                </dd>
                {/* Topic 5 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 5</span> How to Test APIs
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <p>
                    To test an API effectively, you must simulate real-world
                    interactions. This involves:
                  </p>
                  <ul>
                    <li>
                      <b>Request Construction:</b> Crafting different HTTP
                      requests based on identified endpoints, parameters, and
                      methods.
                    </li>
                    <li>
                      <b>Testing Data Validation: </b> Ensure that only valid
                      data is processed by the API.
                    </li>
                    <li>
                      <b>Exploring Rate Limits and Authentication:</b> Check
                      whether the API enforces limits and restricts unauthorized
                      access.
                    </li>
                  </ul>
                </dd>
                {/* Topic 6 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 6:</span> Best Practices for API Testing
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <p>
                    To prevent vulnerabilities, adhere to these best practices:
                  </p>
                  <ul>
                    <li>
                      <b>Validate Input: </b> Always ensure that input data is
                      sanitized to avoid security flaws like SQL injection.
                    </li>
                    <li>
                      <b>Enforce Authentication and Authorization:</b> Properly
                      configure authentication and enforce access controls.
                    </li>
                    <li>
                      <b>Use Secure Development Practices: </b> Follow secure
                      coding guidelines to minimize the risk of API
                      vulnerabilities.
                    </li>
                    <li>
                      <b>Test Thoroughly:</b> Conduct both automated and manual
                      tests to detect any weaknesses in the API.
                    </li>
                    <li>
                      <b>Monitor APIs:</b> Continuously monitor API traffic for
                      abnormal patterns that could signal exploitation attempts.
                    </li>
                  </ul>
                </dd>
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 7: </span>Conclusion
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <p>
                    API testing is essential for securing web applications and
                    preventing unauthorized access to sensitive data. By
                    understanding API behavior, identifying vulnerabilities, and
                    following best practices, you can safeguard your
                    applications against potential attacks. Remember to always
                    review API documentation, simulate requests, test for common
                    vulnerabilities, and apply security measures to protect your
                    system. If you're ready to put your knowledge to the test,
                    you can access all of the labs in this topic from the link
                    below.
                  </p>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button onClick={handleGoToLab} className="go-to">
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
