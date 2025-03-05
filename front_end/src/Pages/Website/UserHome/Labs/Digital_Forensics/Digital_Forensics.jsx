import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import "../../Components/Topics CSS/topics.css";
import background from "../../assets/img/DigitalForensics/background.png";
import courseImage from "../../assets/img/DigitalForensics/courseImage.png";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import CourseLanding from "../../Components/CourseLanding/CourseLanding.jsx";
import Go2TopBtn from "../../Components/Go2Top_Btn/Go2Top_Btn.jsx";
import ThemeSwitcher from "../../Components/ThemeSwitcher/ThemeSwitcher.jsx";
import digital1 from "../../assets/img/DigitalForensics/DigitalForensics.png"
import digital2 from "../../assets/img/DigitalForensics/DigitalForensics2.png"
import digital3 from "../../assets/img/DigitalForensics/DigitalForensics3.png"
export default function Digital_Forensics() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();

  return (
    <>
      <Banner />
      <Header />
      <ThemeSwitcher />
      {/* Start Landing */}
      <CourseLanding
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
      <div className="Content">
        <div className="secure-container" ref={faqSectionRef}>
          <div className="content-row">
            <div className="content-section">
              <dl className="topics-text">
                {/*Intro*/}
                <dt className="fadeInUp faq-header" id="border-left">
                  <span>Intro</span>Introduction To Digital Forensics
                </dt>
                <dd className="fadeInUp faq-body">

                  <img src={digital1} alt="" className="img-fluid w-50 mx-auto d-block" />
                  <hr />
                  <p>Forensics is the application of science to investigate crimes and establish facts. With the use and spread of digital systems, such as computers and smartphones, a new branch of forensics was born to investigate related crimes: computer forensics, which later evolved into, digital forensics.</p>
                  <p>Think about the following scenario. The law enforcement agents arrive at a crime scene; however, part of this crime scene includes digital devices and media. Digital devices include desktop computers, laptops, digital cameras, music players, and smartphones, to name a few. Digital media includes CDs, DVDs, USB flash memory drives, and external storage. A few questions arise:</p>
                  <ul>
                    <li><p>How should the police collect digital evidence, such as smartphones and laptops? What are the procedures to follow if the computer and smartphone are running?</p></li>
                    <li> <p>How to transfer the digital evidence? Are there certain best practices to follow when moving computers, for instance?</p></li>
                    <li>How to analyze the collected digital evidence? Personal device storage ranges between tens of gigabytes to several terabytes; how can this be analyzed?</li>
                  </ul>
                  <img src={digital2} alt="" className="img-fluid w-50 mx-auto d-block" />
                  <hr />
                  <p>Assuming this employee is suspected in the figure above, we can quickly see the digital devices that might be of interest to an investigation. We notice a tablet, a smartphone, a digital camera, and a USB flash memory in addition to a desktop computer. Any of these devices might contain a trove of information that can help with an investigation. Processing these as evidence would require digital forensics.</p>
                  <p>More formally, digital forensics is the application of computer science to investigate digital evidence for a legal purpose. Digital forensics is used in two types of investigations:</p>
                  <ul>
                    <li>
                      <p> <b className="content__subtitle me-2"> Public-sector investigations</b>refer to the investigations carried out by government and law enforcement agencies. They would be part of a crime or civil investigation.</p>
                    </li>
                    <li>
                      <p> <b className="content__subtitle me-2"> Private-sector investigations</b>refer to the investigations carried out by corporate bodies by assigning a private investigator, whether in-house or outsourced. They are triggered by corporate policy violations.</p>
                    </li>
                  </ul>
                  <p>Whether investigating a crime or a corporate policy violation, part of the evidence is related to digital devices and digital media. This is where digital forensics comes into play and tries to establish what has happened. Without trained digital forensics investigators, it won’t be possible to process any digital evidence properly.</p>
                  <img src={digital3} alt="" className="img-fluid w-50 mx-auto d-block" />
                  <hr />
                </dd>
                {/* Topic 1 */}
                <dt className="fadeInUp faq-header" id="border-left">
                  <span>Topic 1:</span> What is Digital Forensics?
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <p> <h3 className="content__title "> What is Digital Forensics?</h3>Digital forensics is the process of identifying, preserving,
                    analyzing, and presenting digital evidence in
                    investigations. This section will cover:</p>



                  <p>The importance of digital forensics in modern
                    investigations.</p>
                  <p>Core concepts like evidence preservation, chain of
                    custody, and legal compliance.</p>
                  <h3 className="content__title ">Key Areas Covered:</h3>
                  <li>Forensic methodologies.</li>
                  <li>Importance of ethical and legal considerations.</li>
                </dd>
                {/* Topic 2 */}
                <dt className="fadeInUp faq-header" id="border-left">
                  <span>Topic 2:</span>Types of Digital Forensics
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  {/* <img src={ExplainImg} alt="logic flaw img" id="explain-img" /> */}
                  <p>
                    Digital forensics is a diverse discipline with many branches
                    specializing in different aspects of investigation. This
                    section explores both traditional and emerging types of
                    digital forensics:
                  </p>
                  <ul>
                    <li>
                      <spam className="content__title" >Computer Forensics:</spam>
                      <ul>
                        <li>
                          <b className="content__subtitle me-2">Focus:</b>Analyzing computers, hard drives, and
                          other storage devices for evidence.
                        </li>
                        <li>
                          <b className="content__subtitle me-2">Applications:</b> Recovering deleted files,
                          analyzing file systems, and investigating user
                          activity.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className="content__title ">Mobile Forensics:</b>
                      <ul>
                        <li>
                          <b className="content__subtitle me-2">Focus:</b>Monitoring and analyzing network traffic
                          to detect anomalies or breaches.
                        </li>
                        <li>
                          <b className="content__subtitle me-2">Applications:</b> Investigating unauthorized
                          access, denial-of-service attacks, and data
                          exfiltration.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className="content__title ">Memory Forensics:</b>
                      <ul>
                        <li>
                          <b className="content__subtitle me-2">Focus:</b>Extracting and analyzing volatile data
                          from a system's memory (RAM).
                        </li>
                        <li>
                          <b className="content__subtitle me-2">Applications:</b> Detecting malware, analyzing
                          running processes, and retrieving sensitive data.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className="content__title ">Cloud Forensics:</b>
                      <ul>
                        <li>
                          <b className="content__subtitle me-2">Focus:</b>Investigating cloud-based platforms,
                          virtual environments, and data stored in cloud
                          systems.
                        </li>
                        <li>
                          <b className="content__subtitle me-2">Applications:</b> Analyzing logs, tracking data
                          movement, and investigating breaches in cloud
                          environments.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className="content__title ">Database Forensics:</b>
                      <ul>
                        <li>
                          <b className="content__subtitle me-2">Focus:</b> Analyzing database systems for evidence
                          of tampering or unauthorized access.
                        </li>
                        <li>
                          <b className="content__subtitle me-2">Applications:</b> Investigating SQL injection
                          attacks, recovering deleted records, and tracking
                          database activity.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className="content__title ">IoT Forensics:</b>
                      <ul>
                        <li>
                          <b className="content__subtitle me-2">Focus:</b>Investigating Internet of Things (IoT)
                          devices like smart home systems, wearable tech, and
                          industrial IoT.
                        </li>
                        <li>
                          <b className="content__subtitle me-2">Applications:</b> Analyzing sensor logs, device
                          communication, and potential exploitation of IoT
                          vulnerabilities.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className="content__title ">Email Forensics:</b>
                      <ul>
                        <li>
                          <b className="content__subtitle me-2">Focus:</b> Examining emails for evidence of
                          phishing, fraud, or other malicious activity.
                        </li>
                        <li>
                          <b className="content__subtitle me-2">Applications:</b>Identifying spoofed email
                          addresses, analyzing email headers, and retrieving
                          deleted emails.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className="content__title ">Social Media Forensics:</b>
                      <ul>
                        <li>
                          <b className="content__subtitle me-2">Focus:</b> Analyzing activity and content on social
                          media platforms for evidence.
                        </li>
                        <li>
                          <b className="content__subtitle me-2">Applications:</b> Investigating online harassment,
                          social engineering attacks, and posts related to
                          criminal activities.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className="content__title ">Multimedia Forensics:</b>
                      <ul>
                        <li>
                          <b className="content__subtitle me-2">Focus:</b>Analyzing digital media files such as
                          images, videos, and audio for evidence of manipulation
                          or hidden data.
                        </li>
                        <li>
                          <b className="content__subtitle me-2">Applications:</b> Detecting deepfakes, identifying
                          steganographic content, and verifying authenticity.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className="content__title ">Vehicle Forensics:</b>
                      <ul>
                        <li>
                          <b className="content__subtitle me-2">Focus:</b>Retrieving data from modern vehicles
                          equipped with digital systems.
                        </li>
                        <li>
                          <b className="content__subtitle me-2">Applications:</b> Analyzing GPS data, crash logs,
                          and onboard diagnostics for investigation purposes.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className="content__title ">Drone Forensics:</b>
                      <ul>
                        <li>
                          <b className="content__subtitle me-2">Focus:</b>Investigating drones for evidence of
                          misuse or criminal activity.
                        </li>
                        <li>
                          <b className="content__subtitle me-2">Applications:</b> Analyzing flight logs, onboard
                          cameras, and communication systems.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className="content__title ">Malware Forensics:</b>
                      <ul>
                        <li>
                          <b className="content__subtitle me-2">Focus:</b>Analyzing malicious software to
                          understand its behavior and origin.
                        </li>
                        <li>
                          <b className="content__subtitle me-2">Applications:</b> Identifying malware capabilities,
                          tracing its source, and mitigating future attacks.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className="content__title ">Gaming Forensics:</b>
                      <ul>
                        <li>
                          <b className="content__subtitle me-2">Focus:</b>Investigating gaming consoles and
                          platforms for digital evidence.
                        </li>
                        <li>
                          <b className="content__subtitle me-2">Applications:</b> Analyzing communication,
                          transactions, and other gaming activities.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className="content__title ">Blockchain and Cryptocurrency Forensics:</b>
                      <ul>
                        <li>
                          <b className="content__title "> Focus:</b>Tracing and analyzing blockchain
                          transactions and cryptocurrency wallets.
                        </li>
                        <li>
                          <b className="content__subtitle me-2">Applications:</b> Investigating financial fraud,
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
                <dt className="fadeInUp faq-header" id="border-left">
                  <span>Topic 3</span>Metadata Analysis
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <ol>
                    <b className="content__subtitle me-2">What You’ll Learn:</b>


                    <li>
                      Extracting metadata to uncover file history (creation,
                      modifications).
                    </li>
                    <li>Identifying tampered files or hidden information.</li>
                    <li>Tools: ExifTool for metadata analysis.</li>
                  </ol>
                </dd>
                {/* Topic 4 */}
                <dt className="fadeInUp faq-header" id="border-left">
                  <span>Topic 4</span> Network Traffic Analysis
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <b className="content__title me-2">Focus:</b>

                  <ol>
                    <li>
                      Analyzing network packets to detect suspicious activity or
                      attacks.
                    </li>
                    <li>
                      Use tools like Scapy and Tshark for network data
                      inspection.
                    </li>
                  </ol>


                  <b className="content__subtitle">Practical Focus:</b> Identifying network threats,
                  unauthorized access, and data breaches.


                  <p>
                    <i>
                      In this section, we'll walk you through common API
                      vulnerabilities and how to test for them.
                    </i>
                  </p>
                </dd>
                {/* Topic 5 */}
                <dt className="fadeInUp faq-header" id="border-left">
                  <span>Topic 5</span> Common Digital Forensic Tools
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <b className="content__title me-2">Key Tools:</b>

                  <ol>
                    <li>
                      <b className="content__subtitle me-2">FTK (Forensic Toolkit):</b>
                      Comprehensive investigation software.
                    </li>
                    <li>
                      <b className="content__subtitle me-2">Volatility Framework:</b> Memory analysis and malware
                      detection.
                    </li>
                    <li>
                      <b className="content__subtitle me-2">Autopsy:</b>Open-source forensic tool.
                    </li>
                    <li>
                      <b className="content__subtitle me-2">Wireshark:</b>Network packet analysis.
                    </li>
                    <li>
                      <b className="content__subtitle me-2">Focus:</b>Selecting and using the right tools based on
                      the forensic scenario.
                    </li>
                  </ol>
                </dd>
                {/* Topic 6 */}
                <dt className="fadeInUp faq-header" id="border-left">
                  <span>Topic 6:</span> Detecting Hidden Data (Steganography)
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <ul>
                    <li>
                      <b className="content__subtitle">Concept:</b> Hiding data within other media (images,
                      videos, audio).
                    </li>
                    <li>
                      <b className="content__title">Hands-On:</b>{" "}
                      <ol>
                        <li>Detecting steganographic traces in files.</li>

                        <li>
                          Using tools to extract or embed hidden messages.
                        </li>
                      </ol>
                    </li>
                  </ul>
                </dd>
                {/* Topic 7 */}
                <dt className="fadeInUp faq-header" id="border-left">
                  <span>Topic 7:</span> Best Practices in Digital Forensics
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <p></p>
                  <ol>
                    <li>
                      <b className="content__subtitle me-2">Chain of Custody:</b>Preserve evidence integrity.
                    </li>

                    <li>
                      <b className="content__subtitle me-2">Tool Validation:</b>Use reliable and validated
                      forensic tools.
                    </li>
                    <li>
                      <b className="content__subtitle me-2">Documentation:</b>Record every step for credibility.
                    </li>
                    <li>
                      <b className="content__subtitle me-2">Legal Compliance:</b>Ensure evidence is admissible in
                      court.
                    </li>
                  </ol>
                </dd>
                {/* Topic 8 */}
                <dt className="fadeInUp faq-header" id="border-left">
                  <span>Topic 8:</span> Conclusion
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <p>
                    <b className="content__subtitle me-2">Summary:</b>Mastering digital forensics methodologies,
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
