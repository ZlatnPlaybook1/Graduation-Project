import React from "react";
import "./XSS.css";
import "../../Components/Topics CSS/topics.css";
import Header from "../../Header/Header";
import background from "../../assets/img/Cross_Site_Scripting/cors1.png";
import imagecourse from "../../assets/img/Cross_Site_Scripting/Broken Authentication.webp";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import CourseLanding from "../../Components/CourseLanding/CourseLanding.jsx";
export default function XSS() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <CourseLanding
        background={background}
        imagecourse={imagecourse}
        courseTitle="Cross-Site Scripting"
        courseDescription=" Hack your first website (legally in a safe environment) and
                experience an ethical hacker's job."
        difficulty="Intermediate"
        duration="30 min"
        onSaveRoom={() => console.log("Room Saved!")}
        onLike={() => console.log("Liked!")}
        onDislike={() => console.log("Disliked!")}
      />
      {/* End Landing  */}
      {/* Start Course Content  */}
      <div className="Content">
        <div className="secure-container" ref={faqSectionRef}>
          <div className="content-row">
            <div className="content-section">
              <dl className="topics-text">
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Task 1</span> What is cross-site scripting (XSS)?
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul>
                    <li className="xss-style-li">
                      <p>
                        Cross-site scripting (also known as XSS) is a web
                        security vulnerability that allows an attacker to
                        compromise the interactions that users have with a
                        vulnerable application.
                      </p>
                    </li>
                    <li className="xss-style-li">
                      <p>
                        It allows an attacker to circumvent the same origin
                        policy, which is designed to segregate different
                        websites from each other.
                      </p>
                    </li>
                    <li className="xss-style-li">
                      <p>
                        Cross-site scripting vulnerabilities normally allow an
                        attacker to masquerade as a victim user, to carry out
                        any actions that the user can perform, and to access any
                        of the user's data.
                      </p>
                    </li>
                    <li className="xss-style-li">
                      <p>
                        If the victim user has privileged access within the
                        application, then the attacker might be able to gain
                        full control over all the application's functionality
                        and data.
                      </p>
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area  */}
                <dt className="fadeInUp faq-header">
                  <span>Task 2</span>How does cross-site scripting work?
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul>
                    <li className="xss-style-li">
                      Most websites and web applications run client-side code in
                      the web browser using some kind of dynamic scripting
                      language. In a vast majority of cases, this language is
                      JavaScript.{" "}
                    </li>
                    <li className="xss-style-li">
                      Pure HTML websites and web applications still exist, but
                      they are a rare sight simply because client-side scripts
                      greatly enhance the user interface and capabilities of the
                      website or web application.
                    </li>
                    <li className="xss-style-li">
                      You can safely assume that more than 99% of websites and
                      web applications you come across include client-side
                      JavaScript code.
                    </li>
                    <li className="xss-style-li">
                      This, in turn, means that user browsers must be able to
                      interpret any JavaScript code on behalf of the web
                      application.
                    </li>
                    <li className="xss-style-li">
                      Most web applications and websites also interact with
                      users in some way, even if they don’t use JavaScript.
                    </li>
                    <li className="xss-style-li">
                      Interaction requires some form of user input.
                    </li>
                    <li className="xss-style-li">
                      For example, the user may need to type their username to
                      log in to the web application and the application may
                      display that username later in the user interface.
                    </li>
                    <li className="xss-style-li">
                      This means that the application processes user input and
                      then outputs it in the web browser.
                    </li>
                    <li className="xss-style-li">
                      Combined, these two conditions lay the foundation for the
                      most common web security vulnerability – cross-site
                      scripting, which is a type of injection attack.
                    </li>
                    <li className="xss-style-li">
                      If an attacker is able to include JavaScript code in a
                      user input parameter and the application directly returns
                      that code in its HTML output and sends it to the client
                      browser, the browser will execute the malicious
                      JavaScript.
                    </li>
                    <li className="xss-style-li">
                      Whenever a web page directly echoes user input, attackers
                      will be able to run malicious scripts in the client
                      browser, even if the page itself is built only with static
                      HTML tags and includes no JavaScript.
                    </li>
                    <li className="xss-style-li">
                      Unlike most other web application vulnerabilities, this
                      one does not directly affect the back end of the
                      application (the web server).
                    </li>
                    <li className="xss-style-li">
                      It affects regular users of the web application or victims
                      who are tricked into accessing it.
                    </li>
                    <li className="xss-style-li">
                      XSS is also possible for some APIs that allow JavaScript,
                      for example, an API may present the user with an error
                      message that contains JavaScript previously injected by an
                      attacker.
                    </li>
                    <li className="xss-style-li">
                      For many years, cross-site scripting had its own separate
                      category in the OWASP Top 10.
                    </li>
                    <li className="xss-style-li">
                      However, in 2021, the creators of the list decided to
                      incorporate it into the Injection category along with SQL
                      injection, RCE and many more.
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area  */}
                <dt className="fadeInUp faq-header">
                  <span>Task 3</span>What are the types of XSS attacks?
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul>
                    <li className="xss-style-li">
                      There are three main types of XSS attacks. These are:
                    </li>
                    <ol>
                      <li className="xss-style-li">
                        Reflected XSS, where the malicious script comes from the
                        current HTTP request.
                      </li>
                      <li className="xss-style-li">
                        Stored XSS, where the malicious script comes from the
                        website's database.
                      </li>
                      <li className="xss-style-li">
                        DOM-based XSS, where the vulnerability exists in
                        client-side code rather than server-side code.
                      </li>
                    </ol>
                    <li className="xss-style-li">
                      If there is nothing to prevent a user from entering
                      "wrong" input, the user can enter some "smart" input like
                      this:
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area  */}
                <dt className="fadeInUp faq-header">
                  <span>Task 4</span>Reflected cross-site scripting
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul>
                    <li className="xss-style-li">
                      Reflected XSS is the simplest variety of cross-site
                      scripting.
                    </li>
                    <li className="xss-style-li">
                      It arises when an application receives data in an HTTP
                      request and includes that data within the immediate
                      response in an unsafe way.
                    </li>
                    <li className="xss-style-li">
                      Here is a simple example of a reflected XSS vulnerability:
                      <Link
                        to="https://insecure-website.com/status?message=All+is+well.<p>Status: All is well.</p>"
                        target="_blank"
                      >
                        Click Here
                      </Link>
                    </li>
                    <li className="xss-style-li">
                      The application doesn't perform any other processing of
                      the data, so an attacker can easily construct an attack
                      like this:
                      <Link
                        to="https://insecure-website.com/status?message=<script>/*+Bad+stuff+here...+*/</script><p>Status: <script>/* Bad stuff here... */</script></p>"
                        target="_blank"
                      >
                        Click Here
                      </Link>
                    </li>
                    <li className="xss-style-li">
                      If the user visits the URL constructed by the attacker,
                      then the attacker's script executes in the user's browser,
                      in the context of that user's session with the
                      application.
                    </li>
                    <li className="xss-style-li">
                      At that point, the script can carry out any action, and
                      retrieve any data, to which the user has access.
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area  */}
                <dt className="fadeInUp faq-header">
                  <span>Task 5</span>Stored cross-site scripting
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul>
                    <li className="xss-style-li">
                      Stored XSS (also known as persistent or second-order XSS)
                      arises when an application receives data from an untrusted
                      source and includes that data within its later HTTP
                      responses in an unsafe way.
                    </li>
                    <li className="xss-style-li">
                      The data in question might be submitted to the application
                      via HTTP requests; for example, comments on a blog post,
                      user nicknames in a chat room, or contact details on a
                      customer order.
                    </li>
                    <li className="xss-style-li">
                      In other cases, the data might arrive from other untrusted
                      sources; for example, a webmail application displaying
                      messages received over SMTP, a marketing application
                      displaying social media posts, or a network monitoring
                      application displaying packet data from network traffic.
                    </li>
                    <li className="xss-style-li">
                      Here is a simple example of a stored XSS vulnerability. A
                      message board application lets users submit messages,
                      which are displayed to other users:
                    </li>
                    <li className="xss-style-li">
                      <h2>Example</h2>
                    </li>
                    <pre>
                      <code>
                        <span>
                          &lt;p&gt;Hello, this is my message!&lt;/p&gt;
                        </span>
                      </code>
                    </pre>
                    <li className="xss-style-li">
                      The application doesn't perform any other processing of
                      the data, so an attacker can easily send a message that
                      attacks other users:
                    </li>
                    <pre>
                      <code>
                        <span>
                          &lt;p&gt;&lt;script&gt;Bad Stuff Here...
                          &lt;/script&gt;&lt;/p&gt;
                        </span>
                      </code>
                    </pre>
                  </ul>
                </dd>
                <dt className="fadeInUp faq-header">
                  <span>Task 6</span>DOM-based cross-site scripting
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul>
                    <li className="xss-style-li">
                      DOM-based XSS (also known as DOM XSS) arises when an
                      application contains some client-side JavaScript that
                      processes data from an untrusted source in an unsafe way,
                      usually by writing the data back to the DOM.
                    </li>
                    <li className="xss-style-li">
                      In the following example, an application uses some
                      JavaScript to read the value from an input field and write
                      that value to an element within the HTML:
                    </li>
                    <pre>
                      <code>
                        <span>
                          var search = document.getElementById('search').value;
                        </span>
                        <span>
                          var results = document.getElementById('results');
                        </span>
                        <span>
                          results.innerHTML = 'You searched for: ' + search;
                        </span>
                      </code>
                    </pre>
                    <li className="xss-style-li">
                      If the attacker can control the value of the input field,
                      they can easily construct a malicious value that causes
                      their own script to execute:
                    </li>
                    <pre>
                      <code>
                        <span>
                          You Have Searched for &lt;img src=1 onerror='/* Bad
                          Stuff Here... */'&gt;
                        </span>
                      </code>
                    </pre>
                    <li className="xss-style-li">
                      In a typical case, the input field would be populated from
                      part of the HTTP request, such as a URL query string
                      parameter, allowing the attacker to deliver an attack
                      using a malicious URL, in the same manner as reflected
                      XSS.
                    </li>
                  </ul>
                </dd>
                <dt className="fadeInUp faq-header">
                  <span>Task 7</span>Examples of known cross-site scripting
                  vulnerabilities
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul>
                    <li className="xss-style-li">
                      The 2005 Samy worm – in October 2005, Samy Kamkar, a user
                      of the MySpace social media platform, created an
                      experiment that was supposed to be a fun prank and turned
                      into a nightmare. He included JavaScript code in the
                      content of a MySpace message board post. When Samy’s page
                      was visited by anyone, this code would be executed by the
                      user browser and would post the same comment to the
                      victim’s profile. Within 20 hours, the XSS worm reached
                      over one million MySpace users. For his prank, Kamkar was
                      raided in 2006 by the US Secret Service and ended up with
                      a plea agreement – three years probation with no access to
                      the Internet.
                    </li>
                    <li className="xss-style-li">
                      In 2011, attackers used a Facebook XSS vulnerability to
                      launch a self-propagating spam worm similar to the
                      original Samy worm. The vulnerability was located in the
                      Facebook Mobile API. The attackers created a web page with
                      a specially crafted iframe element that forced all
                      visiting Facebook users to post unauthorized messages on
                      their walls, getting more users to visit the same page.
                      This was one of many XSS vulnerabilities on social media
                      sites, and others continue to surface even today.
                    </li>
                    <li className="xss-style-li">
                      The British Airways 2018 breach – this was probably the
                      most famous XSS breach so far that led to the theft of
                      sensitive data. The attackers, suspected to be part of the
                      Magecart organization, used an XSS vulnerability to skim
                      personal and payment information of up to 380,000 British
                      Airways customers. While it was not a classic stored XSS
                      attack, the attackers managed to place malicious scripts
                      on British Airways payment websites that sent sensitive
                      information to a server under the attackers’ control.
                      Similar Magecart attacks happened before and keep
                      happening even today but usually, the scope of the attack
                      is narrower.
                    </li>
                  </ul>
                </dd>
                <dt className="fadeInUp faq-header">
                  <span>Task 8</span>What can XSS be used for?
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul>
                    <li className="xss-style-li">
                      An attacker who exploits a cross-site scripting
                      vulnerability is typically able to:
                    </li>
                    <ol>
                      <li className="xss-style-li">
                        Impersonate or masquerade as the victim user.
                      </li>
                      <li className="xss-style-li">
                        Carry out any action that the user is able to perform.
                      </li>
                      <li className="xss-style-li">
                        Read any data that the user is able to access.
                      </li>
                      <li className="xss-style-li">
                        Capture the user's login credentials.
                      </li>
                      <li className="xss-style-li">
                        Perform virtual defacement of the web site.
                      </li>
                      <li className="xss-style-li">
                        Inject trojan functionality into the web site.
                      </li>
                    </ol>
                  </ul>
                </dd>
                <dt className="fadeInUp faq-header">
                  <span>Task 9</span>How XSS Attacks Work?
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul>
                    <li className="xss-style-li">
                      <h2>User Input: </h2>A user interacts with a web
                      application, submitting data such as a username, password,
                      or comment.
                    </li>
                    <li className="xss-style-li">
                      <h2>Injection: </h2>An attacker injects malicious
                      JavaScript code into the user's input, without the
                      website's knowledge. The code might be hidden within a
                      comment or embedded in a link.
                    </li>
                    <li className="xss-style-li">
                      <h2>Execution: </h2>he website, unaware of the malicious
                      code, processes the user's input and displays it to other
                      users. The malicious script is executed by the user's
                      browser.
                    </li>
                    <li className="xss-style-li">
                      <h2>Attack: </h2>The malicious script can then perform
                      actions in the user's browser, such as stealing cookies,
                      hijacking accounts, or redirecting users to malicious
                      websites.
                    </li>
                  </ul>
                </dd>
                <dt className="fadeInUp faq-header">
                  <span>Task 10</span>Consequences of XSS Attacks
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul>
                    <li className="xss-style-li">
                      <h2>Data Theft: </h2>Attackers can steal sensitive
                      information, such as passwords, credit card details, and
                      personal data. This information can be used for identity
                      theft or financial fraud.
                    </li>
                    <li className="xss-style-li">
                      <h2>Account Hijacking: </h2>Attackers can hijack user
                      accounts by stealing authentication cookies or
                      manipulating session data. This allows them to access the
                      user's account and perform actions on their behalf.
                    </li>
                    <li className="xss-style-li">
                      <h2>Website Defacement: </h2>Attackers can modify the
                      content of the website to display malicious content,
                      change the website's appearance, or redirect users to
                      malicious websites.
                    </li>
                    <li className="xss-style-li">
                      <h2>Reputation Damage: </h2>XSS attacks can damage the
                      reputation of the website and its owners. Users may lose
                      trust in the website and may stop using it.
                    </li>
                  </ul>
                </dd>
                <dt className="fadeInUp faq-header">
                  <span>Task 11</span>How to prevent XSS attacks?
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul>
                    <li className="xss-style-li">
                      Preventing cross-site scripting is trivial in some cases
                      but can be much harder depending on the complexity of the
                      application and the ways it handles user-controllable
                      data.
                    </li>
                    <li className="xss-style-li">
                      In general, effectively preventing XSS vulnerabilities is
                      likely to involve a combination of the following measures:
                    </li>
                    <ol>
                      <li className="xss-style-li">
                        <h2>Filter input on arrival: </h2>At the point where
                        user input is received, filter as strictly as possible
                        based on what is expected or valid input.
                      </li>
                      <li className="xss-style-li">
                        <h2>Encode data on output: </h2>At the point where
                        user-controllable data is output in HTTP responses,
                        encode the output to prevent it from being interpreted
                        as active content. Depending on the output context, this
                        might require applying combinations of HTML, URL,
                        JavaScript, and CSS encoding.
                      </li>
                      <li className="xss-style-li">
                        <h2>Use appropriate response headers: </h2>To prevent
                        XSS in HTTP responses that aren't intended to contain
                        any HTML or JavaScript, you can use the{" "}
                        <span>Content-Type and X-Content-Type-Options </span>{" "}
                        headers to ensure that browsers interpret the responses
                        in the way you intend.
                      </li>
                      <li className="xss-style-li">
                        <h2>Content Security Policy: </h2>As a last line of
                        defense, you can use Content Security Policy (CSP) to
                        reduce the severity of any XSS vulnerabilities that
                        still occur.
                      </li>
                    </ol>
                  </ul>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() => handleGoToLab("/xss/xss_labs")}
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
