import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./Regex.css";
import background from "../../assets/img/background.png";
import imagecourse from "../../assets/img/course_image.png";
import UseFaqSection from "../../UseFaqSection/UseFaqSection.jsx";
import LandingLab from "../../LandingLab/LandingLab.jsx";
export default function Regex() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();

  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingLab
        background={background}
        imagecourse={imagecourse}
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
      <div className="course-lab1">
        <div className="container">
          <div className="row">
            <div className="faq-section-lab1" ref={faqSectionRef}>
              <dl className="section-text-lab1">
                {/* Task 1 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Introduction</span>
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <div className="desc">
                    <h4>What are regular expressions?</h4>
                    <p>
                      Regular expressions (or Regex) are patterns of text that
                      you define to search documents and match exactly what
                      you're looking for.
                    </p>
                  </div>
                  <h4>Why should I learn how to use them?</h4>
                  <p>
                    Even if you won't need them sooner or later, it's a great
                    tool to know how to use. It will make you more capable in
                    CTF's, and potentially a better developer if that's a goal
                    you have. You spend a little time learning it and save
                    yourself lots of time in the long run by using it.
                  </p>
                  <h4>I know all that, but I'm lazy.</h4>
                  <p>
                    This is a lazy person's tutorial. There's a little reading,
                    and then you <b>learn by doing.</b>
                  </p>
                  <h4>Where's the 'Deploy' button?</h4>
                  <ol>
                    <p>
                      <b>There's no machine to deploy.</b>
                      There are two ways to test your expressions. Either:
                    </p>
                    <li>
                      create a text file with some test paragraphs (in a Unix
                      machine) and then use
                      <mark>
                        <code>egrep &lt;pattern&gt;</code>
                        <br />
                        <code>&lt;file&gt;</code>
                      </mark>
                    </li>
                    <li>
                      use an online editor like https://regexr.com/. You can add
                      your own text in the "Text" field, and then type your
                      expressions (patterns) in the "Expression" field.
                    </li>
                  </ol>
                  <br />I recommend the second way.
                  <form action="#">
                    <label htmlFor="q1">dd</label>
                    <input type="text" id="q1" name="Question1" />
                    <input type="submit" value="Submit" />
                  </form>
                </dd>
                {/* Topic 1 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 1</span> Charsets
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <p>
                    When searching for a specific string in a file or block of
                    text, you can search for it as is, with{" "}
                    <mark>
                      <code>grep 'string' &lt;file&gt; </code>
                    </mark>
                    . But what happens if you want to search for{" "}
                    <b>patterns of text?</b> For example, you could be looking
                    for a word that starts with a specific letter, or any words
                    that end with numbers. That's where Regular Expressions come
                    in.
                  </p>
                  <p>
                    Both of the aforementioned problems can be solved by using
                    <b>charsets</b>. A charset is defined by enclosing in{" "}
                    <mark>
                      <code>[</code>{" "}
                    </mark>
                    square brackets{" "}
                    <mark>
                      <code>]</code>{" "}
                    </mark>{" "}
                    the character(s), or range of characters that you want to
                    match. Then, it finds <b>every occurrence</b> of the pattern
                    you have defined in the file/text you are searching.
                  </p>
                  <p>
                    <mark>
                      <code>[</code>{" "}
                    </mark>
                    abc
                    <mark>
                      <code>]</code>{" "}
                    </mark>{" "}
                    will match <span className="code">a</span>,{" "}
                    <span className="code">b</span>, and{" "}
                    <span className="code">c</span> (every occurrence of each
                    letter)
                  </p>
                  <p>
                    <span className="code">[abc]zz</span> will match{" "}
                    <span className="code">azz</span>,{" "}
                    <span className="code">bzz</span>, and{" "}
                    <span className="code">czz</span>.
                  </p>
                  <p>
                    You can also use a<span className="code"> - </span>dash to
                    define ranges:
                  </p>
                  <p>
                    <span className="code">[a-c]zz </span>
                    is the same as above.
                  </p>
                  <p>And then you can combine ranges together:</p>
                  <p>
                    <span className="code">[a-cx-z]zz </span>will match
                    <span className="code">azz</span>,
                    <span className="code">bzz</span>,
                    <span className="code">czz</span>,
                    <span className="code">xzz</span>,
                    <span className="code">yzz</span>,and
                    <span className="code">zzz</span>.
                  </p>
                  <p>
                    Most notably, this can be used to match any alphabetical
                    character:
                  </p>
                </dd>
                {/* Topic 2 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 2</span> Types of Access Control Flaws
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <ul>
                    <li>
                      <b>Horizontal Privilege Escalation:</b> A user accesses
                      resources belonging to another user at the same permission
                      level.
                    </li>
                    <li>
                      <b>Vertical Privilege Escalation:</b> A user performs
                      actions requiring higher privileges than they possess.
                    </li>
                    <li>
                      <b>Unauthenticated Access:</b> Resources accessible
                      without proper authentication.
                    </li>
                  </ul>
                </dd>
                {/* Topic 3 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 3</span> Examples of Exploits
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <ul>
                    <li>
                      <b>Accessing Other Users' Data:</b> Viewing or modifying
                      another user's account details.
                    </li>
                    <li>
                      <b>Admin Function Misuse:</b> Performing admin-level
                      actions, like changing roles or deleting data.
                    </li>
                    <li>
                      <b>Bypassing Login:</b> Using direct object references to
                      access restricted areas.
                    </li>
                  </ul>
                </dd>
                {/* Topic 4 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 4</span> Access Control Best Practices
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <ul>
                    <li>
                      <b>Principle of Least Privilege:</b> Grant users only the
                      access necessary for their roles.
                    </li>
                    <li>
                      <b>Regular Access Reviews:</b> Audit permissions to remove
                      unnecessary access rights.
                    </li>
                    <li>
                      <b>Use Centralized Access Controls:</b> Ensure consistent
                      access enforcement through centralized mechanisms.
                    </li>
                    <li>
                      <b>Test for Vulnerabilities:</b> Use tools and manual
                      testing to identify and address access control issues.
                    </li>
                  </ul>
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
