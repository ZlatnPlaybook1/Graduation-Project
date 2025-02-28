import React from "react";
import Header from "../../Header/Header";
import background from "../../assets/img/Burp_Suit/Background_Burp_suit.jpg";
import courseImage from "../../assets/img/Burp_Suit/Icon_Burp_Suit.png";
import Footer from "../../Footer/Footer";
import "../../Components/Topics CSS/topics.css";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import CourseLanding from "../../Components/CourseLanding/CourseLanding.jsx";
import GoTop from "../../Components/Go2Top_Btn/Go2Top_Btn";

export default function BurpSuit() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Header />
      {/* Start Landing */}
      <CourseLanding
        background={background}
        courseImage={courseImage}
        courseTitle="Burp Suit"
        courseDescription="In this course, you’ll learn about Insecure Deserialization, a vulnerability where untrusted data is deserialized without proper validation, allowing attackers to manipulate data or execute harmful actions. The course covers the risks, how deserialization works, common attack techniques, and best practices for preventing these security issues."
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
                  <span>Topic 1</span> Proxy
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <h3>Definition</h3>
                  <p>The Burp Suite Proxy intercepts and modifies HTTP/S traffic between a browser and the target server.</p>
                  <h3>Usage</h3>
                  <p>It allows security testing of web applications.</p>
                  <h4>Intercepting a Request</h4>
                  <p>Burp Proxy lets you intercept HTTP requests and responses sent between Burp's browser and the target server.</p>
                  <h4>Step 1: Launch Burp's browser</h4>
                  <p>Go to the <strong>Proxy &gt; Intercept</strong> tab.</p>
                  <p>Set the intercept toggle to <strong>Intercept on</strong>.</p>
                  <p>Click <strong>Open Browser</strong>.</p>
                  <h4>Step 2: Intercept a request</h4>
                  <p>Using Burp's browser, try to visit <code>https://portswigger.net</code> and observe the interception.</p>
                  <h4>Step 3: Forward the request</h4>
                  <p>Click the <strong>Forward</strong> button.</p>
                  <h4>Step 4: Switch off interception</h4>
                  <p>Set the intercept toggle to <strong>Intercept off</strong>.</p>
                  <h4>Step 5: View the HTTP history</h4>
                  <p>Go to the <strong>Proxy &gt; HTTP history</strong> tab.</p>
                </dd>

                {/* Single FAQ Area - Intruder */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 2</span> Intruder
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <h3>Definition</h3>
                  <p>Burp Suite Intruder is an automation tool for launching attacks like brute-force, fuzzing, and enumeration.</p>
                  <h3>Usage</h3>
                  <p>It tests vulnerabilities by sending multiple requests with different inputs.</p>
                  <h4>Configuring an Attack</h4>
                  <p>Select a request, define payload positions, and choose an attack type.</p>
                  <h4>Using Payloads</h4>
                  <p>Configure payloads such as wordlists, numbers, or custom data.</p>
                  <h4>Intruder Attack Types</h4>
                  <p><strong>Sniper:</strong> Tests one payload position at a time.</p>
                  <p><strong>Battering Ram:</strong> Uses a single payload across all positions.</p>
                  <p><strong>Pitchfork:</strong> Uses multiple payloads in parallel.</p>
                  <p><strong>Cluster Bomb:</strong> Combines multiple payload sets for exhaustive testing.</p>
                </dd>

                {/* Single FAQ Area - Repeater */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 3</span> Repeater
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <h3>Definition</h3>
                  <p>The Repeater tool allows modifying and resending HTTP requests.</p>
                  <h3>Usage</h3>
                  <p>It helps in testing and debugging web applications by manually modifying requests.</p>
                  <h4>Manual Request Modification</h4>
                  <p>Edit headers, parameters, cookies, or body and resend the request.</p>
                  <h4>Repeat Requests</h4>
                  <p>Send the same request multiple times with or without modifications.</p>
                  <h4>View Responses</h4>
                  <p>Analyze server responses in real-time in various formats.</p>
                  <h4>Compare Requests and Responses</h4>
                  <p>Open multiple tabs to compare different requests side by side.</p>
                  <h4>Integration with Other Tools</h4>
                  <p>Send requests from Proxy, Intruder, or Scanner to Repeater for further testing.</p>
                </dd>

                {/* Single FAQ Area - Decoder */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 4</span> Decoder
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <h3>Definition</h3>
                  <p>Burp Decoder enables you to transform data using common encoding and decoding formats.</p>
                  <h3>Usage</h3>
                  <p>It allows manual and automatic decoding, encoding, and hashing of data.</p>
                  <h4>Carrying out transformations</h4>
                  <p>You can send data to Burp Decoder from the message editor in various Burp tools, such as HTTP history. To transform data using Burp Decoder:</p>
                  <ul>
                    <li>Locate the data you want to analyze.</li>
                    <li>Right-click the data in the message editor and select Send to Decoder.</li>
                    <li>Go to the Decoder tab where the data appears in the top panel.</li>
                    <li>Select an operation from the controls beside the data panel, such as Encode as or Smart decode.</li>
                    <li>View the data in either Text or Hex form.</li>
                  </ul>
                  <h4>Operations</h4>
                  <p><strong>Decode as:</strong> Apply a decoding function.</p>
                  <p><strong>Encode as:</strong> Apply an encoding function.</p>
                  <p><strong>Hash:</strong> Apply a hash function.</p>
                  <p><strong>Smart decode:</strong> Automatically detect and decode layers.</p>
                  <h4>Available Encoding and Decoding Formats</h4>
                  <p>URL, HTML, Base64, ASCII hex, Hex, Octal, Binary, GZIP.</p>
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
