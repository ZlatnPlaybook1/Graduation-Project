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
                    <p>
                      Both of the aforementioned problems can be solved by using{" "}
                      <b>charsets.</b>A charset is defined by enclosing in{" "}
                      <pre>
                        <code> [ </code>
                      </pre>
                      square brackets
                      <pre>
                        <code> ] </code>
                      </pre>
                      the character(s), or range of characters that you want to
                      match. Then, it finds <b>every occurrence</b> of the
                      pattern you have defined in the file/text you are
                      searching.
                    </p>
                    <p>
                      <pre>
                        <code>[abc]</code>
                      </pre>
                      will match
                      <pre>
                        <code>a</code>
                      </pre>
                      ,
                      <pre>
                        <code>b</code>
                      </pre>
                      , and
                      <pre>
                        <code>c</code>
                      </pre>
                      (every occurrence of each letter).
                    </p>
                    <p>
                      <pre>
                        <code>[abc]</code>
                      </pre>
                      will match
                      <pre>
                        <code>azz</code>
                      </pre>
                      ,
                      <pre>
                        <code>bzz</code>
                      </pre>
                      , and
                      <pre>
                        <code>czz</code>
                      </pre>
                    </p>
                    <p>
                      You can also use a
                      <pre>
                        <code> - </code>
                      </pre>
                      dash to define ranges:
                    </p>
                    <p>
                      <pre>
                        <code> [a-c]zz </code>
                      </pre>
                      is the same as above.
                    </p>
                    <p>
                      And then you can combine ranges together: <br />
                      <pre>
                        <code>[a-cx-z]zz</code>
                      </pre>{" "}
                      will match
                      <pre>
                        <code>azz</code>
                      </pre>
                      ,
                      <pre>
                        <code>bzz</code>
                      </pre>
                      ,
                      <pre>
                        <code>czz</code>
                      </pre>
                      ,
                      <pre>
                        <code>xzz</code>
                      </pre>
                      ,
                      <pre>
                        <code>yzz</code>
                      </pre>
                      , and
                      <pre>
                        <code>zzz</code>
                      </pre>
                      .
                    </p>
                    <p>
                      {" "}
                      Most notably, this can be used to match any alphabetical
                      character: <br />{" "}
                      <pre>
                        <code> [a-zA-Z] </code>
                      </pre>{" "}
                      will match any <b>single</b> letter (lowercase or
                      uppercase).
                    </p>
                    <p>
                      You can use numbers too: <br />
                      <pre>
                        <code> file[1-3] </code>
                      </pre>{" "}
                      will match{" "}
                      <pre>
                        <code>file1</code>
                      </pre>
                      ,
                      <pre>
                        <code>file2</code>
                      </pre>
                      , and
                      <pre>
                        <code>file3</code>
                      </pre>
                      .
                    </p>
                    <p>
                      Then, there is a way to <b>exclude</b> characters from a
                      charset with the{" "}
                      <pre>
                        <code> ^ </code>
                      </pre>{" "}
                      hat symbol, and include everything else.
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
                  <span>Topic 4</span>Metacharacters and repetitions
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content">
                    <p>
                      There are easier ways to match bigger charsets. For
                      example,
                      <pre>
                        <code> \d </code>
                      </pre>{" "}
                      is used to match any <b>single</b> digit. Here's a
                      reference:
                      <ul>
                        <li>
                          <pre>
                            <code> \d </code>
                          </pre>
                          matches a digit, like
                          <pre>
                            <code> 9 </code>.
                          </pre>
                        </li>
                        <li>
                          <pre>
                            <code> \D </code>
                          </pre>
                          matches a non-digit, like
                          <pre>
                            <code> A </code>
                          </pre>
                          or
                          <pre>
                            <code> @ </code>
                          </pre>
                        </li>
                        <li>
                          <pre>
                            <code> \w </code>
                          </pre>
                          matches an alphanumeric character, like
                          <pre>
                            <code> a </code>
                          </pre>
                          or
                          <pre>
                            <code> 3 </code>
                          </pre>
                        </li>
                        <li>
                          <pre>
                            <code> \W </code>
                          </pre>
                          matches a non-alphanumeric character, like
                          <pre>
                            <code> ! </code>
                          </pre>
                          or
                          <pre>
                            <code> # </code>
                          </pre>
                        </li>
                        <li>
                          <pre>
                            <code> \s </code>
                          </pre>
                          matches a whitespace character (spaces, tabs, and line
                          breaks)
                        </li>
                        <li>
                          <pre>
                            <code> \S </code>
                          </pre>
                          matches everything else (alphanumeric characters and
                          symbols)
                        </li>
                      </ul>
                    </p>
                  </div>
                </dd>

                {/* Topic 5 */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 5</span>Starts with/ ends with, groups, and
                  either/ or
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content">
                    <p>
                      Sometimes it's very useful to specify that we want to
                      search by a certain pattern{" "}
                      <b> in the beginning or the end of a line. </b>We do that
                      with these characters: <br />
                      <ul>
                        <li>
                          <pre>
                            <code> ^ </code>
                          </pre>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="mx-2"
                          />
                          <b>Start with</b>
                        </li>
                        <li>
                          <pre>
                            <code> $ </code>
                          </pre>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="mx-2"
                          />
                          <b>End with</b>
                        </li>
                      </ul>
                    </p>
                    <p>
                      So for example, if you want to search for a line that{" "}
                      <b>starts with </b>
                      <pre>
                        <code>abc</code>
                      </pre>
                      , you can use{" "}
                      <pre>
                        <code>^abc</code>
                      </pre>
                      . If you want to search for a line that ends with{" "}
                      <pre>
                        <code>xyz</code>
                      </pre>
                      , you can use{" "}
                      <pre>
                        <code>xyz$</code>
                      </pre>
                      .
                    </p>
                    <div className="note">
                      Note: The{" "}
                      <pre>
                        <code> ^ </code>
                      </pre>{" "}
                      hat symbol is used to exclude a charset when enclosed in
                      <pre>
                        <code> [ </code>
                      </pre>
                      square brackets{" "}
                      <pre>
                        <code> ] </code>
                      </pre>
                      , but when it is not, it is used to specify the beginning
                      of a word.
                    </div>
                    <p>
                      You can also define groups by enclosing a pattern in
                      <pre>
                        <code> ( </code>
                      </pre>
                      parentheses
                      <pre>
                        <code> ) </code>
                      </pre>
                      . This function can be used for many ways that are not in
                      the scope of this tutorial. We will use it to define an{" "}
                      <b>either/or</b> pattern, and also to repeat patterns. To
                      say "or" in Regex, we use the{" "}
                      <pre>
                        <code> | </code>
                      </pre>
                      pipe.
                    </p>
                    <p>
                      For an "either/or" pattern example, the pattern{" "}
                      <pre>
                        <code> during the (day|night) </code>
                      </pre>
                      will match both of these sentences:{" "}
                      <pre>
                        <code>during the day</code>
                      </pre>
                      and{" "}
                      <pre>
                        <code>during the night</code>
                      </pre>
                      . <br />
                      For a repetition example, the pattern{" "}
                      <pre>
                        <code> (no){5} </code>
                      </pre>{" "}
                      will match the sentence{" "}
                      <pre>
                        <code>nonononono</code>
                      </pre>
                      .
                    </p>
                  </div>
                </dd>
                {/* Topic 6 */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 6</span>Conclusion
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content">
                    <div className="pink-note">Well done.</div>
                    <p>
                      Regular expressions are very powerful, even at their most
                      basic usage. There are many resources to study and
                      practise online as well, which I strongly recommend.
                    </p>
                    <p>
                      Also, if you're planning on using regex to develop
                      something and you want to search for something like an
                      e-mail, you should search for premade expressions instead
                      of writing your own.
                    </p>
                    <p>
                      With regex, you have to think specific, but not <b>too</b>
                      specific, because then you might come up with complicated
                      solutions when there are other more elegant and simple
                      ones.
                    </p>
                  </div>
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
