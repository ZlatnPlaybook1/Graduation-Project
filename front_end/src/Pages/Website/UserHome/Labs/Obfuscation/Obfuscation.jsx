import React from "react";
import "../Page_Styles/Content.css";
import Header from "../../Header/Header";
import background from "../../assets/img/Obfuscation/baner_lap.png";
import imagecourse from "../../assets/img/Obfuscation/course_image.png";
import Footer from "../../Footer/Footer";
import exampleImage1 from "../../assets/img/Obfuscation/1.png";
import exampleImage2 from "../../assets/img/Obfuscation/2.png";
import exampleImage3 from "../../assets/img/Obfuscation/3.png";
import exampleImage4 from "../../assets/img/Obfuscation/4.png";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import LandingLab from "../../Components/LandingLab/LandingLab.jsx";

export default function Obfuscation() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <LandingLab
        background={background}
        imagecourse={imagecourse}
        courseTitle="Obfuscation"
        courseDescription="Master the basics of obfuscation, a powerful technique for
                securing code and protecting intellectual property in
                cybersecurity environments."
        difficulty="Intermediate"
        duration="30 min"
        onSaveRoom={() => console.log("Room Saved!")}
        onLike={() => console.log("Liked!")}
        onDislike={() => console.log("Disliked!")}
      />
      {/* End Landing  */}
      {/* Start Course Content  */}
      <div className="course-labd">
        <div className="container" ref={faqSectionRef}>
          <div className="row">
            <div className="faq-section-labd">
              <dl className="section-text-labd">
                {/* Single FAQ Area  */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 1</span> Introduction
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <h1>Welcome to Obfuscation</h1>

                  <h2>What will you learn?</h2>
                  <ol>
                    <li>What are Obfuscation & Deobfuscation?</li>
                    <li>Why do we use Obfuscation?</li>
                    <li>Javascript Obfuscation </li>
                    <li>JS Deobfuscation Tools</li>
                  </ol>
                </dd>

                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 2</span> What are Obfuscation & Deobfuscation ?
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <p>
                    <br></br>
                  </p>
                  <h1>What are Obfuscation & Deobfuscation?</h1>
                  <h4>Obfuscation </h4>
                  <p>
                    The process of modifying the script to convert it to a
                    difficult, harder-to-understand format, but will return the
                    same result. There are several obfuscation methods hence
                    that there are many tools for it.
                  </p>
                  <br></br>
                  <h4>Deobfuscation </h4>
                  <p>
                    It is the reverse process of obfuscation, as it rewrites the
                    script again from a very difficult to read to an
                    understandable one. This can be done with many tools.
                  </p>
                  <br></br>
                  <img id="img-full" src={exampleImage1} alt="Example" />
                  <h2>Why do we use Obfuscation?</h2>
                  <br></br>
                  <p>
                    There are many reasons why you may use obfuscation, here are
                    some of them:
                  </p>
                  <ol>
                    <li>Prevent others from stealing their code </li>
                    <li>
                      Avoid attackers understanding the script functionalities
                      and abusing it.
                    </li>
                    <li>
                      Bypassing WAFs and security detection systems from
                      filtering or detecting your payloads.{" "}
                    </li>
                  </ol>
                  <br></br>
                  <h2>Common Techniques of Obfuscation</h2>
                  <br></br>

                  <h5>1 . Renaming Variables and Functions:</h5>
                  <p>
                    Changing the names of variables, functions, and classes to
                    meaningless or random strings. For example, a variable name
                    like totalAmount could be obfuscated to something like
                    a1b2c3.
                  </p>
                  <h5>2 . Control Flow Obfuscation:</h5>
                  <p>
                    Modifying the flow of the program, such as adding redundant
                    code paths, loops, or operations that don’t affect the final
                    outcome, but make it harder to follow the logical flow of
                    the code.
                  </p>
                  <h5>3 . String Encryption:</h5>
                  <p>
                    Encrypting or encoding strings within the code (e.g., URLs,
                    keys, or messages) to prevent attackers from easily
                    extracting meaningful data by reading the source code.
                  </p>
                  <h5>4 . Code Insertion (Dead Code):</h5>
                  <p>
                    Adding unnecessary or irrelevant code that doesn’t affect
                    the program's functionality but serves to confuse anyone
                    trying to analyze the code. This might include extra
                    variables or operations that don't change the result.
                  </p>
                  <h5>5 . Flattening:</h5>
                  <p>
                    Transforming the code structure to remove loops or functions
                    and make the program’s behavior appear as one large block of
                    code, making it more difficult to follow.
                  </p>
                </dd>

                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span> Topic 3</span>Javascript Obfuscation{" "}
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <br></br>
                  <h1>Javascript Obfuscation </h1>
                  <p>
                    There are several methods in JS obfuscation, one of them is
                    to remove spaces, this method is called code minify, usually
                    developers use this method as it reduces script file size.
                  </p>
                  <img id="img-full" src={exampleImage2} alt="Example" />
                  <br></br>
                  <h3>JS Obfuscation Tools </h3>
                  <br></br>
                  <h4>JSF</h4>
                  <p>
                    By this method, you can rewrite any JS script with just six
                    characters []()!+
                  </p>
                  <p>
                    You can try it online from this link:
                    <a href="http://www.jsfuck.com">JSFuck</a>
                  </p>
                  <img id="img-full" src={exampleImage3} alt="Example" />
                  <br></br>
                  <h4>Packer Obfuscation</h4>
                  <p>
                    In this one, all script text and symbols will be stored in a
                    list or dictionary and will be restored and rebuilt again
                    during the execution process.
                  </p>
                  <p>
                    You can try it online from this link:
                    <a href="https://www.cleancss.com/javascript-obfuscate/index.php">
                      Packer Obfuscation
                    </a>
                  </p>
                  <img id="img-full" src={exampleImage4} alt="Example" />
                  <br></br>
                  <h4>JS deobfuscation Tools</h4>
                  <p>
                    Instead of downloading and using deobfuscation tools on your
                    machine, you can use them online.
                  </p>
                  <br></br>
                  <h3>Here are some examples:</h3>
                  <ol>
                    <li>
                      <a href="https://mindedsecurity.github.io/jstillery/">
                        JStillery :
                      </a>
                      This tool performs advanced JS deobfuscation via partial
                      evaluation.
                    </li>
                    <li>
                      <a href="http://deobfuscatejavascript.com/">
                        deobfuscate javascript{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://beautifier.io/">Beautifier.io</a>
                    </li>
                  </ol>
                </dd>
              </dl>
            </div>

            <div className="go-to-section">
              <button
                onClick={() => handleGoToLab("/obfuscation/obfuscation_lab")}
                className="go-to"
              >
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
