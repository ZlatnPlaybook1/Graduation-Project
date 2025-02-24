import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import background from "../../assets/img/DigitalForensics/background.png";
import courseImage from "../../assets/img/DigitalForensics/courseImage.png";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import LandingLab from "../../Components/LandingLab/LandingLab.jsx";
import Go2TopBtn from "../../Components/Go2Top_Btn/Go2Top_Btn.jsx";
export default function Digital_Forensics() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();

  return (
    <>
      <Banner />
      <Header />
      {/* Start Landing */}
      <LandingLab
        background={background}
        backgroundStyle={{ objectFit: "cover", height: "100%", width: "100%" }}
        courseImage={courseImage}
        courseTitle="Digital Forensics"
        courseDescription="Learn how experts leverage digital forensics to investigate
                CyberCrimes, uncover evidence, and analyze digital footprints.
                Explore the tools and techniques used to recover deleted data,
                trace unauthorized access, and reconstruct malicious activities.
                Master the skills needed to identify breaches, secure digital
                evidence, and present findings in legal contexts to ensure
                justice and organizational security."
        difficulty="Intermediate"
        duration="30 min"
        onSaveRoom={() => console.log("Room Saved!")}
        onLike={() => console.log("Liked!")}
        onDislike={() => console.log("Disliked!")}
      />
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
                  <span>Topic 3</span>Metadata Analysis
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <ul>
                    <b>What You’ll Learn::</b>

                    <li>
                      Extracting metadata to uncover file history (creation,
                      modifications).
                    </li>
                    <li>Identifying tampered files or hidden information.</li>
                    <li>Tools: ExifTool for metadata analysis.</li>
                  </ul>
                </dd>
                {/* Topic 4 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 4</span> Network Traffic Analysis
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <p>Focus:</p>
                  <ul>
                    <li>
                      Analyzing network packets to detect suspicious activity or
                      attacks.
                    </li>
                    <li>
                      Use tools like Scapy and Tshark for network data
                      inspection.
                    </li>
                    <li>
                      <b>Practical Focus:</b> Identifying network threats,
                      unauthorized access, and data breaches.
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
                  <span>Topic 5</span> Common Digital Forensic Tools
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <p>Key Tools:</p>
                  <ul>
                    <li>
                      <b>FTK (Forensic Toolkit):</b>
                      Comprehensive investigation software.
                    </li>
                    <li>
                      <b>Volatility Framework:</b> Memory analysis and malware
                      detection.
                    </li>
                    <li>
                      <b>Autopsy:</b>Open-source forensic tool.
                    </li>
                    <li>
                      <b>Wireshark:</b>Network packet analysis.
                    </li>
                    <li>
                      <b>Focus:</b>Selecting and using the right tools based on
                      the forensic scenario.
                    </li>
                  </ul>
                </dd>
                {/* Topic 6 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 6:</span> Detecting Hidden Data (Steganography)
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <ul>
                    <li>
                      <b>Concept:</b> Hiding data within other media (images,
                      videos, audio).
                    </li>
                    <li>
                      <b>Hands-On:</b>{" "}
                      <ul>
                        <li>Detecting steganographic traces in files.</li>
                        <li>
                          Using tools to extract or embed hidden messages.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </dd>
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 7:</span> Best Practices in Digital Forensics
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <p></p>
                  <ul>
                    <li>
                      <b>Chain of Custody: </b>Preserve evidence integrity.
                    </li>

                    <li>
                      <b>Tool Validation: </b>Use reliable and validated
                      forensic tools.
                    </li>
                    <li>
                      <b>Documentation: </b>Record every step for credibility.
                    </li>
                    <li>
                      <b>Legal Compliance:</b>Ensure evidence is admissible in
                      court.
                    </li>
                  </ul>
                </dd>
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 8:</span> Conclusion
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <p>
                    <b>Summary:</b>Mastering digital forensics methodologies,
                    tools, and best practices allows for effective cybercrime
                    investigation. Engage with practical labs to hone your
                    skills in real-world scenarios.
                  </p>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() =>
                  handleGoToLab("/Digital_Forensics/Digital_Forensics_labs")
                }
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
