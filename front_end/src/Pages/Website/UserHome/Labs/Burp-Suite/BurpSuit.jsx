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
import exampleImage15 from "../../assets/img/Burp_Suit/15.png";
import exampleImage16 from "../../assets/img/Burp_Suit/16.png";
import exampleImage17 from "../../assets/img/Burp_Suit/17.png";
import exampleImage18 from "../../assets/img/Burp_Suit/18.png";
import exampleImage19 from "../../assets/img/Burp_Suit/19.png";



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
                    <br></br>
                    <br></br>
                    <h3>Testing different input with Burp Repeater</h3>
                    <p>By resending the same request with different input each time, you can identify and confirm a variety of input-based vulnerabilities. This is one of the most common tasks you will perform during manual testing with Burp Suite.</p>
                    <h4>Step 1: Resend the request with different input</h4>
                    <p>Change the number in the <strong>productId</strong>  parameter and resend the request. Try this with a few arbitrary numbers, including a couple of larger ones.</p>
                    <img src={exampleImage15} alt="Example" />
                    <br></br>
                    <h4>Step 2: View the request history</h4>
                    <p>Use the arrows to step back and forth through the history of requests that you've sent, along with their matching responses. The drop-down menu next to each arrow also lets you jump to a specific request in the history.</p>
                    <img src={exampleImage16} alt="Example" />
                    <br></br>
                    <h4>Step 3: Try sending unexpected input</h4>
                    <p>The server seemingly expects to receive an integer value via this <strong>productId</strong>  parameter. Let's see what happens if we send a different data type.</p>
                    <p>Send another request where the productId is a string of characters.</p>
                    <img src={exampleImage17} alt="Example" />
                    <br></br>
                    <h4>Step 4: Study the response</h4>
                    <p>Observe that sending a non-integer productId has caused an exception. The server has sent a verbose error response containing a stack trace.</p>
                    <img src={exampleImage18} alt="Example" />
                    <br></br>
                    <p>Notice that the response tells you that the website is using the Apache Struts framework - it even reveals which version.</p>
                    <img src={exampleImage19} alt="Example" />
                    <br></br>
                    <p>In a real scenario, this kind of information could be useful to an attacker, especially if the named version is known to contain additional vulnerabilities.</p>
                    
                  </div>
                </dd>

                {/* Single FAQ Area - Decoder */}
                <dt className="fadeInUp faq-header">
                  <span className="topic-number">🔓 Topic 4</span> Decoder
                </dt>
                <dd className="fadeInUp faq-body">
                  <div className="faq-content">
                    <p>Burp Decoder enables you to transform data using common encoding and decoding formats. You can use Decoder to:</p>
                    <ul>
                      <li>Manually decode data.</li>
                      <li>Automatically identify and decode recognizable encoding formats, such as URL-encoding.</li>
                      <li>Transform raw data into various encoded and hashed formats.</li>
                    </ul>  
                    <p>Decoder enables you to apply layers of transformations to the same data. This enables you to unpack or apply complex encoding schemes. For example, to generate modified data in the correct format for an attack, you could:</p>
                    <ul>
                      <li>Apply URL-decoding, then HTML-decoding.</li>
                      <li>Edit the decoded data.</li>
                      <li>Reapply the HTML-encoding, then the URL-encoding.</li>
                    </ul>
                    <h3>Carrying out transformations</h3>
                    <p>You can send data to Burp Decoder from the message editor in various Burp tools, such as HTTP history. To carry out a data transformation using Burp Decoder:</p>
                    <ul>
                      <li>1. Locate the data that you want to analyze.</li>
                      <li>2. Right-click the data in the message editor and select <strong>Send to Decoder</strong>.</li>
                      <li>3. Go to the Decoder tab. The data is in the top panel.</li>
                      <li>4. Apply the transformation you want to use.Select the operation you want to perform on the data from the controls beside the data panel. For example, Encode as or Smart decode.</li>
                    </ul>
                     <p>When you carry out a transformation, a new editor panel opens with the transformed data. You can then apply further transformations as required. For each transformation, the following applies:</p>
                    <ul>
                      <li>The transformation applies to the whole data set. To apply the transformation to only a portion of the data, select the relevant section before you choose an operation.</li>
                      <li>The data is color-coded to indicate the type of encoding or decoding that is applied.</li>
                      <li>Any parts of the data that aren't transformed are copied into the new panel in their raw form.</li>

                    </ul>
                    <p>The following decode and encode functions are available:</p>
                    <ul>
                      <li>URL</li>
                      <li>HTML</li>
                      <li>Base64</li>
                      <li>ASCII hex</li>
                      <li>Hex</li>
                      <li>Octal</li>
                      <li>Binary</li>
                      <li>GZIP</li>
                    </ul>
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