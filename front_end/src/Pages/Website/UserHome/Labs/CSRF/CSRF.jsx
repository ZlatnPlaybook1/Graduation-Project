import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Banner from "../../Banner/Banner";
import background from "../../assets/img/CSRF/background.svg";
import courseImage from "../../assets/img/CSRF/CourseImage.png";
import UseFaqSection from "../../UseFaqSection/UseFaqSection.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LandingLab from "../../LandingLab/LandingLab.jsx";
import Go2TopBtn from "../../Go2Top_Btn/Go2Top_Btn.jsx";
export default function CSRF() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();

  return (
    <>
      <Banner />
      <Header />
      {/* Start Landing */}
      <LandingLab
        background={background}
        backgroundStyle={{  objectFit:"cover",
                            height: "100%",
                            width: "100%",}}
                courseImage={courseImage}
        courseTitle="Cross-Site Request Forgery (CSRF)"
        courseDescription="Discover how attackers exploit CSRF vulnerabilities to perform
                unauthorized actions on behalf of authenticated users without
                their consent. Learn the strategies to detect, mitigate, and
                safeguard web applications against such attacks, ensuring robust
                protection for your users."
        difficulty="Intermediate"
        duration="30 min"
        onSaveRoom={() => console.log("Room Saved!")}
        onLike={() => console.log("Liked!")}
        onDislike={() => console.log("Disliked!")}
      />
      {/* End Landing */}
      {/* Start Course */}
      <div className="course-labd">
        <div className="container">
          <div className="row">
            <div className="faq-section-labd" ref={faqSectionRef}>
              <dl className="section-text-labd">
                {/* Intro */}
                <dt
                  className="wave-labd fadeInUp faq-header-labd"
                  id="border-left"
                >
                  <span>Introduction </span> Introduction to CSRF
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <h3>
                    Welcome to the Cross-Site Request Forgery (CSRF) Learning
                    Room!
                  </h3>
                  <div className="desc">
                    <h4>What is CSRF?</h4>
                    <p>
                      Cross-Site Request Forgery (CSRF) is a web security
                      vulnerability that forces a user’s browser to execute
                      unwanted actions on a trusted website where the user is
                      currently authenticated. By leveraging the user’s
                      credentials (such as cookies or tokens), attackers can
                      make malicious requests appear as if they originated from
                      the victim. CSRF often targets state-changing requests,
                      such as fund transfers, password changes, or sensitive
                      data updates.
                    </p>
                  </div>
                  <mark>Key Topics Covered:</mark>
                  <ol>
                    <li>
                      <span className="pink-note">
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        Understanding CSRF
                      </span>
                       : Overview of how CSRF attacks
                      work and their impact.
                    </li>
                    <li>
                      <span className="pink-note">
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        How CSRF Attacks Work
                      </span>
                      : Detailed mechanics and
                      common techniques used in CSRF exploitation.
                    </li>
                    <li>
                      <span className="pink-note">
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        CSRF vs. XSS
                      </span>
                      : The differences between CSRF and
                      Cross-Site Scripting (XSS) attacks.
                    </li>
                    <li>
                      <span className="pink-note">
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        Real-World CSRF Examples
                      </span>
                      : Practical examples
                      demonstrating the impact of CSRF vulnerabilities.
                    </li>
                    <li>
                      <span className="pink-note">
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        CSRF Prevention Techniques
                      </span>
                      : Best practices to
                      secure applications, such as CSRF tokens and SameSite
                      cookies.
                    </li>
                  </ol>
                </dd>
                {/* Topic 1 */}
                <dt
                  className="wave-labd fadeInUp faq-header-labd"
                  id="border-left"
                >
                  <span>Topic 1</span> Understanding CSRF
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <ul>
                    <li>
                      <b>Definition:</b>CSRF exploits the trust a web
                      application has in the user’s browser by sending
                      unauthorized requests to a site while the user is logged
                      in.
                    </li>
                    <li>
                      <b>Why It Matters:</b>CSRF attacks can bypass
                      authentication mechanisms by tricking the victim into
                      unknowingly executing harmful actions.
                    </li>
                    <li>
                      <b>Impact:</b>Although the attacker cannot see the
                      response, they can modify sensitive information or trigger
                      critical actions on the victim’s behalf.
                    </li>
                  </ul>
                </dd>
                {/* Topic 2 */}
                <dt
                  className="wave-labd fadeInUp faq-header-labd"
                  id="border-left"
                >
                  <span>Topic 2</span> How CSRF Attacks Work
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <ul>
                    <li>
                      <b>Step-by-Step Breakdown:</b>
                      <ol>
                        <li>
                          The user logs into a trusted website (e.g., a bank).
                        </li>
                        <li>
                          The attacker tricks the user into clicking a malicious
                          link or visiting an attacker-controlled page.
                        </li>
                        <li>
                          The browser sends an authenticated request to the
                          trusted site (using the user’s session cookies).
                        </li>
                        <li>
                          The server processes the request because it assumes it
                          is from the user.
                        </li>
                      </ol>
                    </li>

                    <li>
                      <b>Common Techniques Used:</b>
                      <ol>
                        <li>
                          Hidden forms ( <mark>&lt;form &gt; </mark> with
                          auto-submit).
                        </li>
                        <li>
                          Malicious image tags (e.g.,{" "}
                          <mark>
                            &lt; img
                            src="https://bank.com/transfer?amount=1000&to=attacker"&gt;
                          </mark>
                          ).
                        </li>
                        <li>JavaScript-based automated requests.</li>
                        <li>Links disguised as legitimate content.</li>
                      </ol>
                    </li>
                  </ul>
                </dd>
                {/* Topic 3 */}
                <dt
                  className="wave-labd fadeInUp faq-header-labd"
                  id="border-left"
                >
                  <span>Topic 3</span> CSRF vs. XSS
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <table border={3}>
                    <caption>
                      Simple Comparison between <b>CSRF</b> & <b>XSS</b>
                    </caption>
                    <thead>
                      <tr>
                        <th>
                          <b>CSRF</b> (Cross-Site Request Forgery)
                        </th>
                        <th>
                          <b>XSS </b>(Cross-Site Scripting)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Exploits the trust between the website and the
                          authenticated user.
                        </td>
                        <td>
                          Exploits the trust between the user and the website.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Typically used to execute actions on behalf of the
                          user without their consent.
                        </td>
                        <td>
                          Allows the attacker to inject malicious scripts into
                          web pages viewed by users.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          No need for the attacker to inject malicious scripts
                          into the trusted site.
                        </td>
                        <td>
                          Often used to steal sensitive data (e.g., cookies,
                          session tokens) or perform actions via the script.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </dd>
                {/* Topic 4 */}
                <dt
                  className="wave-labd fadeInUp faq-header-labd"
                  id="border-left"
                >
                  <span>Topic 4</span> Real-World CSRF Examples
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <ul>
                    <li>
                      <b>Unauthorized Fund Transfers:</b> Example: A user logged
                      into their banking account unknowingly clicks a link
                      crafted by the attacker, transferring funds to the
                      attacker’s account.
                    </li>

                    <li>
                      <b>Changing Account Settings:</b> Example: CSRF requests
                      change the victim’s email address or password on a trusted
                      site.
                    </li>
                    <li>
                      <b>Social Media Spam:</b>Example: Posting spam content or
                      sending friend requests on behalf of the victim.
                    </li>
                    <li>
                      <b>Deleting or Modifying Data:</b> Example: CSRF attacks
                      delete files, cancel orders, or change critical
                      configuration settings.
                    </li>
                  </ul>
                </dd>
                {/* Topic 5 */}
                <dt
                  className="wave-labd fadeInUp faq-header-labd"
                  id="border-left"
                >
                  <span>Topic 5</span> CSRF Prevention Techniques
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <ul>
                    <li>
                      <b>CSRF Tokens (Synchronizer Token Pattern):</b>
                      <ol>
                        <li>
                          Each form or state-changing request includes a unique,
                          unpredictable token generated by the server.
                        </li>
                        <li>
                          The server validates the token before processing the
                          request.
                        </li>
                        <li>
                          If the token is missing or incorrect, the request is
                          rejected.
                        </li>
                      </ol>
                    </li>

                    <li>
                      <b>SameSite Cookies:</b>

                      <ol>
                        <li>
                          The <mark>SameSite</mark> attribute prevents cookies
                          from being sent with cross-origin requests.
                        </li>
                        <li>
                          <b>Policies:</b>
                          <ul>
                            <li>
                              <mark>Strict</mark>: Cookies are sent only for
                              same-origin requests.
                            </li>
                            <li>
                              <mark>Lax</mark>: Cookies are sent for same-site
                              GET requests.
                            </li>
                            <li>
                              <mark>None</mark>: Cookies are sent regardless of
                              origin (requires <mark>Secure</mark> flag for
                              HTTPS).
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <b>Referer and Origin Header Validation:</b>
                      <ol>
                        <li>
                          The server checks the <mark>Referer</mark> or
                          <mark>Origin</mark> header of incoming requests.
                        </li>
                        <li>
                          Ensures the request originates from a trusted domain.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <b>Custom Headers:</b>
                      <ol>
                        <li>
                          Require requests to include a custom header (e.g.,
                          <mark>X-CSRF-Token</mark> ), which browsers don’t send
                          by default.
                        </li>
                        <li>
                          Ensures that only requests crafted by the client’s
                          front-end are processed.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <b>Secure Request Methods:</b>
                      <ol>
                        <li>
                          Avoid using GET requests for state-changing actions.
                        </li>
                        <li>
                          Use POST, PUT, or DELETE with proper validation.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <b>User Education:</b>
                      <ol>
                        <li>
                          Warn users about clicking untrusted links, especially
                          while logged into sensitive applications.
                        </li>
                      </ol>
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() => handleGoToLab("/CSRF/CSRF_labs")}
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
