import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./Regex.css";
import "../Page_Styles/Content_sec.css";
import background from "../../assets/img/Regex/background.png";
import courseImage from "../../assets/img/Regex/courseImage.png";
import UseFaqSection from "../../UseFaqSection/UseFaqSection.jsx";
import LandingLab from "../../LandingLab/LandingLab.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Regex() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();

  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingLab
        background={background}
        imagecourse={courseImage}
        courseTitle="Regular Expressions"
        courseDescription="Learn how attackers leverage regular expressions (regex) for
                pattern matching in malicious scripts, data exfiltration, and
                crafting payloads. Explore how security professionals use regex
                to identify vulnerabilities, analyze logs, detect threats, and
                filter malicious inputs. Master techniques to create robust
                regex patterns to safeguard applications from injection attacks
                and unauthorized access."
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
                  <span>Topic 1</span>Introduction
                </dt>
                <dd className="fadeInUp faq-body-labd">
                  <div className="faq-content">
                    <p>
                      <mark>What are regular expressions?</mark> <br />
                      Regular expressions (or Regex) are patterns of text that
                      you define to search documents and match exactly what
                      you're looking for.
                    </p>
                    <p>
                      <mark>Why should I learn how to use them?</mark> <br />
                      Even if you won't need them sooner or later, it's a great
                      tool to know how to use. It will make you more capable in
                      CTF's, and potentially a better developer if that's a goal
                      you have. You spend a little time learning it and save
                      yourself lots of time in the long run by using it.
                    </p>
                    <p>
                      <mark>I know all that, but I'm lazy.</mark> <br />
                      This is a lazy person's tutorial. There's a little
                      reading, and then you learn by doing.
                    </p>
                    <p>
                      <mark>Where's the 'Deploy' button?</mark> <br />
                      <b>There's no machine to deploy.</b>There are two ways to
                      test your expressions. Either:
                      <br />
                      <ol>
                        <li>
                          create a text file with some test paragraphs (in a
                          Unix machine) and then use egrep{" "}
                          <pre>
                            <code> &lt;pattern&gt; &lt;file&gt; </code>
                          </pre>
                          to see what matches and what doesn't, or
                        </li>
                        <li>
                          use an online editor like{" "}
                          <span
                            href="https://regexr.com/"
                            className="link underline"
                          >
                            https://regexr.com/
                          </span>
                          . You can add your own text in the "Text" field, and
                          then type your expressions (patterns) in the
                          "Expression" field.
                        </li>
                      </ol>
                      <div className="pink-note">
                        I recommend the second way.
                      </div>
                    </p>
                  </div>
                </dd>

                {/* Topic 2*/}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 2</span>Charsets
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content">
                    <p>
                      When searching for a specific string in a file or block of
                      text, you can search for it as is, with{" "}
                      <pre>
                        <code> grep 'string' &lt;file&gt; </code>
                      </pre>
                      . But what happens if you want to search for{" "}
                      <b> patterns of text?</b> For example, you could be
                      looking for a word that starts with a specific letter, or
                      any words that end with numbers. That's where Regular
                      Expressions come in.
                    </p>
                  </div>
                </dd>

                {/* Topic 3 */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 3</span>Hashing use cases in cybersecurity
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content"></div>
                </dd>

                {/* Topic 4*/}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 4</span>Hashing benefits in cybersecurity
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content"></div>
                </dd>

                {/* Topic 5 */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 5</span>Limitations of hashing
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content"></div>
                </dd>
                {/* Topic 6 */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 6</span>Hashing vs. encryption
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content"></div>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() => handleGoToLab("/Regex/Regex_labs")}
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
