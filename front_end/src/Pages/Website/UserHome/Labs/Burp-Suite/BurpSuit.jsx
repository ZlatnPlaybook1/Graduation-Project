import React from "react";
import Header from "../../Header/Header";
import background from "../../assets/img/Burp_Suit/Background_Burp_suit.jpg";
import courseImage from "../../assets/img/Burp_Suit/Icon_Burp_Suit.png";
import Footer from "../../Footer/Footer";
import "../../Components/Topics CSS/topics.css";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import CourseLanding from "../../Components/CourseLanding/CourseLanding.jsx";
import GoTop from "../../Components/Go2Top_Btn/Go2Top_Btn";
import exampleImage1 from "../../assets/img/Burp_Suit/1.png";
import exampleImage2 from "../../assets/img/Burp_Suit/2.png";
import exampleImage3 from "../../assets/img/Burp_Suit/3.png";
import exampleImage4 from "../../assets/img/Burp_Suit/4.png";


export default function BurpSuit() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Header />
      {/* Start Landing */}
      <CourseLanding
        background={background}
        courseImage={courseImage}
        courseTitle="Burp Suite"
        courseDescription="In this course, you’ll learn about Burp Suite, a powerful web security testing tool. The course covers its core components, including the Proxy, Intruder, Repeater, and Decoder, along with their practical applications, attack techniques, and security testing strategies."
        difficulty="Intermediate"
        duration="45 min"
        onSaveRoom={() => console.log("Room Saved!")}
        onLike={() => console.log("Liked!")}
        onDislike={() => console.log("Disliked!")}
      />
      {/* End Landing */}
      <div className="Content">
        <div className="secure-container" ref={faqSectionRef}>
          <div className="content-row">
            <div className="content-section">
              <dl className="topics-text">
                {/* Single FAQ Area - Proxy */}
                <dt className="fadeInUp faq-header">
                  <span>Module 3</span> Bypassing Simple Captchas using Python
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <br></br>
                  <h2>Intercepting a request</h2>
                  <br></br>
                  <p>Burp Proxy lets you intercept HTTP requests and responses sent between Burp's browser and the target server. This enables you to study how the website behaves when you perform different actions.</p>
                  <br></br>
                  <h2>Step 1: Launch Burp's browser</h2>
                  <br></br>
                  <p>Go to the Proxy > Intercept tab.</p>
                  <p>Set the intercept toggle to Intercept on.</p>
                  <br></br>
                  <img src={exampleImage1} alt="Example" />
                  <br></br>
                  <br></br>
                  <p>Click Open Browser. This launches Burp's browser, which is preconfigured to work with Burp right out of the box.</p>
                  <p>Position the windows so that you can see both Burp and Burp's browser.</p>
                  <br></br>
                  <h2>Step 2: Intercept a request</h2>
                  <br></br>
                  <p>Using Burp's browser, try to visit <a href="https://portswigger.net">portswigger.net</a> and observe that the site doesn't load. Burp Proxy has intercepted the HTTP request that was issued by the browser before it could reach the server. You can see this intercepted request on the Proxy > Intercept tab.</p>
                  <br></br>
                  <img src={exampleImage2} alt="Example" />
                  <br></br>
                  <br></br>
                  <p>The request is held here so that you can study it, and even modify it, before forwarding it to the target server.</p>
                  <br></br>
                  <h2>Step 3: Forward the request</h2>
                  <br></br>
                  <p>Click the Forward button to send the intercepted request. Click Forward again to send any subsequent requests that are intercepted, until the page loads in Burp's browser. The Forward button sends all the selected requests</p>
                  <br></br>
                  <h2>Step 4: Switch off interception</h2>
                  <br></br>
                  <p>Due to the number of requests browsers typically send, you often won't want to intercept every single one of them. Set the intercept toggle to Intercept off.</p>
                  <br></br>
                  <img src={exampleImage3} alt="Example" />
                  <br></br>
                  <br></br>
                  <p>Go back to the browser and confirm that you can now interact with the site as normal.</p>
                  <br></br>
                  <h2>Step 5: View the HTTP history</h2>
                  <br></br>
                  <p>In Burp, go to the <strong>Proxy > HTTP</strong> history tab. Here, you can see the history of all HTTP traffic that has passed through Burp Proxy, even while intercept was switched off.</p>
                  <p>Click on any entry in the history to view the raw HTTP request, along with the corresponding response from the server.</p>
                  <br></br>
                  <img src={exampleImage4} alt="Example" />
                  <br></br>
                  <br></br>
                  <p>This lets you explore the website as normal and study the interactions between Burp's browser and the server afterward, which is more convenient in many cases.</p>
                  <br></br>

                </dd>

                {/* Single FAQ Area - Intruder */}
                <dt className="fadeInUp faq-header">
                  <span className="topic-number">⚔️ Topic 2</span> Intruder
                </dt>
                <dd className="fadeInUp faq-body">
                  <div className="faq-content">
                    <h3>Definition</h3>
                    <p>
                      Burp Suite Intruder is an{" "}
                      <span className="highlight">automation tool</span> for
                      launching attacks like brute-force, fuzzing, and
                      enumeration.
                    </p>
                    <h3>Usage</h3>
                    <p>
                      It tests vulnerabilities by sending{" "}
                      <span className="highlight">
                        multiple requests with different inputs
                      </span>
                      .
                    </p>
                    <div className="step-section">
                      <h4>🎯 Configuring an Attack</h4>
                      <p>
                        Select a request, define payload positions, and choose
                        an attack type.
                      </p>
                      <h4>📦 Using Payloads</h4>
                      <p>
                        Configure payloads such as wordlists, numbers, or custom
                        data.
                      </p>
                      <h4>🔫 Intruder Attack Types</h4>
                      <ul className="attack-types">
                        <li>
                          <strong>🎯 Sniper:</strong> Tests one payload position
                          at a time.
                        </li>
                        <li>
                          <strong>💥 Battering Ram:</strong> Uses a single
                          payload across all positions.
                        </li>
                        <li>
                          <strong>🎭 Pitchfork:</strong> Uses multiple payloads
                          in parallel.
                        </li>
                        <li>
                          <strong>💣 Cluster Bomb:</strong> Combines multiple
                          payload sets for exhaustive testing.
                        </li>
                      </ul>
                    </div>
                  </div>
                </dd>

                {/* Single FAQ Area - Repeater */}
                <dt className="fadeInUp faq-header">
                  <span className="topic-number">🔄 Topic 3</span> Repeater
                </dt>
                <dd className="fadeInUp faq-body">
                  <div className="faq-content">
                    <h3>Definition</h3>
                    <p>
                      The Repeater tool allows{" "}
                      <span className="highlight">
                        modifying and resending HTTP requests
                      </span>
                      .
                    </p>
                    <h3>Usage</h3>
                    <p>
                      It helps in{" "}
                      <span className="highlight">
                        testing and debugging web applications
                      </span>{" "}
                      by manually modifying requests.
                    </p>
                    <div className="step-section">
                      <h4>✏️ Manual Request Modification</h4>
                      <p>
                        Edit headers, parameters, cookies, or body and resend
                        the request.
                      </p>
                      <h4>🔁 Repeat Requests</h4>
                      <p>
                        Send the same request multiple times with or without
                        modifications.
                      </p>
                      <h4>📄 View Responses</h4>
                      <p>
                        Analyze server responses in real-time in various
                        formats.
                      </p>
                      <h4>📊 Compare Requests and Responses</h4>
                      <p>
                        Open multiple tabs to compare different requests side by
                        side.
                      </p>
                      <h4>🔗 Integration with Other Tools</h4>
                      <p>
                        Send requests from Proxy, Intruder, or Scanner to
                        Repeater for further testing.
                      </p>
                    </div>
                  </div>
                </dd>

                {/* Single FAQ Area - Decoder */}
                <dt className="fadeInUp faq-header">
                  <span className="topic-number">🔓 Topic 4</span> Decoder
                </dt>
                <dd className="fadeInUp faq-body">
                  <div className="faq-content">
                    <h3>Definition</h3>
                    <p>
                      Burp Decoder enables you to{" "}
                      <span className="highlight">transform data</span> using
                      common encoding and decoding formats.
                    </p>
                    <h3>Usage</h3>
                    <p>
                      It allows{" "}
                      <span className="highlight">
                        manual and automatic decoding, encoding, and hashing
                      </span>{" "}
                      of data.
                    </p>
                    <div className="step-section">
                      <h4>🛠️ Carrying out transformations</h4>
                      <p>
                        You can send data to Burp Decoder from the message
                        editor in various Burp tools, such as HTTP history. To
                        transform data using Burp Decoder:
                      </p>
                      <ul className="transformation-steps">
                        <li>📍 Locate the data you want to analyze.</li>
                        <li>
                          🖱️ Right-click the data in the message editor and
                          select Send to Decoder.
                        </li>
                        <li>
                          📂 Go to the Decoder tab where the data appears in the
                          top panel.
                        </li>
                        <li>
                          ⚙️ Select an operation from the controls beside the
                          data panel, such as Encode as or Smart decode.
                        </li>
                        <li>👀 View the data in either Text or Hex form.</li>
                      </ul>
                      <h4>🔧 Operations</h4>
                      <ul className="operations-list">
                        <li>
                          <strong>🔓 Decode as:</strong> Apply a decoding
                          function.
                        </li>
                        <li>
                          <strong>🔒 Encode as:</strong> Apply an encoding
                          function.
                        </li>
                        <li>
                          <strong>🔐 Hash:</strong> Apply a hash function.
                        </li>
                        <li>
                          <strong>🤖 Smart decode:</strong> Automatically detect
                          and decode layers.
                        </li>
                      </ul>
                      <h4>📜 Available Encoding and Decoding Formats</h4>
                      <p>
                        URL, HTML, Base64, ASCII hex, Hex, Octal, Binary, GZIP.
                      </p>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() => handleGoToLab("/Burp_Suit/Burp_Suit_Labs")}
                className="go-to"
              >
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      <GoTop />
      <Footer />
    </>
  );
}


// ............

// card 

// <dt className="fadeInUp faq-header">
// <span>Module 3</span> Bypassing Simple Captchas using Python
// </dt>
// <dd className="fadeInUp faq-body" id="border-left">
// </dd>

// ..............