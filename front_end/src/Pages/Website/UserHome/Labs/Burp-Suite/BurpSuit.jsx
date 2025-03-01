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
import exampleImage5 from "../../assets/img/Burp_Suit/5.png";
import exampleImage6 from "../../assets/img/Burp_Suit/6.png";
import exampleImage7 from "../../assets/img/Burp_Suit/7.png";
import exampleImage8 from "../../assets/img/Burp_Suit/8.png";
import exampleImage9 from "../../assets/img/Burp_Suit/9.png";
import exampleImage10 from "../../assets/img/Burp_Suit/10.png";
import exampleImage11 from "../../assets/img/Burp_Suit/11.png";
import exampleImage12 from "../../assets/img/Burp_Suit/12.png";
import exampleImage13 from "../../assets/img/Burp_Suit/13.png";
import exampleImage14 from "../../assets/img/Burp_Suit/14.png";



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
                  <span>Module 3</span> Proxy
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
                    <br></br>
                    <h2>What is Burp Intruder?</h2>
                    <p>
                      Burp Intruder is a powerful tool for performing highly customizable, automated attacks against websites. It enables you to configure attacks that send the same request over and over again, inserting different payloads into predefined positions each time. Among other things, you can use Intruder to:
                    </p><ul>
                      <li>Fuzz for input-based vulnerabilities.</li>
                      <li>Perform brute-force attacks.</li>
                      <li>Enumerate valid identifiers and other inputs.</li>
                      <li>Harvest useful data.</li>
                    </ul>
                    <p>
                      The best way to understand how Burp Intruder works is to see it in action. You can follow the tutorial below to launch your first Intruder attack.
                    </p><p>
                      For more detailed information about the features and attack types of Burp Intruder, please see <a href="https://portswigger.net/burp/documentation/desktop/tools/intruder/uses">Typical uses for Burp Intruder</a>.
                    </p>
                    <br></br>
                    <h2>Access the lab</h2>
                    <br></br>
                    <p>Open Burp's browser, and use it to access the following URL:

                      <a href="http://localhost:3000/Burp_Suit/Burp_Suit_Labs/lab2">http://localhost:3000/Burp_Suit/Burp_Suit_Labs/lab2</a>
                      Click Access the lab and log in to your PortSwigger account if prompted. This opens your own instance of a deliberately vulnerable blog website.</p>
                    <br></br>
                    <h2>Try to log in</h2>
                    <br></br>
                    <p> try to log in using an invalid username and password.</p>
                    <img src={exampleImage5} alt="Example" />
                    <br></br>
                    <p>In Burp Suite, go to the<strong> Proxy > HTTP </strong> history tab. This shows the requests you have made in Burp's browser since opening it.

                      Find the<strong> POST /login</strong> request. Highlight the value of the username parameter, then right-click the request and select Send to Intruder.</p>
                    <br></br>
                    <h2>Set the payload position</h2>
                    <br></br>
                    <p>Go to Intruder. Observe that there is now a tab displaying the POST /login request. We'll use this as the base request for our attack.

                      Notice that the value of the username parameter that you previously highlighted is now marked as a payload position. This is indicated by the § characters at the beginning and end of the value. Burp Intruder will insert payloads at this position during the attack.</p>
                    <img src={exampleImage6} alt="Example" />
                    <br></br>
                    <h2>Select an attack type</h2>
                    <p>At the top of the screen, you can select different attack types. For now, just make sure this is set to <strong>Sniper attack</strong> .</p>
                    <img src={exampleImage7} alt="Example" />
                    <h2>Add the payloads</h2>
                    <br></br>
                    <p>You now just need to configure the list of payloads that you want to use. For this demonstration, we'll try sending the request with different usernames to test how the login mechanism behaves.</p>
                    <br></br>
                    <p>In the Payloads side panel, leave the Payload type set to Simple list.

                      In the Payload configuration field, click Paste to add the copied usernames to the list. Notice that the Payload count and Request count update to 101. These values reflect the number of payloads added and the requests the attack will send.</p>
                    <img src={exampleImage8} alt="Example" />
                    <br></br>
                    <br></br>
                    <h2>Start the attack</h2>
                    
                    <p>Click<strong>  Start attack</strong>. This opens a new attack window in which you can see each of the requests that Burp Intruder is making.

                      If you select one of the entries in the table, you can view the request and response in the message editor. Notice that the username parameter contains a different value from our payload list in each request.</p>
                    <img src={exampleImage9} alt="Example" />
                    <br></br>
                    <br></br>
                    <h2>Look for any irregular responses</h2>
                  <br></br>
                  <p>The attack window contains several columns displaying key information about each response.Wait for the attack to finish, then click the heading of the Length column to sort the results. As you can see, one of the responses is a different length.</p>
                  <img src={exampleImage10} alt="Example" />
                  <br></br>
                  <br></br>
                  <h2>What next?</h2>
                  <p>Now that you have a potentially correct username, the next logical step is to try to brute-force the password.Try repeating this attack, using the username you have identified and this list of candidate passwords.</p>
                  <img src={exampleImage11} alt="Example" />
                  </div>
                </dd>

                {/* Single FAQ Area - Repeater */}
                <dt className="fadeInUp faq-header">
                  <span className="topic-number">🔄 Topic 3</span> Repeater
                </dt>
                <dd className="fadeInUp faq-body">
                  <div className="faq-content">
                    <h2>Reissue requests with Burp Repeater</h2>
                    <p>In this tutorial, you'll use Burp Repeater to send an interesting request over and over again. This lets you study the target website's response to different input without having to intercept the request each time. This makes it much simpler to probe for vulnerabilities, or confirm ones that were identified by Burp Scanner, for example.</p>
                    <h2>Sending a request to Burp Repeater</h2>
                    <p>The most common way of using Burp Repeater is to send it a request from another of Burp's tools. In this example, we'll send a request from the HTTP history in Burp Proxy.</p>
                    <h3>Step 1: Identify an interesting request</h3>
                    <p>In the previous tutorial, you browsed a fake shopping website. Notice that each time you accessed a product page, the browser sent a GET /product request with a productId query parameter.</p>
                    <img src={exampleImage12} alt="Example" />
                    <br></br>
                    <br></br>
                    <h3>Step 2: Send the request to Burp Repeater</h3>
                    <p>Right-click on any of the GET /product?productId=[...] requests and select Send to Repeater.</p>
                    <img src={exampleImage13} alt="Example" />
                    <br></br>
                    <p>Go to the Repeater tab to see that your request is waiting for you in its own numbered tab.</p>
                    <br></br>
                    <h3>Step 3: Send the request and view the response</h3>
                    <p>Click Send and view the response from the server. You can resend this request as many times as you like and the response will be updated each time.</p>
                    <img src={exampleImage14} alt="Example" />

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