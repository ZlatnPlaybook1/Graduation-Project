import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Banner from "../../Banner/Banner.jsx";
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
      <Banner />
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
                          <div className="dark-no">
                            &lt;pattern&gt; &lt;file&gt;
                          </div>
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
                      <div className="dark-note">
                        {" "}
                        grep 'string' &lt;file&gt;{" "}
                      </div>
                      . But what happens if you want to search for{" "}
                      <b> patterns of text?</b> For example, you could be
                      looking for a word that starts with a specific letter, or
                      any words that end with numbers. That's where Regular
                      Expressions come in.
                    </p>
                    <p>
                      Both of the aforementioned problems can be solved by using{" "}
                      <b>charsets.</b>A charset is defined by enclosing in{" "}
                      <div className="dark-note"> [ </div>
                      square brackets <div className="dark-note"> ] </div>
                      the character(s), or range of characters that you want to
                      match. Then, it finds <b>every occurrence</b> of the
                      pattern you have defined in the file/text you are
                      searching.
                    </p>
                    <p>
                      <div className="dark-note"> [abc] </div>
                      will match
                      <div className="dark-note"> a </div>,
                      <div className="dark-note"> b </div>, and
                      <div className="dark-note"> c </div>
                      (every occurrence of each letter).
                    </p>
                    <p>
                      <div className="dark-note"> [abc] </div>
                      will match
                      <div className="dark-note"> azz </div>, ,
                      <div className="dark-note"> bzz </div>, and
                      <div className="dark-note"> czz </div>
                    </p>
                    <p>
                      You can also use a<div className="dark-note"> - </div>
                      dash to define ranges:
                    </p>
                    <p>
                      <div className="dark-note"> [a-c]zz </div>
                      is the same as above.
                    </p>
                    <p>
                      And then you can combine ranges together: <br />
                      <div className="dark-note"> [a-cx-z]zz </div>
                      will match
                      <div className="dark-note"> azz </div>,
                      <div className="dark-note"> bzz </div>, ,
                      <div className="dark-note"> czz </div>, ,
                      <div className="dark-note"> xzz </div>,
                      <div className="dark-note"> yzz </div>, and
                      <div className="dark-note"> zzz </div>.
                    </p>
                    <p>
                      {" "}
                      Most notably, this can be used to match any alphabetical
                      character: <br />{" "}
                      <div className="dark-note"> [a-zA-Z] </div>
                      will match any <b>single</b> letter (lowercase or
                      uppercase).
                    </p>
                    <p>
                      You can use numbers too: <br />
                      <div className="dark-no"> file[1-3] </div>
                      will match <div className="dark-note"> file[1-3] </div>,
                      <div className="dark-note"> file2 </div>, and
                      <div className="dark-note"> file3 </div>.
                    </p>
                    <p>
                      Then, there is a way to <b>exclude</b> characters from a
                      charset with the <div className="dark-note"> ^ </div>
                      hat symbol, and include everything else.
                    </p>
                  </div>
                </dd>

                {/* Topic 3 */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 3</span>Wildcards and optional characters
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content">
                    <p>
                      The wildcard that is used to match any single character
                      (except the line break) is the{" "}
                      <div className="dark-note"> . </div> dot. That means that{" "}
                      <div className="dark-note"> a.c </div> will match{" "}
                      <div className="dark-note"> aac </div>,
                      <div className="dark-note"> abc </div>,
                      <div className="dark-note"> a0c </div>,
                      <div className="dark-note">a!c</div> and so on. Note: If
                    </p>
                    <p>
                      Also, you can set a character as optional in your pattern
                      using the <div className="dark-note"> ? </div> question
                      mark. That means that{" "}
                      <div className="dark-note"> abc? </div> will match{" "}
                      <div className="dark-note"> ab </div> and{" "}
                      <div className="dark-note"> abc </div>, since the{" "}
                      <div className="dark-note"> c </div> is optional.
                    </p>
                    <div className="note">
                      {" "}
                      you want to search for{" "}
                      <div className="dark-note"> . </div> a literal dot, you
                      have to escape it with a{" "}
                      <div className="dark-note"> \ </div> reverse slash. That
                      means that <div className="dark-note"> a.c </div> will
                      match <div className="dark-note"> a.c </div>, but also a{" "}
                      <div className="dark-note"> abc </div>,{" "}
                      <div className="dark-note"> a@c </div>, and so on. But{" "}
                      <div className="dark-note"> a\.c </div>
                      will match just <div className="dark-note"> a.c </div>.
                    </div>
                  </div>
                </dd>

                {/* Topic 4*/}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 4</span>Metacharacters and repetitions
                </dt>
                <dd className="faq-body-labd">
                  <div className="faq-content">
                    <p>
                      There are easier ways to match bigger charsets. For
                      example, <span className="dark-note"> \d </span> is used
                      to match any <b>single</b> digit.
                      <br /> Here's a reference:
                    </p>
                    <ol className="oList">
                      <li>
                        <div className="dark-note"> \d </div>
                        matches a digit, like
                        <div className="dark-note"> 9 </div>
                      </li>
                      <li>
                        <div className="dark-note"> \D </div>
                        matches a non-digit, like
                        <div className="dark-note"> A </div> or
                        <div className="dark-note"> @ </div>
                      </li>
                      <li>
                        <div className="dark-note"> \w </div>
                        matches an alphanumeric character, like
                        <div className="dark-note"> a </div> or
                        <div className="dark-note"> 3 </div>
                      </li>
                      <li>
                        <div className="dark-note"> \W </div>
                        matches a non-alphanumeric character, like
                        <div className="dark-note"> ! </div> or
                        <div className="dark-note"> # </div>
                      </li>
                      <li>
                        <div className="dark-note"> \s </div>
                        matches a whitespace character (spaces, tabs, and line
                        breaks)
                      </li>
                      <li>
                        <div className="dark-note"> \S </div>
                        matches everything else (alphanumeric characters and
                        symbols)
                      </li>
                    </ol>
                    <div className="note">
                      Note: Underscores <div className="dark-note"> _ </div> are
                      included in the <div className="dark-note"> \w </div>{" "}
                      metacharacter and not in{" "}
                      <div className="dark-note"> \W </div>. That means that{" "}
                      <div className="dark-note"> \w </div> will match every
                      single character in{" "}
                      <div className="dark-note">test_file</div>.
                    </div>
                    <p>
                      Often we want a pattern that matches many characters of a
                      single type in a row, and we can do that with repetitions.
                      For example, <div className="dark-note"> {2} </div> is
                      used to match the preceding character (or metacharacter,
                      or charset) two times in a row. That means that{" "}
                      <div className="dark-note"> z{2} </div> will match exactly
                      <div className="dark-note"> zz </div>.
                    </p>
                    <p>
                      Here's a reference for each repetition along with how many
                      times it matches the preceding pattern:
                      <br />
                      <ol className="oList">
                        <li>
                          <span className="dark-note"> {12} </span>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="mx-2"
                          />
                          <b>exactly 12</b>times.
                        </li>
                        <li>
                          <span className="dark-note">
                            {" "}
                            &#123; 1, 5 &#123;{" "}
                          </span>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="mx-2"
                          />
                          <b>1 to 5 </b>times.
                        </li>
                        <li>
                          <span className="dark-note"> &#123;2, &#125;</span>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="mx-2"
                          />
                          <b> 2 or more </b>times.
                        </li>
                        <li>
                          <span className="dark-note"> * </span>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="mx-2"
                          />
                          <b> 0 or more </b>times.
                        </li>
                        <li>
                          <span className="dark-note"> + </span>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="mx-2"
                          />
                          <b> 1 or more </b>times.
                        </li>
                      </ol>
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
                          <span className="dark-note"> ^ </span>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="mx-2"
                          />
                          <b>Start with</b>
                        </li>
                        <li>
                          <span className="dark-note"> $ </span>
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
                      <span className="dark-note"> abc </span>, you can use{" "}
                      <span className="dark-note"> ^abc </span>. If you want to
                      search for a line that ends with{" "}
                      <span className="dark-note"> xyz </span>, you can use{" "}
                      <span className="dark-note"> xyz$ </span>.
                    </p>
                    <div className="note">
                      Note: The <span className="dark-note"> ^ </span>
                      hat symbol is used to exclude a charset when enclosed in
                      <span className="dark-note"> [ </span>
                      square brackets <span className="dark-note"> ] </span>,
                      but when it is not, it is used to specify the beginning of
                      a word.
                    </div>
                    <p>
                      You can also define groups by enclosing a pattern in
                      <span className="dark-note"> ( </span>, parentheses
                      <span className="dark-note"> ) </span>, . This function
                      can be used for many ways that are not in the scope of
                      this tutorial. We will use it to define an{" "}
                      <b>either/or</b> pattern, and also to repeat patterns. To
                      say "or" in Regex, we use the{" "}
                      <span className="dark-note"> | </span> pipe.
                    </p>
                    <p>
                      For an "either/or" pattern example, the pattern{" "}
                      <span className="dark-note">
                        {" "}
                        during the (day|night){" "}
                      </span>
                      will match both of these sentences:{" "}
                      <span className="dark-note"> during the day </span>
                      and <span className="dark-note"> during the night </span>
                      . <br />
                      For a repetition example, the pattern{" "}
                      <span className="dark-note"> (no){5} </span>
                      will match the sentence{" "}
                      <span className="dark-note"> nonononono </span>.
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
                      With regex, you have to think specific, but not{" "}
                      <b> too </b> specific, because then you might come up with
                      complicated solutions when there are other more elegant
                      and simple ones.
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
