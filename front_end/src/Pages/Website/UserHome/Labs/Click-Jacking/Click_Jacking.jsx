import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "../../Components/Topics CSS/topics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import background from "../../assets/img/Click_Jacking/background.svg";
import courseImage from "../../assets/img/Click_Jacking/courseImage.png";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import LandingLab from "../../Components/LandingLab/LandingLab.jsx";
import Go2TopBtn from "../../Components/Go2Top_Btn/Go2Top_Btn.jsx";
export default function Click_Jacking() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();

  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingLab
        background={background}
        backgroundStyle={{ left: "70%", objectFit: "cover", height: "100%" }}
        courseImage={courseImage}
        courseTitle="Click Jacking"
        courseDescription=" Learn how attackers exploit access control vulnerabilities in
                web applications, gaining unauthorized access to sensitive areas
                or data, and the techniques used to detect and prevent these
                attacks."
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
                {/* Topic 1 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 1</span>What is Clickjacking in Cybersecurity?
                </dt>
                <dd className="fadeInUp faq-body">
                  <div className="faq-content">
                    <p>
                      <mark>Clickjacking</mark> is a malicious technique where
                      an attacker tricks a user into clicking on something
                      different from what the user perceives. This is typically
                      done by placing a transparent iframe or a hidden element
                      over a legitimate clickable element on a website. The user
                      thinks they are interacting with the visible content, but
                      in reality, their click is being redirected to an
                      unintended action, such as downloading malware or changing
                      settings on their account.
                    </p>
                    <p>
                      The main risk of clickjacking is that it can lead to
                      security vulnerabilities such as unauthorized actions,
                      data theft, or even compromise of sensitive accounts and
                      transactions.
                    </p>
                    <p>
                      <b>Key Points about Clickjacking:</b>
                      <br />
                      - Clickjacking attacks are deceptive and often unnoticed
                      by the user.
                      <br />
                      - It can target buttons, links, forms, or even interactive
                      content like videos.
                      <br />- Users may be tricked into sharing sensitive data
                      or performing harmful actions unknowingly.
                    </p>
                  </div>
                </dd>

                {/* Topic 2*/}
                <dt className="fadeInUp faq-header">
                  <span>Topic 2</span>Common Clickjacking Techniques
                </dt>
                <dd className="fadeInUp faq-body">
                  <div className="faq-content">
                    <p>
                      There are various techniques attackers use to execute a
                      clickjacking attack. Understanding these techniques can
                      help in mitigating and preventing such attacks.
                    </p>
                    <p>
                      <mark>Common Clickjacking Techniques Include:</mark>
                      <ol>
                        <li>
                          <span className="pink-note">Invisible iFrames:</span>{" "}
                          Attackers place an invisible iframe over a legitimate
                          clickable element to capture clicks without the user’s
                          knowledge.
                        </li>
                        <li>
                          <span className="pink-note">Transparent Layers:</span>{" "}
                          Transparent layers can be used over interactive
                          buttons or links to hijack clicks.
                        </li>
                        <li>
                          <span className="pink-note">
                            Misleading Visual Elements:
                          </span>{" "}
                          The attacker uses elements that look like legitimate
                          buttons or pop-ups but perform malicious actions when
                          clicked.
                        </li>
                      </ol>
                    </p>
                  </div>
                </dd>

                {/* Topic 3 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 3</span>How to Prevent Clickjacking Attacks
                </dt>
                <dd className="fadeInUp faq-body">
                  <div className="faq-content">
                    <p>
                      Preventing clickjacking attacks requires a combination of
                      technical measures and best practices to safeguard the
                      integrity of the web application.
                    </p>
                    <p>
                      <mark>Effective Prevention Techniques Include:</mark>
                      <ol>
                        <li>
                          <span className="pink-note">
                            X-Frame-Options Header:
                          </span>{" "}
                          This HTTP header can prevent the page from being
                          embedded in an iframe, which is a common clickjacking
                          attack vector.
                        </li>
                        <li>
                          <span className="pink-note">
                            Content Security Policy (CSP):
                          </span>{" "}
                          The CSP directive can be configured to block pages
                          from being embedded in frames from untrusted sources.
                        </li>
                        <li>
                          <span className="pink-note">
                            JavaScript Frame Busting:
                          </span>{" "}
                          JavaScript can be used to prevent the page from being
                          embedded in an iframe by detecting the presence of the
                          iframe and breaking out of it.
                        </li>
                      </ol>
                    </p>
                  </div>
                </dd>

                {/* Topic 4*/}
                <dt className="fadeInUp faq-header">
                  <span>Topic 4</span>Impact of Clickjacking on Cybersecurity
                </dt>
                <dd className="fadeInUp faq-body">
                  <div className="faq-content">
                    <p>
                      Clickjacking is a significant cybersecurity threat that
                      can lead to severe consequences if not prevented. It can
                      undermine trust in online services, compromise personal
                      data, and cause damage to a website’s reputation.
                    </p>
                    <ol className="oList">
                      <li>
                        <span className="pink-note">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />{" "}
                          Data Theft:
                        </span>{" "}
                        Users may unknowingly share sensitive information,
                        including login credentials, personal details, and
                        payment data.
                      </li>
                      <li>
                        <span className="pink-note">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />{" "}
                          Unauthorized Transactions:
                        </span>{" "}
                        Attackers can trigger financial transactions or actions
                        that the user didn’t intend.
                      </li>
                      <li>
                        <span className="pink-note">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />{" "}
                          Loss of User Trust:
                        </span>{" "}
                        Users may lose trust in websites and services that are
                        susceptible to clickjacking attacks.
                      </li>
                      <li>
                        <span className="pink-note">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="me-2"
                          />{" "}
                          Malicious Software Installation:
                        </span>{" "}
                        Attackers can cause users to unknowingly download
                        malware or ransomware.
                      </li>
                    </ol>
                  </div>
                </dd>
                <dt className="fadeInUp faq-header">
                  <span>Topic 5</span>Detecting Clickjacking Vulnerabilities
                </dt>
                <dd className="fadeInUp faq-body">
                  <div className="faq-content">
                    <p>
                      Detecting clickjacking vulnerabilities in a website or web
                      application is crucial to prevent potential attacks. While
                      manual testing can help identify issues, automated tools
                      can also assist in detecting vulnerabilities.
                    </p>
                    <p>
                      <mark>Detection Methods Include:</mark>
                      <ol>
                        <li>
                          <span className="pink-note">Manual Inspection:</span>{" "}
                          Review the website for embedded iframes, transparent
                          layers, and improper use of third-party content that
                          could be manipulated for clickjacking.
                        </li>
                        <li>
                          <span className="pink-note">
                            Automated Security Scanners:
                          </span>{" "}
                          Use tools like OWASP ZAP or Burp Suite to scan for
                          potential clickjacking vulnerabilities by identifying
                          missing headers or improper embedding techniques.
                        </li>
                        <li>
                          <span className="pink-note">
                            Browser Developer Tools:
                          </span>{" "}
                          Use developer tools (e.g., Chrome DevTools) to inspect
                          the DOM structure and identify hidden iframes or
                          elements that might be used for clickjacking.
                        </li>
                      </ol>
                    </p>
                  </div>
                </dd>
                <dt className="fadeInUp faq-header">
                  <span>Topic 6</span>Real-World Examples of Clickjacking
                  Attacks
                </dt>
                <dd className="fadeInUp faq-body">
                  <div className="faq-content">
                    <p>
                      There have been several well-documented real-world
                      incidents where clickjacking was used as an attack vector.
                      Learning from these examples can help us better understand
                      the risks and impact of this threat.
                    </p>
                    <p>
                      <mark>Notable Clickjacking Incidents:</mark>
                      <ul>
                        <li>
                          <span className="pink-note">
                            Facebook Likejacking:
                          </span>{" "}
                          Attackers embedded a hidden iframe over the "Like"
                          button on Facebook pages, tricking users into liking
                          malicious content without their consent.
                        </li>
                        <li>
                          <span className="pink-note">
                            YouTube Clickjacking:
                          </span>{" "}
                          Attackers used transparent layers to create fake play
                          buttons on YouTube, directing users to malicious
                          websites or installing malware when clicked.
                        </li>
                        <li>
                          <span className="pink-note">
                            PayPal Clickjacking:
                          </span>{" "}
                          A clickjacking attack targeted PayPal users, causing
                          them to unintentionally transfer money to an
                          attacker’s account while thinking they were confirming
                          their PayPal credentials.
                        </li>
                      </ul>
                    </p>
                  </div>
                </dd>
                <dt className="fadeInUp faq-header">
                  <span>Topic 7</span>Legal and Ethical Implications of
                  Clickjacking
                </dt>
                <dd className="fadeInUp faq-body">
                  <div className="faq-content">
                    <p>
                      Clickjacking attacks not only pose a technical threat but
                      also have legal and ethical implications. These attacks
                      can lead to legal action against attackers and companies
                      who fail to protect their users.
                    </p>
                    <p>
                      <mark>Legal and Ethical Considerations:</mark>
                      <ul>
                        <li>
                          <span className="pink-note">
                            Violation of Privacy:
                          </span>{" "}
                          Clickjacking can result in the unauthorized collection
                          of user data or actions that violate privacy laws,
                          such as GDPR.
                        </li>
                        <li>
                          <span className="pink-note">Cybercrime Laws:</span>{" "}
                          Many countries have cybercrime laws that make
                          clickjacking a punishable offense, potentially leading
                          to fines or imprisonment for perpetrators.
                        </li>
                        <li>
                          <span className="pink-note">
                            Ethical Responsibility:
                          </span>{" "}
                          Website owners have an ethical responsibility to
                          protect users from attacks, including clickjacking, by
                          implementing best practices like X-Frame-Options
                          headers and educating users on security risks.
                        </li>
                      </ul>
                    </p>
                  </div>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() =>
                  handleGoToLab("/Click_Jacking/Click_Jacking_labs")
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
